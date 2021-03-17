import './App.css';
import Home from './pages/Home';
import { ApolloProvider } from "@apollo/client";
import client from "./config/index";
import Detail from "./pages/Detail";
import Navigation from "./components/Navigation";
import AddForm from "./pages/AddForm";
import EditForm from "./pages/EditForm";
import Movies from "./pages/Movies"
import Series from "./pages/Series"
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom"
import Favorites from './pages/Favorites';

function App() {
  return (
      <ApolloProvider client={client}>
          <Router>
              <Navigation />
              <Switch>
                  <Route exact path="/">
                      <Home />
                  </Route>
                  <Route path="/movies">
                      <Movies />
                  </Route>
                  <Route path="/series">
                      <Series />
                  </Route>
                  <Route path="/add/:category">
                      <AddForm />
                  </Route>
                  <Route path="/edit/:category/:id">
                      <EditForm />
                  </Route>
                  <Route path="/detail/:category/:id">
                      <Detail />
                  </Route>
                  <Route>
                      <Favorites path="/favorites" />
                  </Route>
              </Switch>
          </Router>
      </ApolloProvider>
  );
}

export default App;
