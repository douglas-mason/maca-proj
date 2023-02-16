import "../src/index.css";
import "./styles.css";
import StoryRouter from "storybook-react-router";
import { addDecorator } from "@storybook/react";

addDecorator(StoryRouter());

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};
