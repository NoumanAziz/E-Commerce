import React, { Component } from 'react'
import Shop_Data from '../ShopPage/Shop_Data'
import CollectionPreview from '../../component/CollectionPreview/CollectionPreview'
import './CategoryPage.scss'

export default class CategoryPage extends Component {
    state = {
        collection : Shop_Data,
        itemNumber : 4
    }

    render() {
        console.log('shopdata',this.state.collection)
        return (
            <div className = 'shop'>
                
                <div>
                    {this.state.collection.filter((data)=>
                      data.routeName === this.props.match.params.category)
                      .map((data)=>
                    <CollectionPreview key ={data.id} itemNumber ={data.items.length} title={ data.title} items = {data.items} />)}
                </div>
            </div>
        )
    }
}
