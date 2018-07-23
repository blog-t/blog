import React, { Component } from 'react';
import { BrowserRouter as Router, Route,Redirect, Link } from "react-router-dom";
import Loadable from 'react-loadable';  // 包实现代码分片懒加载
import {Spin,Icon} from 'antd';

//自己实现的方法- 实现组件懒加载-代码分片加载(按需加载)
import DynamicImport from './components/DynamicImport';

// 加载css
import 'antd/dist/antd.css';
import './App.css';
import './common/css/common.css';

const antIcon = <Icon type="loading" style={{fontSize:36}} spin/>

/*const Home = (props)=>(
    <DynamicImport load={()=>import('./container/home')}>
        {(Component)=>Component === null ? <Spin indicator={antIcon}/> : <Component {...props} />}
    </DynamicImport>
)
const Login = (props)=>(
    <DynamicImport load={()=>import('./container/login')}>
        {(Component)=>Component === null ?  <Spin indicator={antIcon}/>  : <Component {...props} />}
    </DynamicImport>
)
const Register = (props)=>(
    <DynamicImport load={()=>import('./container/register')}>
        {(Component)=>Component === null ?  <Spin indicator={antIcon}/>  : <Component {...props} />}
    </DynamicImport>
)*/

const Loading = ()=><Spin indicator={antIcon}/>;

const Home = Loadable({
    loader:()=>import('./container/home'),
    loading:Loading
})

const Login = Loadable({
    loader:()=>import('./container/login'),
    loading:Loading
})

const Register = Loadable({
    loader:()=>import('./container/register'),
    loading:Loading
})

const Main = Loadable({
    loader:()=>import('./container/main'),
    loading:Loading
})

class App extends Component {
    render() {
      return (
          <Router>
              <div className="page-wrapper">
                  <Route exact path="/" component={Home}/>
                  {/*<Redirect to={{pathname :'/login'}}/>*/}
                  <Route path="/login" component={Login} />
                  <Route path="/register" component={Register} />
                  <Route path="/main/:id" component={Main} />
              </div>
          </Router>
      );
    }
}

export default App;
