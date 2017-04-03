import React, {Component,PropTypes} from 'react';
import {connect} from'react-redux';
import ReactDOM from 'react-dom'
import InputItem from './login/inputItem'
import Identifying from './login/identifying'
import SelectItem from './login/selectItem'
import './login/login.css';
import {teacherLoginData} from './actions'
import {hashHistory} from 'react-router';
class Login extends Component {
    constructor(props) {
        super(props);
        this.login = this.login.bind(this);
        this.getIden = this.getIden.bind(this);
    }

    render() {
        console.log(this.props);
        return (
            <div style={{height:"100%"}} className="login-bg">{
                <div className="login-box">
                    <SelectItem prompt={['数字媒体web','数字媒体ui']}
                                ref="college"
                    />
                    <SelectItem prompt={['学生','教师','超级管理员']}
                                ref="authority"
                    />
                    <input type="text" placeholder="用户名" ref="username" className="input-item"/>
                    <input type="password" placeholder="密码" ref="password" className="input-item"/>
                    <Identifying ref="identify" getId={this.getIden} />
                    <button onClick={this.login} className="button-item">登录</button>
                </div>
            }
            </div>
        );
    }

    login() {
        let user = this.refs.username.value;
        let password = this.refs.password.value;
        let identify = ReactDOM.findDOMNode(this.refs.identify).children[0].value;
        let authority = ReactDOM.findDOMNode(this.refs.authority).value;
        console.log(identify);
        if ((identify.toLowerCase() == this.state.id.toLowerCase())) {
                fetch(`http://192.168.60.110:8080/cms/login/login.do?roleName=${user}&password=${password}&roleType=1&officeType=1`)
                    .then(json=>json.json())
                    .then(json=> {
                        if (json.status == 201) {
                            alert(json.message);
                        } else if (json.status == 200) {
                            if (authority == 1) {
                                this.props.onSuper(json);
                                // console.log(this.props);
                                // this.props.dispatch(teacherLoginData(json))
                                hashHistory.push("/student/repos");
                            }else if(authority == 2){
                                // this.props.onStudent(json);
                                this.props.onSuper(json);
                                // console.log(this.props);
                                // this.props.dispatch(teacherLoginData(json))
                                hashHistory.push("/super");
                            }


                        }
                    }, err=> {
                        alert("服务器异常");
                    })
        }else{
            alert("验证码错误")
        }
    }

    getIden(value) {
        this.setState({
            id: value
        })
    }

}

function maneger(state) {
    return {}
}
const mapDispatchToProps = {
    onSuper:teacherLoginData
};
export default connect(maneger,mapDispatchToProps)(Login);
// export default connect(select)(login);

