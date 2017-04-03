import React, {Component} from 'react';
import './home_page.css';
export default class leftBoxBotm extends Component {
    constructor(props) {
        super(props);

    }

    render() {
        return (
           <li>
               {
                   this.props.stu.sname
               }
           </li>
        );
    }


}
