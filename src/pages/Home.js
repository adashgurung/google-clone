import React from "react";
import "./Home.css";
import Search from "../components/Search";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import { Avatar, IconButton } from "@material-ui/core";
import AppsIcon from "@material-ui/icons/Apps";

import { auth, provider } from "../firebase";
import { useStateValue } from "../StateProvider";
import { actionTypes } from "../reducer";

function Home() {
  const [{ user }, dispatch] = useStateValue();

  const signIn = (e) => {
    e.preventDefault();
    auth
      .signInWithPopup(provider)
      .then((result) => {
        dispatch({
          type: actionTypes.SET_USER,
          user: result.user,
        });
      })

      .catch((error) => alert(error.message));
  };

  return (
    <div className="home">
      <div className="home__header">
        <div className="home__headerLeft">
          <Link to="/about">About</Link>
          <Link to="/store">Store</Link>
        </div>

        <div className="home__headerRight">
          <Link to="/gmail">Gmail</Link>
          <Link to="/images">Images</Link>

          <IconButton>
            <AppsIcon />
          </IconButton>
          <Avatar
            /*     src={user.photoURL} */
            className="home__avatar"
            onClick={signIn}
          />
        </div>
      </div>

      <div className="home__body">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/1200px-Google_2015_logo.svg.png"
          alt="googleImage"
        />
        <div className="home__input">
          <Search />
        </div>
      </div>
    </div>
  );
}

export default Home;
