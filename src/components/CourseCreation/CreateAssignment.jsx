import { useContext, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../Routes/Provider/AuthProvider";


const CreateAssignment = () => {

  const service = useLoaderData();
  const { title, _id, image, } = service;
  const { user } = useContext(AuthContext)
  const [selectedValue, setSelectedValue] = useState('');

  const handelBooking = event => {
    event.preventDefault()
    const form = event.target;
    const email = user?.email
    const title = form.title.value;
    const date = form.date.value;
    const marks = form.marks.value;
    const description = form.description.value;
    const image = form.image.value;

    const submit = {
      title,
      image,
      email,
      date,
      marks,
      description,

    }

    console.log(submit);

    fetch('http://localhost:5000/creation', {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(submit)
    })
      .then(res => res.json())
      .then(data => {
        console.log(data);
        if(data.insertedId){
          alert('assignment is submitted')
        }
      })
  }

  const handleChange = (event) => {
    setSelectedValue(event.target.value);
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
          <div>
            <select value={selectedValue} onChange={handleChange}>
              <option value="option1">HARD</option>
              <option value="option2">MEDIUM</option>
              <option value="option3">EASY </option>
            </select>
            <p>Selected value: {selectedValue}</p>
          </div>
        </div>
        <div className="form-control mt-6">

          <input className="btn btn-primary  btn-block" type="submit" value="Submit" />
        </div>
      </form>


    </div>

  );
};

export default CreateAssignment;