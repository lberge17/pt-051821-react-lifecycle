import React from 'react';

export default class Counter extends React.Component{

    state = {
        count: 0
    }

    componentDidMount(){
        console.log("counter mounted")
    }

    componentDidUpdate(){
        console.log("counter updated (state/props)")
    }

    componentWillUnmount(){
        console.log("counter will unmount")
    }

    handleDecrease = () => {
        this.setState(prevS => {
            return {
                count: prevS.count - 1
            }
        })
    }

    handleIncrease = () => {
        this.setState(prevS => {
            return {
                count: prevS.count + 1
            }
        })
    }

    render(){
        console.log("counter rendered")
        return <div>
            <h1>Counter</h1>
            <button onClick={this.handleDecrease}>-</button>
            <span>{this.state.count}</span>
            <button onClick={this.handleIncrease}>+</button>
        </div>;
    }
}
