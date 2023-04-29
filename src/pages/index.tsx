import { useState } from "react";
import styles from '@/styles/Home.module.css';
import Register from "../pages/register"
import 'semantic-ui-css/semantic.min.css'
import LoginForm from "./login";


const Home: React.FC = () => {
  return (
    <div className={styles.container}>
    
      <h1>Moonflower</h1>
     <Register/>
     <br/>
     <br/>
     <br/>
     <br/>
<LoginForm/>
    </div>
  );
};

export default Home;
