import { BrowserRouter as Router } from "react-router-dom";
import UserProvider from "./contexts/UserProvider";
// import axios from "axios";

import "./App.css";
import NavigationBar from "./Components/NavigationBar";
import Routes from "./Routes";

function App() {
  return (
    <div>
      <UserProvider>
        <Router>
          <NavigationBar />
          <Routes />
        </Router>
      </UserProvider>
    </div>
  );
}

export default App;
