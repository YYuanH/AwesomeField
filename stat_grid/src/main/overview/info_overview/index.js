import React from 'react';
import { Row, Col, Spin, Card } from 'antd';
import { ChartCard } from 'ant-design-pro/lib/Charts';
import 'ant-design-pro/dist/ant-design-pro.css';

import Container from '../../../components/container';

class InfoOverview extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            loading: false,
            infoCard: [
                {name: "台站总数", value: 0},
                {name: "采集器总数", value: 0},
                {name: "离线台站数", value: 0},
                {name: "系统最后更新时间", value: 0}
            ],
        };
    }

    render() {
        const { loading, infoCard } = this.state;

        return (
            <Container>
                <Spin spinning={loading}>
                    <Row>{
                        infoCard.map( item => (
                            <Col key={item.name}>
                                <ChartCard 
                                    bordered={false}
                                    title={<span>{  item.name  }</span>}
                                    total={<span>{ item.value }</span>}
                                >
                                </ChartCard>
                            </Col>
                        ))
                    }</Row>
                    <Row>
                        <Col key="map">
                            <Card
                                bordered={false} 
                                title="地理位置信息"
                            >
                                { /* display the map and the location of station */ }
                            </Card>
                        </Col>
                    </Row>
                </Spin>
            </Container>
        );
    }
}

export default InfoOverview;