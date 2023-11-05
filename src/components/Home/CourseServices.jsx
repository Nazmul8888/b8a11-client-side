import { Link } from "react-router-dom";


const CourseServices = ({course}) => {
    const {_id,image,courseName,Details,price}= course;
    return (
        <div>
     <div className="card w-96 bg-base-100 shadow-xl">
  <figure className="px-10 pt-10">
    <img src={image} alt="Shoes" className="rounded-xl" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title">{courseName}!</h2>
    <p>{Details}</p>
    <p>Price-$ {price}</p>
    <div className="card-actions">
      <Link to={`/createAssignment/${_id}`}>
      <button className="btn btn-primary">Buy Now</button>
      </Link>
    </div>
  </div>
</div> 
        </div>
    );
};

export default CourseServices;