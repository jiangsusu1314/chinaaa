import React, {Component} from 'react';
import './home_page.css';
import Score from './scoretwo'
import Title from './titletwo'
import SalaryIncrease from './salary_increase'
import MinusItem from './minus_item'
import TeacherTwo from '../norepeat/teacher_twotwo'
import SchoolTerm from '../norepeat/school-termtwo'
import tian from './img/tian.png';
import jian from './img/01.png';
import { Router, Route, hashHistory ,Redirect,IndexRoute} from 'react-router';
export default class Content extends Component {
    constructor(props) {
        super(props);

    }

    render() {
        // console.log(this.props.Chcolor);
        return (
           <div className="middle">
                <div className="middle-inner">
                    <SchoolTerm store={this.props.store}/>
                    <Title name="班级教师" color="#eed63b" imga={tian}/>
                    <TeacherTwo/>
                    <Score store={this.props.store}
                            colors="#eed63b"
                           namea="查看详情>>"
                           topa="本教学周期薪酬"
                    />
                </div>
           </div>
        );
    }

}

