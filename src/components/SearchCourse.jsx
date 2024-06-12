import React, { useState } from 'react'
import NavBar from './NavBar'
import axios from 'axios'

const SearchCourse = () => {
    const [data,getData] = useState({
        "courseTitle":""
})
    const [result,getResult]=useState([])

    const inputHandler=(event)=>{
        getData({...data,[event.target.name]:event.target.value})
    }
    const readValue=()=>{
        console.log(data)
        axios.post("http://localhost:8086/search",data).then(
            (response)=>{
            getResult(response.data)
        }).catch((error)=>{
            console.log(error)
        })
    }

    // delete event handling
    const deleteCourse= (id)=>{
        let input= {"_id":id}
        axios.post("http://localhost:8086/delete",input).then(
            (response)=>{
                console.log(response.data)

                if (response.data.status==="success") {
                    alert("successfully deleted")
                    
                } else {
                    alert("error in deletion")
                    
                }
            }
        ).catch()
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
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <button onClick={readValue} className="btn btn-success" >Search</button>
                    </div>
                </div>
                <div className="row g-3">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <table className='table'>
                            <thead>
                                <tr>
                                   
                                    <th>courseTitle</th>
                                    <th>courseDescription</th>
                                    <th>courseDate</th>
                                    <th>courseDuration</th>
                                    <th>venue</th>
                                    <th>trainerName</th>
                                </tr>
                            </thead>
                            <tbody>
                                {result.map(
                                    (value,index)=>{
                                    return <tr>
                                    <td>{value.courseTitle}</td>
                                    <td>{value.courseDescription}</td>
                                    <td>{value.courseDate}</td>
                                    <td>{value.courseDuration}</td>
                                    <td>{value.venue}</td>
                                    <td>{value.trainerName}</td>
                                    <td><button onClick={()=>{deleteCourse(value._id)}} className="btn btn-danger" >Delete</button></td>
                                </tr>
                                })}
                              
                                
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    </div>

    </div>
  )
}

export default SearchCourse