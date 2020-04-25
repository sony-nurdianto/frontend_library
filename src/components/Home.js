import React, { useEffect } from "react";
import { connect } from "react-redux";
import Icon from "./../images/book.png";

import { getBook } from "../action/BookList";

const Home = (props) => {
  useEffect(() => {
    props.getBook();
  }, []);

  let show = props.data.map((item, index) => (
    <div key={index} className="row">
      <div className="card" style={{ width: "18rem" }}>
        <img src={Icon} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{item.bookTitle}</h5>
            <ul className="card-text">
                <li>Years realese :{item.years}</li>
                <li>Book Number{item.bookNumber}</li>
            </ul>
          {/* <a href="#" className="btn btn-primary">
            Go somewhere
          </a> */}
        </div>
      </div>
    </div>
  ));

  return (
    <div className="container">
      <div className="row">{show}</div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    data: state.bookList.data,
  };
};

const mapDispatchToProps = { getBook };

export default connect(mapStateToProps, mapDispatchToProps)(Home);
