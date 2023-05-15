import { useState } from "react";
import { Link, useLoaderData } from "react-router-dom";

const Users = () => {
   const loadedUsers = useLoaderData();
   const [users, setUsers] = useState(loadedUsers);

   const handleDelete = (id) => {
      fetch(`http://localhost:5000/users/${id}`, {
         method: "DELETE",
      })
         .then((res) => res.json())
         .then((data) => {
            if (data.deletedCount > 0) {
               alert("deleted successfully");
               const remaining = users.filter((user) => user._id !== id);
               setUsers(remaining);
            }
         });
   };

   return (
      <div>
         <h3>Total user {users.length}</h3>
         <div>
            {users.map((user) => (
               <p key={user._id}>
                  {user.name}: {user.email}
                  <Link to={`/update/${user._id}`}>
                     <button>Update</button>
                  </Link>
                  <button
                     onClick={() => {
                        handleDelete(user._id);
                     }}>
                     X
                  </button>
               </p>
            ))}
         </div>
      </div>
   );
};

export default Users;
