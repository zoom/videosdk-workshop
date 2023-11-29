import { useState } from "react";
import { Dropdown, Space } from "antd";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretUp, faCaretDown } from "@fortawesome/free-solid-svg-icons";
// import { MediaContext } from "../Context/Contexts.js";
import { getAntdDropdownMenu } from "../../utils";

const IconSettingsButton = ({
  onIcon,
  offIcon,
  isOn,
  menuItems,
  onToggle,
  onSelect,
}) => {
  const [open, setOpen] = useState(false);
  // what to do when the user picks something

  const onClick = ({ key }) => {
    const [type, deviceId] = key.split("|");
    onSelect(deviceId, type);
    setOpen(false);
  };

  const onOpenChange = (nextOpen, info) => {
    if (info.source === "trigger" || nextOpen) {
      setOpen(nextOpen);
    }
  };

  const menuArrow = open ? (
    <FontAwesomeIcon icon={faCaretUp} />
  ) : (
    <FontAwesomeIcon icon={faCaretDown} />
  );
  const icon = isOn ? onIcon : offIcon;
  return (
    <Space wrap>
      <Space>
        <FontAwesomeIcon
          style={{ fontSize: "2em" }}
          onClick={onToggle}
          icon={icon}
        />
        <Dropdown
          menu={getAntdDropdownMenu(menuItems, onClick)}
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
