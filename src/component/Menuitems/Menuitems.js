import React from 'react';
import  {withRouter} from 'react-router-dom';
import './Menuitems.scss'
const Menuitems = ({title , imageUrl ,size ,linkUrl , history, match}) => {
    return (
        <div   onClick = {()=>history.push(`${match.url}${linkUrl}`)}
            className = {`${size}  menu-item`}>
            <div className = 'background-image'
            style = {{backgroundImage : `url(${imageUrl})`}}
            />
            <div className = 'container'>
                <h2 className = 'title'>{title.toUpperCase()}</h2>
                <span className = 'subtitle'>Shop Now</span>
            </div>
        </div>
    );
}; 

export default withRouter(Menuitems);