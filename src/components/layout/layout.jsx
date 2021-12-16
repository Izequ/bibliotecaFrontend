import React from 'react';
import Footer from "./footer"
import Navbar from "../navbar/Navbar";

const Layout  = (props)=> {
    return (
        <React.Fragment>
          <Navbar />
           {props.children}
           <Footer></Footer>
        </React.Fragment>
    );
}

export default Layout;