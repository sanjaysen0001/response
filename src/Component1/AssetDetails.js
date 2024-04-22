import React, { useState, useRef, useEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import Mynavbar from "./Mynavbar";
import { NomineesDetails } from "./assetDetail/NomineesDetails";
import axiosConfig from "./../axiosConfig";

const AssetDetails = () => {
  const [modalShow, setModalShow] = useState(false);
  const [assetList, setAssetList] = useState([]);
  const navigate = useNavigate();
  const location = useLocation();
  useEffect(() => {
    console.log(location);
    AllAssetList();
  }, [assetList]);

  const AllAssetList = () => {
    axiosConfig
      .get("/asset/view-asset")
      .then(response => {
        setAssetList(response.data.Asset);
      })
      .catch(error => {
        console.log(error.response?.data);
      });
  };

  const handleDelete = id => {
    axiosConfig
      .delete(`/asset/delete-asset/${id}`)
      .then(response => {
        AllAssetList();
        console.log(response.data.message);
      })
      .catch(error => {
        console.log(error.response);
      });
  };
  const handleEdit = payload => {
    navigate("/add-asset/policy", { state: { payload: payload } });

    // navigate("/add-asset/policy");
    // axiosConfig
    //   .put(`/asset/update-asset/${id}`)
    //   .then(response => {
    //     console.log(response.data.message);
    //     navigate("/add-asset/policy");
    //   })
    //   .catch(error => {
    //     console.log(error.response);
    //   });
  };
  return (
    <>
      <Mynavbar />
      <div >
      <NomineesDetails show={modalShow} onHide={() => setModalShow(false)} />
      </div>
     
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
          <span> Asset Details</span>
        </p>
      </div>
      <div className="container">
        <div style={{ overflowX: "auto" }}>
          <table className="table">
            <thead>
              <tr
                style={{ backgroundColor: "rgb(43, 77, 129)", width: "100%" }}
              >
                <th
                  scope="col"
                  style={{
                    textTransform: "capitalize",
                    fontWeight: "bold",
                    fontSize: "18px",
                    color: "white",
                    width: "14%",
                    borderRight: "2px solid white",
                    fontFamily: "Calibri",
                  }}
                >
                  <div className="d-flex justify-content-center">
                    Asset Type
                  </div>
                </th>
                <th
                  scope="col"
                  style={{
                    textTransform: "capitalize",
                    fontWeight: "bold",
                    fontSize: "18px",
                    fontFamily: "Calibri",
                    textAlign: "center",
                    color: "white",
                    width: "14%",
                    borderRight: "2px solid white",
                  }}
                >
                  <div className="d-flex justify-content-center">
                    Company Name
                  </div>
                </th>
                <th
                  scope="col"
                  style={{
                    textTransform: "capitalize",
                    fontWeight: "bold",
                    fontSize: "18px",
                    fontFamily: "Calibri",
                    textAlign: "center",
                    color: "white",
                    width: "14%",
                    borderRight: "2px solid white",
                  }}
                >
                  <div className="d-flex justify-content-center">
                    Unique ID Name
                  </div>
                </th>
                <th
                  scope="col"
                  style={{
                    textTransform: "capitalize",
                    fontWeight: "bold",
                    fontSize: "18px",
                    fontFamily: "Calibri",
                    textAlign: "center",
                    color: "white",
                    width: "14%",
                    borderRight: "2px solid white",
                    lineHeight: "20px",
                  }}
                >
                  Unique ID Number
                </th>
                <th
                  scope="col"
                  style={{
                    textTransform: "capitalize",
                    fontWeight: "bold",
                    fontSize: "18px",
                    fontFamily: "Calibri",
                    textAlign: "center",
                    color: "white",
                    width: "14%",
                    borderRight: "2px solid white",
                    lineHeight: "20px",
                  }}
                >
                  Supporting Document
                </th>
                <th
                  scope="col"
                  style={{
                    textTransform: "capitalize",
                    fontWeight: "bold",
                    fontSize: "18px",
                    fontFamily: "Calibri",
                    textAlign: "center",
                    color: "white",
                    width: "15%",
                    borderRight: "2px solid white",
                    lineHeight: "20px",
                  }}
                >
                  Nominee Detail
                </th>
                <th
                  scope="col"
                  style={{
                    textTransform: "capitalize",
                    fontWeight: "bold",
                    fontSize: "18px",
                    fontFamily: "Calibri",
                    textAlign: "center",
                    color: "white",
                    width: "15%",
                    borderRight: "2px solid white",
                    textAlign: "center",
                    lineHeight: "20px",
                  }}
                >
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              {assetList &&
                assetList?.map(item => (
                  <tr
                    style={{
                      backgroundColor: "rgb(176, 193, 219)",
                      width: "100%",
                    }}
                  >
                    <th
                      scope="col"
                      style={{
                        textTransform: "capitalize",
                        fontWeight: "normal",
                        fontSize: "18px",
                        fontFamily: "Calibri",
                        color: "black",
                        width: "14%",
                        borderRight: "2px solid white",
                        textAlign: "center",
                        lineHeight: "15px",
                      }}
                    >
                      {item?.assetType}
                      {/* Term <br></br>Insurance */}
                    </th>
                    <th
                      scope="col"
                      style={{
                        textTransform: "capitalize",
                        fontWeight: "normal",
                        fontSize: "18px",
                        fontFamily: "Calibri",
                        color: "black",
                        width: "14%",
                        borderRight: "2px solid white",
                        textAlign: "center",
                        lineHeight: "15px",
                      }}
                    >
                      Bajaj Allianz{" "}
                    </th>
                    <th
                      scope="col"
                      style={{
                        textTransform: "capitalize",
                        fontWeight: "normal",
                        fontSize: "18px",
                        fontFamily: "Calibri",
                        color: "black",
                        width: "14%",
                        borderRight: "2px solid white",
                        textAlign: "center",
                        lineHeight: "15px",
                      }}
                    >
                      {item?.Field_3}
                    </th>
                    <th
                      scope="col"
                      style={{
                        textTransform: "capitalize",
                        fontWeight: "normal",
                        fontSize: "18px",
                        fontFamily: "Calibri",
                        color: "black",
                        width: "14%",
                        borderRight: "2px solid white",
                        textAlign: "center",
                        lineHeight: "15px",
                      }}
                    >
                      {item?.policynumber}
                    </th>
                    <th
                      scope="col"
                      style={{
                        textTransform: "capitalize",
                        fontWeight: "normal",
                        fontSize: "18px",
                        fontFamily: "Calibri",
                        color: "black",
                        width: "14%",
                        borderRight: "2px solid white",
                        textAlign: "center",
                        lineHeight: "15px",
                      }}
                    >
                      NA
                    </th>
                    <th
                      scope="col"
                      style={{
                        textTransform: "capitalize",
                        fontWeight: "normal",
                        fontSize: "18px",
                        fontFamily: "Calibri",
                        color: "black",
                        width: "15%",
                        borderRight: "2px solid white",
                        textAlign: "center",
                        lineHeight: "15px",
                      }}
                    >
                      <span
                        style={{
                          cursor: "pointer",
                          borderBottom: "1px solid rgb(43, 77, 129)",
                          color: "rgb(43, 77, 129)",
                          fontWeight: "600",
                        }}
                        onClick={() => setModalShow(true)}
                      >
                        Nominee Names
                      </span>
                    </th>
                    <th
                      scope="col"
                      style={{
                        textTransform: "capitalize",
                        fontWeight: "normal",
                        fontSize: "18px",
                        fontFamily: "Calibri",
                        color: "black",
                        width: "15%",
                        borderRight: "2px solid white",
                        textAlign: "center",
                        lineHeight: "15px",
                      }}
                    >
                      <div style={{ marginTop: "-10px" }}>
                        <span className="icon-container">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            style={{ cursor: "pointer" }}
                            color="rgb(43, 77, 129)"
                            width="30"
                            height="30"
                            fill="currentColor"
                            class="bi bi-pencil-square hoverable-image"
                            viewBox="0 0 16 16"
                            onClick={() => handleEdit(item)}
                          >
                            <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" />
                            <path
                              fill-rule="evenodd"
                              d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5z"
                            />
                          </svg>
                          <span
                            className="icon-name"
                            style={{
                              marginLeft: "2.9%",
                              marginTop: "-5px",
                              padding: "5px",
                            }}
                          >
                            Edit
                          </span>
                        </span>
                        <span className="ml-2 btn icon-container">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            color="rgb(43, 77, 129)"
                            width="30"
                            height="30"
                            fill="currentColor"
                            class="bi bi-trash3-fill hoverable-image"
                            viewBox="0 0 16 16"
                            onClick={() => handleDelete(item._id)}
                          >
                            <path d="M11 1.5v1h3.5a.5.5 0 0 1 0 1h-.538l-.853 10.66A2 2 0 0 1 11.115 16h-6.23a2 2 0 0 1-1.994-1.84L2.038 3.5H1.5a.5.5 0 0 1 0-1H5v-1A1.5 1.5 0 0 1 6.5 0h3A1.5 1.5 0 0 1 11 1.5m-5 0v1h4v-1a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5M4.5 5.029l.5 8.5a.5.5 0 1 0 .998-.06l-.5-8.5a.5.5 0 1 0-.998.06m6.53-.528a.5.5 0 0 0-.528.47l-.5 8.5a.5.5 0 0 0 .998.058l.5-8.5a.5.5 0 0 0-.47-.528M8 4.5a.5.5 0 0 0-.5.5v8.5a.5.5 0 0 0 1 0V5a.5.5 0 0 0-.5-.5" />
                          </svg>
                          <span
                            className="icon-name"
                            style={{ marginLeft: "1.2%" }}
                          >
                            Delete
                          </span>
                        </span>
                      </div>
                    </th>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
        <div className="container mt-5">
          <div style={{ float: "left" }}>
            <Link to={"/dashboard"} style={{ textDecoration: "none" }}>
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
        </div>
      </div>
    </>
  );
};

export default AssetDetails;
