import React from 'react'
import { Link } from "react-router-dom";
export default function Home() {
  return (
    <div>
        <Link to="/addUser">
            Add User
        </Link> <br />
        <Link to="/getUsers">
            Show All Users
        </Link> <br />
    </div>
  )
}
