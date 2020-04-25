const initialState = {
    data : [],
    dataDel : {},
    dataEdit : {},
    isShowAdd : false,
    isShowEdit : false,
    isShowDel : false    
}

const Library = (state = initialState , action) =>{
    let data;
    switch (action.type){
        case "ADD_BOOK" :
            return{...state, data : [...state.data, action.payload]}

        case 'GET_BOOK_LIST':
            return {
                ...state,
                data : action.payload
            }


        case "HIDE_ADD" :
            return{...state,isShowAdd : false}

        case "SHOW_ADD":
            return{...state,isShowAdd:true}

        default :
        return state
    }   
}

export default Library