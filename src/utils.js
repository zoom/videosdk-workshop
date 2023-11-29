export const getAntdItem = (label, key, icon, children, type) => {
  return {
    key,
    icon,
    children,
    label,
    type,
  };
};

export const getAntdDropdownMenu = (items, onClick, clzName) => {
  return {
    items,
    onClick,
    theme: "dark",
    className: clzName ?? "vc-dropdown-menu",
  };
};
