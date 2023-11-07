import { useContext } from "react";
import {  useLoaderData } from "react-router-dom";
import { AuthContext } from "../../Routes/Provider/AuthProvider";


const CreateAssignment = () => {

    const service = useLoaderData();
    const{title,_id, image,} = service;
    const {user}= useContext(AuthContext)

    const handelBooking = event=>{
      event.preventDefault()
      const form = event.target;
      const email = user?.email
      const title = form.title.value;
      const date = form.date.value;
      const marks = form.marks.value;
      const description = form.description.value;
      const image = form.image.value;
      const difficult = form.difficult.value;
      const submit = {
        title,
        image,
        email,
        date,
        marks,
        description,
        difficult

      }

      console.log(submit);
      
      fetch('http://localhost:5000/creation',{
        method: 'POST',
        headers:{
          'content-type':'application/json'
        },
        body:JSON.stringify(submit)
      })
      .then(res=> res.json())
      .then(data=>{
        console.log(data);
      })
    }

    return (
        <div>
            <h2>Assignment Booking:{title}</h2>
            
      
            <form onSubmit={handelBooking} >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="form-control">
          <label className="label">
            <span className="label-text">email</span>
          </label>
          <input type="email" name="email" defaultValue={user?.email} placeholder="Title" className="input input-bordered" required />
         </div>
            <div className="form-control">
          <label className="label">
            <span className="label-text">Title</span>
          </label>
          <input type="title" name="title" placeholder="Title" className="input input-bordered" required />
         </div>
         <div className="form-control">
          <label className="label">
            <span className="label-text">Date</span>
          </label>
          <input type="date" name="date" placeholder="Date" className="input input-bordered" required />
         </div>
          <div className="form-control">
          <label className="label">
            <span className="label-text">Marks</span>
          </label>
          <input type="marks" name="marks" placeholder="Marks" className="input input-bordered" required />
         </div>
            <div className="form-control">
          <label className="label">
            <span className="label-text">Description</span>
          </label>
          <input type="description" name="description" placeholder="Description" className="input input-bordered" required />
         </div>
         <div className="form-control">
          <label className="label">
            <span className="label-text">photo URL</span>
          </label>
          <input type="text" name="image" placeholder="photo URL" className="input input-bordered" required />
         </div>
          <div className="form-control">
          <label className="label">
            <span className="label-text">Difficulty Level</span>
          </label>
            <select className="select select-bordered join-item">
            <input type="difficult" name="difficult" placeholder="difficult" className="input input-bordered" required />
         <option>HARD</option>
         <option>MEDIUM</option>
         <option>EASY</option>
         </select>
  
          </div>
         </div>
         </form>
            <div className="form-control mt-6">
          
          <input className="btn btn-primary  btn-block" type="submit" value="Submit"/>
         </div>
         
         </div>
  
    );
};

export default CreateAssignment;