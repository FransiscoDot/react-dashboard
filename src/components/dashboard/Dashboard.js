import React from 'react';
import PropTypes from "prop-types";
import { Layout } from 'antd';
const { Content, Footer } = Layout;
import { Route } from "react-router-dom";
import Sidebar from "../common/Sidebar";
import HeaderGlobal from "../common/HeaderGlobal";

const Balance = ({match}) => console.log("match", match) || (
  <div>
    <h3>Balance</h3>
  </div>
);

const Buy = ({match}) => console.log("match", match) || (
  <div>
    <h3>Buy</h3>
  </div>
);

class Dashboard extends React.Component {
  render() {
    return(
      <Layout style={{ minHeight: '100vh' }}>
        <Sidebar />
        <Layout>
            <HeaderGlobal />
            <Content style={{ margin: '10px 16px' }}>
              <div style={{ padding: 24, background: '#fff', minHeight: 360 }}>
                <Route exact path={`${this.props.match.url}/balance`} component={Balance} />
                <Route exact path={`${this.props.match.url}/buy`} component={Buy} />
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
}

export default Dashboard;
