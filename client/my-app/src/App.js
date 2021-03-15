import './App.css';
import Home from './pages/Home';
import { ApolloProvider } from "@apollo/client";
import client from "./config/index";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom"
import Detail from './pages/Detail';
import Navigation from "./components/Navigation"
import AddForm from './pages/AddForm';

function App() {
  return (
      <ApolloProvider client={client}>
          <Router>
              <Navigation />
              <Switch>
                  <Route path="/detail/:category/:id">
                      <Detail />
                  </Route>
                  <Route path="/add/:category">
                      <AddForm />
                  </Route>
                  <Route>
                      <Home exact path="/" />
                  </Route>
              </Switch>
          </Router>
      </ApolloProvider>
  );
}

export default App;
