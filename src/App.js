import Index from "./views/index";
import SearchContext from "./store/searchContext";
import { useState } from "react";
import { Router } from "@reach/router";
import "./App.css"
import Movie from "./views/movie";

function App() {
	var searchState = useState([]);

	return (
		<SearchContext.Provider value={searchState}>
			<div className="App">
				<Router>
					<Index path="/" />
					<Movie path="/movie/:id" />
				</Router>
			</div>
		</SearchContext.Provider>
	);
}
export default App;
