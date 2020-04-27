import React from 'react'
import {connect} from 'react-redux'
import {Button, Modal} from 'react-bootstrap'

import {delBook,hideDel} from './../../action/library'


const DeleteBook = (props) => {
    
    const Delete = () => {
        props.delBook(props.data._id)
    }

    const hideClose = () => {
        props.hideDel()
    
    }
    
    

    return (
        <Modal show={props.isShowDel} onHide={hideClose}>
            <Modal.Header closeButton className="bg-primary text-white">
                <Modal.Title>Are you sure want to Delete this Book ?</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                {props.data.bookTitle}
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={hideClose}>No</Button>
                <Button variant="primary" onClick={Delete}>Delete</Button>
            </Modal.Footer>
        </Modal>
    )
}



const mapStateToProps = (state) => {
    return {
        isShowDel : state.Library.isShowDel,
        data : state.Library.dataDel
    }
}

const mapDispatchToProps = {delBook,hideDel}

export default connect (mapStateToProps,mapDispatchToProps)(DeleteBook)