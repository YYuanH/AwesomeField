import React from 'react';
import { Layout, Menu, Icon } from 'antd';
import $ from 'jquery';
import { Route, Switch } from 'react-router-dom';

import InfoOverview from './overview/info_overview';
import StationInfo from './station/station_info';
import { SearchInfo } from './search/search_info';
import { Manage } from './manage';



class Dashboard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            siderWidth: "250px",
        };
    }

    handleLogout = () => {
        this.props.signOut();
        this.props.history.push("/login");
    }
/*
    componentDidMount()  {
        if(localStorage.getItem("user_key") != null) {
            this.props.setKey(localStorage.getItem("user_key"));
          } else if (this.props.user_key === undefined) {
            this.props.history.push('/login');
          } 
    }*/

    render() {
        const { Header, Sider, Content } = Layout;
        const { match, history, user_key } =this.props;
        let { siderWidth } = this.state;

        return (
            <Layout>
                <Sider className="sider" width={siderWidth}>
                    <div className="logo">
                        <img></img>
                        <span className="title">AWESOMEFIELD</span>
                    </div>
                    <Menu theme="dark" mode="inline">
                        <Menu.Item key="/dashboard">
                            <span>
                                <Icon type="database" />
                                数据总览
                            </span>
                        </Menu.Item>
                        <Menu.Item key="/dashboard/station-info">
                            <span>
                                <Icon type="line-chart" />
                                台站详情
                            </span>
                        </Menu.Item>
                        <Menu.Item key="/dashboard/search">
                            <span>
                                <Icon type="search" />
                                数据查询
                            </span>
                        </Menu.Item>
                        <Menu.Item key="/dashboard/manage">
                            <span>
                                <Icon type="setting" />
                                系统管理
                            </span>
                        </Menu.Item>
                    </Menu>
                </Sider>
              {/*  <Layout>
                    <Header>
                        <Icon type="logout" onClick={this.handleLogout} />
                    </Header>
                    <Content>
                        <Switch>
                            <Route exact path={`${match.url}`} render={() => (
                                <InfoOverview history={history} match={match} user_key={user_key} />
                            )}/>
                            <Route path={`${match.url}/station-info`} render={() => (
                                <StationInfo history={history} match={match} user_key={user_key} />
                            )}/>
                            <Route path={`${match.url}/search`} render={() => (
                                <SearchInfo history={history} match={match} user_key={user_key} />
                            )}/>
                            <Route path={`${match.url}/manage`} render={() => (
                                <Manage history={history} match={match} user_key={user_key} />
                            )}/>
                        </Switch>
                    </Content>  
                </Layout> */}
            </Layout>
        );
    }
}

export default Dashboard;