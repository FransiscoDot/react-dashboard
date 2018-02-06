import React from 'react';
import PropTypes from 'prop-types';
import { ConnectedRouter } from 'react-router-redux';
import { Provider } from 'react-redux';
import Root from "./Root";
import 'antd/dist/antd.css';
import "ant-design-pro/dist/ant-design-pro.css";

class App extends React.Component {
  render() {
    const { store, history } = this.props;
    return (
      <Provider store={store}>
         <ConnectedRouter history={history}>
          <Root />
         </ConnectedRouter>
       </Provider>
    );
  }
}

App.propTypes = {
  store: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired
};

export default App;
