import { useState } from "react";
import GalleryView from "../Components/Video/GalleryView";
import RibbonView from "../Components/Video/RibbonView";
import { AppstoreFilled, UserOutlined } from "@ant-design/icons";
import { Button, Flex, Tabs } from "antd";
import VideoSettings from "../Components/Video/VideoSettings.jsx";
import AudioSettings from "../Components/Audio/AudioSettings.jsx";

// clean up styles

const Video = ({ leave }) => {
  const [activeKey, setActiveKey] = useState("ribbon");

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
          maxHeight="15px"
          onChange={onChange}
          activeKey={activeKey}
          type="card"
          items={[
            {
              label: (
                <span>
                  <UserOutlined />
                </span>
              ),
              children: <RibbonView />,
              key: "ribbon",
            },
            {
              label: (
                <span>
                  <AppstoreFilled />
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
        <VideoSettings menuItems={[]} />
        <AudioSettings menuItems={[]} />
        <Button onClick={leave}>Leave</Button>
      </Flex>
    </Flex>
  );
};

// bottom buttons - how do these get managed
// this container will manage the two rendered participant views, etc.
// hopefully the context will maintain these items properly?

export default Video;
