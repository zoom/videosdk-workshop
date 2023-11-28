import { useState } from "react";
import { Dropdown, Space } from "antd";
import {
  QuestionCircleFilled,
  CaretUpFilled,
  CaretDownFilled,
} from "@ant-design/icons";

const IconSettingsButton = ({
  OnIcon = QuestionCircleFilled,
  OffIcon = QuestionCircleFilled,
  on = true,
  items,
}) => {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState(on);
  // getting the items
  // what to do when the user picks something
  // is there a context to store this in?
  // these need an an "off/on" state of some kind
  // Provide two Icons for off/on - work on styles here as well.

  const onClick = ({ key }) => {
    console.log(key);
    setOpen(false);
  };

  const onOpenChange = (nextOpen, info) => {
    console.log(nextOpen, info);
    if (info.source === "trigger" || nextOpen) {
      setOpen(nextOpen);
    }
  };

  const menuArrow = open ? <CaretUpFilled /> : <CaretDownFilled />;
  const Icon = on ? OnIcon : OffIcon;
  return (
    <Space wrap>
      <Space>
        <Icon style={{ fontSize: "2em" }} onClick={() => setActive(!active)} />
        <Dropdown
          menu={{ items, onClick }}
          trigger={"click"}
          onOpenChange={onOpenChange}
          open={open}
          placement="topLeft"
        >
          <a onClick={(e) => e.preventDefault()}>{menuArrow}</a>
        </Dropdown>
      </Space>
    </Space>
  );
};

export default IconSettingsButton;
