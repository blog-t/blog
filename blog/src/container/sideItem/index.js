import React,{Component} from 'react';
import PropTypes from 'prop-types';

import NavItem from '../../components/navItem';

import './index.css';

class SideItem extends Component{
    constructor(props){
        super(props);
        this.handlerClick = this.handlerClick.bind(this);
    }

    handlerClick(param){
        const {onClick} = this.props;
        onClick && onClick(param)
    }

    render(){
        const {list} = this.props;
        console.log(this.props);
        return(
            <div className="nav">
                <NavItem title={list.title} id={list.id} onClick={this.handlerClick} />
            </div>
        )
    }
}


SideItem.propTypes = {
    list:PropTypes.object.isRequired,
    //onClick:PropTypes.function
}


export default SideItem;