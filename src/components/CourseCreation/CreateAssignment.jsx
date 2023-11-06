import { useLoaderData } from "react-router-dom";


const CreateAssignment = () => {

    const service = useLoaderData();
    const{courseName,_id} = service;

    return (
        <div>
            <h2>Assignment Booking:{courseName}</h2>
            
      
            <form >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="form-control">
          <label className="label">
            <span className="label-text">Course Name</span>
          </label>
          <input type="email" placeholder="Course Name" className="input input-bordered" required />
         </div>
         <div className="form-control">
          <label className="label">
            <span className="label-text">Date</span>
          </label>
          <input type="date" placeholder="date" className="input input-bordered" required />
         </div>
          <div className="form-control">
          <label className="label">
            <span className="label-text">Price</span>
          </label>
          <input type="password" placeholder="price" className="input input-bordered" required />
         </div>
            <div className="form-control">
          <label className="label">
            <span className="label-text">Details</span>
          </label>
          <input type="email" placeholder="Details" className="input input-bordered" required />
         </div>
         <div className="form-control">
          <label className="label">
            <span className="label-text">Photo URL</span>
          </label>
          <input type="text" name="photo" placeholder="Photo URL" className="input input-bordered" required />
         </div>
            <div className="form-control">
            <div>
            <div>
      
         </div>
            </div>
            <select className="select select-bordered join-item">
            {/* <option disabled selected>Filter</option> */}
         <option>HARD</option>
         <option>MEDIUM</option>
         <option>EASY</option>
         </select>
  
          </div>
         </div>
         </form>
            <div className="form-control mt-6">
          
          <input className="btn btn-primary  btn-block" type="submit" value="Assignment Submit"/>
         </div>
         
         </div>
  
    );
};

export default CreateAssignment;