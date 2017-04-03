import React, { Component } from 'react';
import ReactDOM from 'react-dom';
//import WebpageOne from './webpage/index.js'
//import WebpageTwo from './webpage/index1.js'
import Container from './container/container';
import Super from"./container/super";
import Content from './conponent/content'
import ContentTwo from './conponent/content_two';
import ContentThree from './conponent/content_three';
import Login from './container/login';
import { Router, Route, hashHistory ,IndexRoute} from 'react-router';
import Totalreducers from './reducers';
import {createStore} from "redux";
import {Provider} from 'react-redux';
let store=createStore(Totalreducers);
// import { createStore } from 'redux';
// console.log(createStore);

//class All extends Component { 
//    constructor(props) {
//        super(props);
//        this.changeTwo = this.changeTwo.bind(this);
//        this.state={
//            num1:1
//        }
//    }
//    render() {
//        return (
//            <div>
//                <WebpageOne fn={this.changeTwo} num1={this.state.num1}/>
//                <WebpageTwo fn={this.changeTwo} num1={this.state.num1}/>
//            </div>
//        );
//    }
//    changeTwo(val){
//        this.setState({
//            num1:val
//        })
//    }
//}                                                                       ,
//
//export default All;


ReactDOM.render(
    <Provider store={store}>
        <Router history={hashHistory}>
            <Route path="/" component={Login}/>
            <Route path="/student" component={Container}>
                <IndexRoute component={Content}/>
                <Route path="repos" component={Content}/>
                <Route path="about" component={ContentTwo}/>
                <Route path="three" component={ContentThree}/>
            </Route>
            <Route path="/super" component={Super}>

            </Route>
        </Router>
    </Provider>,

    document.getElementById('root')
);

//<Router history={hashHistory}>
//    <Route path="/" component={Container}>
//        <Route path="/" component={StudentManage}/>
//        <Route path="/outab" component={StudentManage}/>
//    </Route>
//    </Router>