import React, { Component } from 'react'
import { NavLink, Link } from 'react-router-dom'
import { withUser } from "../components/Auth/withUser";

 const Sidebar = (props) => {

  const { context } = props;
 
    return (
      <div className="sidebar">
        <div className="sidebar-wrapper">
          <div className="logo">
            <Link to='/' className="simple-text">
              Dashboard
            </Link>
          </div>
          <ul className="nav">
           
            <li className="nav-item">
              <NavLink className="nav-link" to='/profile'>
                {/* <i className="tim-icons icon-user-run" ></i> */}
                <p>User Profile</p>
              </NavLink>
            </li>

            {context.user.role === "student" && 
            <li className="nav-item">
              <Link className="nav-link" to='/class'>
                {/* <i className="nc-icon nc-circle-09"></i> */}
                <p>ClassRoom record</p>
              </Link>
            </li>
          }
          {context.user.role === "student" && 
            <li className="nav-item">
              <Link className="nav-link" to='/joinSession'>
                {/* <i className="tim-icons nc-circle-09"></i> */}
                <p>Join Session</p>
              </Link>
            </li>
          }


            {context.user.role === "teacher" && 
            <li className="nav-item">
              <Link className="nav-link" to='/createSession'>
                {/* <i className="tim-icons icon-simple-add"></i> */}
                <p>Create Session</p>
              </Link>
            </li>
            }

          </ul>
        </div>
      </div>
    )
  
}

export default withUser(Sidebar)