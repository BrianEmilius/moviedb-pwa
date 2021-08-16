import { useEffect, useState } from "react";
import axios from "axios";
import { Container, Typography } from "@material-ui/core";
import Searchbar from "../components/searchbar";

export default function Movie({id}) {
	var [result, setResult] = useState({});

	useEffect(function() {
		axios.get(`https://movie-database-imdb-alternative.p.rapidapi.com`, {
			params: {
				i: id,
				r: "json"
			},
			headers: {
					"x-rapidapi-key": "cbf0eada93mshda4348a7166d51bp13e11bjsna5929dc3ff1a",
					"x-rapidapi-host": "movie-database-imdb-alternative.p.rapidapi.com"
				}
			})
				.then(response => setResult(response.data));
	}, [id]);

	console.log(result)

	return (
		<>
		<Searchbar />
		<Container>
			<Typography variant="h5" component="h2">{result?.Title}</Typography>
			<Typography variant="subtitle1">{result?.Year}, {result?.Production}</Typography>
			<Typography variant="body1">
				Director: {result?.Director}
			</Typography>
			<Typography variant="body1">
				Actors: {result?.Actors}
			</Typography>
			<img src={result?.Poster} alt={`Movie poster for ${result?.Title}`} />
			<Typography variant="body2">
				{result?.Plot}
			</Typography>
		</Container>
		</>
	)
}