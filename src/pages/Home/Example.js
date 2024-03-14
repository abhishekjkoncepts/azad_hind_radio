import React from "react";
// import aewatan from "../../assets/sounds/Ae_watan.mp3";

import AudioSpectrum from "react-audio-spectrum";

const Example = () => {
  return (
    <>
    <div style={{
        display:"flex",
        flexDirection:"column"
    }}>
      <AudioSpectrum
        id="audio-canvas"
        height={200}
        width={300}
        audioId={"audio-element"}
        capColor={"red"}
        capHeight={2}
        meterWidth={2}
        meterCount={512}
        meterColor={[
          { stop: 0, color: "#f00" },
          { stop: 0.5, color: "#0CD7FD" },
          { stop: 1, color: "red" },
        ]}
        gap={4}
      />
      <audio
        id="audio-element"
        src={require("../../assets/sounds/Ae_watan.mp3")}
        controls
        autoPlay
      ></audio>
      </div>
    
    </>
  );
};

export default Example;
