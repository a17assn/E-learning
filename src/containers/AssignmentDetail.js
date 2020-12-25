import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { Card, message } from "antd";
import Questions from "./Questions";
import Choices from "../components/Choices";
import { getASNTSDetail, createGradedASNT } from "../redux";

const cardStyle = {
    marginTop: "20px",
    marginBottom: "20px"
};

const AssignmentDetail = (props) => {
    const [usersAnswers, setUsersAnswers] = useState({});


    useEffect(() => {
        const fetchData = async () => {
            try {
                await props.getASNTSDetail(props.match.params.id);
            } catch (err) { }
        };
        fetchData();
    }, []);


    const onChange = (e, qId) => {

        setUsersAnswers({ ...usersAnswers, [qId]: e.target.value });    
    };


    const handleSubmit = (e) => {
        message.success("Submitting your assignment!");
        const asnt = {
            asntId: props.assignmentDetail.id,
            email: props.username.email,
            answer: usersAnswers
        };
        props.createGradedASNT(asnt);
        console.log(asnt)
    }
    // console.log(props.assignmentDetail)
    console.log(usersAnswers)
    return (
        <>
            {Object.keys(props.assignmentDetail).length > 0 ? (
                <>
                    {/* {props.loading ? (
                        <Skeleton active />
                    ) : ( */}
                    <Card title={props.assignmentDetail.title}>

                        <Questions
                            submit={() => handleSubmit()}
                            questions={props.assignmentDetail.questions.map(q => {

                                return (
                                    <Card
                                        style={cardStyle}
                                        type="inner"
                                        key={q.id}
                                        title={`${q.order}. ${q.question}`}
                                    >
                                        <Choices
                                            questionId={q.order}
                                            choices={q.choices}
                                            change={onChange}
                                            usersAnswers={usersAnswers}
                                        />
                                    </Card>
                                );
                            })}
                        />
                    </Card>
                    {/* )} */}
                </>
            ) : null}
        </>
    );
};

const mapStateToProps = state => {
    return {
        // token: state.auth.token,
        assignmentDetail: state.Assignment.assignmentesDetail,
        username: state.auth.user

        // loading: state.assignments.loading
    };
};

const mapDispatchToProps = dispatch => {
    return {
        getASNTSDetail: (id) => dispatch(getASNTSDetail(id)),
        createGradedASNT: (asnt) => dispatch(createGradedASNT(asnt))
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(AssignmentDetail);



