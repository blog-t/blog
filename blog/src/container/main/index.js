import React,{Component} from 'react';
import { Layout, Menu, Icon } from 'antd';
import {withRouter} from 'react-router-dom';
import { EditorState } from 'draft-js';
import { Editor } from 'react-draft-wysiwyg';
import SideItem from '../sideItem';
import instanceAxios from '../../config/config';


import './index.css';
import '../../../node_modules/react-draft-wysiwyg/dist/react-draft-wysiwyg.css';

const {Header,Content,Footer,Sider} = Layout;

const EditorComponent = ()=> <Editor/>

class Main extends Component{
    constructor(props){
        super(props);
        this.handleSide = this.handleSide.bind(this);
        this.handlerSave = this.handlerSave.bind(this);
        this.onEditorStateChange = this.onEditorStateChange.bind(this);
        this.handlerEditorChange = this.handlerEditorChange.bind(this);
        this.state = {
            navList:[
                {
                    id:'blog',
                    title:'博客列表'
                },
                {
                    id:'article',
                    title:'写博客'
                },
                {
                    id:'setting',
                    title:'设置'
                }
            ],
            headTitle:'博客列表',
            editorState:EditorState.createEmpty()
        }
    };

    handleSide(param){
        let headTitle;
        switch (param){
            case 'blog':
                headTitle = '博客列表';
            break;
            case 'article':
                headTitle = '写博客';
            break;
            case 'setting':
                headTitle = '设置';
            break;

        }
        this.setState({headTitle});
        this.props.history.push(`/main/${param}`);
    }

    handlerSave(){
        console.log(this.state.editorState);
    }
    onEditorStateChange(editorState){
        console.log(123454);
        this.setState({editorState})
    }

    handlerEditorChange(){
        console.log(111);
    }

    render(){
        const {navList,headTitle} = this.state;
        const {pathname} = this.props.history.location;
        return(
            <Layout>
                <Sider
                    breakpoint="xxl"
                    collapsedWidth="0"
                    // onBreakpoint={(broken) => { console.log(broken); }}
                    onCollapse={(collapsed, type) => { console.log(collapsed, type); }}
                >
                    <div className="logo" ></div>
                    <Menu theme="dark" mode="inline" defaultSelectedKeys={['4']}>
                        {
                            navList.map(item=>{
                                return(
                                    <Menu.Item key={item.id}>
                                        <Icon type="user" />
                                       <SideItem list={item} onClick={this.handleSide} id={item.id} />
                                    </Menu.Item>
                                )
                            })
                        }
                    </Menu>
                </Sider>
                <Layout>
                    <Header style={{ background: '#fff', padding: 0,textAlign:'center' }} >
                            {headTitle}
                            {
                                pathname.includes('article') && <a href="javascript:void(0);" onClick={this.handlerSave}>保存</a>
                            }
                        </Header>
                    <Content style={{ margin: '24px 16px 0' }}>
                        <EditorComponent onEditorStateChange={this.onEditorStateChange} onContentStateChange={this.handlerEditorChange}/>
                    </Content>
                    <Footer style={{ textAlign: 'center' }}>
                       个人博客@xiechaosen
                    </Footer>
                </Layout>
            </Layout>
        )
    }
}

export default withRouter(Main);