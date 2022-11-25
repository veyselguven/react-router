import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
// Her iki sekildede yapilir
function User(props) {
  const [user, setUser] = useState({});
  const [loading, setLoading] = useState(true);
  const { id } = useParams();
  // console.log(props);
  // console.log(paramps);

  useEffect(() => {
    axios(`https://jsonplaceholder.typicode.com/users/${id}`).then((res) => {
      setUser(res.data);
      setLoading(false);
    });
  }, [id]);
  console.log("user=>", user);
  return (
    <div>
      Users Detail
      {loading && <div>Loading...</div>}
      <h1>id si {id} olan User in detailleri</h1>
      <ul>
        {user.name}
        <li>{user.phone}</li>
      </ul>
      <Link to={`${parseInt(id) + 1}`}>
        <button>Next User's id {`${parseInt(id) + 1}`}</button>
      </Link>
    </div>
  );

  // return <div>Users Detail {props.match.params.id}</div>;
}

export default User;
