import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { List } from "antd";
import { getASNTS } from "../redux";

const AssignmentList = (props) => {


  console.log(props.assignment);

  useEffect(() => {
    const fetchData = async () => {
      try {
        await props.getASNTS();

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
  { getASNTS }
)(AssignmentList);





