import { Link } from "react-router-dom";

function NoMatchingRoute() {
  return (
    <div>
      <h2>Nothing to see here!</h2>
      <p>
        <Link to="/dummyTable">Go to the home page</Link>
      </p>
    </div>
  );
}

export default NoMatchingRoute;