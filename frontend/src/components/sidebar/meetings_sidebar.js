// components/sidebar/meetings_sidebar.js
import React from "react";
import { Link } from "react-router-dom";

function Meetings(){

    return(
        <div className="sidebar">
            <ul>
                <li><Link to="/dashboard/meetings/upcoming">Upcoming Meetings</Link></li>
                <li><Link to="/dashboard/meetings/past">Past Meetings</Link></li>
            </ul>
            <div className="add-button">
                <button className="add-button">
                    Add Meeting
                </button>
            </div>
        </div>
    );
}

export default Meetings;