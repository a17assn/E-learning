import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { List, Divider } from "antd";
import Result from '../components/Result';
import "./login.css";
import axios from "axios";
import { getGradedASNT } from "../redux";

const Profile = (props) => {
  const [profile, setProfile] = useState({});

  console.log(profile);
  console.log(props.gradedAssignments);

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



  useEffect(() => {
    const fetchData = async () => {
      try {
        await props.getGradedASNT(props.match.params.id);
      } catch (err) { }
    };
    fetchData();
  }, []);



  return (
    <div>
      <h1>Sign In</h1>
      <p>Sign into your Account</p>
      <p>{profile.id}</p>

      <Divider orientation="left">Large Size</Divider>
      <List
        size="large"

        bordered
        dataSource={props.gradedAssignments}
        renderItem={a => <Result key={a.id} grade={a.grade} />}
      />
    </div>
  );
};

const mapStateToProps = (state) => ({
  user: state.auth.user,
  gradedAssignments: state.Assignment.gradidAssignmentes,

});

const mapDispatchToProps = dispatch => {
  return {
    getGradedASNT: (asnt) => dispatch(getGradedASNT(asnt))
  };
};


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Profile);



