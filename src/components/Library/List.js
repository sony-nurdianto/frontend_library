import React from 'react'
import {connect} from 'react-redux'

import {delBook,showdel,showEdit} from './../../action/library'

const List = (props) => {

    const delClick = () => {
        props.showdel(props.data)
    }
    const editClick = () => {
        props.showEdit(props.data)
    }

    return(
        <tr>
            <th scope="row">.</th>
            <td>{props.data.bookTitle}</td>
            <td>{props.data.years}</td>
            <td>{props.data.bookNumber}</td>
            <td>{props.data.status}</td>
            <td><button className="btn btn-danger" onClick={delClick}>Delete</button></td>
            <td><button className="btn btn-primary" onClick={editClick}>Edit</button></td>
        </tr>
    )
}

const mapDispatchToProps = {delBook,showdel,showEdit}

export default connect (null,mapDispatchToProps)(List)