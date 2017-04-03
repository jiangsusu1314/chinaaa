import React, {Component} from 'react';
import './home_page.css';
import Manage from '../norepeat/manage'
import Title from '../conponent/title'
import tian from './img/tian.png';

export default class ContentTwo extends Component {
    constructor(props) {
        super(props);

    }


    render() {

        return (
            <div className="middle">
                <div className="middle-inner">
                    <ul className="bonus-it" >
                        {
                            this.props.store.grades.map((obj,index)=>{
                                return <li  key={index} >
                                    <span>
                                        {obj.gname}
                                    </span>
                                </li>
                            })
                        }
                    </ul>
                </div>
            </div>
        );
    }


}
