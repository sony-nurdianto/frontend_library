import React, { useEffect } from "react";
import { connect } from "react-redux";
import Logo from "./../images/book2.png";

import { getBook } from "../action/BookList";

const Home = (props) => {
  useEffect(() => {
    props.getBook();
  }, []);

  let show = props.data.map((item, index) => (
    <div key={index} className="col ml-2 mr-2 mt-5 mb-5">
      <div className="card" style={{ width: "18rem" }}>
        <img  src={Logo} className="card-img-top" alt="..." />
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
    <div className="container mt-5">
      <div className="row d-flex justify-content-around">{show}</div>
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
