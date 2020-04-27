import axios from 'axios'

const urlDel= 'https://kohend.herokuapp.com/library/del'
const urlEdit = 'https://kohend.herokuapp.com/library/edit'

export const getBookList = () => {
    return async (dispatch) => {
        const response = await axios.get('https://kohend.herokuapp.com/library/get')
        dispatch({
            type : 'GET_BOOK_LIST',
            payload : response.data.data
        })
    }
}

export const addBook = (data) => {
    return async(dispatch) => {
        const response = await axios.post('https://kohend.herokuapp.com/library/post',data);
        dispatch({
            type : "ADD_BOOK",
            payload : response.data.data
        })
        dispatch({
            type : 'HIDE_ADD'
        })
    }
}

export const delBook = (id) => {
    return async (dispatch) => {
        const response = await axios.delete(`${urlDel}/${id}`)
        dispatch ({
            type : "DELETE_BOOK",
            payload : response.data.data
        })
        dispatch ({
            type : "HIDE_DEL"
        })
    }


}

export const editData  = (data) => {
    return async (dispatch) => {
        await axios.put(`${urlEdit}/${data._id} `,data)
    dispatch ({
        type : "EDIT_BOOK",
        payload : data
    })
    dispatch({
        
        type : "HIDE_EDIT",
       
    })
    }
}

export const hideAdd = () => {
    return {
        type : "HIDE_ADD"
    }
}

export const hideDel = () => {
    return {
        type : "HIDE_DEL"
    }
}

export const showAdd = () => {
    return {
        type : "SHOW_ADD",
        
    }
}

export const showdel = (data) => {
    return {
        type : "SHOW_DEL",
        payload : data
    }
}

export const showEdit = (data) => {
    return  {
        type : "SHOW_EDIT",
            payload : data

    }
}

export const hideEdit = () => {
    return {
        type : "HIDE_EDIT"
    }
}


