import React, { useState } from "react";
import { connect } from "react-redux";
import { Link, Redirect } from "react-router-dom";
import { signup } from "../redux";

import { Form, Input, Button } from "antd";
// const { Option } = Select;
// import { Radio } from "antd";

const Signup = ({ signup, isAuthenticated }) => {
  
  const [formData, setFormData] = useState({
    name: "",
    is_teacher: "",
    is_student: "",
    phone: "",
    email: "",
    password: "",
    re_password: "",
  });

  const [accountCreated, setAccountCreated] = useState(false);

  const {
    name,
    is_student,
    is_teacher,
    phone,
    email,
    password,
    re_password,
  } = formData;

  const onChange = (e) => {
    // console.log(e.target.value);

    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  //   const onSubmit = (e) => {
  //     e.preventDefault();

  //     if (password === re_password) {
  //       signup({ name, email, password, re_password });
  //       setAccountCreated(true);
  //     }
  //   };

  const onFinish = (e) => {
    if (password === re_password) {
      signup({
        name,
        is_teacher,
        is_student,
        phone,
        email,
        password,
        re_password,
      });
      setAccountCreated(true);
    }
  };
  if (isAuthenticated) return <Redirect to="/" />;
  if (accountCreated) return <Redirect to="login" />;
  return (
    <Form
      name="normal_login"
      className="login-form"
      initialValues={{ remember: true }}
      onFinish={onFinish}
    >
      <h1>Sign Up</h1>
      <p>Create your Account</p>

      <Form.Item
        label="Full Name"
        rules={[{ required: true, message: "Please input your Name!" }]}
      >
        <Input
          type="text"
          placeholder="Name*"
          name="name"
          value={name}
          onChange={(e) => onChange(e)}
          required
        />
      </Form.Item>

      <Form.Item
        label="Your Phone"
        rules={[{ required: true, message: "Please input your Phone!" }]}
      >
        <Input
          type="text"
          placeholder="Phone*"
          name="phone"
          value={phone}
          onChange={(e) => onChange(e)}
          required
        />
      </Form.Item>

      <Form.Item
        label="Teacher"
        // rules={[{ required: true, message: "Please input your Phone!" }]}
      >
        <Input
          type="text"
          placeholder="type_enter*"
          name="is_teacher"
          value={is_teacher}
          onChange={(e) => onChange(e)}
          required
        />
      </Form.Item>
      <Form.Item
        label="Teacher"
        // rules={[{ required: true, message: "Please input your Phone!" }]}
      >
        <Input
          type="text"
          placeholder="type_enter*"
          name="is_student"
          value={is_student}
          onChange={(e) => onChange(e)}
          required
        />
      </Form.Item>

      {/* <Form.Item
        label="Student"
        // rules={[{ required: true, message: "Please input your Phone!" }]}
      >
        <Input
          type="text"
          placeholder="type_enter*"
          name="is_student"
          value={is_student}
          onChange={(e) => onChange(e)}
          required
        />
      </Form.Item> */}

      <Form.Item
        label="E-mail"
        rules={[
          {
            type: "email",
            message: "The input is not valid E-mail!",
          },
          {
            required: true,
            message: "Please input your E-mail!",
          },
        ]}
      >
        <Input
          type="email"
          placeholder="Email"
          name="email"
          value={email}
          onChange={(e) => onChange(e)}
          required
        />
      </Form.Item>

      <Form.Item
        label="Password"
        rules={[
          {
            required: true,
            message: "Please input your password!",
          },
        ]}
        hasFeedback
      >
        <Input.Password
          type="password"
          placeholder="Password"
          name="password"
          value={password}
          onChange={(e) => onChange(e)}
          minLength="6"
          required
        />
      </Form.Item>
      <Form.Item
        label="Confirm Password"
        hasFeedback
        rules={[
          {
            required: true,
            message: "Please confirm your password!",
          },
          ({ getFieldValue }) => ({
            validator(rule, value) {
              if (!value || getFieldValue("password") === value) {
                return Promise.resolve();
              }
              return Promise.reject(
                "The two passwords that you entered do not match!"
              );
            },
          }),
        ]}
      >
        <Input.Password
          type="password"
          placeholder="Confirm Password"
          name="re_password"
          value={re_password}
          onChange={(e) => onChange(e)}
          minLength="6"
          required
        />
      </Form.Item>
      <Form.Item>
        Already have an account? <Link to="/login">Sign In</Link>
      </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit" className="login-form-button">
          Sign Up
        </Button>
      </Form.Item>
    </Form>
  );
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps, { signup })(Signup);
