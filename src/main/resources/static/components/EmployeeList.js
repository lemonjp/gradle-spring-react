import React from 'react';
import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from 'material-ui/Table';
import Employee from './Employee'

class EmployeeList extends React.Component{

  constructor(props) {
    super(props);

    // Configure of Table
    this.state = {
      showCheckboxes: false,
    };
  }

  render() {

    var employees = this.props.employees.map(employee =>
      <Employee key={employee._links.self.href} employee={employee}/>
    );

    return (
        <Table>
          <TableHeader
            displaySelectAll={this.state.showCheckboxes}
          >
            <TableRow>
              <TableHeaderColumn>First Name</TableHeaderColumn>
              <TableHeaderColumn>Last Name</TableHeaderColumn>
              <TableHeaderColumn>Description</TableHeaderColumn>
            </TableRow>
          </TableHeader>
          <TableBody
            displayRowCheckbox={this.state.showCheckboxes}
          >
            {employees}

          </TableBody>
        </Table>
    )
  }
}

export default EmployeeList;
