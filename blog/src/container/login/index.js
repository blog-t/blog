import React,{Component} from 'react';
import {Form,Icon,Input,Button,Checkbox,message} from 'antd';
import {withRouter} from 'react-router-dom';
import instanceAxios from '../../config/config';
import './index.css';
const FormItem = Form.Item;

class LoginForm extends Component{
    constructor(props){
        super(props);
        this.handleLogin = this.handleLogin.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.state = {
            username:'',
            password:''
        }
    };
    componentDidMount(){
        instanceAxios.get('/login').then(data=>{
            if(data.logined && data.user){
                console.log(this.props.history);
                this.props.history.push('/main/blog');
            }
        });
    }
    handleLogin(e){
        e.preventDefault();
        this.props.form.validateFieldsAndScroll((err, values) => {
            if (!err) {
                console.log('Received values of form: ', values);
            }
        });
        const {username,password} = this.state;
        console.log(username,password);
        instanceAxios.post('/login/do_login',{username,password}).then(data=>{
            if(data.err_no === 0 && data.loginSuccess){
                message.success('登录成功');
                setTimeout(()=>{
                    this.props.history.push('/main/blog');
                },3000);
            }else {
                message.error('登录失败');
            }
        })
    }
    handleChange(e){
        const target = e.target;
        const name = target.name;
        const value = target.value;
        this.setState({
            [name]:value
        })
    }
    render() {
        const {username,password} = this.state;
        const {getFieldDecorator} = this.props.form;
        return (
            <div className="login clear">
                <div className="login-content">
                    <Form onSubmit={this.handleLogin} className="login-form">
                        <FormItem>
                            {getFieldDecorator('userName', {
                                rules: [{ required: true, message: '请输入用户名' }],
                            })(
                                <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="username" name='username' onChange={this.handleChange} />
                            )}
                        </FormItem>
                        <FormItem>
                            {getFieldDecorator('password', {
                                rules: [{ required: true, message: '请输入密码' }],
                            })(
                            <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="password" name='password' onChange={this.handleChange} />
                            )}
                        </FormItem>
                        <FormItem className="login-register">
                            <Button type="primary" htmlType="submit" className="login-form-button">
                                Log in
                            </Button>
                            <Button type="primary" className="login-form-button" href="/register">
                                register
                            </Button>
                        </FormItem>
                    </Form>
                </div>
            </div>
        );
    }
}

const Login = Form.create()(LoginForm);

export default withRouter(Login);