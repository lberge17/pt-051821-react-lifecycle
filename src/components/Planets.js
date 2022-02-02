import React from 'react';

export default class Planets extends React.Component {
    state = {
        planets: []
    }

    componentDidMount(){
        console.log("planets mounted")
        setTimeout(() => {
            fetch("https://swapi.dev/api/planets")
            .then(resp => resp.json())
            .then(data => this.setState({
                planets: data.results
            }))
        }, 2000);
        
    }

    componentDidUpdate(){
        console.log("planets updated (state/props)")
    }

    componentWillUnmount(){
        console.log("planets will unmount")
    }

    render(){
        console.log("planets rendered")
        return <div>
            <h1>Planets</h1>
            <ul>
                {this.state.planets.length === 0 ?
                "Loading...." :
                this.state.planets.map((p, idx) => <li key={idx}>{p.name}</li>)}
            </ul>
        </div>;
    }
}
