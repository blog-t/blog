import React,{Component,PureComponent} from 'react';
import { Layout, Menu, Icon } from 'antd';

const {Header,Content,Footer,Sider} = Layout;
class NavItem extends PureComponent{

    handlerClick=()=>{
        const {onClick,id}=this.props;
        onClick && onClick(id);
    }
    render(){
        return(
           <div onClick={this.handlerClick}>{this.props.title}</div>
        )
    }
}

export default NavItem