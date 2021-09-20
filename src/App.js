
import Sidebar from "./components/sidebarNav/sidebar"
import styles from './App.module.css'
import Home from "./pages/home/home";
import LoginWindow from "./components/loginWindow/loginWindow";
import SignupWindow from "./components/signupWindow/signupWindow";
import { Route, Switch } from "react-router";



function App() {
  

  return (
    <div className={styles.App}>
      <div className={styles.sidebarContainer}>
        <Sidebar />
      
      </div>

      <div className={styles.pagesContainer}>
        <Switch>
          <Route path = "/home" component={Home}/>
          <Route path ="/login" component={LoginWindow}/>
          <Route path = "/signup" component ={SignupWindow}/>
        </Switch>
      </div>
    </div>
  );
}

export default App;