import "./result.css";
import {  Card, CardContent, CardMedia } from "@material-ui/core";
import { navigate } from "@reach/router";
import { Link } from "@reach/router";

export default function Result({title, year, poster, imdbID}) {
	return (
		<Card className="resultCard" onClick={() => navigate(`/movie/${imdbID}`)}>
			<CardContent>
				<h1 className="result__heading"><Link to={`/movie/${imdbID}`}>{title}</Link></h1>
				<p className="result__year"><Link to={`/movie/${imdbID}`}>{year}</Link></p>
			</CardContent>
			<CardMedia>
				<Link to={`/movie/${imdbID}`}><img className="result__poster" src={poster} alt={`Poster for the movie ${title}`} /></Link>
			</CardMedia>
		</Card>
	);
}
