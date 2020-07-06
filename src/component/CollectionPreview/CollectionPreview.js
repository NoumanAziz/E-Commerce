import React from 'react';
import CollectionItems from '../CollectionItems/CollectionItems';
import './CollectionPreview.scss'
import {withRouter} from 'react-router-dom'
const CollectionPreview = ({title , items , routeName ,itemNumber,shop ,history}) => {

    return (
        <div className = 'collection-preview'>
            <div className = 'view-link'>
            <div className = 'title'>{title.toUpperCase()}</div>
            { routeName ? 
            <div className = 'view-more'  onClick = {()=>history.push(`/shop/${routeName}`) }> View More</div>
            : null }
            </div>
            <div className = 'preview'>

                {items
                .filter((items , i)=>i<itemNumber)
                .map((items)=>
                <CollectionItems key = {items.id} items = {items} title={title}/>) } 

            </div>
        </div>
    );
};

export default withRouter(CollectionPreview);