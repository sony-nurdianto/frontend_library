import React, {useEffect} from 'react'
import {connect} from 'react-redux'

import {getBookList} from './../../action/library'

import List from './List'
import Add from './Add'
import Delete from './Delete'
import Edit from './Edit'

const Main = (props) => {

    useEffect(() => {
        if(!props.data.length)
        props.getBookList()
    },[])

    return(
     <div>   
         <div className="d-flex justify-content-end">
         
         </div>
         
        <table className="table table-dark">
            <thead>
                <tr>
                <th scope="col">#</th>
                <th scope="col">Title</th>
                <th scope="col">Years</th>
                <th scope="col">BookNumber</th>
                <th scope="col">Status</th>
                </tr>
            </thead>
            <tbody>
                {
                    props.data.map((item,index) => <List key={index} data={item}/>)
                }
            </tbody>
        </table>
        <Add/>
        <Delete/>
        <Edit/>
    </div>
    
    )
}


const mapStateToProps = (state) => {
    return {
        data : state.Library.data
    }
}

const mapDispatchToProps = {getBookList}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Main)