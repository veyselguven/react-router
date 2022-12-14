import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

function Users() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios("https://jsonplaceholder.typicode.com/users").then((res) => {
      setUsers(res.data);
      setLoading(false);
    });
  }, []);
  // .finally(()=>setLoading(false)) // yukardaki set userin altinda cagirmazsak direk
  // hemen somra  yakaliyoruz

  return (
    <div>
      <h1> Users</h1>
      {loading && <div>Loading...</div>}

      <ul>
        {users.map((user) => (
          <li key={user.id}>
            <Link to={`user/${user.id}`}>{user.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Users;
