// This component handles the App template used on every page.
import React, {PropTypes} from 'react';
// import Header from './common/Header';
// import {connect} from 'react-redux';
import {logo} from '../logo.svg'
import '../App.css'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBarExampleComposition from './AppBarExampleComposition';


import injectTapEventPlugin from 'react-tap-event-plugin';
  injectTapEventPlugin();

class App extends React.Component {
  render() {
    return (
        <MuiThemeProvider>
      <div>
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <AppBarExampleComposition />
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>

      <div className="container-fluid">      
        {this.props.children}
      </div>
      </div>
        </MuiThemeProvider>
    );
  }
}

App.propTypes = {
  children: PropTypes.object.isRequired
  // loading: PropTypes.bool.isRequired
};

//function mapStateToProps(state, ownProps) {
  //return {
    //loading: state.ajaxCallsInProgress > 0
 // };
//}

export default App;

