import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Menu, ResponsiveMenuItem } from "./menu.component";
import HomeLogo from "../../../assets/home_logo.png";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faList } from "@fortawesome/free-solid-svg-icons";

const heartIcon = <FontAwesomeIcon icon={faHeart} />;
const listIcon = <FontAwesomeIcon icon={faList} />;

export default {
  title: "Starship/Menu",
  component: Menu,
} as ComponentMeta<typeof Menu>;

const Template: ComponentStory<typeof Menu> = (args) => (
  <div style={{ backgroundColor: "#000408", padding: 50 }}>
    <Menu {...args} />
  </div>
);

export const SimpleMenu = Template.bind({});
SimpleMenu.args = {
  items: [
    {
      content: <img src={HomeLogo} alt="Home Logo" />,
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
      isActive: true,
    },
    {
      content: (
        <ResponsiveMenuItem
          primaryContent="Browse"
          secondaryContent={listIcon}
        />
      ),
      description: "Go to list",
      navigateUrl: "/",
    },
    {
      content: "Profile",
      description: "Go to your profile",
      navigateUrl: "/",
      showInList: true,
    },
    {
      content: "Community",
      description: "Go to the community",
      navigateUrl: "/",
      showInList: true,
    },
    {
      content: "About Us",
      description: "Go to about us page",
      navigateUrl: "/",
      showInList: true,
    },
    {
      content: "Settings",
      description: "Go to settings",
      navigateUrl: "/",
      showInList: true,
    },
  ],
};
