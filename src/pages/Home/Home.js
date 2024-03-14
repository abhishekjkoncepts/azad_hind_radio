// import React, { useState, useRef } from "react";

// import "./Home.css";

// import { Box, Grid, Typography } from "@mui/material";

// // Audio
// import AeWatan from "../../assets/sounds/Ae_watan_ae_watan.mp3";
// import AudioPlayer from "react-h5-audio-player";
// import "react-h5-audio-player/lib/styles.css";

// import AzadHind from "../../assets/images/AzadHind.png";
// import radio from "../../assets/images/radio.png";
// import IndianFlag from "../../assets/images/india.png";
// import rightarrow from "../../assets/images/rightArrowIcon.png";
// import leftarrow from "../../assets/images/leftArrowIcon.png";

// import Marquee from "react-fast-marquee";

// const Home = () => {
//   return (
//     <Grid
//       container
//       sx={{
//         background: "linear-gradient(to top , #1f083a, #2e0b3c )", // Example gradient colors
//         width: "100%",
//         height: "100%", // Set the height as needed
//       }}
//     >
//       <Grid
//         item
//         xs={12}
//         sm={12}
//         md={12}
//         lg={12}
//         sx={{
//           display: "flex",
//           // justifyContent: "center",
//           alignItems: "center",
//           flexDirection: "column",
//         }}
//       >
//         {/* India Flag with text */}
//         <Box
//           sx={{
//             marginTop: "100px",
//             display: "flex",
//             flexDirection: "row",
//             justifyContent: "center",
//             alignItems: "center",
//           }}
//         >
//           <Box
//             component="img"
//             src={IndianFlag}
//             sx={{
//               height: "25px",
//               width: "26px",
//               marginRight: "5px",
//             }}
//           />
//           <Typography
//             sx={{
//               color: "#fff",
//               fontSize: {
//                 xs: "14px",
//                 sm: "14px",
//                 md: "20px",
//                 lg: "20px",
//               },
//               fontWeight: {
//                 xs: "500",
//                 sm: "500",
//                 md: "400",
//                 lg: "400",
//               },
//               fontFamily: "Poppins, sans-serif",
//               textAlign: "center",
//             }}
//           >
//             MP3 , Delhi
//           </Typography>
//         </Box>

//         {/* Azad hind image */}
//         <Box>
//           <Box
//             component="img"
//             src={AzadHind}
//             sx={{ height: "170px", width: "330px" }}
//           />
//         </Box>

//         {/* Radio image */}

//         <Box sx={{ marginTop: "40px" }}>
//           <Box
//             component="img"
//             src={radio}
//             sx={{ height: "130px", width: "140px" }}
//           />
//         </Box>

//         {/* Text with Arrows */}
//         <Box
//           sx={{
//             display: "flex",
//             flexDirection: "row",
//             alignItems: "center",
//             justifyContent: "center",
//             marginTop:"15px"
//           }}
//         >
//           <Box
//             component="img"
//             src={leftarrow}
//             sx={{
//               height: "30px",
//               width: "30px",
//             }}
//           />

//           <Typography
//             sx={{
//               color: "#fff",
//               fontSize: {
//                 xs: "14px",
//                 sm: "14px",
//                 md: "16px",
//                 lg: "16px",
//               },
//               fontWeight: {
//                 xs: "500",
//                 sm: "500",
//                 md: "300",
//                 lg: "300",
//               },
//               fontFamily: "Poppins, sans-serif",
//               textAlign: "center",
//               marginLeft: "20px",
//               marginRight: "20px",
//               // wordSpacing:"5px"
//             }}
//           >
//             AZAD HIND RADIO 90.0 FM
//           </Typography>

//           <Box
//             component="img"
//             src={rightarrow}
//             sx={{
//               height: "40px",
//               width: "40px",
//             }}
//           />
//         </Box>

//         {/* netaji text */}
//         <Box
//           sx={{
//             marginTop: "30px",
//           }}
//         >
//           <Marquee style={{width:"400px"}}>
//             <Typography
//               sx={{
//                 color: "#fff",
//                 fontSize: {
//                   xs: "14px",
//                   sm: "14px",
//                   md: "15px",
//                   lg: "15px",
//                 },
//                 fontWeight: {
//                   xs: "500",
//                   sm: "500",
//                   md: "200",
//                   lg: "200",
//                 },
//                 fontFamily: "Poppins, sans-serif",
//                 textAlign: "center",
//                 marginLeft: "20px",
//                 marginRight: "20px",
//                 // wordSpacing:"5px"
//               }}
//             >
//               LISTING NETAJI SUBHASH FREEDOM FIGHTER
//             </Typography>
//           </Marquee>
//         </Box>

