import React, { Component } from 'react';

export class Form extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        customerId: 0,
        incNumber: 0,
        customers: []
      };
  
      this.handleInputChange = this.handleInputChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
      this.getCustomer = this.getCustomer.bind(this);
      this.goToPage = this.goToPage.bind(this);
      this.getCustomer(this.state.customerId);
    }

    getCustomer(id){
      return fetch('api/SampleData/CustomersData/' + id)
        .then(response => response.json())
        .then(data => {
          this.setState({ customers: data });
        });
    }

    handleSubmit(event) {
        if(this.state.customers.some((customer) => customer.customerId === parseInt(this.state.customerId))) {
          this.goToPage();
        } else {
          alert('Customer Id does not exist: ' + this.state.customerId);
        }
        event.preventDefault();
      }
    
    goToPage() {
        this.props.history.push("/fetchdata");
    }
  
    handleInputChange(event) {
      const target = event.target;
      const value = target.value;
      const name = target.name;
  
      this.setState({
        [name]: value
      });
    }
  
    render() {
      return (
        <form onSubmit={this.handleSubmit}>
          <label>
            Customer Id:
            <input
              name="customerId"
              type="number"
              value={this.state.customerId}
              onChange={this.handleInputChange} />
          </label>
          <br />
          <label>
            Inc Number:
            <input
              name="incNumber"
              type="number"
              value={this.state.incNumber}
              onChange={this.handleInputChange} />
          </label>
          <input type="submit" value="Submit" />
        </form>
      );
    }
  }