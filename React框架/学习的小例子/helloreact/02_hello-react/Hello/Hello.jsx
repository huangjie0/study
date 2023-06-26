import React,{Component} from 'react'
import hello from './Hello.module.css'
export default class Hello extends Component{
    render(){
        return (
            <div className={hello.demo}>
                hello，react
            </div>
        )
    }
}