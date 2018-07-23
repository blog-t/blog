import React,{Component} from 'react';
import {Alert,message} from 'antd';
import {withRouter} from 'react-router-dom';
import instanceAxios from '../../config/config';
import Login from "../login/index";
class Home extends Component{
    componentDidMount(){
        instanceAxios.get('/home').then(data=>{
            console.log(data);
            if(data.err_no === 0 && data.logined){
                message.success('您已经成功登录');
                setTimeout(()=>{
                    this.props.history.push('/main/blog');
                },3000);
            }else {
                message.error('您还没有登录或者注册，请先登录或者注册',()=>this.props.history.push('/login'));
            }
        })
    }

    render(){
        return(
            <div>
                home
            </div>
        )
    }
}

export default withRouter(Home);