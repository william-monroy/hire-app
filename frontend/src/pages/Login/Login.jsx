import React from "react";
import { Card, Form, Input, Button, Checkbox } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import { motion } from "framer-motion";
import "./login.css";

const Login = ({ setIsLoggedIn }) => {
  const onFinish = (values) => {
    console.log("Received values of form: ", values);
  };

  return (
    <div className="Login">
      <motion.div
        className="login"
        animate={{ opacity: 1, scale: 1 }}
        initial={{ opacity: 0, scale: 0.5 }}
        transition={{ delay: 1 }}
      >
        <Card bordered={true} id="card-login" style={{ width: 400 }}>
          <Form
            name="normal_login"
            className="login-form"
            initialValues={{
              remember: true,
            }}
            onFinish={onFinish}
          >
            <Form.Item>
              <img
                src="\assets\tec.png"
                alt="tec de moterrey"
                width="150"
                style={{
                  marginLeft: "100px",
                  marginTop: "10px",
                  marginBottom: "20px",
                }}
              />
            </Form.Item>
            <Form.Item
              name="username"
              rules={[
                {
                  required: true,
                  message: "Please input your Username!",
                },
              ]}
            >
              <Input
                prefix={<UserOutlined className="site-form-item-icon" />}
                placeholder="Username"
              />
            </Form.Item>
            <Form.Item
              name="password"
              rules={[
                {
                  required: true,
                  message: "Please input your Password!",
                },
              ]}
            >
              <Input
                prefix={<LockOutlined className="site-form-item-icon" />}
                type="password"
                placeholder="Password"
              />
            </Form.Item>
            <Form.Item>
              <Form.Item name="remember" valuePropName="checked" noStyle>
                <Checkbox>Remember me</Checkbox>
              </Form.Item>

              <a className="login-form-forgot" href="#">
                Forgot password
              </a>
            </Form.Item>

            <div style={{ justifyContent: "center", display: "flex" }}>
              <Button
                type="primary"
                htmlType="submit"
                className="login-form-button"
                onClick={() => setIsLoggedIn(true)}
              >
                Log in
              </Button>
            </div>
            <div style={{ justifyContent: "center", display: "flex" }}>
              Or &nbsp;<a href="#">register now!</a>
            </div>
          </Form>
        </Card>
      </motion.div>
    </div>
  );
};

export default Login;
