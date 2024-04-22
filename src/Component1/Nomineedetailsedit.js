import React, { useState, useRef, useEffect } from "react";
import { LinkContainer } from "react-router-bootstrap";
import "../css/style.css";
import { Link, useLocation } from "react-router-dom";
import Mynavbar from "./Mynavbar";
import axiosConfig from "./../axiosConfig";
const Nomineedetailsedit = () => {
  const [nomineedetail, setNomineedetails] = useState("");
  const [formValues, setFormValues] = useState([
    {
      nomineeName: "",
      nomineeEmailId: "",
      NomineePhoneNumber: null,
      relationWithNominee: "",
    },
  ]);
  const location = useLocation();
  useEffect(() => {
    console.log(location.state);
    if (location?.state) {
      setFormValues(location.state);
      setNomineedetails(location.state);
    }

    console.log(location.state.nomineeName);
    // const userData = localStorage.getItem("UserZimmedari");
    // console.log(userData);
    // axiosConfig
    //   .get(`/asset/nominee-list/${userData._id}`)
    //   .then(response => {
    //     console.log(response.data);
    //   })
    //   .catch(err => {
    //     console.log("err", err);
    //   });
  }, []);
  const handleSelect = e => {
    console.log(e.target.value);
  };
  return (
    <>
      <Mynavbar />
      <div>
        <p
          style={{
            fontSize: "22px",
            color: "rgb(43, 77, 129)",
            fontWeight: "400",
            backgroundImage:
              "linear-gradient(to right, rgb(194, 215, 233) , rgb(229, 234, 238))",
          }}
        >
          <span className="ml-3">My Account </span>
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="currentColor"
              class="bi bi-arrow-right"
              viewBox="0 0 16 16"
            >
              <path
                fill-rule="evenodd"
                d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"
              />
            </svg>
          </span>
          <span> Nominee Details</span>
        </p>
      </div>
      <div className="container-fluid">
      <div className="row">
                    <div className="col-md-3 col-sm-3 col-lg-3 col-xl-3">
                      <div>
                        <div className="mt-4">
                          <div className="mb-3">
                            <fieldset
                              style={{
                                color: "rgb(82, 114, 161)",
                                fontSize: "20px",
                                fontFamily: "Calibri",
                                border: "1px solid rgb(114, 158, 216)",
                                borderRadius: "10px",
                              }}
                            >
                              <legend
                                style={{
                                  color: "rgb(82, 114, 161)",
                                  fontSize: "20px",
                                  fontFamily: "Calibri",
                                  marginLeft: "15px",
                                  width: "auto",
                                }}
                                for="exampleInputPassword1"
                                class="form-label"
                              >
                                Nominee Name
                                <span style={{ color: "red" }}> *</span>
                              </legend>

                              <input
                                type="text"
                                placeholder="XXXXXXXXXXXX"
                                name="nomineeName"
                                value={formValues?.nomineeName}
                                // pattern="[A-Za-z]+"
                                // onChange={e => handleChange(index, e)}
                                style={{
                                  width: "95%",
                                  border: "none",
                                  paddingLeft: "15px",
                                  paddingBottom: "10px",
                                  marginBottom: "5px",
                                  outline: "none",
                                  marginLeft: "5px",
                                  backgroundColor: "white",
                                }}
                              />
                            </fieldset>
                           
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-3 col-sm-3 col-lg-3 col-xl-3">
                      <div>
                        <div className="mt-4">
                          <div className="mb-3">
                            <fieldset
                              style={{
                                color: "rgb(82, 114, 161)",
                                fontSize: "20px",
                                fontFamily: "Calibri",
                                border: "1px solid rgb(114, 158, 216)",
                                borderRadius: "10px",
                                height: "5.3rem",
                              }}
                            >
                              <legend
                                style={{
                                  color: "rgb(82, 114, 161)",
                                  fontSize: "20px",
                                  fontFamily: "Calibri",
                                  marginLeft: "15px",
                                  width: "auto",
                                }}
                                for="exampleInputPassword1"
                                class="form-label"
                              >
                                Relation with Nominee
                                <span style={{ color: "red" }}> *</span>
                              </legend>

                              <select
                                class="form-select"
                                value={formValues?.relationWithNominee}
                                onChange={handleSelect}
                                name="relationWithNominee"
                                aria-label="Default select example"
                                defaultChecked
                                style={{
                                  outline: "none",
                                  width: "95%",
                                  float: "right",
                                  border: "none",
                                  paddingLeft: "15px",
                                  paddingRight: "15px",
                                  paddingBottom: "10px",
                                  marginBottom: "5px",
                                  backgroundColor: "white",
                                }}
                              >
                                <option
                                  Nominee
                                  Relation
                                  style={{ float: "left", border: "none" }}
                                ></option>

                                <option disabled value="">
                                  Select
                                </option>
                                <option value="Wife">Wife</option>
                                <option value="Father">Father</option>
                                <option value="Mother">Mother</option>
                                <option value="Son">Son</option>
                                <option value="Daughter">Daughter</option>
                                <option value="Sister">Sister</option>
                                <option value="Brother">Brother</option>
                                <option value="Husband">Husband</option>
                              </select>
                            </fieldset>
                            
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-3 col-sm-3 col-lg-3 col-xl-3">
                      <div>
                        <div className="mt-4">
                          <div className="mb-3">
                            <fieldset
                              style={{
                                color: "rgb(82, 114, 161)",
                                fontSize: "20px",
                                fontFamily: "Calibri",
                                border: "1px solid rgb(114, 158, 216)",
                                borderRadius: "10px",
                                height: "5.3rem",
                              }}
                            >
                              <legend
                                style={{
                                  color: "rgb(82, 114, 161)",
                                  fontSize: "20px",
                                  fontFamily: "Calibri",
                                  marginLeft: "15px",
                                  width: "auto",
                                }}
                                for="exampleInputPassword1"
                                class="form-label"
                              >
                                Nominee Phone Number
                                <span style={{ color: "red" }}> *</span>
                              </legend>

                              <div className="row">
                                <div className="col-md-3 col-sm-3 col-lg-3 col-xl-3 col-3">
                                  <span>
                                    <button
                                      style={{
                                        outline: "none",
                                        marginLeft: "2px",
                                        width: "115%",
                                        border: "1px solid rgb(114, 158, 216)",
                                        textAlign: "center",
                                        height: "3rem",
                                        marginTop: "-10px",
                                        borderRadius: "10px",
                                        fontSize: "18px",
                                      }}
                                    >
                                      +91
                                    </button>
                                  </span>
                                </div>

                                <div className="col-md-6 col-sm-6 col-lg-6 col-xl-6 col-6">
                                  <input
                                    maxLength={10}
                                    type="tel"
                                    id="NomineePhoneNumber"
                                    name="NomineePhoneNumber"
                                    value={formValues?.NomineePhoneNumber}
                                    // onChange={e => handleChange(index, e)}
                                    placeholder="965XX50XX0"
                                    style={{
                                      width: "90%",
                                      outline: "none",
                                      border: "none",
                                      paddingLeft: "15px",
                                      paddingBottom: "10px",
                                      marginBottom: "5px",
                                    }}
                                  />
                                </div>
                                <div
                                  className="col-md-3 col-sm-3 col-lg-3 col-xl-3 col-3"
                                  style={{ marginLeft: "-10px" }}
                                >
                                  <span>
                                    <a
                                      // onClick={() =>
                                      //   handlePhoneModal(ele.NomineePhoneNumber)
                                      // }
                                      className="btn"
                                      style={{
                                        fontSize: "13px",
                                        width: "115%",
                                        borderRadius: "10px",
                                        backgroundColor: "rgb(32, 119, 190)",
                                        color: "white",
                                        border: "1px solid rgb(114, 158, 216)",
                                        lineHeight: "15px",
                                        height: "3rem",
                                        marginTop: "-10px",
                                      }}
                                    >
                                      SEND OTP
                                    </a>
                                  </span>
                                </div>
                                
                              </div>
                            </fieldset>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-3 col-sm-3 col-lg-3 col-xl-3">
                      <div>
                        <div className="mt-4">
                          <div className="mb-3">
                            <fieldset
                              style={{
                                color: "rgb(82, 114, 161)",
                                fontSize: "20px",
                                fontFamily: "Calibri",
                                border: "1px solid rgb(114, 158, 216)",
                                borderRadius: "10px",
                                height: "5.3rem",
                              }}
                            >
                              <legend
                                style={{
                                  color: "rgb(82, 114, 161)",
                                  fontSize: "20px",
                                  fontFamily: "Calibri",
                                  marginLeft: "15px",
                                  width: "auto",
                                }}
                                for="exampleInputPassword1"
                                class="form-label"
                              >
                                Nominee Email ID
                                {/* <span style={{ color: "red" }}> *</span> */}
                              </legend>
                              <div className="row">
                                <div className="col-md-9 col-sm-9 col-lg-9 col-xl-9 col-9">
                                  <input
                                    type="email"
                                    name="nomineeEmailId"
                                    value={formValues?.nomineeEmailId}
                                    // onChange={e => handleChange(index, e)}
                                    placeholder="kauxxxxxxxxxxxnghxxx@gmail.com"
                                    style={{
                                      width: "90%",
                                      outline: "none",
                                      border: "none",
                                      paddingLeft: "15px",
                                      paddingBottom: "10px",
                                      marginBottom: "5px",
                                      marginLeft: "5px",
                                    }}
                                  />
                                </div>

                                <div
                                  className="col-md-3 col-sm-3 col-lg-3 col-xl-3 col-3"
                                  style={{ marginLeft: "-10px" }}
                                >
                                  <span>
                                    <a
                                      // onClick={() =>
                                      //   handleEmailModal(ele.nomineeEmailId)
                                      // }
                                      className="btn "
                                      style={{
                                        fontSize: "13px",
                                        backgroundColor: "rgb(32, 119, 190)",
                                        color: "white",
                                        width: "115%",
                                        borderRadius: "10px",
                                        border: "1px solid rgb(114, 158, 216)",
                                        lineHeight: "15px",
                                        height: "3rem",
                                        marginTop: "-10px",
                                      }}
                                    >
                                      SEND OTP
                                    </a>
                                  </span>
                                </div>
                                {/* {formError.IsnomineeEmailId && (
                                  <p
                                    style={{
                                      color: "red",
                                      padding: "5px",
                                      fontSize: "16px",
                                      marginTop: "13px",
                                      marginLeft: "13px",
                                    }}
                                  >
                                    Enter valid e-mail ID
                                  </p>
                                )} */}
                                {/* {emailError && (
                                  <p
                                    style={{
                                      color: "red",
                                      padding: "5px",
                                      fontSize: "16px",
                                    }}
                                  >
                                    {emailError}
                                  </p>
                                )} */}
                              </div>
                            </fieldset>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                  </div>
      </div>
      <div className="container">
        {/* 
        <div style={{ overflowX: "auto" }}>

          <table class="table">
            <thead>
              <tr
                style={{ backgroundColor: "rgb(176, 193, 219)", width: "100%" }}
              >
                <th
                  scope="col"
                  style={{
                    textTransform: "capitalize",
                    fontWeight: "600",
                    fontSize: "18px",
                    fontFamily: "Calibri",
                    color: "rgb(43, 77, 129)",
                    width: "22%",
                    borderRight: "2px solid white",
                    textAlign: "center",
                    lineHeight: "20px",
                  }}
                >
                  Nominee Name
                </th>
                <th
                  scope="col"
                  style={{
                    textTransform: "capitalize",
                    fontWeight: "600",
                    fontSize: "18px",
                    fontFamily: "Calibri",
                    color: "rgb(43, 77, 129)",
                    width: "18%",
                    borderRight: "2px solid white",
                    textAlign: "center",
                    lineHeight: "20px",
                  }}
                >
                  Relation with <br></br> Nominee
                </th>
                <th
                  scope="col"
                  style={{
                    textTransform: "capitalize",
                    fontWeight: "600",
                    fontSize: "18px",
                    fontFamily: "Calibri",
                    color: "rgb(43, 77, 129)",
                    width: "30%",
                    borderRight: "2px solid white",
                    textAlign: "center",
                    lineHeight: "20px",
                  }}
                >
                  Nominee Phone No.
                </th>
                <th
                  scope="col"
                  style={{
                    textTransform: "capitalize",
                    fontWeight: "600",
                    fontSize: "18px",
                    fontFamily: "Calibri",
                    color: "rgb(43, 77, 129)",
                    width: "30%",
                    borderRight: "2px solid white",
                    textAlign: "center",
                    lineHeight: "20px",
                  }}
                >
                  Nominee e-mail ID
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="col" style={{ border: "none" }}>
                  <input
                    className="inputetextcssforedit"
                    type="text"
                    value={formValues?.nomineeName}
                    name="nomineeName"
                    style={{
                      border: "1px solid rgb(114, 158, 216)",
                      marginTop: "-10px",
                      textAlign: "center",
                      height: "2.5rem",
                      width: "100%",
                      borderRadius: "10px",
                      fontSize: "18px",
                    }}
                  />
                </th>
                <th scope="col" style={{ border: "none" }}>
                  <select
                    class="form-select"
                    aria-label="Default select example"
                    value={formValues?.relationWithNominee}
                    onChange={handleSelect}
                    style={{
                      border: "1px solid rgb(114, 158, 216)",
                      textAlign: "center",
                      marginTop: "-10px",
                      height: "2.5rem",
                      width: "100%",
                      borderRadius: "10px",
                      fontSize: "18px",
                    }}
                  >
                    <option
                      selected
                      Nominee
                      Relation
                      style={{ float: "left", border: "none" }}
                    ></option>

                    <option value="Wife">Wife</option>
                    <option value="Father">Father</option>
                    <option value="Mother">Mother</option>
                    <option value="Son">Son</option>
                    <option value="Daughter">Daughter</option>
                    <option value="Sister">Sister</option>
                    <option value="Brother">Brother</option>
                    <option value="Husband">Husband</option>
                  </select>
                </th>
                <th scope="col" style={{ border: "none" }}>
                  <div
                    style={{
                      border: "1px solid rgb(114, 158, 216)",
                      marginTop: "-10px",
                      width: "100%",
                      borderRadius: "10px",
                      padding: "3px",
                    }}
                  >
                    <span>
                      <button
                        class="form-select"
                        aria-label="Default select example"
                        style={{
                          width: "25%",
                          border: "1px solid rgb(114, 158, 216)",
                          marginTop: "-10px",
                          textAlign: "center",
                          height: "2rem",
                          borderRadius: "10px",
                          fontSize: "18px",
                        }}
                      >
                        +91
                      </button>
                    </span>
                    <span>
                      <input
                        className="inputetextcssforedit"
                        placeholder="XXXXXXXX"
                        value={formValues?.NomineePhoneNumber}
                        name="phoneNo"
                        type="tel"
                        style={{
                          width: "75%",
                          border: "1px solid rgb(114, 158, 216)",
                          height: "2rem",
                          borderRadius: "10px",
                          fontSize: "18px",
                        }}
                      />
                    </span>
                    <br></br>
                    <span>
                      <button
                        className="btn btn-primary"
                        style={{
                          fontSize: "12px",
                          width: "100%",
                          height: "2rem",
                          borderRadius: "10px",
                          border: "1px solid rgb(114, 158, 216)",
                          lineHeight: "10px",
                        }}
                      >
                        SEND OTP
                      </button>
                    </span>
                  </div>
                </th>
                <th scope="col" style={{ border: "none" }}>
                  <div
                    style={{
                      border: "1px solid rgb(114, 158, 216)",
                      marginTop: "-10px",
                      width: "100%",
                      borderRadius: "10px",
                      padding: "3px",
                    }}
                  >
                    <span>
                      <input
                        className="inputetextcssforedit"
                        placeholder="XXXXXXX@ymail.com"
                        type="email"
                        value={formValues?.nomineeEmailId}
                        name="nomineeEmailId"
                        style={{
                          width: "100%",
                          border: "1px solid rgb(114, 158, 216)",
                          height: "2rem",
                          borderRadius: "10px",
                          fontSize: "18px",
                        }}
                      />
                    </span>
                    <br></br>
                    <span>
                      <button
                        className="btn btn-primary"
                        style={{
                          marginTop: "-5px",
                          fontSize: "12px",
                          width: "100%",
                          height: "2rem",
                          borderRadius: "10px",
                          border: "1px solid rgb(201, 198, 198)",
                          lineHeight: "10px",
                        }}
                      >
                        SEND OTP
                      </button>
                    </span>
                  </div>
                </th>
              </tr>
              <tr>
                <th scope="col" style={{ border: "none" }}>
                  <input
                    className="inputetextcssforedit"
                    type="text"
                    style={{
                      border: "1px solid rgb(114, 158, 216)",
                      marginTop: "-10px",
                      textAlign: "center",
                      height: "2.5rem",
                      width: "100%",
                      borderRadius: "10px",
                      fontSize: "18px",
                    }}
                  />
                </th>
                <th scope="col" style={{ border: "none" }}>
                  <select
                    class="form-select"
                    aria-label="Default select example"
                    style={{
                      border: "1px solid rgb(114, 158, 216)",
                      textAlign: "center",
                      marginTop: "-10px",
                      height: "2.5rem",
                      width: "100%",
                      borderRadius: "10px",
                      fontSize: "18px",
                    }}
                  >
                    <option selected>Wife</option>
                    <option value="1">Father</option>
                    <option value="2">Son</option>
                    <option value="3">Mother</option>
                  </select>
                </th>
                <th scope="col" style={{ border: "none" }}>
                  <div
                    style={{
                      border: "1px solid rgb(114, 158, 216)",
                      marginTop: "-10px",
                      width: "100%",
                      borderRadius: "10px",
                      padding: "3px",
                    }}
                  >
                    <span>
                      <button
                        class="form-select"
                        aria-label="Default select example"
                        style={{
                          width: "25%",
                          border: "1px solid rgb(114, 158, 216)",
                          marginTop: "-10px",
                          textAlign: "center",
                          height: "2rem",
                          borderRadius: "10px",
                          fontSize: "18px",
                        }}
                      >
                        +91
                      </button>
                    </span>
                    <span>
                      <input
                        className="inputetextcssforedit"
                        placeholder="XXXXXXXX"
                        type="tel"
                        style={{
                          width: "75%",
                          border: "1px solid rgb(114, 158, 216)",
                          height: "2rem",
                          borderRadius: "10px",
                          fontSize: "18px",
                        }}
                      />
                    </span>
                    <br></br>
                    <span>
                      <button
                        className="btn btn-primary"
                        style={{
                          fontSize: "12px",
                          width: "100%",
                          height: "2rem",
                          borderRadius: "10px",
                          border: "1px solid rgb(114, 158, 216)",
                          lineHeight: "10px",
                        }}
                      >
                        SEND OTP
                      </button>
                    </span>
                  </div>
                </th>
                <th scope="col" style={{ border: "none" }}>
                  <div
                    style={{
                      border: "1px solid rgb(114, 158, 216)",
                      marginTop: "-10px",
                      width: "100%",
                      borderRadius: "10px",
                      padding: "3px",
                    }}
                  >
                    <span>
                      <input
                        className="inputetextcssforedit"
                        placeholder="XXXXXXX@ymail.com"
                        type="email"
                        style={{
                          width: "100%",
                          border: "1px solid rgb(114, 158, 216)",
                          height: "2rem",
                          borderRadius: "10px",
                          fontSize: "18px",
                        }}
                      />
                    </span>
                    <br></br>
                    <span>
                      <button
                        className="btn btn-primary"
                        style={{
                          marginTop: "-5px",
                          fontSize: "12px",
                          width: "100%",
                          height: "2rem",
                          borderRadius: "10px",
                          border: "1px solid rgb(201, 198, 198)",
                          lineHeight: "10px",
                        }}
                      >
                        SEND OTP
                      </button>
                    </span>
                  </div>
                </th>
              </tr>
              <tr>
                <th scope="col" style={{ border: "none" }}>
                  <input
                    className="inputetextcssforedit"
                    type="text"
                    style={{
                      border: "1px solid rgb(114, 158, 216)",
                      marginTop: "-10px",
                      textAlign: "center",
                      height: "2.5rem",
                      width: "100%",
                      borderRadius: "10px",
                      fontSize: "18px",
                    }}
                  />
                </th>
                <th scope="col" style={{ border: "none" }}>
                  <select
                    class="form-select"
                    aria-label="Default select example"
                    style={{
                      border: "1px solid rgb(114, 158, 216)",
                      textAlign: "center",
                      marginTop: "-10px",
                      height: "2.5rem",
                      width: "100%",
                      borderRadius: "10px",
                      fontSize: "18px",
                    }}
                  >
                    <option></option>
                    <option>Wife</option>
                    <option value="1">Father</option>
                    <option value="2">Son</option>
                    <option value="3">Mother</option>
                  </select>
                </th>
                <th scope="col" style={{ border: "none" }}>
                  <div
                    style={{
                      border: "1px solid rgb(114, 158, 216)",
                      marginTop: "-10px",
                      width: "100%",
                      borderRadius: "10px",
                      padding: "3px",
                    }}
                  >
                    <span>
                      <button
                        class="form-select"
                        aria-label="Default select example"
                        style={{
                          width: "25%",
                          border: "1px solid rgb(114, 158, 216)",
                          marginTop: "-10px",
                          textAlign: "center",
                          height: "2rem",
                          borderRadius: "10px",
                          fontSize: "18px",
                        }}
                      >
                        +91
                      </button>
                    </span>
                    <span>
                      <input
                        className="inputetextcssforedit"
                        placeholder="XXXXXXXX"
                        type="tel"
                        style={{
                          width: "75%",
                          border: "1px solid rgb(114, 158, 216)",
                          height: "2rem",
                          borderRadius: "10px",
                          fontSize: "18px",
                        }}
                      />
                    </span>
                    <br></br>
                    <span>
                      <button
                        className="btn btn-primary"
                        style={{
                          fontSize: "12px",
                          width: "100%",
                          height: "2rem",
                          borderRadius: "10px",
                          border: "1px solid rgb(114, 158, 216)",
                          lineHeight: "10px",
                        }}
                      >
                        SEND OTP
                      </button>
                    </span>
                  </div>
                </th>
                <th scope="col" style={{ border: "none" }}>
                  <div
                    style={{
                      border: "1px solid rgb(114, 158, 216)",
                      marginTop: "-10px",
                      width: "100%",
                      borderRadius: "10px",
                      padding: "3px",
                    }}
                  >
                    <span>
                      <input
                        className="inputetextcssforedit"
                        placeholder="XXXXXXX@ymail.com"
                        type="email"
                        style={{
                          width: "100%",
                          border: "1px solid rgb(114, 158, 216)",
                          height: "2rem",
                          borderRadius: "10px",
                          fontSize: "18px",
                        }}
                      />
                    </span>
                    <br></br>
                    <span>
                      <button
                        className="btn btn-primary"
                        style={{
                          marginTop: "-5px",
                          fontSize: "12px",
                          width: "100%",
                          height: "2rem",
                          borderRadius: "10px",
                          border: "1px solid rgb(201, 198, 198)",
                          lineHeight: "10px",
                        }}
                      >
                        SEND OTP
                      </button>
                    </span>
                  </div>
                </th>
              </tr> 
            </tbody>
          </table>
        </div>
      */}
        <div className="container mt-5 mb-2 cssforfooternomineedetails" >
          <div style={{ float: "left" }}>
            <Link to={"/nomineedetails"}>
              <p
                style={{
                  color: "rgb(82, 114, 161)",
                  fontSize: "20px",
                  fontWeight: "500",
                }}
              >
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    fill="currentColor"
                    class="bi bi-arrow-left"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8"
                    />
                  </svg>
                </span>
                <span className="ml-3">BACK</span>
              </p>
            </Link>
          </div>
          <div style={{ float: "right", bottom: "0px" }}>
            <Link to={"/nomineedetailsedit"}>
              <span className="btn">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  color="rgb(43, 77, 129)"
                  width="50"
                  height="50"
                  fill="currentColor"
                  class="bi bi-file-earmark-text"
                  viewBox="0 0 16 16"
                >
                  <path d="M5.5 7a.5.5 0 0 0 0 1h5a.5.5 0 0 0 0-1zM5 9.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5m0 2a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1h-2a.5.5 0 0 1-.5-.5" />
                  <path d="M9.5 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V4.5zm0 1v2A1.5 1.5 0 0 0 11 4.5h2V14a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1z" />
                </svg>
              </span>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Nomineedetailsedit;
