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
import AddForm from "./pages/AddForm"
import EditForm from "./pages/EditForm";

function App() {
  return (
      <ApolloProvider client={client}>
          <Router>
              <Navigation />
              <Switch>
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
                      <Home path="/:category" />
                  </Route>
              </Switch>
          </Router>
      </ApolloProvider>
  );
}

export default App;
