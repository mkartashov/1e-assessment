
import React from "react";
import Header from "../components/header"
import Sidemenu from "../components/sidemenu"
import Footer from "../components/footer"
import {NavLink } from "react-router-dom"

class OverviewPage extends React.Component {



  render() {

    return (
    	<div>
    		<Header>Platform 9¾</Header>
    		<Sidemenu>
    			<NavLink to="/overview">Overview</NavLink>
    			<NavLink to="/users">Users</NavLink>
    			<NavLink to="/roles">Roles</NavLink>
    			<NavLink to="/consumers">Consumers</NavLink>
    		</Sidemenu>
    		<h1>1E assessment</h1>
    		
    	</div>
    )
  }
}

export default OverviewPage

