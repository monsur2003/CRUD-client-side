import "./app.css";
import { Link } from "react-router-dom";

const App = () => {
   const handleSubmit = (event) => {
      event.preventDefault();
      const form = event.target;
      const name = form.name.value;
      const email = form.email.value;
      const user = { name, email };
      fetch("http://localhost:5000/users", {
         method: "POST",
         headers: {
            "Content-Type": "application/json",
         },
         body: JSON.stringify(user),
      })
         .then((res) => res.json())
         .then((data) => {
            console.log(data);
         });
   };

   return (
      <div>
         <h2>Simple crud side</h2>
         <Link to="/user">Users</Link>
         <div>
            <form onSubmit={handleSubmit}>
               <input type="text" name="name" id="" />
               <br />
               <input type="email" name="email" id="" />
               <br />
               <input type="submit" value="Add user" />
            </form>
         </div>
      </div>
   );
};

export default App;
