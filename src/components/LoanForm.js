import React, { Component } from 'react';


class LoanForm extends Component {
  constructor(props){
    super(props);
  }

  render() {
    return (
      <form onSubmit={this.props.formSubmit}>

        <div className="container">
            <h1>Application</h1>
            <p>Please fill in this form to receive loan information.</p>

            <h2>Address</h2>
            <label><b>Street</b></label><br />
            <input type="text" placeholder="Street" name="street" onChange={ this.props.setField } value={this.props.street} />
            <br />

            <label><b>City</b></label><br />
            <input type="text" placeholder="City" name="City"  onChange={ this.props.setField } value={this.props.street} />       
            <br />

            <label><b>State</b></label><br />
            <input type="text" placeholder="State" name="state"  onChange={ this.props.setField } value={this.props.state}/>
            <br />

            <label for="county"><b>County</b></label><br />
            <input type="text" placeholder="County" name="county"  onChange={ this.props.setField } value={this.props.county}/>
            <br />

            <label for="zip"><b>Zip</b></label><br />
            <input type="text" placeholder="Zip" name="zip"  onChange={ this.props.setField }  value={this.props.zip}/>
            <hr /> 

            <h2>Rent Roll</h2>
            <label for="rent"><b>Rent</b></label><br />
            <input type="text" placeholder="Monthly Rent" name="rent"  />
            <br />

            <label for="unit"><b>Unit</b></label><br />
            <input type="text" placeholder="Unit Number" name="unit"  />
            <br />    

            <label for="vacancy"><b>Vacancy</b></label><br />
            <input type="text" placeholder="Vacancy" name="vacancy"  />
            <br />

            <label for="bedrooms"><b>Bedrooms</b></label><br />
            <input type="text" placeholder="Bedrooms" name="bedrooms"  /> 
            <br />

            <label for="bedrooms"><b>Bathrooms</b></label><br />
            <input type="text" placeholder="Bathrooms" name="bathrooms"  />            
            <hr /> 

            <h2>Expense Items</h2>
            <label for="zip"><b>Marketing</b></label><br />
            <input type="text" placeholder="Marketing" name="marketing"  />
            <br />

            <label for="zip"><b>Taxes</b></label><br />
            <input type="text" placeholder="Taxes" name="tax"  />
            <br />

            <label for="zip"><b>Insurance</b></label><br />
            <input type="text" placeholder="Insurance" name="vacancy"  />
            <br />

            <label for="zip"><b>Repairs</b></label><br />
            <input type="text" placeholder="Repairs" name="repairs"  /> 
            <br />

            <label for="zip"><b>Administration</b></label><br />
            <input type="text" placeholder="Administration" name="administration"  />    
            <br />

            <label for="zip"><b>Payroll</b></label><br />
            <input type="text" placeholder="Payroll" name="payroll"  />  
            <br />

            <label for="zip"><b>Utility</b></label><br />
            <input type="text" placeholder="Utlities Total" name="utility"  />  
            <br />

            <label for="zip"><b>Management</b></label><br />
            <input type="text" placeholder="Management" name="management"  />  
            <hr /> 

            <h2>Expense Items</h2>
            <label for="zip"><b>Capitalization Rate</b></label><br />
            <input type="text" placeholder="Capitalization Rate" name="rate"   onChange={ this.props.setField }  value={this.props.rate} />  
            <hr /> 

            <button type="submit" class="registerbtn">Apply</button>
        </div>
      </form>    
    );
  }
}

export default LoanForm;
