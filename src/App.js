import "./App.css";
import Home from "./pages/Home";
import Error from "./pages/Error";
import Rooms from "./pages/Rooms";
import SingleRoom from "./pages/SingleRoom";
import { Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar";
import ScrollTop from "./components/ScroollTop";

function App() {
  return (
    <>
      <Navbar />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route exact path="/rooms/" component={Rooms} />
        <Route exact path="/rooms/:slug" component={SingleRoom} />
        <Route component={Error} />
      </Switch>
      <ScrollTop />
    </>
  );
}

export default App;
