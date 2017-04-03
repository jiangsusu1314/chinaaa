import React, {Component} from 'react';
import './home_page.css';
import LeftBoxTop from './left_box_toptwo'
import LeftBoxBotm from './left_box_botmtwo'
import { Router, Route, hashHistory ,Redirect,IndexRoute} from 'react-router';
export default class LeftSelect extends Component {
    constructor(props) {
        super(props);

    }
    render() {
        return (
            <div className="left-box">
                <LeftBoxTop/>
                <ul className="left-box-bottom" >
                    {
                        this.props.store.students.map((obj,index)=>{
                            return <li key={index} onClick={()=>this.props.store.onLink(index)}>{obj.sname}
                            </li>
                        })
                    }
                </ul>
            </div>
        );
    }


}
// {
//     <ul className="left-box-bottom">
//         {
//             this.props.student.students.map((obj,index)=>{
//                 return(
//                     <LeftBoxBotm  key={index} stu={this.props.student.students}/>
//                 )
//             },this)
//         }
//     </ul>
// }