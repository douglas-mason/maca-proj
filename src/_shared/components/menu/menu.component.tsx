import React, { ReactElement, useState } from "react";
import { Link } from "react-router-dom";
import {
  menuItemStyles,
  menuItemLinkStyles,
  menuItemListLinkStyles,
  menuContainerStyles,
  overflowMenuButton,
  overflowMenuContainerStyles,
  overflowMenuItemStyles,
  responsiveMenuItemPrimaryStyles,
  responsiveMenuItemSecondaryStyles,
} from "./menu.styles";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsisV } from "@fortawesome/free-solid-svg-icons";

export interface MenuItem {
  content: string | ReactElement;
  description: string;
  showInList?: boolean;
  navigateUrl: string;
  isActive?: boolean;
}

interface MenuProps {
  items: MenuItem[];
}

export const Menu: React.FC<MenuProps> = ({ items }) => {
  const [showOverflowMenu, setShowOverflowMenu] = useState(false);
  const [outsideItems, insideItems] = items.reduce(
    (itemGroups, item) => {
      const [outGroup, inGroup] = itemGroups;
      if (item.showInList) {
        inGroup.push(item);
      } else {
        outGroup.push(item);
      }
      return [outGroup, inGroup];
    },
    [[], []] as MenuItem[][]
  );

  const renderOutsideListItems = () => {
    return outsideItems.map((item, index) => {
      return (
        <li className={menuItemStyles(item.isActive)}>
          <Link
            className={menuItemLinkStyles}
            tabIndex={index}
            to={item.navigateUrl}
            aria-roledescription={item.description}
          >
            {item.content}
          </Link>
        </li>
      );
    });
  };
  const renderInsideListItems = () => {
    return insideItems.map((item, index) => (
      <li className={overflowMenuItemStyles(item.isActive)}>
        <Link
          className={menuItemListLinkStyles}
          tabIndex={index}
          to={item.navigateUrl}
          aria-roledescription={item.description}
        >
          {item.content}
        </Link>
      </li>
    ));
  };

  const ellipsis = <FontAwesomeIcon icon={faEllipsisV} />;
  return (
    <nav>
      <ul className={menuContainerStyles}>
        {renderOutsideListItems()}
        <li className={menuItemStyles()}>
          <button
            className={overflowMenuButton}
            onClick={() => setShowOverflowMenu(!showOverflowMenu)}
          >
            {ellipsis}
          </button>
          <ul className={overflowMenuContainerStyles(showOverflowMenu)}>
            {renderInsideListItems()}
          </ul>
        </li>
      </ul>
    </nav>
  );
};

interface ResponsiveMenuItemProps {
  primaryContent: string | ReactElement;
  secondaryContent: string | ReactElement;
}

export const ResponsiveMenuItem: React.FC<ResponsiveMenuItemProps> = ({
  primaryContent,
  secondaryContent,
}) => {
  return (
    <>
      <span className={responsiveMenuItemPrimaryStyles}>{primaryContent}</span>
      <span className={responsiveMenuItemSecondaryStyles}>
        {secondaryContent}
      </span>
    </>
  );
};
