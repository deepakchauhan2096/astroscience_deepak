"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useSelector, useDispatch } from 'react-redux';
import { incrementPage, decrementPage } from '../actions/pageActions';

const UserDetail = () => {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const [totals, setTotal] = useState();
  const dispatch = useDispatch();
  const count = useSelector((state) => state.page.count);
  const total = useSelector((state) => state.page.total);


  // prev page
  const prevPage = () => {
    dispatch(decrementPage());
  };
 
  // next page
  const nextPage = () => {
    dispatch(incrementPage(totals));
  };

  const fetchData = async () => {
    try {
      const response = await axios.get(
        `https://reqres.in/api/users?page=${count}`
      );
      console.log(response.data, "myresponse");
      setData(response.data.data);
      setPage(response.data.page);
      setTotal(response.data.total_pages);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchData();
  }, [count]);

  console.log(total, "");



  const Modal = (props) => {
    const [show, setShow] = useState(false);

    return (
      <>
        <button className="btn" onClick={() => setShow((e) => !e)}>
          {"View"}
        </button>

        <div
          style={{
            display: show ? "block" : "none",
            height: "400px",
            width: "600px",
            position: "absolute",
            left: "50%",
            top: "50%",
            transform: "translate(-50%,-50%)",
            background: "#fff",
            boxShadow:"rgba(0, 0, 0, 0.24) 0px 3px 8px"
          }}
        >
           <button className="btn" style={{position:"absolute", right:0}} onClick={() => setShow(false)}>
          {"close"}
          </button>
          <div className="box">
            <div className="main">
              <>
                <div className="card">
                  <img src={props.avatar} alt={props.index} />
                  <h6>
                    {props.first_name} {props.last_name}
                  </h6>
                  <p>{props.email}</p>
                </div>
              </>
            </div>
          </div>
        </div>
      </>
    );
  };

  return (
    <>
      <div className="container">
        <div className="box">
          <div className="main">
            {data.map((e, index) => (
              <>
                <div className="card">
                  <img src={e.avatar} alt={index} />
                  <h6>
                    {e.first_name} {e.last_name}
                  </h6>
                  <p>{e.email}</p>
                  <Modal 
                  avatar={e.avatar} 
                  index={e.index}
                  first_name={e.first_name}
                  last_name={e.last_name}
                  email={e.email}
                  />
                </div>
              </>
            ))}
          </div>
          <div className="control">
            <button className="btn" onClick={prevPage}>
              {"<< Prev"}
            </button>
            <button className="btn">{count}</button>
            <button className="btn" onClick={nextPage}>
              {"Next >>"}
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default UserDetail;
