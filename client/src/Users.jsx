import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Users() {
  const [users, setUsers] = useState([]);

  /*** DELETE THE USERS DATA ***/
  const HandleDelete = (id) => {
    axios
      .delete("http://localhost:3001/deleteUser/" + id)
      .then((response) => {
        console.log(response);
        window.location.reload(false);
      })
      .catch((error) => console.log(error));
  };

  /*** INIT TO GET THE USERS DATA ***/
  useEffect(() => {
    axios
      .get("http://localhost:3001")
      .then((response) => {
        setUsers(response.data);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <div className="d-flex vh-100 bg-dark justify-content-center align-items-center">
      <div className="bg-white rounded p-3">
        <table className="table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Aage</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => {
              return (
                <>
                  <tr>
                    <td>{user.name}</td>
                    <td>{user.email}</td>
                    <td>{user.age}</td>
                    <td>
                      <Link to={`/update/${user._id}`} className="btn btn-dark">
                        Update
                      </Link>
                      <Link
                        className="btn btn-danger"
                        onClick={() => HandleDelete(user._id)}
                      >
                        Delete
                      </Link>
                    </td>
                  </tr>
                </>
              );
            })}
          </tbody>
        </table>
        <div className="d-flex justify-content-end">
          <Link to="/create" className="btn btn-primary ">
            Add
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Users;
