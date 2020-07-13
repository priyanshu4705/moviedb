import React, { useState } from "react";
import axios from "axios";
import Search from "./components/Search";
import Results from "./components/Results";
import Popup from "./components/Popup"

function App() {
  const [state, setState] = useState({
    s: "",
    results: [],
    selected: {},
  });

  //external database api is used only 1000 searches allowed daily for deveplopment pusposes
  //for unlimited search there is a paid version
  const apiurl = "http://www.omdbapi.com/?apikey=3e97c3b1";

  const search = (event) => {
    if (event.key === "Enter") {
      axios(apiurl + "&s=" + state.s).then(({data}) => {
        console.log(data);
        let results = data.Search;

        setState(prevState => {
          return { ...prevState, results: results}
        });
      });
    }
  };

  //It stores the present input in search bar and changes search input from the previous search input

  const handleInput = (event) => {
    let s = event.target.value;

    setState((prevState) => {
      return { ...prevState, s: s };
    });
  };

  const openPopup = id =>{
    axios(apiurl + "&i= "+id).then(({data})=>{
      let result = data;
      setState(prevState => {
        return { ...prevState,selected: result}
      });
    });
  }

  const closePopup = () =>{
    setState(prevState =>{
      return { ...prevState,selected:{}}
    });
  } 

  //components of the app 1.Header(title of app)
  //2.Search bar which is a totally different file 2 props are given

  return (
    <div className="App">
      <header>
        <h1>Movie DataBase</h1>
      </header>

      <main>
        <Search handleInput={handleInput} search={search} />
        <Results results={state.results} openPopup={openPopup}/>

        {(typeof state.selected.Title != "undefined") ? 
            <Popup selected={state.selected} closePopup={closePopup}/> : false}
      </main>
    </div>
  );
}

export default App;
