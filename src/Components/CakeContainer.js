import React from 'react'
import { buyCake } from '../redux/cake/cakeActions'

function CakeContainer() {
    return (
        <div>
            <h1>No. Of Cakes</h1>
            <button>Button</button>
        </div>
    )
}


 const mapStateToProps = state => {
     return {
          numOfCakes: state.numOfCakes
     }
 }

 const mapDispatchToProps = dispatch => {
     return {
         buyCake: () => dispatch(buyCake())
     }
 }

export default CakeContainer
