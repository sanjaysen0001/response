import { Link } from "react-router-dom";

import * as React from "react";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { PieChart } from "@mui/x-charts/PieChart";
import Mynavbar from "./Mynavbar";
// import "./App.css";
import "./dashboard.css";

const Index = () => {
  const pieParams = { height: 130, margin: { right: 5 } };
  const palette = ["blue", "orange"];

  return (
    <>
      <Mynavbar />
      {/* Page content */}
      <div className="">
        <p
          style={{
            fontSize: "22px",
            color: "rgb(43, 77, 129)",
            fontWeight: "400",
            backgroundImage:
              "linear-gradient(to right, rgb(174, 191, 207) , rgb(229, 234, 238))",
          }}
        >
          <span className="ml-3">Dashboard </span>
          <span></span>
        </p>
        <div className="mt-5 container-fluid">
          <div className="row">
            <div className="col-md-4 col-xl-4 col-lg-4">
              <Link style={{ textDecoration: "none" }} to={"/add-asset"}>
                <div
                  className="m-2"
                  style={{ justifyContent: "center", display: "flex" }}
                >
                  <div
                    className="cssforboxwidthsetinmobileanddesktopveiw"
                    style={{
                      border: "1px solid rgb(43, 77, 129)",
                      height: "8rem",
                      borderBottomLeftRadius: "20px",
                      borderBottomRightRadius: "20px",
                    }}
                  >
                    <div
                      style={{
                        fontSize: "16px",
                        fontWeight: "700",
                        color: "rgb(43, 77, 129)",
                        padding: "10px",
                        backgroundImage:
                          "linear-gradient(to right, rgb(174, 191, 207) , rgb(243, 227, 175))",
                      }}
                    >
                      ASSET ADDED
                    </div>
                    <p style={{ textAlign: "center" }}>
                      <span
                        style={{ fontSize: "44px", color: "rgb(43, 77, 129)" }}
                      >
                        29
                      </span>
                      <span
                        style={{
                          fontSize: "16px",
                          color: "rgb(43, 77, 129)",
                          marginLeft: "5px",
                        }}
                      >
                        ASSET
                      </span>
                    </p>
                  </div>
                </div>
              </Link>
            </div>
            <div className="col-md-4 col-xl-4 col-lg-4">
              <Link style={{ textDecoration: "none" }} to={"/lifedeclaration"}>
                <div
                  className="m-2"
                  style={{ justifyContent: "center", display: "flex" }}
                >
                  <div
                    style={{
                      border: "1px solid rgb(43, 77, 129)",
                      width: "100%",
                      height: "8rem",
                      borderBottomLeftRadius: "20px",
                      borderBottomRightRadius: "20px",
                    }}
                  >
                    <div
                      style={{
                        fontSize: "16px",
                        fontWeight: "700",
                        color: "rgb(43, 77, 129)",
                        padding: "10px",
                        backgroundImage:
                        "linear-gradient(to right, rgb(174, 191, 207) , rgb(243, 227, 175))",
                      }}
                    >
                      HEALTH DECLERATION STATUS
                    </div>
                    <p className="m-3">
                      <span
                        style={{
                          fontSize: "18px",
                          color: "rgb(43, 77, 129)",
                          float: "left",
                        }}
                      >
                        NEXT DUE DATE
                      </span>
                      <span
                        style={{
                          marginLeft: "53px",
                          fontSize: "18px",
                          color: "rgb(43, 77, 129)",
                        }}
                      >
                        : 15-FEB-24
                      </span>

                      <br></br>

                      <span
                        style={{
                          fontSize: "18px",
                          color: "rgb(43, 77, 129)",
                          float: "left",
                        }}
                      >
                        LAST SUBMITTED ON{" "}
                      </span>
                      <span
                        style={{
                          marginLeft: "10px",
                          fontSize: "18px",
                          color: "rgb(43, 77, 129)",
                        }}
                      >
                        : 15-JAN-24
                      </span>
                    </p>
                  </div>
                </div>
              </Link>
            </div>
            <div className="col-md-4 col-xl-4 col-lg-4">
              <Link style={{ textDecoration: "none" }} to={"/payment"}>
                <div
                  className="m-2"
                  style={{ justifyContent: "center", display: "flex" }}
                >
                  <div
                    className="cssforboxwidthsetinmobileanddesktopveiw"
                    style={{
                      border: "1px solid rgb(43, 77, 129)",
                      height: "8rem",
                      borderBottomLeftRadius: "20px",
                      borderBottomRightRadius: "20px",
                    }}
                  >
                    <div
                      style={{
                        fontSize: "16px",
                        fontWeight: "700",
                        color: "rgb(43, 77, 129)",
                        padding: "10px",
                        backgroundImage:
                        "linear-gradient(to right, rgb(174, 191, 207) , rgb(243, 227, 175))",
                      }}
                    >
                      SUBSCRIPTION STATUS
                    </div>
                    <p className="m-3">
                      <span
                        style={{
                          fontSize: "18px",
                          color: "rgb(43, 77, 129)",
                          fontWeight: "700",
                        }}
                      >
                        ACTIVE{" "}
                      </span>
                      <br></br>
                      <span
                        style={{
                          fontSize: "18px",
                          color: "rgb(43, 77, 129)",
                          float: "left",
                        }}
                      >
                        NEXT DUE DATE{" "}
                      </span>
                      <span
                        style={{
                          marginLeft: "10px",
                          fontSize: "18px",
                          color: "rgb(43, 77, 129)",
                        }}
                      >
                        : 15-JAN-24
                      </span>
                    </p>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>
        <div className="mt-5 container-fluid">
         
          <div class="horizontal-line">
  <div class="endpoint-dot left-dot"></div>
  <div class="endpoint-dot right-dot"></div>
</div>

        </div>
        <div className="mt-5 container-fluid">
          <div className="row">
            <div className="col-md-7 col-xl-7 col-lg-7 ">
              <div
                className="m-2"
                style={{ justifyContent: "center", display: "flex" }}
              >
                <div
                  style={{
                    border: "1px solid rgb(43, 77, 129)",
                    width: "100%",
                    borderBottomLeftRadius: "20px",
                    borderTopLeftRadius: "20px",
                  }}
                >
                
                  <div className="row">
                    <div className="col-md-4 col-xl-4 col-lg-4 col-12 col-sm-4 ">
                      <div className="m-2">
                        <div className="row">
                          <div className="col-md-6 col-sm-6 col-lg-6 col-xl-6 col-6">
                            <span
                              style={{
                                fontSize: "80px",
                                color: "rgb(43, 77, 129)",
                              }}
                            >
                              04
                            </span>
                          </div>
                          <div className="col-md-6 col-sm-6 col-lg-6 col-xl-6 col-6">
                            <p
                              style={{
                                fontSize: "25px",
                                fontWeight: "600",
                                color: "rgb(43, 77, 129)",
                              }}
                            >
                              ACTION<br></br> ITEM <br></br>PENDING
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-8 col-xl-8 col-lg-8 col-12 col-sm-8">
                    <div style={{overflow:'auto',height:'9rem'}}>
                    
                    
                      <div
                        style={{
                          fontSize: "16px",
                          fontWeight: "400",
                          color: "rgb(43, 77, 129)",
                          height: "3rem",
                          padding: "10px",
                          backgroundImage:
                          "linear-gradient(to right, rgb(174, 191, 207) , rgb(229, 234, 238))",
                        }}
                      >
                        Renew Subscription, expiring in 15 days
                      </div>
                      <div
                        style={{
                          fontSize: "16px",
                          fontWeight: "400",
                          color: "rgb(43, 77, 129)",
                          height: "3rem",
                          padding: "10px",
                          backgroundImage:
                          "linear-gradient(to right, rgb(243, 206, 175) , rgb(250, 252, 253))",
                        }}
                      >
                        Validate Nominee Phone Number
                      </div>
                      <div
                        className="cssforborderradiusmobileveiw"
                        style={{
                          fontSize: "16px",
                          fontWeight: "400",
                          color: "rgb(43, 77, 129)",
                          height: "3rem",
                          padding: "10px",
                          backgroundImage:
                          "linear-gradient(to right, rgb(174, 191, 207) , rgb(229, 234, 238))",
                        }}
                      >
                        Validate Nominee e-mail ID
                      </div>
                       <div
                        className="cssforborderradiusmobileveiw"
                        style={{
                          fontSize: "16px",
                          fontWeight: "400",
                          color: "rgb(43, 77, 129)",
                          height: "3rem",
                          padding: "10px",
                          backgroundImage:
                          "linear-gradient(to right, rgb(174, 191, 207) , rgb(229, 234, 238))",
                        }}
                      >
                        Validate Nominee e-mail ID
                      </div>
                    </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-5 col-xl-5 col-lg-5">
              <div className="m-2">
                <div
                  className="row m-1"
                  style={{
                    border: "1px solid rgb(43, 77, 129)",
                    backgroundImage:
                      "linear-gradient(to right, rgb(194, 215, 233) , rgb(254, 254, 255))",
                    borderBottomRightRadius: "20px",
                    borderTopRightRadius: "20px",
                  }}
                >
                  <div
                    className="col-md-7 col-xl-7 col-lg-7"
                    style={{ height: "9rem" }}
                  >
                    <p
                      className="mt-5"
                      style={{
                        fontSize: "20px",
                        color: "rgb(43, 77, 129)",
                        fontWeight: "700",
                        justifyContent: "center",
                        display: "flex",
                      }}
                    >
                      USER PROFILE <br></br>COMPLETION STATUS
                    </p>
                  </div>
                  <div
                    className="col-md-5 col-xl-5 col-lg-5"
                    style={{ height: "9rem" }}
                  >
                    <PieChart
                      series={[
                        {
                          data: [
                            { value: 80, color: "rgb(52, 145, 233)" },
                            { value: 20, color: "rgb(235, 139, 94)" },
                          ],
                        },
                      ]}
                      {...pieParams}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Index;
