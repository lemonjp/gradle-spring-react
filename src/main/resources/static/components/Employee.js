import React from 'react';
import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from 'material-ui/Table';

class Employee extends React.Component{
  render() {
    return (
      <TableRow>
        <TableRowColumn>{this.props.employee.firstName}</TableRowColumn>
        <TableRowColumn>{this.props.employee.lastName}</TableRowColumn>
        <TableRowColumn>{this.props.employee.description}</TableRowColumn>
      </TableRow>
    )
  }
}

export default Employee;
