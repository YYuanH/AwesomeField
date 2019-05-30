import React from 'react';
import { Row, Col, Card, Form, Input, Button, Select, InputNumber, Statistic } from 'antd';
import Container from '../../components/container';

const { Option } = Select;

class sysManage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            threshold: 5
        };
    }

    handleSelectChange = () => {}

    handleInputNumber = () => {}

    handleSetting = () => {}

    handleSubmit = () => {}

    validateToNextPassword = () => {}

    compareToFirstPassword = () => {}

    handleConfirmBlur = () => {}

    render() {
        const { getFieldDecorator } = this.props.form;

        return (
            <Container>
                <Card>
                    <div>修改系统参数</div>
                    <Row>
                        <Col>
                            <Statistic title="当前阈值" value={this.state.threshold + "%"} />
                        </Col>
                        <Col>
                             <span>系统参数选择</span>
                             <Select defaultValue="threshold" onChange={this.handleSelectChange}>
                                 <Option value="threshold">阈值</Option>
                             </Select>
                        </Col>
                        <Col>
                            <span>设置参数</span>
                            <InputNumber 
                                min={0} 
                                max={100} 
                                defaultValue={5}
                                onChange={this.handleInputNumber}
                            />
                        </Col>
                        <Col>
                            <Button type="primary" onClick={this.handleSetting}>提交修改</Button>
                        </Col>
                    </Row>
                </Card>
                <Card>
                    <div>添加用户</div>
                    <Form onSubmit={this.handleSubmit}>
                        <Form.Item label="用户名">
                            {getFieldDecorator("username",{
                                rules: [{
                                    required: true, message: "请输入用户名！"
                                }]
                            })(
                                <Input />
                            )}
                        </Form.Item>
                        <Form.Item label="新密码">
                            {getFieldDecorator("password", {
                                rules: [
                                    {required: true, message: "请输入密码！"},
                                    {validator: this.validateToNextPassword}
                                ]
                            })(
                                <Input type="password" onBlur={this.handleConfirmBlur} />
                            )}
                        </Form.Item>
                        <Form.Item label="确认密码">
                            {getFieldDecorator("confirm", {
                                rules: [
                                    {required: true, message: "请确认密码"},
                                    {validator: this.compareToFirstPassword}
                                ]
                            })(
                                <Input type="password" onBlur={this.handleConfirmBlur} />
                            )}
                        </Form.Item>
                        <Form.Item>
                            <Button type="primary" htmlType="submit">确认</Button>
                        </Form.Item>
                    </Form>
                </Card>
            </Container>
        );
    }
}

export const Manage = Form.create()(sysManage);