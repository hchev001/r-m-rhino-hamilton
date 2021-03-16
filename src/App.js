import "./App.css";
import { Route, Switch } from "react-router-dom";
import { IndexRoutes } from "./routes";

function App() {
  return (
    <Switch>
      {IndexRoutes.map((prop, key) => {
        return <Route path={prop.path} key={key} component={prop.component} />;
      })}
    </Switch>
  );
}

export default App;
