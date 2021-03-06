import React from 'react';

// function Clock(props) {
//     return (
//       <div>
//         <h1>Hello, world!</h1>
//         <h2>It is {props.date.toLocaleTimeString()}.</h2>
//       </div>
//     );
//   }


// //using class:
// class Clock extends React.Component{
//     render(){
//         return (
//             <div>
//               <h1>Hello, world!</h1>
//               <h2>It is {this.props.date.toLocaleTimeString()}.</h2>
//             </div>
//           );
//         }
// }

//using class: and state:
class Clock extends React.Component{
    constructor(props){
        super(props);
        this.state={date:new Date()}
    }

    componentDidMount() {
        this.timerID=setInterval(
            ()=>this.tick(),
            1000

        );
    }
  
    componentWillUnmount() {
        clearInterval(this.timerID);
    }

    render(){
        return (
            <div>
              <h1>Hello, world!</h1>
              <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
            </div>
          );
        }
    tick(){
        this.setState({
            date:new Date()
        })
    }
}

export default Clock
 