import React, { Component } from 'react'
import Shop_Data from './Shop_Data'
import CollectionPreview from '../../component/CollectionPreview/CollectionPreview'
import './ShopPage.scss'

export default class ShopPage extends Component {
    state = {
        collection : Shop_Data,
        itemNumber : 4
    }

    render() {
        console.log('shopdata',this.state.collection)
        return (
            <div className = 'shop'>
                <div>
                    {this.state.collection.map(({id , ...Props})=>
                    <CollectionPreview key ={id} itemNumber ={this.state.itemNumber} {...Props} />)}
                </div>
            </div>
        )
    }
}
