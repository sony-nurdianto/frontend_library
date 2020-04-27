const initialState = {
    data : [],
    dataDel : {},
    dataEdit : {},
    isShowAdd : false,
    isShowEdit : false,
    isShowDel : false    
}

const Library = (state = initialState , action) =>{
    let data ;
    
    switch (action.type){
        case "ADD_BOOK" :
            return{...state, data : [...state.data, action.payload]}

        case 'GET_BOOK_LIST':
            return {
                ...state,
                data : action.payload
            }
        
        case "DELETE_BOOK" : 
            data = state.data.filter((item) => {
                if(item.id === action.payload)
                return false;
                    return true;
            })
        return {...state , data : data}

        case "EDIT_BOOK" :
            data = state.data.map((item) => {
                if(item.id === action.payload._id)
                return action.payload
                return item
            })

            return {...state, data : data}

        case "HIDE_ADD" :
            return{...state,isShowAdd : false}

        case "HIDE_DEL" :
            return {...state,isShowDel :false}

        case "SHOW_ADD":
            return{...state,isShowAdd:true}
        
        case "SHOW_DEL":
            return {...state,isShowDel : true , dataDel : action.payload}

        case "HIDE_EDIT" :
            return {...state , isShowEdit : false }
        case "SHOW_EDIT" :
            return {...state, isShowEdit : true , dataEdit : action.payload }

        default :
        return state
    }   
}

export default Library