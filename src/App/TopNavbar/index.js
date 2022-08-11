import { Link } from "react-router-dom";

export default function TopNavbar() {
  return (
    <div>
      <Link to="/">Home</Link>
      <Link to="/leaderboards">Leaderboards</Link>
    </div>
  );
}
