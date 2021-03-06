import React, { Component } from "react";
import { Switch, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import AuthService from "./services/auth.service";

import Login from "./components/login.component";
import Register from "./components/register.component";
import Home from "./components/home.component";
import Profile from "./components/profile.component";
import BoardUser from "./components/board-user.component";
import BoardModerator from "./components/board-moderator.component";
import BoardAdmin from "./components/board-admin.component";
import PatientsPersonalInformation from "./components/patients-personal-information.component";

class App extends Component {
  constructor(props) {
    super(props);
    this.logOut = this.logOut.bind(this);

    this.state = {
      showModeratorBoard: false,
      showAdminBoard: false,
      currentUser: undefined,
    };
  }

  componentDidMount() {
    const user = AuthService.getCurrentUser();

    if (user) {
      this.setState({
        currentUser: user,
        showModeratorBoard: user.roles.includes("ROLE_MODERATOR"),
        showAdminBoard: user.roles.includes("ROLE_ADMIN"),
      });
    }
  }

  logOut() {
    AuthService.logout();
  }

  render() {
    const { currentUser, showModeratorBoard, showAdminBoard } = this.state;

    return (
      <div>
        <nav className="navbar sticky-top navbar-expand-xl navbar-dark bg-dark justify-content-between">
          <a href="http://localhost:4200/home" className="navbar-brand">
            The Smiling Dental Office
          </a>

            <div class="naviiii">
              {currentUser ? (
                <div className="navbar-nav ml-auto">
                  <li>
                  <Link to={"/patients-personal-information"} className="nav-link">
                    Patient's Personal Informations
                  </Link>
                </li>
                <li>  
                  <Link to={"/home"} className="nav-link">
                    Patient's Medical Records
                  </Link>
                </li>
                <li>
                  <Link to={"/home"} className="nav-link">
                    Appointments
                  </Link>
                </li>
                <li>
                  <Link to={"/home"} className="nav-link">
                    Doctor's Availibility
                  </Link>
                  </li>
                  <li>
                  <Link to={"/home"} className="nav-link">
                    Accounts
                  </Link> 
                </li>
                  <li className="nav-item">
                    <Link to={"/profile"} className="nav-link">
                      {currentUser.username}
                    </Link>
                  </li>
                  {showModeratorBoard && (
              <li className="nav-item">
                <Link to={"/mod"} className="nav-link">
                  Moderator Board
                </Link>
              </li>
            )}

                    {showAdminBoard && (
                      <li className="nav-item">
                        <Link to={"/admin"} className="nav-link">
                          Admin Board
                        </Link>
                      </li>
                    )}

                    {/* {currentUser && (
                      <li className="nav-item">
                        <Link to={"/user"} className="nav-link">
                          User
                        </Link>
                      </li>
                    )} */}

                  <li className="nav-item">
                    <a href="http://localhost:4200/home" className="nav-link" onClick={this.logOut}>
                      LogOut
                    </a>
                  </li>
                </div>
              ) : (
                <div className="navbar-nav mr-auto justify-content-end">
                  <li className="nav-item">
                    <Link to={"/login"} className="nav-link">
                      Login
                    </Link>
                  </li>

                  <li className="nav-item">
                    <Link to={"/register"} className="nav-link">
                      Sign Up
                    </Link>
                  </li>
                </div>    
              )}
              </div>
        </nav>

        <div className="container mt-3">
          <Switch>
            <Route exact path="/login" component={Login} />
            <Route exact path={["/", "/home"]} component={Home} />
            <Route exact path="/patients-personal-information" component={PatientsPersonalInformation} />
            <Route exact path="/register" component={Register} />
            <Route exact path="/profile" component={Profile} />
            <Route path="/user" component={BoardUser} />
            <Route path="/mod" component={BoardModerator} />
            <Route path="/admin" component={BoardAdmin} />
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;
