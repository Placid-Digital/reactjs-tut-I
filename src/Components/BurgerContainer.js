import React from 'react'
import { connect } from 'react-redux'
import { buyBurger } from '../redux/burger/burgerActions'

function BurgerContainer(props) {
    return (
        <div>
            <h1>No. Of Burger - {props.numOfBurger}</h1>
            <button onClick={props.buyBurger}>Button</button>
        </div>
    )
}


 const mapStateToProps = state => {
     return {
          numOfBurger: state.burger.numOfBurger
     }
 }

 const mapDispatchToProps = dispatch => {   //component can access state and dispatch actions
     return {
         buyBurger: () => dispatch(buyBurger())   //dispatches buyCake action
     }
 }

export default connect(mapStateToProps, mapDispatchToProps)(BurgerContainer)
