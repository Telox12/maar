import { Link } from "@tanstack/react-router";

export function Header() {
  return (
    <div className="header">
      <Link to={"/"}>
        <h1 className="header-title">Students for Students</h1>
      </Link>
    </div>
  );
}
