import React from 'react';
import PropTypes from 'prop-types';
import { Provider } from 'react-redux';
import Root from "./Root";
import 'antd/dist/antd.css';
import "ant-design-pro/dist/ant-design-pro.css";

class App extends React.Component {
  render() {
    const { store } = this.props;
    return (
      <Provider store={store}>
          <Root />
       </Provider>
    );
  }
}

App.propTypes = {
  store: PropTypes.object.isRequired
};

export default App;
