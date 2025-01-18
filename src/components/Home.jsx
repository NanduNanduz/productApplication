// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import Grid2 from "@mui/material/Grid2";
// import { Card, CardContent, CardMedia, Typography } from "@mui/material";

// const Home = () => {
//   const [data, setData] = useState([]);

//   useEffect(() => {
//     axios
//       .get("https://fakestoreapi.com/products")
//       .then((res) => {
//         setData(res.data);
//       })
//       .catch((error) => {
//         console.error("Error fetching products:", error);
//       });
//   }, []);

//   return (
//     <div style={{ marginLeft: "8%", marginTop: "5%", marginBottom: "5%" }}>
//       <Grid2 container spacing={2}>
//         {data.map((item) => (
//           <Grid2 xs={12} sm={6} md={4} key={item.id}>
//             <Card
//               sx={{
//                 height: "400px",
//                 width: "400px",
//                 display: "flex",
//                 flexDirection: "column",
//               }}
//             >
//               <CardMedia
//                 sx={{ height: 140 }}
//                 image={item.image}
//                 title="Product image"
//               />
//               <CardContent sx={{ flexGrow: 1 }}>
//                 <Typography gutterBottom variant="h5" component="div">
//                   {item.title}
//                 </Typography>
//                 <Typography variant="body2" sx={{ color: "text.secondary" }}>
//                   ${item.price}
//                 </Typography>
//                 <Typography variant="body2" sx={{ color: "text.secondary" }}>
//                   Rating: {item.rating?.rate} ({item.rating?.count} reviews)
//                 </Typography>
//               </CardContent>
//             </Card>
//           </Grid2>
//         ))}
//       </Grid2>
//     </div>
//   );
// };

// export default Home;

import React, { useEffect, useState } from "react";
import axios from "axios";
import { Grid, Card, CardContent, CardMedia, Typography } from "@mui/material";

const Home = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((res) => {
        setData(res.data);
      })
      .catch((error) => {
        console.error("Error fetching products:", error);
      });
  }, []);

  return (
    <div style={{ margin: "5%" }}>
      <Grid container spacing={3} justifyContent="center" alignItems="stretch">
        {data.map((item) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={item.id}>
            <Card
              sx={{
                height: "100%",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)",
                backgroundColor: "#fff",
                borderRadius: "10px",
              }}
            >
              <CardMedia
                sx={{
                  height: 200,
                  width: "100%",
                  objectFit: "contain",
                  backgroundColor: "#f5f5f5",
                  padding: "10px",
                }}
                image={item.image}
                alt={item.title}
              />
              <CardContent>
                <Typography
                  gutterBottom
                  variant="h6"
                  component="div"
                  sx={{ fontWeight: "bold", color: "#333" }}
                >
                  {item.title.length > 20
                    ? `${item.title.substring(0, 20)}...`
                    : item.title}
                </Typography>
                <Typography
                  variant="body1"
                  sx={{ fontWeight: "bold", color: "#2E7D32" }}
                >
                  ${item.price}
                </Typography>
                <Typography
                  variant="body2"
                  sx={{ color: "text.secondary", marginTop: "5px" }}
                >
                  Rating: {item.rating?.rate} ⭐ ({item.rating?.count} reviews)
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default Home;

