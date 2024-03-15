import React, { useState, useRef } from "react";

// material-ui
import { Box, Grid, Typography } from "@mui/material";

// CSS
import "./Radiopage.css";

// Audio-Spectrum
import AudioSpectrum from "react-audio-spectrum";

// React-awesome-reveal
import { Fade, Flip, Roll, Zoom, Rotate, Bounce } from "react-awesome-reveal";

// Audio
import AeWatan from "../../assets/sounds/Ae_watan.mp3";

// Images
import AzadHind from "../../assets/images/AzadHind.png";
import radio from "../../assets/images/radio.png";
import IndianFlag from "../../assets/images/india.png";
import rightarrow from "../../assets/images/rightArrowIcon.png";
import leftarrow from "../../assets/images/leftArrowIcon.png";
import forward from "../../assets/images/forwardArrow.png";
import backward from "../../assets/images/backwardArrow.png";
import play from "../../assets/images/play.png";
import pause from "../../assets/images/pause.png";

// Marquee
import Marquee from "react-fast-marquee";

const Radiopage = () => {
  const [ToggleButton, setToggleButton] = useState(true);

  const song = new Audio(AeWatan);

  return (
    <>
      <Box
        sx={{
          width: "100%",
          //   height: "100vh",
          background: "linear-gradient(to top , #1f083a, #2e0b3c )",
        }}
      >
        <Grid container>
          <Grid
            item
            xs={12}
            sm={12}
            md={12}
            lg={12}
            // sx={{
            //   display: "flex",
            //   justifyContent: "center",
            //   alignItem: "center",
            // }}
          >
            <Box
              sx={{
                marginTop: {
                  xs: "20px",
                  sm: "20px",
                  md: "50px",
                  lg: "50px",
                },
                marginBottom: {
                  xs: "0px",
                  sm: "0px",
                  md: "50px",
                  lg: "50px",
                },
                height: "100vh",
              }}
            >
              {/* India Flag with text */}
              <Box
                sx={{
                  marginTop: {
                    xs: "50px",
                    sm: "50px",
                    md: "70px",
                    lg: "70px",
                  },
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Fade direction="left">
                  <Box
                    component="img"
                    src={IndianFlag}
                    sx={{
                      height: "25px",
                      width: "26px",
                      marginRight: "10px",
                    }}
                  />
                </Fade>

                <Fade direction="right">
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
                        xs: "500",
                        sm: "500",
                        md: "400",
                        lg: "400",
                      },
                      fontFamily: "Poppins, sans-serif",
                      textAlign: "center",
                    }}
                  >
                    Delhi
                  </Typography>
                </Fade>
              </Box>

              {/* Azad hind image */}

              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Zoom>
                  <Box
                    component="img"
                    src={AzadHind}
                    sx={{
                      height: {
                        xs: "150px",
                        sm: "150px",
                        md: "170px",
                        lg: "170px",
                      },
                      width: {
                        xs: "290px",
                        sm: "290px",
                        md: "330px",
                        lg: "330px",
                      },
                    }}
                  />
                </Zoom>
              </Box>

              {/* Radio image */}
              <Box
                sx={{
                  marginTop: "25px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Zoom>
                  <Box
                    component="img"
                    src={radio}
                    sx={{ height: "110px", width: "105px" }}
                  />
                </Zoom>
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
                <Fade direction="left">
                  <Box
                    component="img"
                    src={leftarrow}
                    sx={{
                      height: "40px",
                      width: "40px",
                    }}
                  />
                </Fade>

                <Fade direction="up">
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
                        md: "300",
                        lg: "300",
                      },
                      fontFamily: "Poppins, sans-serif",
                      textAlign: "center",
                      marginLeft: {
                        xs: "20px",
                        sm: "20px",
                        md: "40px",
                        lg: "40px",
                      },
                      marginRight: {
                        xs: "20px",
                        sm: "20px",
                        md: "40px",
                        lg: "40px",
                      },
                    }}
                  >
                    AZAD HIND RADIO
                  </Typography>
                </Fade>

                <Fade direction="right">
                  <Box
                    component="img"
                    src={rightarrow}
                    sx={{
                      height: "45px",
                      width: "45px",
                    }}
                  />
                </Fade>
              </Box>

              {/* Audio Spectrum - DeskTop*/}
              <Box>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    marginTop: {
                      xs: "15px",
                      sm: "15px",
                      md: "10px",
                      lg: "10px",
                    },
                  }}
                >
                  <Fade direction="down">
                    <AudioSpectrum
                      id="audio-canvas"
                      height={13}
                      width={300}
                      audioEle={song}
                      capColor={"#fff"}
                      capHeight={2}
                      meterWidth={1}
                      meterCount={512}
                      meterColor={[
                        { stop: 0, color: "#fff" },
                        { stop: 0.5, color: "#0CD7FD" },
                        { stop: 1, color: "#fff" },
                      ]}
                      gap={2}
                      // height={10}
                    />
                  </Fade>
                </Box>
              </Box>

              {/* MArquee for desktop */}
              <Box display={{ xs: "none", lg: "block" }}>
                <Box
                  sx={{
                    marginTop: "30px",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    //   border: "2px solid red",
                  }}
                >
                  <Bounce>
                    <Marquee
                      style={{
                        width: "340px",
                        color: "#fff",
                        fontFamily: "Poppins, sans-serif",
                        fontWeight: "300",
                      }}
                      speed={25}
                    >
                      YOU'RE LISTENING NETAJI SUBHAS CHANDRA BOSE SPEAKING FROM
                      GERMANY IN THE FILM 'AYE WATAN MERE WATAN'&nbsp;
                      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    </Marquee>
                  </Bounce>
                </Box>
              </Box>

              {/* MArquee for desktop */}
              <Bounce>
                <Box display={{ xs: "", lg: "none" }}>
                  <Box
                    sx={{
                      marginTop: "30px",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      //   border: "2px solid red",
                    }}
                  >
                    <Marquee
                      style={{
                        width: "80%",
                        color: "#fff",
                        fontFamily: "Poppins, sans-serif",
                        fontWeight: "300",
                      }}
                      speed={30}
                    >
                      YOU'RE LISTENING NETAJI SUBHAS CHANDRA BOSE SPEAKING FROM
                      GERMANY IN THE FILM 'AYE WATAN MERE WATAN'&nbsp;
                      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    </Marquee>
                  </Box>
                </Box>
              </Bounce>

              {/* Button */}
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  marginTop: {
                    xs: "80px",
                    sm: "80px",
                    md: "60px",
                    lg: "60px",
                  },
                  marginBottom: {
                    xs: "0px",
                    sm: "0px",
                    md: "0px",
                    lg: "0px",
                  },
                }}
              >
                <Fade direction="up">
                  {/* <audio
                    id="audio-element"
                    src={require("../../assets/sounds/Ae_watan.mp3")}
                    controls
                    autoPlay={true}
                  /> */}
                  <audio id="audio-element">
                    <source src={song} type="audio/mpeg" />
                  </audio>
                  {ToggleButton ? (
                    <Box
                      component="img"
                      src={play}
                      sx={{
                        height: "50px",
                        width: "50px",
                      }}
                      onClick={() => {
                        song.play();
                        setToggleButton(false);
                      }}
                    />
                  ) : (
                    <Box
                      component="img"
                      src={pause}
                      sx={{
                        height: "50px",
                        width: "50px",
                      }}
                      onClick={() => {
                        console.log("Pause", song.paused);
                        song.pause();
                        setToggleButton(true);
                      }}
                    />
                  )}
                </Fade>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default Radiopage;
