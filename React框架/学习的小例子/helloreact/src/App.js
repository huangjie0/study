import React,{Component} from 'react'
import Hello from './Hello/Hello'
import Welcome from './Welcome/Welcome'
export default class App extends Component{
    render(){
        return (
            <div>
                <Hello></Hello>
                <Welcome></Welcome>
            </div>
        )
    }
}