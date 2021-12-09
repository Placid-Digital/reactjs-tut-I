import React from 'react'
import { connect } from 'react-redux'
import { buyCake } from '../redux/cake/cakeActions'

function CakeContainer(props) {
    return (
        <div>
            <h1>No. Of Cakes - {props.numOfCakes}</h1>
            <button onClick={props.buyCake}>Button</button>
        </div>
    )
}


 const mapStateToProps = state => {
     return {
          numOfCakes: state.cake.numOfCakes
     }
 }

 const mapDispatchToProps = dispatch => {   //component can access state and dispatch actions
     return {
         buyCake: () => dispatch(buyCake())   //dispatches buyCake action
     }
 }

export default connect(mapStateToProps, mapDispatchToProps)(CakeContainer)
