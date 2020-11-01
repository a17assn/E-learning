import React, { useState, useEffect } from "react";
import { connect } from "react-redux";

import "./login.css";
import axios from "axios";

const Profile = (props) => {
  const [profile, setProfile] = useState({});

  console.log(props.user);
  console.log(profile);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(
          `${process.env.REACT_APP_API_URL}/accounts/${props.user.id}/`,
          {
            headers: {
              "Content-Type": "application/json",
              Authorization: `JWT ${localStorage.getItem("access")}`,
              Accept: "application/json",
            },
          }
        );
        setProfile(res.data);
      } catch (err) { }
    };

    fetchData();
  }, [props.user]);

  return (
    <div>
      <h1>Sign In</h1>
      <p>Sign into your Account</p>
      {/* <p>{props.user}</p> */}
      <p>{profile.id}</p>
    </div>
  );
};

const mapStateToProps = (state) => ({
  user: state.auth.user,
});

export default connect(mapStateToProps)(Profile);
