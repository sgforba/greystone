import React, { Component } from 'react';
import LoanForm from './components/LoanForm.js';
import Terms from './components/Terms.js';
import './App.css';


//If I had more time I would have refactored income and expenses to be objects
// and had an incometotal and expense total state property that would be set via iterating over and summing those objects
class App extends Component {
  constructor(){
    super();
    this.state = {
      income: 0,
      expenses: 0,
      rate: 0,
      noi: 2000,
      address: {
        street: '',
        city: '',
        state: '',
        county: '',
        zip: ''
      },
      terms : []
    }

    this.formSubmit = this.formSubmit.bind(this);
    this.setField = this.setField.bind(this);
  } 
   
  formSubmit(event) {
    event.preventDefault();
    const data = {
      income: this.state.income,
      expenses: this.state.expenses,
      rate:  this.state.rate,
      noi:  this.state.noi,
      address: {
        street:  this.state.street,
        city:  this.state.city,
        state:  this.state.state,
        county:  this.state.county, 
        zip: this.state.zip
      }
    }
    
    fetch("https://script.google.com/macros/s/AKfycbwPGz6uQQS9IW33ASPYlcWaEtRMD8eDAK1ONg7lT2dREXpaSUYh/exec", {
      method: 'POST',
      body: data,
    }).then((res, req)=>{
      return res.json();
    }).then((data)=>{
      this.setState({terms: data.terms})
    })
  }

  setField(event) {
    event.preventDefault();
    let stateKey = event.target.name;
    let data = event.target.value;
    this.setState({stateKey: data})
  }
  //THIS FUNCTION WOULD HAVE SUMMED THE VALUES OF THE INCOME OBJECT AND SET THE INCOME TOTAL PIECE OF STATE
  setIncome(event) {
    event.preventDefault();
  }
  //THIS FUNCTION WOULD HAVE SUMMED THE VALUES OF THE INCOME OBJECT AND SET THE INCOME TOTAL PIECE OF STATE
  setExpenses(event) {
    event.preventDefault();
  }  
  render() {

    return (
      <div className="loan-form-wrapper">
        <LoanForm 
          formSubmit={this.formSubmit} 
          setField={this.setField}
          
          income={this.state.income} 
          expenses={this.state.expenses} 
          rate={this.state.rate} 
          noi={this.state.noi} 
          address={this.state.address} 

          rate={this.state.rate} 
        />
        <div className="Terms">
          <Terms  terms={this.state.terms} />
        </div>        
      </div>

    );
  }
}

export default App;
