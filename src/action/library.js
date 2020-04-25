import axios from 'axios'

export const getBookList = () => {
    return (dispatch) => {
        axios.get('https://kohend.herokuapp.com/library/get')
        .then(response => {
            dispatch({
                type:'GET_BOOK_LIST',
                payload : response.data.data
            })
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

export const hideAdd = () => {
    return {
        type : "HIDE_ADD"
    }
}

export const showAdd = () => {
    return {
        type : "SHOW_ADD"
    }
}