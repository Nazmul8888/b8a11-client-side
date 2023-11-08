import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Routes/Provider/AuthProvider";
import Assignment from "./Assignment";


const MyAssignment = () => {

    const { user } = useContext(AuthContext);
    const [assignment, setAssignment]= useState([]);



    const url = `http://localhost:5000/creation?email=${user?.email}`;

    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => {setAssignment(data)});

    }, [url]);
    const handelDelate = id=>{
        const proceed = confirm('Are you want to delate ')
        if(proceed){
            fetch(`http://localhost:5000/creation/${id}`,{
                method:"DELETE"
            })
            .then(res=>res.json())
            .then(data=>{
                console.log(data)
                if(data.deleteCount > 0){
                    alert('deleted successfully');
                    const remaining = assignment.filter(assignment=>assignment._id !== id);
                    setAssignment(remaining);
                }
            })

        }
    }
    
    const handelAssignmentUpdate = id=>{
        fetch(`http://localhost:5000/creation/${id}`,{
            method: 'PATCH',
            headers:{
                'content-type': 'application/json'
            },
            body: JSON.stringify({status: 'confirm'})
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data);
            if(data.modifiedCount > 0){
                // update state
                const remaining = assignment.filter(assignment => assignment._id !== id);
                const update = assignment.find(assignment => assignment._id === id);
                update.status = 'confirm'
                const newAssignment = [update,...remaining];
                setAssignment(newAssignment);
            }
        })
    }
    
    


    return (
        <div>
            <div>
            <h1 className="font-semibold text-4xl text-red-400 text-center">Assignment Submitted </h1>
            </div>
            <div className="overflow-x-auto bg-red-500 text-white font-semibold py-10">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>
                                <label>
                                    <input type="checkbox" className="checkbox" />
                                </label>
                            </th>
                            <th>Image</th>
                            <th>Title</th>
                            <th>Description</th>
                            <th>Marks</th>
                            <th>Date</th>                          
                            <th>Status</th>                          
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                     {
                        assignment.map(assign=><Assignment 
                            key={assignment._id}
                            assign={assign}
                            handelDelate={handelDelate}
                            handelAssignmentUpdate={handelAssignmentUpdate}
                        ></Assignment>)
                     }
                        
                       
                     
                      
                    </tbody>
                   

                </table>
            </div>
        </div>
    );
};

export default MyAssignment;