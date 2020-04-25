import React, {useState} from 'react';
import {connect} from 'react-redux';
import {Modal , Button} from 'react-bootstrap'


import {addBook,hideAdd} from './../../action/library';
import { useFormik,Formik,Form, Field } from 'formik';




const Add = (props) => {

    const [list,setList] = useState({
        bookTitle : '',
        years : '',
        bookNumber: '',
        status: ''
    });

    const handleAdd = () => {
        props.addBook(list)
    }

    const handleClose = () => {
        props.hideAdd()
    }

    const handleChange = (event) => {
        let {name,value,type,checked} = event.currentTarget;
        if (type === "checkbox"){
            setList ({
                ...list,
                [name]: checked  
            })
        }else{
            setList({
                ...list,
                [name]:value
            })
        }
    }


    return(
        <Modal show={props.isShowAdd} onHide={handleClose}>
            <Modal.Header closeButton className="bg-primary text-white">
                <Modal.Title>Add  Colection</Modal.Title>
            </Modal.Header>
                <Modal.Body>
                    <Formik 
                        initialvalues = {{
                            bookTitle : "",
                            years : '',
                            bookNumber: '',
                            status: ''
                        }}
                    >
                        <Form>
                            <div className="form-group">
                                <label for="bookTitle">Title</label>
                                <Field
                                    type="text"
                                    className="form-control"
                                    name="bookTitle"
                                    id="bookTitle"
                                    placeholder="Book Title"
                                    value={list.bookTitle}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="form-group">
                                <label for="years">years</label>
                                <Field
                                    type="text"
                                    className="form-control"
                                    name="years"
                                    placeholder="years"
                                    value={list.years}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="form-group">
                                <label for="bookNumber">Book Number</label>
                                <Field
                                    type="text"
                                    className="form-control"
                                    name="bookNumber"
                                    placeholder="Book Number"
                                    value={list.bookNumber}
                                    onChange={handleChange}
                                  />
                            </div>
                            <div className="form-group">
                                <label for="status">Status</label>
                                <Field
                                    type="text"
                                    className="form-control"
                                    name="status"
                                    placeholder="Status"
                                    checked={list.status}
                                    onChange={handleChange}
                                  />
                            </div>
                            <label className="form-check-label" htmlFor="status">Online</label>
                        </Form>
                    </Formik>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>close</Button>
                    <Button Variant="primary" onClick={handleAdd}>save</Button>
                </Modal.Footer>
        </Modal>
    )
}

const mapStateToProps = (state) => {
    return {
        isShowAdd : state.Library.isShowAdd
    }
}

const mapDispatchToProps = {
    addBook,
    hideAdd
}


export default connect(mapStateToProps,mapDispatchToProps)(Add)