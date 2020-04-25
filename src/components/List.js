import React from 'react' 

import {connect} from 'react-redux'

const List = (props)=> {
    return (
            <tr>
                <th scope="row">{props.data.bookNumber}</th>
                <td>{props.data.bookTitle}</td>
                <td>{props.data.years}</td>
                <td>{props.data.status}</td>
                <button>edit</button>
                <buton>Hapus</buton>
            </tr>
    )
}

export default connect(null,mapDispatchToProps)(List)