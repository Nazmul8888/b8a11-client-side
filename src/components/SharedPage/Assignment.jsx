

const Assignment = ({ assign, handelDelate,handelAssignmentUpdate }) => {
    const { _id, title, description, marks, date, image, status} = assign;



    return (
        <tr>
            <th>
                <button onClick={() => handelDelate(_id)} className="btn btn-info btn-sm justify-end">Delate</button>
            </th>
            <td>

                <div className="avatar">
                    <div className="rounded w-24 h-24">
                        {image && <img src={image} alt="Avatar Tailwind CSS Component" />}
                    </div>
                </div>


            </td>
            <td>
                {title}
            </td>
            <td>{description}</td>
            <td>{marks}</td>
            <th>
                {date}

            </th>
            
            <th>
          {
            status ==='confirm'? <span className="font-bold text-primary">confirmed</span> :
            <button onClick={() =>handelAssignmentUpdate(_id)} className="btn btn-ghost btn-xs">Confirm</button>
          }
        </th>
        </tr>
    );
};

export default Assignment;