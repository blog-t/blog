import React,{Component} from 'react';
import {withRouter} from 'react-router-dom';
import {Form,Icon,Input,Button,Checkbox,Alert} from 'antd';
import instanceAxios from '../../config/config';
import './index.css';
const FormItem = Form.Item;

class Register extends Component{
    constructor(props){
        super(props);
        this.handleRegister = this.handleRegister.bind(this);
        this.handleChangeValue = this.handleChangeValue.bind(this);
        this.handleClose = this.handleClose.bind(this);
        this.state = {
            username:'',
            githubAccount:'',
            password:'',
            errorMessage:''
        };
    }

    handleRegister(){
        // 验证数据是否填写完整
        if(!this.state.username){
            console.log('用户名必填');
            return;
        }
        if(!this.state.password){
            console.log('密码必填');
            return;
        }
        const data = this.state;
        // 请求数据
        instanceAxios.post('/register/do_register',data).then(data=>{
            if(data.err_no === 0){
                // 注册成功，跳转到首页
                this.props.history.push('/');
            }else {
                console.log(data.err_msg);
                this.setState({errorMessage:data.err_msg});
            }
        }).catch(err=>{
            this.setState({errorMessage:`服务器错误,请稍后再试${err}`});
        })
    }

    handleChangeValue(e){
        const target = e.target;
        const value = target.value;
        const name = target.name;
        this.setState({
            [name]:value
        })
    }

    handleClose(){
        this.setState({errorMessage:''});
    }

    render() {
        const {errorMessage} =  this.state;
        return (
            <div className="register clear">
                <div className="register-content">
                    <Form onSubmit={this.handleSubmit} className="register-form">
                        <FormItem>
                            <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Username" name="username"  value={this.state.username} onChange={this.handleChangeValue} />
                        </FormItem>
                        <FormItem>
                            <Input prefix={<Icon type="github" style={{color:'rgba(0,0,0,.25)'}} />} placeholder="github account" name="githubAccount" value={this.state.githubAccount} onChange={this.handleChangeValue} />
                        </FormItem>
                        <FormItem>
                            <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="Password" name="password" value={this.state.password} onChange={this.handleChangeValue} />
                        </FormItem>
                        <FormItem className="register-register">
                            <Button type="primary" className="register-form-button" href="/login">
                                Log in
                            </Button>
                            <Button type="primary" htmlType="submit" className="register-form-button" onClick={this.handleRegister}>
                                register
                            </Button>
                        </FormItem>
                    </Form>
                    { errorMessage && <Alert type="error" message={`${errorMessage}`}  closable banner="true" onClose={this.handleClose} />
                    }
                </div>
            </div>
        );
    }
}

export default withRouter(Register);