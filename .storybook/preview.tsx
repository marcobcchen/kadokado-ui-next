/** @jsxImportSource theme-ui */
import type { Preview } from "@storybook/react";
import { ThemeUIProvider } from "theme-ui";
import theme from "../src/theme";

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  decorators: [
    (Story) => {
      return (
        <ThemeUIProvider theme={theme}>
          <Story />
        </ThemeUIProvider>
      );
    },
  ],
};

export default preview;
