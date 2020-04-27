import React,{useState} from "react";
import { connect } from "react-redux";

import Main from "./Main";

import { showAdd } from "./../../action/library";

const Index = (props) => {

  // const [searchInput,setSerchInput] = useState('')

  

 

  // const search = () => {
  //   props.filter(searchInput)
  // }

  // const handleKeyUp = (event) => {
  //   search()
  // }

  // const handleChange = (event) => {
  //   setSerchInput(event.target.value);
  // };

  const showAdd = () => {
    props.showAdd();
  };


  return (
    <div>
      <h1>Book list</h1>
      <div className="form-inline">
        <button className="btn btn-primary" onClick={showAdd}>
          Tambah
        </button>
        {/* <div className="d-flex justify-content-end"> */}
        {/* <form className="form-inline my-2 my-lg-0 ">
            <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" onChange={handleChange} value={searchInput} onKeyUp={handleKeyUp}/>
            < button type="button" className="input-group-append" onClick={search}>
              
          </button>
          </form> */}
        {/* </div> */}
      </div>
      <Main />
    </div>
  );
};

const mapDispatchToProps = {
  showAdd,
  // filter
};

export default connect(null, mapDispatchToProps)(Index);
