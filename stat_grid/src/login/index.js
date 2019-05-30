import React from 'react';
import { Form, Input, Checkbox, Button } from 'antd';

class Login extends React.Component {
 /*   componentDidMount = (e) => {
        if(localStorage.getItem('user_key'))
            this.props.history.push('/dashboard');
        
    }*/

    handleSubmit = () => {
        this.props.history.push("/dashboard");
        /* TODO */
    }

    render() {
        const { getFieldDecorator } = this.props.form;
        return (
            <div className="Login">
                <div className="container">
                    <div id="login" className="signin-card">
                        <div className="logo-part">
                            <div className="logo-image">
                                <img>{ /* reserved */ }</img>
                            </div>
                            <h1 className="title">Awesome Field</h1>
                        </div>
                        <Form className="login-form" onSubmit={this.handleSubmit}>
                            <Form.Item>
                                {getFieldDecorator("username",{
                                    rules: [{requared: true, message: "请输入用户名！"}]
                                })(
                                    <Input placeholder="Username" />
                                )}
                            </Form.Item>
                            <Form.Item>
                                {getFieldDecorator("password", {
                                    rules: [{required: true, message: "请输入密码！"}]
                                })(
                                    <Input type="password" placeholder="Password" />
                                )}
                            </Form.Item>
                            <Form.Item>
                                {getFieldDecorator("remember", {
                                    valuePropName: "checked",
                                    initialValue: true
                                })(
                                    <Checkbox>Remember me</Checkbox>
                                )}
                            </Form.Item>
                            <Button className="login-form-button" type="primary" htmlType="submit">登录</Button>
                        </Form>
                    </div>
                </div>
            </div>
        );
    }
}

export const ExportLogin = Form.create()(Login);