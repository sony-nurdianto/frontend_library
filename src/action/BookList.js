import axios from 'axios'

export const getBook = () => {
    return (dispatch) => {
        axios.get('https://kohend.herokuapp.com/library/get')
        .then(response => {
            dispatch({
                type:'BOOK_LIST',
                payload : response.data.data
            })
        })
    }
}


