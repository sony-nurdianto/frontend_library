import {combineReducers} from "redux"

import bookList from './BookList'
import Library from './Library'

export default combineReducers ({
    bookList : bookList ,
    Library : Library
    
})