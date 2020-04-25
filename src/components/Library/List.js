import React from 'react'

// import {connect} from "react-redux"

const List = (props) => {
    return(
        <tr>
            <th scope="row">.</th>
            <td>{props.data.bookTitle}</td>
            <td>{props.data.years}</td>
            <td>{props.data.bookNumber}</td>
            <td>{props.data.status}</td>
        </tr>
    )
}

export default List