import "./App.css";
import Bannar from "./components/Bannar";
import Row from "./components/Row";
import request from "./requestURLS";

function App() {
  return (
    <div className="App">
      <Bannar />
      <Row title="Netflix Original Movies" url={request.fetchNetflixOriginal} />
      <Row title="Trending Now" url={request.fetchTrending} />
      <Row title="Top Rated Movies" url={request.fetchTopRated} />
      <Row title="Action Movies" url={request.fetchActionMovies} />
      <Row title="Comedy Movies" url={request.fetchComedyMovies} />
      <Row title="Documentaries Movies" url={request.fetchDocumentariesMovie} />
      <Row title="Horror Movies" url={request.fetchHorrorMovie} />
      <Row title="Romance Movies" url={request.fetchRomanceMovie} />
    </div>
  );
}

export default App;
