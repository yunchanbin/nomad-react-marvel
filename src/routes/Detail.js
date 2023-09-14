import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Profile from "../components/Profile";
import { Link } from "react-router-dom";

function Detail() {
  const [loading, setLoading] = useState(true);
  const [details, setDetails] = useState([]);
  const { id } = useParams();
  const getDetails = async () => {
    const json = await (
      await fetch(
        `https://marvel-proxy.nomadcoders.workers.dev/v1/public/characters/${id}`
      )
    ).json();

    // console.log(json);
    setDetails(json.data.results[0]);
    setLoading(false);
  };

  useEffect(() => {
    // console.log(id);
    getDetails();
  }, []);

  return (
    <div>
      <h3>
        <Link to="/">Go Home</Link>
      </h3>
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <Profile
          name={details.name}
          src={`${details.thumbnail.path}.${details.thumbnail.extension}`}
        />
      )}
    </div>
  );
}
export default Detail;
