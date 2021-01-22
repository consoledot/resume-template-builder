import styles from "./homepage.module.css";
import { ReactComponent as Logo } from "../../assest/hompage-image.svg";
import Header from '../../component/header/header.component'
import {Link} from 'react-router-dom'

const HomePage = () => (
  <>
  <Header/>
  <div className={styles.homepage}>
    <div className={styles.left}>
      <Logo className={styles.homepage__img}/>
    </div>
    <div className={styles.right}>
      <h2 className={styles.home__title}>Resume Builder(and CV Formate)</h2>
      <h3>  Create Dream and Aspiration for a Better Job</h3>
      <p className={styles.welcome__note}>
      
      </p>
      <a href="/builder">Get Started</a>
    </div>
  </div>
  </>
);

export default HomePage;
