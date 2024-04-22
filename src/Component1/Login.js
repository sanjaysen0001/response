import React, { useEffect, useState, useRef } from "react";
import imagelogo from "../image/logo.png";
import Webcam from "react-webcam";
import * as tf from "@tensorflow/tfjs";
// import imageuser from "../image/logouserimage.png";
import axiosConfig from "../axiosConfig";
import { Link, useNavigate, useLocation, useParams } from "react-router-dom";

import "./Loginrefer";
import swal from "sweetalert";
import NavBar from "./NavBar";
import Footer from "./Footer";
const faceLandmarksDetection = require("@tensorflow-models/face-landmarks-detection");

const Login = () => {
  const [code, setCode] = useState(null);
  const [phone,setPhone]=useState(null)
  // const locations = useLocation();
  // const searchParams = new URLSearchParams(window.location.href);
  // console.log(locations.pathname);
  // console.log("_idddd", searchParams);
  // for face open
  const webcamRef = useRef(null);
  const [showWebcam, setShowWebcam] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [count, setCount] = useState(0);
  const [maxLeft, setMaxLeft] = useState(0);
  const [maxRight, setMaxRight] = useState(0);
  const [model, setModel] = useState(null);
  const [text, setText] = useState("modal loading...");
  const [Registration, setRegistration] = useState(false);
  const [formData, setFormData] = useState({
    image: null,
  });

  const [isError, setIsError] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    tf.setBackend("webgl");
    loadModel();
  }, []);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => {
        setText("detecting...");
        detectPoints();
      }, 2000);
    }
  }, [isOpen]);

  const loadModel = async () => {
    faceLandmarksDetection
      .load(faceLandmarksDetection.SupportedPackages.mediapipeFacemesh, {
        maxFaces: 1,
      })
      .then(model => {
        setModel(model);

        setText("ready for capture");
      })
      .catch(err => {
        console.log(err);
      });
  };
  const handleClick = () => {
    const newIsOpen = !isOpen;
    const newCount = isOpen ? count : 0;
    setIsOpen(newIsOpen);
    setCount(newCount);
  };
  const capture = () => {
    setShowWebcam(true);
    handleClick();
  };
  const handleChange = e => {
    const value = e.target.value;
    setCode(value);

  };
  const handleCode = () => {
    let payload = {
      referalCode: code
    };
    if (code?.length === 8) {
      setIsError(false);
      axiosConfig
        .post("/life-declaration/verify-referal", payload)
        .then(response => {
          if (response.status === 200) {
            localStorage.setItem("referUserId", response?.data?.life?.userId);
            navigate("/response");
          }
        })
        .catch(error => {
          swal("Something Went Wrong");
          console.log(error.message);
        });
    } else {
      setIsError(true);
    }
  };


  const handleCapture = () => {
    alert("Image captured");
    const imageSrc = webcamRef.current.getScreenshot();
    setFormData({
      ...formData,
      image: imageSrc,
    });
    setShowWebcam(false);
  };
  const detectPoints = async () => {
    if (isOpen == false) return;
    try {
      const video = await webcamRef.current.video;
      const predictions = await model.estimateFaces({
        input: video,
        returnTensors: false,
        flipHorizontal: true,
        predictIrises: true,
      });

      if (predictions?.length > 0) {
        // Somente 1 face
        const keypoints = predictions[0].scaledMesh;
        if (detectarBlink(keypoints)) {
          // TODO :: Found blink, do someting
          const countN = count + 1;
          setCount(countN);
          setIsOpen(false);
          handleCapture();
          handleClick();
          if (!isOpen) {
            // stop detection
            setText("");
            return null;
          }
        }
      } else {
        setMaxLeft(0);
        setMaxRight(0);
      }
    } catch (error) {
      // console.log(error);
    }
    if (!isOpen) {
      // stop detection
      setText("");
      return null;
    }
    setTimeout(async () => {
      await detectPoints();
    }, 100);
  };
  const calculateDistance = (x1, y1, x2, y2) => {
    return Math.sqrt(Math.pow(x1 - x2, 2) + Math.pow(y1 - y2, 2));
  };
  const detectarBlink = keypoints => {
    const leftEye_left = 263;
    const leftEye_right = 362;
    const leftEye_top = 386;
    const leftEye_buttom = 374;
    const rightEye_left = 133;
    const rightEye_right = 33;
    const rightEye_top = 159;
    const rightEye_buttom = 145;

    const leftVertical = calculateDistance(
      keypoints[leftEye_top][0],
      keypoints[leftEye_top][1],
      keypoints[leftEye_buttom][0],
      keypoints[leftEye_buttom][1]
    );
    const leftHorizontal = calculateDistance(
      keypoints[leftEye_left][0],
      keypoints[leftEye_left][1],
      keypoints[leftEye_right][0],
      keypoints[leftEye_right][1]
    );
    const eyeLeft = leftVertical / (2 * leftHorizontal);

    const rightVertical = calculateDistance(
      keypoints[rightEye_top][0],
      keypoints[rightEye_top][1],
      keypoints[rightEye_buttom][0],
      keypoints[rightEye_buttom][1]
    );
    const rightHorizontal = calculateDistance(
      keypoints[rightEye_left][0],
      keypoints[rightEye_left][1],
      keypoints[rightEye_right][0],
      keypoints[rightEye_right][1]
    );
    const eyeRight = rightVertical / (2 * rightHorizontal);

    const baseCloseEye = 0.1;
    const limitOpenEye = 0.14;
    if (maxLeft < eyeLeft) {
      setMaxLeft(eyeLeft);
    }
    if (maxRight < eyeRight) {
      setMaxRight(eyeRight);
    }
    let result = false;
    //    if ((maxLeft > limitOpenEye) && (maxRight > limitOpenEye)) {
    if (eyeLeft < baseCloseEye && eyeRight < baseCloseEye) {
      result = true;
      setIsOpen(false);
    }

    return result;
  };

 
 

 
  return (
    <>
      <div className="container-fluid " style={{ display: "inline-block" }}>
       

        <div className="row " style={{ paddingTop: "5rem" }}>
          <div className="col-md-4 col-sm-1 col-lg-4 col-xl-4">
            <div></div>
          </div>
          <div className="col-md-4 col-sm-10 col-lg-4 col-xl-4 ">
            <div
              className="gdfhagfjhagjhfgagfjhaf"
              style={{
                margin: "1rem",
                marginTop: "4rem",
                borderRadius: "20px",
                backgroundColor: "white",
                paddingBottom: "1rem",
              }}
            >
              <div
                style={{
                  backgroundColor: "rgb(194, 215, 233)",
                  width: "100%",
                  borderTopLeftRadius: "20px",
                  borderTopRightRadius: "20px",
                  paddingLeft: "2rem",
                }}
              >
                <div
                  className="cssforfontsizeinheading"
                  style={{ fontWeight: "600" }}
                >
             
                  <span className="cssforfontsizeinheading" style={{}}>
                    
                  </span>
                  Response Detail


                </div>
              </div>
             
              <div style={{ margin: "2rem" }}>
                <div className="mt-3">
                  <form>
                  <fieldset
                  style={{
                    color: "rgb(82, 114, 161)",
                    fontSize: "20px",
                    fontFamily: "Calibri",
                    border: "1px solid rgb(114, 158, 216)",
                    borderRadius: "10px",
                    height: "4rem",
                    width: "100%",
                  }}
                >
                  <legend
                    style={{
                      color: "rgb(82, 114, 161)",
                      marginBottom: "-5px",
                      fontSize: "16px",
                      paddingLeft: "5px",
                      fontFamily: "Calibri",
                      marginLeft: "15px",
                      width: "auto",
                    }}
                    htmlFor="referCodeInput"
                    className="form-label"
                  >
                    Refer Code{" "}
                    <span style={{ marginLeft: "2px", color: "red" }}>*</span>
                  </legend>
                  <input
                    type="text"
                    placeholder="********"
                    id="referCodeInput"
                    className="form-control"
                    style={{ marginLeft: "20px", width: "200px" ,outline:"none", backgroundColor: "white", border: "none"}}
                    onChange={handleChange} 
                    value={code}
                  />
                </fieldset>

                    <div className="mt-5 d-flex justify-content-center"> 
                    <Link onClick={handleCode} className="btn"
                      style={{
                        maxWidth: "300px", 
                        backgroundColor: "#4478c7",
                        color: "white",
                        height: "2.5rem",
                        width:"130px",
                      }}
                    >
                      Submit
                    </Link>
                  </div>
                  
                  </form>
                </div>
              </div>
            </div>
            <div></div>
          </div>
        </div>
      </div>
    
    </>
  );
};

export default Login;
