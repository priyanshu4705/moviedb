import React, { lazy, Suspense, useState } from "react";
import axios from "axios";
import Search from "./components/Search";

const Popup  = lazy(()=> import("./components/Popup"));
const Results = lazy(() => import("./components/Results"));

function App() {
  const [state, setState] = useState({
    s: "",
    results: [],
    selected: {},
  });

  //external database api is used only 1000 searches allowed daily for deveplopment pusposes
  //for unlimited search there is a paid version
  const apiurl = "https://www.omdbapi.com/?apikey=3e97c3b1";

  const search = (event) => {
    if (event.key === "Enter") {
      axios(apiurl + "&s=" + state.s).then(({ data }) => {
        let results = data.Search;

        setState(prevState => {
          return { ...prevState, results: results }
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

  const openPopup = id => {
    axios(apiurl + "&i= " + id).then(({ data }) => {
      let result = data;
      setState(prevState => {
        return { ...prevState, selected: result }
      });
    });
  }

  const closePopup = () => {
    setState(prevState => {
      return { ...prevState, selected: {} }
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
        <Suspense fallback={<div className="loading"><h1> Loading Movies...</h1></div>}>
          <Results results={state.results} openPopup={openPopup} />
          <Suspense fallback={<div className="loading"><h1> Loading Movies...</h1></div>}>
          {(typeof state.selected.Title != "undefined") ?
              <Popup selected={state.selected} closePopup={closePopup} /> : false}
          </Suspense>
        </Suspense>
      </main>
    </div>
  );
}

export default App;
