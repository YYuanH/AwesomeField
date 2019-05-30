import React from 'react';
import { Row, Col, Card, Input, Button } from 'antd';
import Container from '../../../components/container';

class StationInfo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            getStation: null,
            tabKey: "atmosphere"
        };
    }

    handleSearch = (value) => {
       /* TODO */
    }

    onTabChange = (key, type) => {
        this.setState({ [type]: key });
    }

    render() {
        const { Search } = Input;
        const tabList = [
            { key: "atmosphere", tab: "大气" },
            { key: "soil", tab: "土壤" },
            { key: "radiation", tab: "辐射" }
        ];
        return (
            <Container>
                <Card>
                    <Row>
                        <Col>
                            <span>台站名称：</span>
                            <Search onSearch={ (value) => {this.handleSearch(value);} }/>
                        </Col>
                    </Row>
                </Card>
                <Card title="台站基本信息">
                    <Row>
                        <Col>
                            { /* detail information */ }
                        </Col>
                        <Col>
                            { /* location */ }
                        </Col>
                    </Row>
                </Card>
                <Card
                    bordered={false}
                    tabList={tabList}
                    activeTabKey={this.state.tabKey}
                    onTabChange={ (key) => {this.onTabChange(key, 'tabKey');} }
                >
                    { /* display chart */ }
                </Card>
            </Container>
        );
    }
}

export default StationInfo;