import React, { useState } from "react";
import { connect } from "react-redux";
import { Form, Input, Button, Divider } from "antd";
import QuestionForm from "./QuestionForm";
import { createASNT } from "../redux";
import { MinusCircleOutlined } from '@ant-design/icons';
import "./AssignmentCreate.css";


const defaultFormItemLayout = {
    // labelCol: {
    //     xs: { span: 6 }
    // },
    wrapperCol: {
        xs: { span: 12 }
    }
};


const AssignmentCreate = (props) => {

    const [formCount, setFormCount] = useState(1);


    const add = () => {
        setFormCount(prevCount => prevCount + 1);
    };

    const remove = () => {
        setFormCount(prevCount => prevCount - 1);
    };

    const onFinish = (values) => {

        console.log("Received values of form: ", values);

        const questions = [];

        for (let i = 0; i < values.questions.length; i += 1) {
            console.log(values);

            questions.push({
                title: values.questions[i].question,
                choices: values.questions[i].choices,
                answer: values.questions[i].answer,
                oreder: i
            });
        }

        const asnt = {
            teacher: props.username.email,
            title: values.title,
            questions
        };

        props.createASNT(asnt);

        console.log(asnt);

    };

    const [form] = Form.useForm();

    const questions = [];


    for (let i = 0; i < formCount; i += 1) {
        questions.push(
            <div key={i}>

                <QuestionForm id={i}  {...props} />

                {questions.length > 0 ? (
                    <Button
                        type="danger"
                        className="dynamic-delete-button"
                        onClick={() => remove()}
                        icon={<MinusCircleOutlined />}
                        disabled={questions.length === 0}
                    >
                        Remove Above Field
                    </Button>
                ) : null}
                <Divider />
            </div>
        );
    }

    return (
        <Form form={form} {...defaultFormItemLayout} onFinish={onFinish}
        >
            <Form.Item
                name="title"
                label="Title: "
                rules={[{ required: true }]}
            >
                <Input />
            </Form.Item>

            {questions}



            <Form.Item>
                <Button type="secondary" onClick={add}>
                    Add question
                </Button>
            </Form.Item>

            <Form.Item>
                <Button type="primary" htmlType="submit">
                    Submit
            </Button>
            </Form.Item>

        </Form>
    );
}


const mapStateToProps = state => {
    return {
        // token: state.auth.token,
        username: state.auth.user
        // loading: state.assignments.loading
    };
};

const mapDispatchToProps = dispatch => {
    return {
        createASNT: (asnt) => dispatch(createASNT(asnt))
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(AssignmentCreate);

