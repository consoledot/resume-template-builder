import "./homepage.style.css";
import { ReactComponent as Logo } from "../../assest/hompage-image.svg";
import Header from '../../component/header/header.component'
import {Link} from 'react-router-dom'

const HomePage = () => (
  <>
  <Header/>
  <div className="homepage">
    <div className="left">
      <Logo className="homepage-img" />
    </div>
    <div className="right">
      <h2 className="home-title">Resume Builder(and CV Formate)</h2>
      <h3>  Create Dream and Aspiration for a Better Job</h3>
      <p className="welcome-note">
      
      </p>
      <Link to="/builder">Get Started</Link>
    </div>
  </div>
  </>
);

export default HomePage;
