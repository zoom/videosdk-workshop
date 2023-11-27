import { useState } from "react";
import { Dropdown, Space } from "antd";
import {
  VideoCameraFilled,
  CaretDownFilled,
  CaretUpFilled,
} from "@ant-design/icons";
// const onOpenChange = { open };

// this is filled in from the videoSDK response
const items = [
  {
    label: "1st menu item",
    key: "1",
  },
  {
    label: "2nd menu item",
    key: "2",
  },
  {
    label: "3rd menu item",
    key: "3",
  },
];

const AudioSettings = () => {
  const [open, setOpen] = useState(false);

  const onClick = ({ key }) => {
    if (key === "3") {
      setOpen(false);
    }
  };

  const onOpenChange = (nextOpen, info) => {
    if (info.source === "trigger" || nextOpen) {
      setOpen(nextOpen);
    }
  };

  const menuArrow = open ? <CaretUpFilled /> : <CaretDownFilled />;

  return (
    <Space wrap>
      <Dropdown
        menu={{ items, onClick }}
        trigger={"click"}
        onOpenChange={onOpenChange}
        open={open}
        placement="topLeft"
      >
        <a onClick={(e) => e.preventDefault()}>
          <Space>
            <VideoCameraFilled style={{ fontSize: "2em" }} />
            {menuArrow}
          </Space>
        </a>
      </Dropdown>
    </Space>
  );
};

export default AudioSettings;
