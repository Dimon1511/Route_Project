import { useState, useEffect } from "react";
import { searchShowsService } from "../services/showsService";
import { Link } from "react-router-dom";

function ShowsPage() {
  const [shows, setShows] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);

    searchShowsService("", 1)
      .then((res) => setShows(res))
      .finally(() => setIsLoading(false));
  }, []);

  return (
    <div>
      <p>ShowsPage</p>

      {isLoading && <p>Loading...</p>}

      <ul>
        {shows.map((show) => (
          <li key={show.id}>
            <Link to={`/shows/${show.id}`}>{show.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
export default ShowsPage;
