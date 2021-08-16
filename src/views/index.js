import Searchbar from "../components/searchbar";
import searchContext from "../store/searchContext";
import { useContext } from "react";
import Result from "../components/result";
import { Container } from "@material-ui/core";

export default function Index() {
	var [results] = useContext(searchContext);

	return (
		<>
			<Searchbar />
			<Container>
				{results.map(result => <Result key={result.imdbID + result.Title} imdbID={result.imdbID} title={result.Title} year={result.Year} poster={result.Poster} />)}
			</Container>
		</>
	)
}
