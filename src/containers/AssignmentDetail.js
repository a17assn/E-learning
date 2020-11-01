import React, { useState, useEffect } from "react";
import axios from "axios";

import { connect } from "react-redux";
import { Card, Skeleton, message } from "antd";
import Questions from "./Questions";
import Choices from "../components/Choices";

import { getASNTSDetail } from "../redux";

const cardStyle = {
    marginTop: "20px",
    marginBottom: "20px"
};

const AssignmentDetail = (props) => {
    const [usersAnswers, setUsersAnswers] = useState({
        id: 1,
        questions: [],
        teacher: "",
        title: "",
    });


    useEffect(() => {
        const id = props.match.params.id;

        const fetchData = async () => {
            try {
                const res = await axios.get(
                    `${process.env.REACT_APP_API_URL}/assignments/${id}/`,
                    {
                        headers: {
                            "Content-Type": "application/json",
                            Authorization: `JWT ${localStorage.getItem("access")}`,
                            Accept: "application/json",
                        },
                    }
                );
                setUsersAnswers(res.data);
            } catch (err) { }
        };

        fetchData();
    }, [props.match.params.id]);

    const {
        id,
        questions,
        teacher,
        title,
    } = usersAnswers;

    console.log(usersAnswers)

    const onChange = (e, qId) => {
        console.log(e.target.value);

        setUsersAnswers({ ...usersAnswers, [qId]: e.target.value });
    };

    // const onFinish = (e) => {
    //     const asnt = {
    //         username: props.username,
    //         asntId: props.currentAssignment.id,
    //         answers: usersAnswers
    //     };
    //     props.createGradedASNT(props.token, asnt);
    // };



    const handleSubmit = () => {
        message.success("Submitting your assignment!");
        // const { usersAnswers } = state;
        const asnt = {
            // username: props.username,
            // asntId: props.currentAssignment.id,
            answers: usersAnswers
        };
        props.createGradedASNT(asnt);
    }


    return (
        <>
            {Object.keys(usersAnswers).length > 0 ? (
                <>
                    {/* {props.loading ? (
                        <Skeleton active />
                    ) : ( */}
                    <Card title={usersAnswers.title}>
                        <Questions
                            submit={() => handleSubmit()}
                            questions={usersAnswers.questions.map(q => {
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
        assignment: state.Assignment.assignmentes,
        // loading: state.assignments.loading
    };
};


export default connect(
    mapStateToProps,
    // mapDispatchToProps
    { getASNTSDetail }
)(AssignmentDetail);



