import React, { useEffect, useState } from "react";
// import axios from "axios";
import { connect } from "react-redux";
// import * as actions from "../store/actions/assignments";

// import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { List } from "antd";
// import { Link } from "react-router-dom";
import { getASNTS } from "../redux";

const AssignmentList = (props) => {

  // const [assignment, setAssignment] = useState([]);

  console.log(props.assignment);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await props.getASNTS();
        // setAssignment(res.data);

      } catch (err) { }
    };

    fetchData();
  }, []);



  return (
    <List
      itemLayout="vertical"
      size="large"
      pagination={{
        onChange: (page) => {
          console.log(page);
        },
        pageSize: 3,
      }}
      dataSource={props.assignment}
      renderItem={(item) => (
        <Link to={`/assignments/${item.id}`}>
          <List.Item key={item.id}>
            <List.Item.Meta title={item.title} />
          </List.Item>
        </Link>
      )}
    />
  );
};




const mapStateToProps = state => {
  return {
    // token: state.auth.token,
    assignment: state.Assignment.assignmentes,
    // loading: state.assignments.loading
  };
};


export default connect(
  mapStateToProps,
  // mapDispatchToProps
  { getASNTS }
)(AssignmentList);





