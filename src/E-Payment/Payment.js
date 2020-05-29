import React, { Component } from 'react'
import Cards from 'react-credit-cards';
import 'react-credit-cards/es/styles-compiled.css';

class Payment extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             name: '',
             number: '',
             expiry: '',
             cvc: '',
             focus: ''
        }
    }
    HandleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    HandleFocus = (e) => {
        this.setState({
            focus: e.target.name
        })
    }
    render() {
        const { name,number,expiry,cvc,focus } = this.state
        return (
            <div>
            <Cards 
            name = { name }
            number = { number }
            expiry = { expiry }
            cvc = { cvc }
            focused = { focus }
            />
            <form>
            <input 
             type="text"
             name="name" 
             value= { name }
             onChange = { this.HandleChange }
             onFocus = { this.HandleFocus }
             placeholder = "Name of cardholder"
            />

            <input 
            type="tel"
            name="number" 
            value= { number }
            onChange = { this.HandleChange }
            onFocus = { this.HandleFocus }
            placeholder = "Card Number"
           />

           <input 
           type="text"
           name="expiry" 
           value= { expiry }
           onChange = { this.HandleChange }
           onFocus = { this.HandleFocus }
           placeholder = "MM/YY Expiry"
          />

          <input 
          type="tel"
          name="cvc" 
          value= { cvc }
          onChange = { this.HandleChange }
          onFocus = { this.HandleFocus }
          placeholder = "Cvc"
         />
        </form>
            </div>
        )
    }
}

export default Payment
