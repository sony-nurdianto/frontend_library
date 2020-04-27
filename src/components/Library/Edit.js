import React, {useState,useEffect} from "react"
import {Modal} from "react-bootstrap"
import {connect} from "react-redux"
import {Formik,Form,Field} from "formik"

import {editData,hideEdit} from "./../../action/library"

const Edit = (props) => {

    const [data , setData] = useState({
        bookTitle : props.data.bookTitle,
        years : props.data.years,
        bookNumber : props.data.bookNumber,
        status : props.data.status
    })

    

    const edit = () => {
        props.editData(data)
    }

    const editHide = () => {
        props.hideEdit()
    }

    const handleChange = (event) => {
        const {name,value} = event.currentTarget;
        setData({
            ...data,
            [name] : value
        })
    }

    useEffect(() => {
        setData(props.data)
    },[props.data])

    return (
        <Modal show={props.isShowEdit} onHide={editHide}>
            <Formik
                // initialValues ={{
                //     bookTitle : props.data.bookTitle,
                //     years : props.data.years,
                //     bookNumber : props.data.bookNumber,
                //     status : props.data.status
                // }}

                // onSubmit = {edit,editHide,handleChange}
            >
                <Form>
                    <div className="modal-content">
                        <div className="modal-header bg-primary">
                            <h5 className="modal-title">Edit your Data</h5>
                            {/* <button 
                                type = "button"
                                className="close"
                                data-dismiss="modal"
                                aria-label="Close"
                                onClick={editHide}
                            ><span aria-hidden="true">&times;</span>
                            </button> */}
                        </div>
                        <div className="modal-body">
                            <div className="form-group">
                                    <label htmlFor="bookTitle">Book Title</label>
                                <Field 
                                    type="text"
                                    className="form-control"
                                    id="bookTitle"
                                    name="bookTitle"
                                    onChange={handleChange}
                                    value={data.bookTitle}
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="bookTitle">Years</label>
                                <Field 
                                    type="text"
                                    className="form-control"
                                    id="Years"
                                    name="Years"
                                    onChange={handleChange}
                                    value={data.Years}
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="bookTitle">Book Number</label>
                                <Field 
                                    type="text"
                                    className="form-control"
                                    id="bookNumber"
                                    name="bookNumber"
                                    onChange={handleChange}
                                    value={data.bookNumber}
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="bookTitle">Status</label>
                                <Field 
                                    type="text"
                                    className="form-control"
                                    id="status"
                                    name="status"
                                    onChange={handleChange}
                                    value={data.status}
                                />
                            </div>
                        </div>
                        <div className="modal-footer">
                            <button
                                type ="button"
                                className="button-secondary"
                                data-dismiss="modal"
                                onClick={editHide} 
                            >Close</button>
                            <button
                                type ="button"
                                className="button-primary"
                                onClick={edit} 
                            >save</button>
                        </div>   
                    </div>
                </Form>
            </Formik>
        </Modal>
    )
}
    

const mapStateToProps = (state) => {
    return {
        data: state.Library.dataEdit,
        isShowEdit : state.Library.isShowEdit
    }
}

const mapDispatchToProps= {editData,hideEdit}

export default connect (mapStateToProps,mapDispatchToProps)(Edit)