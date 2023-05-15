import { useLoaderData } from "react-router-dom";

const Update = () => {
   const user = useLoaderData();

   const handleUpdate = (event) => {
      event.preventDefault();
      const from = event.target;
      const name = from.name.value;
      const email = from.email.value;
      console.log(name, email);
      const updatedUser = { name, email };
      fetch(`http://localhost:5000/users/${user._id}`, {
         method: "PUT",
         headers: {
            "content-type": "application/json",
         },
         body: JSON.stringify(updatedUser),
      })
         .then((res) => res.json())
         .then((data) => {
            if (data.modifiedCount > 0) {
               alert("updated user successfully");
               from.reset();
            }
         });
   };

   return (
      <div>
         <h2>{user.name}</h2>
         <div>
            <form onSubmit={handleUpdate}>
               <input type="text" name="name" defaultValue={user?.name} id="" />
               <br />
               <input
                  type="email"
                  name="email"
                  id=""
                  defaultValue={user?.email}
               />
               <br />
               <input className="btn" type="submit" value="update" />
            </form>
         </div>
      </div>
   );
};

export default Update;
