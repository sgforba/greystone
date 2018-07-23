import React, { Component } from 'react';


class Terms extends Component {
  constructor(props){
    super(props);
  }
  render() {

    const terms = this.props.terms;
    let termlist = terms.map((term)=>{
        return         <li>
        <div>  
            <span>
                <strong>Agency</strong>: {term.Agency},
            </span>  
            <span>
              <strong>Years</strong>:  {term.Years}
            </span>                            
        </div>
    </li>

    })
    return (
        
        <ul>
            <h3>List of Available Loans: </h3>
            {termlist}
        </ul>  
    );
  }
}

export default Terms;
