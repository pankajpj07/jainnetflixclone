import React, { useEffect } from "react";
import "./css/App.css";
import Homescreen from "./screens/Homescreen";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import LoginScreen from "./screens/LoginScreen";
import { auth } from "./firebase";

function App() {
  const user = "Pankaj";
  useEffect(() => {
    const unsubscibe = auth.onAuthStateChanged((userAuth) => {
      if (userAuth) {
        // logged in
        console.log(userAuth);
        console.log("Logged in");
      } else {
        //Not logged in
        console.log("Logged in");
      }
    });
    return unsubscibe;
  }, []);

  return (
    <div className="App">
      <Router>
        {!user ? (
          <LoginScreen />
        ) : (
          <Switch>
            <Route exact path="/">
              <Homescreen />
            </Route>
          </Switch>
        )}
      </Router>
    </div>
  );
}

export default App;
