// import {
//   AppBar,
//   Box,
//   Button,
//   IconButton,
//   Toolbar,
//   Typography,
// } from "@mui/material";
// import React from "react";
// import { Link } from "react-router-dom";

// const Navbar = () => {
//   return (
//     <div>
//       <Box sx={{ flexGrow: 1 }}>
//         <AppBar position="static">
//           <Toolbar style={{ backgroundColor: "black" }}>
//             <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
//               PRODUCT MANAGEMENT SYSTEM
//             </Typography>
//             <Link to={"/"}>
//               <Button style={{ color: "white" }}>Home</Button>
//             </Link>
//             <Link to={"/addProducts"}>
//               <Button style={{ color: "white" }}>Add products</Button>
//             </Link>
//           </Toolbar>
//         </AppBar>
//       </Box>
//     </div>
//   );
// };

// export default Navbar;


import { AppBar, Box, Button, Toolbar, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar sx={{ backgroundColor: "gray" }}>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, fontWeight: "bold" }}
          >
            PRODUCT
          </Typography>
          <Link to="/" style={{ textDecoration: "none" }}>
            <Button sx={{ color: "white" }}>Home</Button>
          </Link>
          <Link to="/addProducts" style={{ textDecoration: "none" }}>
            <Button sx={{ color: "white" }}>Add Products</Button>
          </Link>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Navbar;

