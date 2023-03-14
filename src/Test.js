
import React, { Component } from "react";

const TableBody = () => {
  return (
    <thead>
      <tr>
        <th>Name</th>
        <th>Email</th>
        <th>Age</th>
      </tr>
    </thead>
  );
};
const TableContent = (props) => {
    const {myProps} = props;
    const rows=myProps.map((TableItems, index) => {
      return (
        <tr key={index}>
          <td>
            {TableItems.name}
          </td>
          <td>
            {TableItems.email}
          </td>
          <td>
            {TableItems.age}
          </td>
      </tr>
      
      );
    });
    return (
        <tbody>
          {rows}
        </tbody>
      );
};
class Test extends Component {
  render() {
    const { myProps } = this.props;
    return (
      <p>
        <div>
          <table>
            <TableBody />
            <TableContent myProps={myProps} />
          </table>
        </div>
      </p>
    );
  }
}
export default Test;







