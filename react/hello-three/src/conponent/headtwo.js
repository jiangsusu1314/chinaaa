import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './home_page.css';
import logob from './img/logo.png';
import logoa from './img/she.png';
import fanhui from './img/fanhui.png';


export default class HeadTwo extends Component {
    constructor(props){
        super(props);

    }
    render() {
        return (
            <div className="header">
                <div className="logo">
                    <img src={logob} alt=""/>
                </div>
                <div className="teaching-cycle">
                    <span>{this.props.store.period.year}</span>
                    <span>{this.props.store.period.name}</span>
                    <span>|</span>

                </div>
                <div className="teacher">
                    <span>任课老师：苗林超</span>
                    <span>|</span>
                     <span>班主任：胡乃权</span>
                </div>
                <div className="link">
                    {
                        this.props.store.set==1?<img src={logoa} onClick={()=>this.props.store.onTop(2)}/>:<img src={fanhui} onClick={()=>this.props.store.onTop(1)}/>

                    }
                </div>
            </div>
        );
    }

}
