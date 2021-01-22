import "./homepage.style.css";
import { ReactComponent as Logo } from "../../assest/hompage-image.svg";

const HomePage = () => (
  <div className="homepage">
    <div className="left">
      <Logo className="homepage-img" />
    </div>
    <div className="right">
      <h2 className="home-title">Welcome to</h2>
      <p className="welcome-note">
        intro textintro text intro text intro textintro text
      </p>
    </div>
  </div>
);

export default HomePage;
