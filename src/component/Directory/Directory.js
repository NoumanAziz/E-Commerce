import React from 'react'
import './Directory.scss'
import { connect } from 'react-redux'
import {createStructuredSelector}  from 'reselect'
import Menuitems from '../Menuitems/Menuitems'
import { selectDirectorySections } from '../../redux/directoryReducer/directorySelector'

const Directory =({sections})=> {

        return (
            <div className = 'directory-menu'>
               {sections.map(({id, ...Prop}) => 
                <Menuitems key={id} {...Prop}/>)}
                             
            </div>
        )
}

const mapStateToProps = createStructuredSelector({
  sections : selectDirectorySections
})

export default connect(mapStateToProps)(Directory);