//         <Box
//           sx={{
//             width: "800px",
//             marginTop:"30px",
//             marginBottom:"50px"
//           }}
//         >
//           <AudioPlayer src={AeWatan} width="800px"/>
//         </Box>
//       </Grid>
//     </Grid>
//   );
// };

// export default Home;

import React, { useState, useRef } from "react";

// import "./Home.css";
import "./Home2.css";

import AudioSpectrum from "react-audio-spectrum";

import { Box, Grid, Typography } from "@mui/material";

// bootstrap
import { Container, Row, Col } from "react-bootstrap";

// Audio
import AeWatan from "../../assets/sounds/Ae_watan.mp3";
import AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";

import AzadHind from "../../assets/images/AzadHind.png";
import radio from "../../assets/images/radio.png";
import IndianFlag from "../../assets/images/india.png";
import rightarrow from "../../assets/images/rightArrowIcon.png";
import leftarrow from "../../assets/images/leftArrowIcon.png";

import Marquee from "react-fast-marquee";

const Home = () => {
  return (
    <>
     {/* For Desktop */}
    <Grid
      container
      sx={{
        background: "linear-gradient(to top , #1f083a, #2e0b3c )", // Example gradient colors
        width: "100%",
        height: "100%", // Set the height as needed
      }}
    >
      <Grid
        item
        xs={12}
        sm={12}
        md={12}
        lg={12}
        sx={{
          display: "flex",
          // justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <Box display={{ xs: "none", lg: "block" }}>
          {/* India Flag with text */}
          <Box
            sx={{
              marginTop: "100px",
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Box
              component="img"
              src={IndianFlag}
              sx={{
                height: "25px",
                width: "26px",
                marginRight: "5px",
              }}
            />
            <Typography
              sx={{
                color: "#fff",
                fontSize: {
                  xs: "14px",
                  sm: "14px",
                  md: "20px",
                  lg: "20px",
                },
                fontWeight: {
                  xs: "500",
                  sm: "500",
                  md: "400",
                  lg: "400",
                },
                fontFamily: "Poppins, sans-serif",
                textAlign: "center",
              }}
            >
              MP3 , Delhi
            </Typography>
          </Box>

          {/* Azad hind image */}
          <Box>
            <Box
              component="img"
              src={AzadHind}
              sx={{ height: "170px", width: "330px" }}
            />
          </Box>

          {/* Radio image */}

          <Box sx={{ marginTop: "40px" }}>
            <Box
              component="img"
              src={radio}
              sx={{ height: "130px", width: "140px" }}
            />
          </Box>

          {/* Text with Arrows */}
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
              marginTop: "15px",
            }}
          >
            <Box
              component="img"
              src={leftarrow}
              sx={{
                height: "30px",
                width: "30px",
              }}
            />

            <Typography
              sx={{
                color: "#fff",
                fontSize: {
                  xs: "14px",
                  sm: "14px",
                  md: "16px",
                  lg: "16px",
                },
                fontWeight: {
                  xs: "500",
                  sm: "500",
                  md: "300",
                  lg: "300",
                },
                fontFamily: "Poppins, sans-serif",
                textAlign: "center",
                marginLeft: "20px",
                marginRight: "20px",
                // wordSpacing:"5px"
              }}
            >
              AZAD HIND RADIO 90.0 FM
            </Typography>

            <Box
              component="img"
              src={rightarrow}
              sx={{
                height: "40px",
                width: "40px",
              }}
            />
          </Box>

          <Box sx={{ marginTop: "20px" }}>
            <AudioSpectrum
              id="audio-canvas"
              height={15}
              width={400}
              audioId={"audio-element"}
              // capColor={"red"}
              capHeight={2}
              meterWidth={2}
              meterCount={512}
              meterColor={[
                { stop: 0, color: "#fff" },
                { stop: 0.5, color: "#0CD7FD" },
                { stop: 1, color: "#fff" },
              ]}
              gap={4}
              // height={10}
            />
          </Box>
          {/* netaji text */}
          <Box
            sx={{
              marginTop: "30px",
            }}
          >
            <Marquee style={{ width: "400px" }}>
              <Typography
                sx={{
                  color: "#fff",
                  fontSize: {
                    xs: "14px",
                    sm: "14px",
                    md: "15px",
                    lg: "15px",
                  },
                  fontWeight: {
                    xs: "500",
                    sm: "500",
                    md: "200",
                    lg: "200",
                  },
                  fontFamily: "Poppins, sans-serif",
                  textAlign: "center",
                  marginLeft: "20px",
                  marginRight: "20px",
                  // wordSpacing:"5px"
                }}
              >
                LISTING NETAJI SUBHASH FREEDOM FIGHTER
              </Typography>
            </Marquee>
          </Box>

          <Box sx={{ marginTop: "50px" }}>
            <audio
              id="audio-element"
              src={require("../../assets/sounds/Ae_watan.mp3")}
              controls
              // autoPlay
            ></audio>
          </Box>
        </Box>
      </Grid>
    </Grid>

     {/* For Mobile */}
    <Grid
    container
    sx={{
      background: "linear-gradient(to top , #1f083a, #2e0b3c )", // Example gradient colors
      width: "100%",
      height: "100%", // Set the height as needed
    }}
  >
    <Grid
      item
      xs={12}
      sm={12}
      md={12}
      lg={12}
      sx={{
        display: "flex",
        // justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <Box display={{lg: "none" }}>
        {/* India Flag with text */}
        <Box
          sx={{
            marginTop: "50px",
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Box
            component="img"
            src={IndianFlag}
            sx={{
              height: "25px",
              width: "26px",
              marginRight: "10px",
            }}
          />
          <Typography
            sx={{
              color: "#fff",
              fontSize: {
                xs: "20px",
                sm: "20px",
                md: "20px",
                lg: "20px",
              },
              fontWeight: {
                xs: "300",
                sm: "300",
                md: "400",
                lg: "400",
              },
              fontFamily: "Poppins, sans-serif",
              textAlign: "center",
            }}
          >
            Delhi
          </Typography>
        </Box>

        {/* Azad hind image */}
        <Box sx={{display:"flex", justifyContent:"center" , alignItems:"center", marginTop:"20px"}}>
          <Box
            component="img"
            src={AzadHind}
            sx={{ height: "150px", width: "290px" }}
          />
        </Box>

        {/* Radio image */}

        <Box sx={{ marginTop: "25px" ,display:"flex", justifyContent:"center" , alignItems:"center"}}>
          <Box
            component="img"
            src={radio}
            sx={{ height: "110px", width: "105px" }}
          />
        </Box>

        {/* Text with Arrows */}
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
            marginTop: "25px",
          }}
        >
          <Box
            component="img"
            src={leftarrow}
            sx={{
              height: "40px",
              width: "40px",
            }}
          />

          <Typography
            sx={{
              color: "#fff",
              fontSize: {
                xs: "20px",
                sm: "20px",
                md: "16px",
                lg: "16px",
              },
              fontWeight: {
                xs: "300",
                sm: "300",
                md: "300",
                lg: "300",
              },
              fontFamily: "Poppins, sans-serif",
              textAlign: "center",
              marginLeft: "20px",
              marginRight: "20px",
              // wordSpacing:"5px"
            }}
          >
            AZAD HIND RADIO
          </Typography>

          <Box
            component="img"
            src={rightarrow}
            sx={{
              height: "45px",
              width: "45px",
            }}
          />
        </Box>

        <Box sx={{ marginTop: "20px" , display:"flex", justifyContent:"center" , alignItems:"center", }}>
          <AudioSpectrum
            id="audio-canvas"
            height={15}
            width={400}
            audioId={"audio-element"}
            // capColor={"red"}
            capHeight={2}
            meterWidth={2}
            meterCount={512}
            meterColor={[
              { stop: 0, color: "#fff" },
              { stop: 0.5, color: "#0CD7FD" },
              { stop: 1, color: "#fff" },
            ]}
            gap={4}
            // height={10}
          />
        </Box>
        {/* netaji text */}
        <Box
          sx={{
            marginTop: "30px",
          }}
        >
          <Marquee style={{ width: "400px" }}>
            <Typography
              sx={{
                color: "#fff",
                fontSize: {
                  xs: "14px",
                  sm: "14px",
                  md: "15px",
                  lg: "15px",
                },
                fontWeight: {
                  xs: "500",
                  sm: "500",
                  md: "200",
                  lg: "200",
                },
                fontFamily: "Poppins, sans-serif",
                textAlign: "center",
                marginLeft: "20px",
                marginRight: "20px",
                // wordSpacing:"5px"
              }}
            >
              LISTING NETAJI SUBHASH FREEDOM FIGHTER
            </Typography>
          </Marquee>
        </Box>

        <Box sx={{ marginTop: "50px", display:"flex", justifyContent:"center" , alignItems:"center", }}>
          <audio
            id="audio-element"
            src={require("../../assets/sounds/Ae_watan.mp3")}
            controls
            // autoPlay
          ></audio>
        </Box>
      </Box>
    </Grid>
  </Grid>
  </>
  );
};

export default Home;
