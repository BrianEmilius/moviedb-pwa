import Index from "./views/index";
import SearchContext from "./store/searchContext";
import { useEffect, useState } from "react";
import { Router } from "@reach/router";
import "./App.css"
import Movie from "./views/movie";

function App() {
	var searchState = useState([]);

  useEffect(function() {
    Notification.requestPermission(function(status) {
        console.log('Notification permission status:', status);
    });
  }, []);

  function displayNotification() {
    if (Notification.permission == 'granted') {
      navigator.serviceWorker.getRegistration().then(function(reg) {
        reg.showNotification('Hello world!');
      });
    }
  }

	return (
		<SearchContext.Provider value={searchState}>
			<div className="App">
        <button onClick={displayNotification}>Notify me</button>
				<Router>
					<Index path="/" />
					<Movie path="/movie/:id" />
				</Router>
			</div>
		</SearchContext.Provider>
	);
}
export default App;
