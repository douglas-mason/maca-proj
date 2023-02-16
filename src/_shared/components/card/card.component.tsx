import React, { Component } from "react";
import { cardStyles } from "./card.styles";

interface Props {
  containerStyles?: string;
}

export const Card: React.FC<Props> = ({ children, containerStyles = "" }) => {
  return <div className={cardStyles + containerStyles}>{children}</div>;
};

export const CardHeader: React.FC = ({ children }) => {
  return <h2>{children}</h2>;
};

export const CardBody: React.FC = ({ children }) => {
  return <>{children}</>;
};

export const CardFooter: React.FC = ({ children }) => {
  return <>{children}</>;
};
