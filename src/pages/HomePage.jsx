import { useState, useEffect } from "react";
import { getTrendingService } from "../services/trendingService";

function HomePage() {
  const [shows, setShows] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);

    getTrendingService(1)
      .then((res) => setShows(res))
      .finally(() => setIsLoading(false));
  }, []);

  return (
    <div>
      <ol>
        <h2>Trending</h2>
      </ol>

      {isLoading && <p>Loading...</p>}

      <ul>
        {shows.map((show) => (
          <li key={show.id}>{show.title}</li>
        ))}
      </ul>
    </div>
  );
}
export default HomePage;
