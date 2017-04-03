import React, {Component} from 'react';
import '../conponent/home_page.css';
import teacher from './teacher_15.png';
import classaa from './class_15.png';

export default class SchoolTerm extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="boxg">
                <div className="letopaa">
                    <div className="leftga">
                        <img src={teacher} alt=""/>
                        <span>学期</span>
                        <div className="juyuana"></div>
                    </div>
                    <p>{this.props.store.period.name}</p>
                </div>
                <div className="rigtopa">
                    <div className="leftga">
                        <img src={classaa} alt=""/>
                        <span>课程</span>
                        <div className="juyuana"></div>
                    </div>
                    <p>{this.props.store.grade.course}</p>
                </div>
            </div>
        )
    }
}

