/** @jsxImportSource theme-ui */
import { Meta, StoryObj } from "@storybook/react";
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";
import Button from "./index";

const meta = {
  title: "Components/Button",
  component: Button,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: "centered",
  },
  // tags: ["autodocs"],
  argTypes: {
    // backgroundColor: { control: "color" },
  },
  // argTypes: {
  //   children: { control: "text" },
  //   prefixIcon: { control: false },
  //   suffixIcon: { control: false },
  //   isLoading: { control: "boolean" },
  //   size: {
  //     control: { type: "radio" },
  //     options: ["lg", "sm"],
  //   },
  //   buttonType: {
  //     control: { type: "radio" },
  //     options: ["primary", "secondary"],
  //   },
  //   buttonStyle: {
  //     control: { type: "radio" },
  //     options: ["filled", "outlined"],
  //   },
  //   disabled: { control: "boolean" },
  //   onClick: { action: "clicked" },
  // },
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    children: "Primary",
    size: "lg",
    buttonType: "primary",
    buttonStyle: "filled",
    isLoading: false,
    disabled: false,
  },
};

export const Secondary: Story = {
  args: {
    children: "Secondary",
    size: "lg",
    buttonType: "secondary",
    buttonStyle: "filled",
    isLoading: false,
    disabled: false,
  },
};

export const WithPrefixIcon: Story = {
  args: {
    children: "With Prefix Icon",
    prefixIcon: <FiArrowLeft />,
    size: "lg",
    buttonType: "primary",
    buttonStyle: "filled",
  },
};

export const WithSuffixIcon: Story = {
  args: {
    children: "With Suffix Icon",
    suffixIcon: <FiArrowRight />,
    size: "lg",
    buttonType: "primary",
    buttonStyle: "filled",
  },
};

export const LoadingState: Story = {
  args: {
    children: "Loading...",
    isLoading: true,
    size: "lg",
    buttonType: "primary",
    buttonStyle: "filled",
  },
};

export const SmallOutlinedSecondary: Story = {
  args: {
    children: "Small Outlined Button",
    size: "sm",
    buttonType: "secondary",
    buttonStyle: "outlined",
  },
};
