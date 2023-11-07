import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Routes/Provider/AuthProvider";
import Assignment from "./Assignment";


const MyAssignment = () => {

    const { user } = useContext(AuthContext);
    const { assignment, setAssignment } = useState([]);



    const url = `http://localhost:5000/creation?email=${user?.email}`;

    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => {setAssignment(data)})

    }, [])

    return (
        <div>
            <h1>assignment:{assignment.length}</h1>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>
                                <label>
                                    <input type="checkbox" className="checkbox" />
                                </label>
                            </th>
                            <th>Name</th>
                            <th>Job</th>
                            <th>Favorite Color</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                     {
                        assignment.map(assign=><Assignment 
                            key={assignment._id}
                            assign={assign}
                        ></Assignment>)
                     }
                        
                       
                     
                      
                    </tbody>
                   

                </table>
            </div>
        </div>
    );
};

export default MyAssignment;