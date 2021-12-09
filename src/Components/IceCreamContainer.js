import React from 'react'
import { connect } from 'react-redux'
import { buyIceCream } from '../redux'

function IceCreamContainer(props) {
    return (
        <div>
            <h1>No. Of IceCream - {props.numOfIceCreams}</h1>
            <button onClick={props.buyIceCream}>Button</button>
        </div>
    )
}


 const mapStateToProps = state => {
     return {
          numOfIceCreams: state.iceCream.numOfIceCreams
     }
 }

 const mapDispatchToProps = dispatch => {   //component can access state and dispatch actions
     return {
         buyIceCream: () => dispatch(buyIceCream())   //dispatches buyCake action
     }
 }

export default connect(mapStateToProps, mapDispatchToProps)(IceCreamContainer)
