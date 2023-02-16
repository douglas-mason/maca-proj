import React from "react";
import HomeLogo from "../../../assets/home_logo.png";
import { headerHomeLogoButtonStyles } from "./header.styles";
import { useRouteMatch } from "react-router-dom";
import { Menu, MenuItem, ResponsiveMenuItem } from "../menu/menu.component";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faList } from "@fortawesome/free-solid-svg-icons";

const heartIcon = <FontAwesomeIcon icon={faHeart} />;
const listIcon = <FontAwesomeIcon icon={faList} />;

const menuItems = [
  {
    content: (
      <img
        className={headerHomeLogoButtonStyles}
        src={HomeLogo}
        alt="Home Logo"
      />
    ),
    description: "Go to home",
    navigateUrl: "/",
  },
  {
    content: (
      <ResponsiveMenuItem
        primaryContent="Favorites"
        secondaryContent={heartIcon}
      />
    ),
    description: "Go to favorites",
    navigateUrl: "/favorites",
  },
  {
    content: (
      <ResponsiveMenuItem primaryContent="Browse" secondaryContent={listIcon} />
    ),
    description: "Go to list",
    navigateUrl: "/list",
  },
  {
    content: "Profile",
    description: "Go to your profile",
    navigateUrl: "/profile",
    showInList: true,
  },
  {
    content: "Community",
    description: "Go to the community",
    navigateUrl: "/community",
    showInList: true,
  },
  {
    content: "About Us",
    description: "Go to about us page",
    navigateUrl: "/about-us",
    showInList: true,
  },
  {
    content: "Settings",
    description: "Go to settings",
    navigateUrl: "/settings",
    showInList: true,
  },
];

export const Header: React.FC = () => {
  const { path } = useRouteMatch();

  return (
    <Menu
      items={menuItems.map<MenuItem>((item) => ({
        ...item,
        isActive: path === item.navigateUrl,
      }))}
    />
  );
};
