import React, { Component } from 'react';

export class FetchData extends Component {
  displayName = FetchData.name

  constructor() {
    super();
    this.state = { customers: [], loading: true };

    fetch('api/SampleData/CustomersData/1234')
      .then(response => response.json())
      .then(data => {
        this.setState({ customers: data, loading: false });
      });
  }

  static renderTable(customers) {
    return (
      <table className='table'>
        <thead>
          <tr>
            <th>CustomerId</th>
            <th>CustomerGuid</th>
          </tr>
        </thead>
        <tbody>
          {customers.map(customer =>
            <tr key={customer.customerId}>
              <td>{customer.customerId}</td>
              <td>{customer.customerGuid}</td>
            </tr>
          )}
        </tbody>
      </table>
    );
  }

  render() {
    let contents = this.state.loading
      ? <p><em>Loading...</em></p>
      : FetchData.renderTable(this.state.customers);

    return (
      <div>
        <h1>Customer Data</h1>
        <p>This component demonstrates fetching data from the server.</p>
        {contents}
      </div>
    );
  }
}
