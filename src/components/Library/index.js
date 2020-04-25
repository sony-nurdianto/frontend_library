import React from "react";
import { connect } from "react-redux";

import Main from "./Main";

import { showAdd } from "./../../action/library";

const Index = (props) => {
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
      </div>
      <Main />
    </div>
  );
};

const mapDispatchToProps = {
  showAdd,
};

export default connect(null, mapDispatchToProps)(Index);
