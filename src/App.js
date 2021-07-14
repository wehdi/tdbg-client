import Topbar from "./components/topbar/Topbar";
import Sidebar from "./components/sidebar/Sidebar";
import Home from "./components/pages/home/Home";
import Instance from "./components/pages/instance/Instance";
import EcheanceDetails from "./components/pages/echeanceDetails/EcheanceDetails";
import Finance from "./components/pages/finance/Finance";
import Echeance from "./components/pages/echeance/Echeance";
import NotFound from "./components/pages/notFound/NotFound";
import Login from "./components/pages/authentification/login/Login";
import Register from "./components/pages/authentification/registration/Register";
import Profile from "./components/pages/profile/Profile";
import BoardUser from "./components/pages/boardUser/BoardUser";
import "react-app-polyfill/stable";
import "./app.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col } from "react-bootstrap";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  HashRouter,
} from "react-router-dom";
function App() {
  return (
    <Router basename="/">
      <Switch>
        <Container className="app">
          <Row>
            <Topbar />
          </Row>
          <Row>
            <Col sm={2}>
              <Sidebar />
            </Col>
            <Col sm={10}>
              <Switch>
                <Route exact path="/home">
                  <Home />
                </Route>
                <Route path="/echeance">
                  <Echeance />
                </Route>
                <Route path="/finances">
                  <Finance />
                </Route>
                <Route path="/echeanceDetails">
                  <EcheanceDetails />
                </Route>
                <Route path="/instances" component={Instance} />
                <Route exact path={["/login", "/"]} component={Login} />
                <Route path="/profile" component={Profile} />
                <Route path="/register" component={Register} />
                <Route path="/board-user" component={BoardUser} />
                <Route path="*" component={NotFound} />
              </Switch>
            </Col>
          </Row>
        </Container>
      </Switch>
    </Router>
  );
}

export default App;
