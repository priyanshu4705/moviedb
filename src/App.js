import React, { useState } from "react";
import axios from "axios";
import Search from "./components/Search";
import Results from "./components/Results";

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

  //components of the app 1.Header(title of app)
  //2.Search bar which is a totally different file 2 props are given

  return (
    <div className="App">
      <header>
        <h1>Movie DataBase</h1>
      </header>

      <main>
        <Search handleInput={handleInput} search={search} />
        <Results results={state.results}/>
      </main>
    </div>
  );
}

export default App;
