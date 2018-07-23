import React,{Component} from 'react';

class DynamicImport extends Component{
    constructor(props){
        super(props);
        this.state = {
            component:null
        }
    }
    componentWillMount(){
        this.props.load().then(component => {
            this.setState({
                component:component.default ? component.default : component   // 如果使用的是es模块的话存在 export default;使用的就是component.default:如果使用的commonJs规范的话，则没有export default
            })
        })
    }
    render(){
        return this.props.children(this.state.component);
    }
}

export default DynamicImport;