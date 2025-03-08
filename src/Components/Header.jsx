import React from "react";
import { AppBar, Toolbar, Typography, Box } from "@mui/material";
import { Link } from "react-router-dom";


const Header = () => {
  return (
    <AppBar>
       <Toolbar>
        <img src="https://marketplace.canva.com/EAFYecj_1Sc/2/0/1600w/canva-cream-and-black-simple-elegant-catering-food-logo-ecSS48m_S3Q.jpg"  style={{ height: "50px", cursor: "pointer" }} ></img>
      

       </Toolbar>
    </AppBar>
  );
};

export default Header;

