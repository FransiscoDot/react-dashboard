import React from 'react';
import PropTypes from "prop-types";
import { Layout } from 'antd';
const { Content, Footer } = Layout;
import { Route } from "react-router-dom";
import Sidebar from "../common/Sidebar";
import HeaderGlobal from "../common/HeaderGlobal";
import BalancePage from "./balancePage/BalancePage";

class Dashboard extends React.Component {
  render() {
    return(
      <Layout style={{ minHeight: '100vh' }}>
        <Sidebar />
        <Layout>
            <HeaderGlobal />
            <Content style={{ margin: '10px 16px' }}>
              <div style={{ padding: 24, background: '#fff', minHeight: 360 }}>
                <Route exact path={`${this.props.match.url}/balance`} component={BalancePage} />
              </div>
            </Content>
            <Footer style={{ textAlign: 'center' }}>
              Cloud mining ©2018 Created by Fransisco
            </Footer>
          </Layout>
      </Layout>
    );
  }
}

Dashboard.propTypes = {
  match: PropTypes.object.isRequired
};

export default Dashboard;
