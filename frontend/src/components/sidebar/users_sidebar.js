// components/sidebar/users_sidebar.js
import React from "react";
import { Link } from "react-router-dom";

function Users(){

    return(
        <div className="sidebar">
            <ul>
                <li><Link to="/dashboard/members/admins">Admins</Link></li>
                <li><Link to="/dashboard/members/members">Members</Link></li>
            </ul>
            <button className="add-button">
                Add User
            </button>
        </div>
    );
}

export default Users;