import React from 'react'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import CollectionPreview from '../../component/CollectionPreview/CollectionPreview'
import './ShopPage.scss'
import { selectShopData } from '../../redux/shopDataReducer/shopDataSelector'

const ShopPage = ({shopData})=> {

        const itemNumber = 4
        return (
            <div className = 'shop'>
                <div>
                    {shopData.map(({id , ...Props})=>
                    <CollectionPreview key ={id} itemNumber ={itemNumber} {...Props} />)}
                </div>
            </div>
        )
    }

const mapStateToProps = createStructuredSelector({
    shopData : selectShopData
})

export default connect(mapStateToProps)(ShopPage);