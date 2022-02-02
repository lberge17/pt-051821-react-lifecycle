import React from 'react';

export default class Timer extends React.Component {
    state = {
        timer: 0
    }

    componentDidMount(){
        this.ticker = setInterval(() => {
            this.setState(prevS => {
                return {
                    timer: prevS.timer + 1
                }
            })
        }, 1000);
    }

    componentDidUpdate(){
        console.log("timer updated (state/props)")
    }

    componentWillUnmount(){
        console.log("timer will unmount")
        clearInterval(this.ticker)
    }

    render(){
        console.log("timer rendered")
        return <div>
            <h1>Timer</h1>
            <span>{this.state.timer}</span>
        </div>;
    }
}
