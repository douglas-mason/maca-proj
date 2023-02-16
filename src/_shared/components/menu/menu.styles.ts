import { css } from "@emotion/css";

export const menuContainerStyles = css({
  display: "flex",
  alignItems: "center",
  padding: 0,
});

export const menuItemStyles = (isSelected = false) =>
  css({
    ...(isSelected ? { color: "#a2344f" } : {}),
    listStyle: "none",
    padding: "5px 10px",
  });

export const menuItemLinkStyles = css({
  ":link,:visited,:hover,:active": {
    color: "inherit",
    textDecoration: "inherit",
    fontWeight: "inherit",
  },
  ":hover": {
    color: "#ad354e",
  },
});

export const menuItemListLinkStyles = css({
  ":link,:visited,:hover,:active": {
    color: "inherit",
    textDecoration: "inherit",
    fontWeight: "inherit",
  },
});

export const overflowMenuButton = css({
  ":hover": {
    backgroundColor: "#363639",
  },
  backgroundColor: "transparent",
  height: 30,
  width: 30,
  borderRadius: 4,
  border: "none",
  color: "inherit",
  fontSize: "1rem",
  cursor: "pointer",
});

export const overflowMenuContainerStyles = (showMenu = false) =>
  css({
    display: showMenu ? "block" : "none",
    position: "absolute",
    padding: 10,
    backgroundColor: "#1f1f23",
    borderRadius: 4,
  });

export const overflowMenuItemStyles = (isSelected = false) =>
  css({
    ...(isSelected ? { color: "#a2344f" } : {}),
    listStyle: "none",
    padding: "5px 10px",
    ":hover": {
      backgroundColor: "#3c3c3f",
    },
  });

export const responsiveMenuItemPrimaryStyles = css({
  "@media (max-width: 900px)": {
    display: "none",
  },
});

export const responsiveMenuItemSecondaryStyles = css({
  "@media (min-width: 900px)": {
    display: "none",
  },
});
