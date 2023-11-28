import { useState } from "react";
import { Dropdown, Space } from "antd";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretUp, faCaretDown } from "@fortawesome/free-solid-svg-icons";

const IconSettingsButton = ({ onIcon, offIcon, on, items }) => {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState(on);
  // getting the items
  // what to do when the user picks something
  // is there a context to store this in?
  // these need an an "off/on" state of some kind
  // Provide two Icons for off/on - work on styles here as well.

  const onClick = ({ key }) => {
    console.log(key);
    // when clicked, it should pass back something to the parent, or update a specific context
    setOpen(false);
  };

  const onOpenChange = (nextOpen, info) => {
    console.log(nextOpen, info);
    if (info.source === "trigger" || nextOpen) {
      setOpen(nextOpen);
    }
  };

  const menuArrow = open ? (
    <FontAwesomeIcon icon={faCaretUp} />
  ) : (
    <FontAwesomeIcon icon={faCaretDown} />
  );
  const icon = on ? onIcon : offIcon;
  return (
    <Space wrap>
      <Space>
        <FontAwesomeIcon
          style={{ fontSize: "2em" }}
          onClick={() => setActive(!active)}
          icon={icon}
        />
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
