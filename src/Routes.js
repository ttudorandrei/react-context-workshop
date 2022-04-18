import { Routes as Switch, Route } from "react-router-dom";
import Homepage from "./Pages/Homepage";
import Profile from "./Pages/Profile";
import Projects from "./Pages/Projects";

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" element={<Homepage />} />
      <Route exact path="/profile" element={<Profile />} />
      <Route exact path="/projects" element={<Projects />} />
    </Switch>
  );
};

export default Routes;
