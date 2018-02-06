import React from 'react';
import { connect } from 'react-redux';
import {bindActionCreators} from "redux";
import PropTypes from "prop-types";
import { Layout } from 'antd';
const { Content, Footer } = Layout;
import { Route } from "react-router-dom";
import Sidebar from "../common/Sidebar";
import HeaderGlobal from "../common/HeaderGlobal";
import BalancePage from "./balancePage/BalancePage";
import {getProfitFromCoin} from "../../actions/profitActions";

class Dashboard extends React.Component {
  render() {
    debugger;
    return(
      <Layout style={{ minHeight: '100vh' }}>
        <Sidebar />
        <Layout>
            <HeaderGlobal />
            <button onClick={() => this.props.onTodoClick()} />
            <Content style={{ margin: '10px 16px' }}>
              <div style={{ padding: 24, background: '#fff', minHeight: 360 }}>
                <Route exact path={`${this.props.match.url}/balance`} component={BalancePage} />
              </div>
            </Content>
            <Footer style={{ textAlign: 'center' }} >
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

function mapStateToProps(state, ownProps) {
  return {
    state
  };
}

function mapDispatchToProps(dispatch) {
  debugger;
  return {
    onTodoClick:() => dispatch(getProfitFromCoin("BTC"))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
