import React from 'react';
import  ReactDOM  from 'react-dom';

// This is ES6 class use to set the Date
class Clock extends React.Component
{
     constructor(props)
     {
         super(props);
         this.state = {date: new Date()};
     }


  // The componentDidMount() method runs after the component output has been rendered to the DOM.
  componentDidMount() {
      this.timerID = setInterval(
          () => this.tick(),
          1000
      );
  }

// tear down the timer in the componentWillUnmount() lifecycle method:
  componentWillUnmount() {
      clearInterval(this.timerID);
  }

   // Every second the browser calls the tick()
   tick() {
        this.setState({
            date: new Date()
        });
   }

   render() {
       return (
           <div>
               <h1>Hello, world!</h1>
               <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
           </div>
       );
   }
}
   ReactDOM.render(
        <Clock />,
        document.getElementById('root')
   )

   export default Clock

