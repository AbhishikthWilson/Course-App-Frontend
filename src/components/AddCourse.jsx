import React, { useState } from 'react'
import NavBar from './NavBar'
import axios from 'axios'

const AddCourse = () => {
    const [data,getData]= useState({
        "courseTitle":"",
        "courseDescription":"",
        "courseDate":"",
        "courseDuration":"",
        "venue":"",
        "trainerName":""
    })
    const inputHandler =(event)=>{
        getData({...data,[event.target.name]:event.target.value})
    }
    const readValue =()=>{
        console.log(data)
        axios.post("http://localhost:8080/add",data).then((response)=>{
            if (response.data.status==="success") {
                alert("added successfully")
                
            } else {
                alert("failed")
            }
    }).catch()
}
  return (
    <div>
<NavBar/>
<div className="container">
        <div className="row">
            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
            <div className="row g-3">
                <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                    <label htmlFor="" className="form-label">Course Title</label>
                    <input type="text" className="form-control" name='courseTitle' value={data.courseTitle} onChange={inputHandler}/>
                </div>
                <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                    <label htmlFor="" className="form-label">Course description</label>
                    <input type="text" className="form-control" name='courseDescription' value={data.courseDescription} onChange={inputHandler}/>
                </div>
                <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                    <label htmlFor="" className="form-label">Course Date</label>
                    <input type="date" name="courseDate" id="" className="form-control" value={data.courseDate} onChange={inputHandler}/>
                </div>
                <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                    <label htmlFor="" className="form-label">Course Duration</label>
                    <input type="text" className="form-control" name='courseDuration' value={data.courseDuration} onChange={inputHandler}/>
                </div>
                <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                    <label htmlFor="" className="form-label">Venue</label>
                    <input type="text" className="form-control" name='venue' value={data.venue} onChange={inputHandler}/>
                </div>
                <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                    <label htmlFor="" className="form-label">Trainer Name</label>
                    <input type="text" className="form-control" name='trainerName' value={data.trainerName} onChange={inputHandler}/>
                </div>
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <button onClick={readValue} className="btn btn-success">Submit</button>
                </div>
            </div>

            </div>
        </div>
    </div>

    </div>
  )
}

export default AddCourse