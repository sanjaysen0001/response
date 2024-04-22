import React, { useState } from "react";
// import { Link } from "react-router-dom";
// import Mynavbar from "./Mynavbar";
// import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
export const Step2modals = props => {
  return ( 
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header
        style={{
          justifyContent: "right",
          display: "flex",
          padding: "0.1rem 0.1rem",
          border: "none",
        }}
      >
        <div>
          <svg
            style={{ cursor: "pointer" }}
            onClick={props.onHide}
            viewBox="0 0 512 512"
            width="40"
            height="40"
            xmlns="http://www.w3.org/2000/svg"
            enable-background="new 0 0 512 512"
          >
            <path
              d="M256 33C132.3 33 32 133.3 32 257s100.3 224 224 224 224-100.3 224-224S379.7 33 256 33zm108.3 299.5c1.5 1.5 2.3 3.5 2.3 5.6 0 2.1-.8 4.2-2.3 5.6l-21.6 21.7c-1.6 1.6-3.6 2.3-5.6 2.3-2 0-4.1-.8-5.6-2.3L256 289.8l-75.4 75.7c-1.5 1.6-3.6 2.3-5.6 2.3-2 0-4.1-.8-5.6-2.3l-21.6-21.7c-1.5-1.5-2.3-3.5-2.3-5.6 0-2.1.8-4.2 2.3-5.6l75.7-76-75.9-75c-3.1-3.1-3.1-8.2 0-11.3l21.6-21.7c1.5-1.5 3.5-2.3 5.6-2.3 2.1 0 4.1.8 5.6 2.3l75.7 74.7 75.7-74.7c1.5-1.5 3.5-2.3 5.6-2.3 2.1 0 4.1.8 5.6 2.3l21.6 21.7c3.1 3.1 3.1 8.2 0 11.3l-75.9 75 75.6 75.9z"
              fill="#eb1515"
              class="fill-000000"
            ></path>
          </svg>
        </div>
      </Modal.Header>
      <Modal.Body>
      <div className="m-3">
      <div>
      <table class="table">
  <thead>
   
  </thead>
  <tbody>
    <tr>
      <th scope="row" className="csforcolortablestep2">
      <input type="radio" id="option1" className="cssforcheckoutstep2 " name="options" value="option1"/>
     
      </th>
      <td className="csforcolortablestep2">Suman Yadav
      </td>
      <td className="csforcolortablestep2">Wife
      </td>
      
    </tr>
    <tr>
    <th scope="row" className="csforcolortable2step2">
    <input type="radio" id="option1" className="cssforcheckoutstep2" name="options" value="option1"/>
   
    </th>
    <td className="csforcolortable2step2">Suresh Kumar

    </td>
    <td className="csforcolortable2step2">Brother
    </td>
    
  </tr>
  <tr>
    <th scope="row" className="csforcolortable3step2">
    <input type="radio" id="option1" className="cssforcheckoutstep2" name="options" value="option1"/>
   
    </th>
    <td className="csforcolortable3step2">Ankit Sharma

    </td>
    <td className="csforcolortable3step2">Son
    </td>
    
  </tr>
  <tr>
    <th scope="row" className="csforcolortable2step2">
    <input type="radio" id="option1" className="cssforcheckoutstep2" name="options" value="option1"/>
   
    </th>
    <td className="csforcolortable2step2">Hiteshi Pal

    </td>
    <td className="csforcolortable2step2">Daughter

    </td>
    
  </tr>
    
  </tbody>
</table>
      </div>
      
    
    </div>
      </Modal.Body>
    </Modal>
  );
};
