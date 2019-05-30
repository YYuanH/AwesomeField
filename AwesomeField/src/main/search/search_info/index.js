import React from 'react';
import { Row, Col, Card, Form, Select, Button } from 'antd';
import Container from '../../../components/container';

class Searching extends React.Component {

    handleSubmit = () => {
        /* TODO */
    }

    render() {
        const { Option } = Select;
        const stationList = [
            "staion1",
            "staion2",
            "staion3",
            "staion4",
            "staion5",
            "staion6",
            "staion7",
            "staion8",
            "staion9",
            "staion10",
        ];
        const types = ["大气", "土壤" , "辐射"];

        return (
            <Container>
                <Row>
                    <Col>
                        <Card title="台站对比查询">
                            <Form onSubmit={this.handleSubmit} >
                                <Form.Item label="台站：">
                                    <Select defaultValue={stationList[0]}>{
                                        stationList.map( item => (
                                            <Option value={item}>{item}</Option>
                                        ))
                                    }</Select>
                                </Form.Item>
                                <Form.Item label="台站：">
                                    <Select defaultValue={stationList[1]} >{
                                        stationList.map( item => (
                                            <Option value={item}>{item}</Option>
                                        ))
                                    }</Select>
                                </Form.Item>
                                <Form.Item label="类型：">
                                    <Select defaultValue={types[0]}>{
                                        types.map( item => (
                                            <Option value={item}>{item}</Option>
                                        ))
                                    }</Select>
                                </Form.Item>
                                <Form.Item>
                                    <Button type="primary" htmlType="submit">查询</Button>
                                </Form.Item>
                            </Form>
                        </Card>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Card title="查询结果">
                            { /* display chart */ }
                        </Card>
                    </Col>
                </Row>
            </Container>
        );   
    }
}

export const SearchInfo = Form.create()(Searching);