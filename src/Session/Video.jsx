import { useState, useContext, useEffect } from "react";
import {ClientContext} from '../Context/Contexts'
import GalleryView from "../Components/Video/GalleryView";
import RibbonView from "../Components/Video/RibbonView";
import { Button, Flex, Tabs } from "antd";
// import CameraSettings from "../Components/Video/VideoSettings.jsx";
// import AudioSettings from "../Components/Audio/AudioSettings.jsx";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWindowMaximize, faGrip } from "@fortawesome/free-solid-svg-icons";

// clean up styles

const Video = ({ leave }) => {
  const [activeKey, setActiveKey] = useState("ribbon");
  const [client, ZoomVideo] = useContext(ClientContext);

  useEffect(() => {
      client.init('US-EN','CDN').then(() => {
      console.log('session created');
    }).catch((err) => {
       console.log(err)
    })
    return () => {
      ZoomVideo.destroyClient()
    }
  }, [])

  const onChange = (key) => {
    setActiveKey(key);
  };



  return (
    <Flex
      gap="small"
      style={{
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        width: "100vw",
        background: "#d9edff",
      }}
      vertical
    >
      <Flex
        style={{
          flex: 1,
          width: "100%",
        }}
        vertical
      >
        <Tabs
          centered
          size="small"
          height="15px"
          onChange={onChange}
          activeKey={activeKey}
          type="card"
          items={[
            {
              label: (
                <span>
                  <FontAwesomeIcon icon={faWindowMaximize} />
                </span>
              ),
              children: <RibbonView />,
              key: "ribbon",
            },
            {
              label: (
                <span>
                  <FontAwesomeIcon icon={faGrip} />
                </span>
              ),
              children: <GalleryView />,
              key: "gallery",
            },
          ]}
        />
      </Flex>

      <Flex
        style={{
          height: "75px",
          width: "100%",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Button onClick={leave}>Leave</Button>
      </Flex>
    </Flex>
  );
};

// bottom buttons - how do these get managed
// this container will manage the two rendered participant views, etc.
// hopefully the context will maintain these items properly?

export default Video;
