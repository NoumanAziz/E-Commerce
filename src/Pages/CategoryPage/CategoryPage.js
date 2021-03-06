import React from 'react'

import { connect } from 'react-redux'
import { selectColletion } from '../../redux/shopDataReducer/shopDataSelector'
import CollectionItems from '../../component/CollectionItems/CollectionItems'
import './CategoryPage.scss'


const CategoryPage = ({data})=> {
    const {title , items} = data
        return (
            <div className = 'collection-page'>
             {
                 data ? 
                 <>
                    <h1 className = 'title'>{title}</h1>
                <div className = 'items'>
                     {
                         items.map((items)=>
                         <CollectionItems key = {items.id} items = {items} title={title}/>) 
                     }
                </div>
                 </>
                 :null
             }
            </div>
        )
    }

const mapStateToProps = (state , ownProps)=>({
    data : selectColletion(ownProps.match.params.category)(state)
})


export default connect(mapStateToProps)(CategoryPage);