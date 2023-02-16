import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Card, CardBody, CardFooter, CardHeader } from "./card.component";

export default {
  title: "Starship/SimpleCard",
  component: Card,
} as ComponentMeta<typeof Card>;

const Template: ComponentStory<typeof Card> = (args) => (
  <Card {...args}>
    <CardHeader>Title</CardHeader>
    <CardBody>
      <p>Your content goes here</p>
    </CardBody>
    <CardFooter>
      <div>Footer</div>
    </CardFooter>
  </Card>
);

export const SimpleCard = Template.bind({});
SimpleCard.args = {};
