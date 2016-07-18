import React from "react";
import ReactDOM from "react-dom";
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';
import client from "./client";
import EmployeeList from './components/EmployeeList'

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {employees: []};
    injectTapEventPlugin();
  }

  componentDidMount() {
    client({method: 'GET', path: '/api/employees'}).then(response => {
      this.setState({employees: response.entity._embedded.employees});
    });
  }

  render() {
    return (
      <MuiThemeProvider>
        <EmployeeList employees={this.state.employees}/>
      </MuiThemeProvider>
    )
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('react')
)

