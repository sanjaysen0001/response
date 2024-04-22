import React, { useState } from 'react'
import { LinkContainer } from 'react-router-bootstrap'
import { Link } from 'react-router-dom'
import Mynavbar from './Mynavbar'
import EmailModal from "./nominee/EmailModal";
import PhoneOtp from "./nominee/phoneOtp";
const Confidentialnote = () => {
  let allError = {};
  const [modalShowe, setModalShowe] = useState(false);
  const [modalShow, setModalShow] = useState(false);
  const [shareError, setShareError] = useState("");
  const [modalShowmail,setModalShowmail]=useState(false);
  const handlePhoneModal = () => {
    setModalShow(true);
  };
  const handleEmailModal=()=>{
   setModalShowmail(true);
  };
  return (
    <>
    <Mynavbar/>
    {modalShow ? (
      <div className="myModal1">
        <PhoneOtp setModalShow={setModalShow} />
      </div>
    ) : null}
    {modalShowmail ? (
      <div className="myModal1">
        <EmailModal setModalShowmail={setModalShowmail} />
      </div>
    ) : null}

    <div >
    <p  style={{fontSize:'22px',color:'rgb(43, 77, 129)' ,fontWeight:'400', backgroundImage: "linear-gradient(to right, rgb(194, 215, 233) , rgb(229, 234, 238))"}}>
    <span className='ml-3'>My Account </span>
    <span>
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-arrow-right" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"/>
 </svg>
    </span>
    <span> Confidential Note</span>
    </p>
    </div>
    <div className='container-fluid' style={{paddingBottom:'2rem'}}>
 
    
    <div style={{ overflowX: 'auto' }}>
    <div className='container-fluid'>
 <div className='row' >
 <div className='col-md-3 col-sm-6 col-lg-3 col-xl-3'>
 <div >
 <div className='mt-4'>
 <div className='mb-3'>
 <form action="#" method="post">
   <fieldset  style={{color:'rgb(82, 114, 161)', fontSize:'20px',fontFamily:'Calibri', border: "1px solid rgb(114, 158, 216)",borderRadius:'10px'}}>
   <legend style={{color:'rgb(82, 114, 161)', fontSize:'20px',fontFamily:'Calibri',marginLeft:'15px',width:'auto',paddingRight:'5px'}} for="exampleInputPassword1" class="form-label">Nominee Name  <span style={{color:'red'}}>*</span>
   
   </legend>
       <input type="text" placeholder='XXXXXXXXXXXX' style={{width:'100%',border:'none',paddingLeft:'15px',paddingBottom:'10px',marginBottom:'5px'}} id="dob" name="dob"/>
   </fieldset>
   
   
   
</form>
 </div> 
   </div>
 </div>
 </div>
 <div className='col-md-3 col-sm-6 col-lg-3 col-xl-3'>
 <div >
 <div className='mt-4'>
 <div className='mb-3'>
 <form action="#" method="post">
   <fieldset  style={{color:'rgb(82, 114, 161)', fontSize:'20px',fontFamily:'Calibri', border: "1px solid rgb(114, 158, 216)",borderRadius:'10px',height:'5.3rem'}}>
   <legend style={{color:'rgb(82, 114, 161)', fontSize:'20px',fontFamily:'Calibri',marginLeft:'15px',width:'auto',paddingRight:'5px'}} for="exampleInputPassword1" class="form-label">Relation with Nominee   <span style={{color:'red'}}>*</span>
   
   </legend>
   <select class="form-select" aria-label="Default select example" style={{outline:'none',width:'100%',float:'right',border:'none',paddingLeft:'15px',paddingBottom:'10px',marginBottom:'5px'}}>
  <option selected style={{float:'left',border:'none'}}></option>
  <option value="1">Father</option>
  <option value="2">Wife</option>
  <option value="3">Son</option>
</select>
     
   </fieldset>
   
   
   
</form>
 </div> 
   </div>
 </div>
 </div>
 {/* 
 <div className='col-md-4 col-sm-4 col-lg-4 col-xl-4'>
 <div >
 <div className='mt-4'>
 <div className='mb-3'>
 <form action="#" method="post">
   <fieldset  style={{color:'rgb(82, 114, 161)', fontSize:'20px',fontFamily:'Calibri', border: "1px solid rgb(114, 158, 216)",borderRadius:'10px'}}>
   <legend style={{color:'rgb(82, 114, 161)', fontSize:'20px',fontFamily:'Calibri',marginLeft:'15px',width:'13rem'}} for="exampleInputPassword1" class="form-label">Percentage of Share   <span style={{color:'red'}}>*</span>
   
   </legend>
       <input type="text" placeholder='XXXXXXXXXXXX' style={{width:'100%',border:'none',paddingLeft:'15px',paddingBottom:'10px',marginBottom:'5px'}} id="dob" name="dob"/>
   </fieldset>
   
   
   
</form>
 </div> 
   </div>
 </div>
 </div>
 */}

 <div className='col-md-3 col-sm-6 col-lg-3 col-xl-3'>
 <div >
 <div className='mt-4'>
 <div className='mb-3'>
 <form action="#" method="post">
   <fieldset  style={{color:'rgb(82, 114, 161)', fontSize:'20px',fontFamily:'Calibri', border: "1px solid rgb(114, 158, 216)",borderRadius:'10px',height:'5.3rem'}}>
   <legend style={{color:'rgb(82, 114, 161)', fontSize:'20px',fontFamily:'Calibri',marginLeft:'15px',width:'auto',paddingRight:'5px'}} for="exampleInputPassword1" class="form-label">Nominee Phone Number <span style={{color:'red'}}>*</span>
   
   </legend>
   <div className='row'>
   <div className='col-md-3 col-sm-3 col-lg-3 col-xl-3 col-3'>
   <span>
      <button   style={{outline:'none',marginLeft:'2px',width:'115%',border:'1px solid rgb(114, 158, 216)',textAlign:'center',height:'3rem',marginTop:'-10px',borderRadius:'10px',fontSize:'18px'}}>
      
      +91
      
    </button>
      </span>
   </div>
   <div className='col-md-6 col-sm-6 col-lg-6 col-xl-6 col-6'>
   <input type="tel" placeholder='965XX50XX0' style={{width:'90%',outline:'none',border:'none',paddingLeft:'15px',paddingBottom:'10px',marginBottom:'5px'}} id="dob" name="dob"/>
   
   </div>
   <div className='col-md-3 col-sm-3 col-lg-3 col-xl-3 col-3'  style={{marginLeft:'-10px'}}>
   <span >
   <a
                                      
                                      onClick={handlePhoneModal}
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
   
   
   
</form>
 </div> 
   </div>
 </div>
 </div>
 <div className='col-md-3 col-sm-6 col-lg-3 col-xl-3' >
 <div >
 <div className='mt-4'>
 <div className='mb-3'>
 <form action="#" method="post">
   <fieldset  style={{color:'rgb(82, 114, 161)', fontSize:'20px',fontFamily:'Calibri', border: "1px solid rgb(114, 158, 216)",borderRadius:'10px',height:'5.3rem'}}>
   <legend style={{color:'rgb(82, 114, 161)', fontSize:'20px',fontFamily:'Calibri',marginLeft:'15px',width:'auto',paddingRight:'5px'}} for="exampleInputPassword1" class="form-label">Nominee Email ID

   
   </legend>
   <div className='row'>
   
   <div className='col-md-9 col-sm-9 col-lg-9 col-xl-9 col-9'>
   <input type="email" placeholder='kauxxxxxxxxxxxnghxxx@gmail.com' style={{width:'90%',outline:'none',border:'none',paddingLeft:'15px',paddingBottom:'10px',marginBottom:'5px'}} id="dob" name="dob"/>
   
   </div>
   <div className='col-md-3 col-sm-3 col-lg-3 col-xl-3 col-3'  style={{marginLeft:'-10px'}}>
   <span >

  <a
                                    onClick={handleEmailModal}
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
   </div>
      
       </fieldset>
   
   
   
</form>
 </div> 
   </div>
 </div>
 </div>


 </div>
 
 </div>
</div>


    </div>
    <div className='container-fluid cssfordesktopviewconfidentialnote'  style={{}} >


<span style={{float:'left'}}>
<Link to={'/confidentialnoteeditor'} style={{textDecoration:'none'}}>
<p style={{color:'rgb(82, 114, 161)', fontSize:'20px', fontWeight:'500'}}>
<span>
<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-arrow-left" viewBox="0 0 16 16">
<path fill-rule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8"/>
</svg>
</span>
<span className='ml-3'>
BACK
</span>
</p>
</Link>
</span>
<span style={{float:'right', marginBottom:'20px'}}>
<Link to={'/confidentialnote'}>
<span className='btn icon-container'>
<svg xmlns="http://www.w3.org/2000/svg" color='rgb(43, 77, 129)' width="50" height="50" fill="currentColor" class="bi bi-file-earmark-text hoverable-image" viewBox="0 0 16 16">
  <path d="M5.5 7a.5.5 0 0 0 0 1h5a.5.5 0 0 0 0-1zM5 9.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5m0 2a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1h-2a.5.5 0 0 1-.5-.5"/>
  <path d="M9.5 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V4.5zm0 1v2A1.5 1.5 0 0 0 11 4.5h2V14a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1z"/>
</svg>
<span className="icon-name" style={{marginLeft:'1.8%',marginTop:'3px'}}>Save</span>
</span>
      </Link>
</span>




</div>
    </>
  )
}

export default Confidentialnote