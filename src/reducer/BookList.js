const initialState = {
    data : [],
    
}

const bookList = (state = initialState , action) =>{
    
    switch (action.type){
        case 'BOOK_LIST':
            return {
                ...state,
                data : action.payload
            }
        default :
        return state
    }   
}

export default bookList