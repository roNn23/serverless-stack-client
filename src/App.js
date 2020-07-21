import React, { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import { Nav, Navbar } from "react-bootstrap";
import Routes from "./Routes";
import { LinkContainer } from "react-router-bootstrap";
import "./App.scss";
import { AppContext } from "./libs/context";
import { Auth } from "aws-amplify";

const App = () => {
  const [isAuthenticated, userHasAuthenticated] = useState(false);
  const [isAuthenticating, setIsAuthenticating] = useState(true);
  const history = useHistory();

  useEffect(() => {
    onLoad();
  }, []);

  async function onLoad() {
    try {
      await Auth.currentSession();
      userHasAuthenticated(true);
    } catch (e) {
      if (e !== "No current user") {
        alert(e);
      }
    }

    setIsAuthenticating(false);
  }

  const handleLogout = async () => {
    await Auth.signOut();
    userHasAuthenticated(false);
    history.push("/login");
  };

  return (
    !isAuthenticating && (
      <div className="App container">
        <Navbar fluid collapseOnSelect bg="light" expand="lg">
          <Navbar.Brand>
            <Link to="/">Scratch</Link>
          </Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">
            <Nav>
              {isAuthenticated ? (
                <Nav.Item>
                  <Nav.Link onClick={handleLogout}>Logout</Nav.Link>
                </Nav.Item>
              ) : (
                <>
                  <Nav.Item>
                    <LinkContainer to="/signup">
                      <Nav.Link>Signup</Nav.Link>
                    </LinkContainer>
                  </Nav.Item>
                  <Nav.Item>
                    <LinkContainer to="/login">
                      <Nav.Link>Login</Nav.Link>
                    </LinkContainer>
                  </Nav.Item>
                </>
              )}
            </Nav>
          </Navbar.Collapse>
        </Navbar>
        <AppContext.Provider value={{ isAuthenticated, userHasAuthenticated }}>
          <Routes />
        </AppContext.Provider>
      </div>
    )
  );
};

export default App;
