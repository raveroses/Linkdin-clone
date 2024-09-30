import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div className="Header">
      <div className="logo-container">
        <div className="logo-name">
          <h3>Diamond</h3>
        </div>
        <div className="logo-image">
          <img src="./images/diamond.jpg" alt="diamond-logo" />
        </div>
      </div>

      <div className="icon-items">
        <div className="icon">
          <Link to="/article">
            <div className="article-icon">
              <i className="fa fa-newspaper article" aria-hidden="true"></i>
            </div>
            Article
          </Link>
        </div>

        <div className="icon">
          <div className="people-icon">
            <i className="fa fa-users" aria-hidden="true"></i>
          </div>
          <a href="/">People</a>
        </div>

        <div className="icon">
          <div className="learning-icon">
            <i className="fa fa-graduation-cap" aria-hidden="true"></i>
          </div>
          <a href="/">Learning</a>
        </div>

        <div className="icon">
          <div className="job-icon">
            <i className="fa fa-briefcase" aria-hidden="true"></i>
          </div>
          <a href="/">Jobs</a>
        </div>

        <div className="icon">
          <div className="game-icon">
            <i className="fa fa-puzzle-piece" aria-hidden="true"></i>
          </div>
          <a href="/">Games</a>
        </div>

        <div className="icon">
          <div className="mobile-icon">
            <i className="fa fa-desktop" aria-hidden="true"></i>
          </div>
          <a href="/">Get the app</a>
        </div>
      </div>

      <div className="sigining">
        <div className="sign">
          <a href="/">Sign in</a>
        </div>
        <div className="join">
          <a href="/">Join now</a>
        </div>
      </div>

      <div className="toggling">
        <div className="toggle">
          <i className="fa fa-sun" aria-hidden="true"></i>
        </div>
      </div>
    </div>
  );
}
