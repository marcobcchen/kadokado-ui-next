import { Theme } from "theme-ui";
import { pxToRem } from "../utils";
import colors from "./colors";
import { fontSizes, fontWeights, fontFamily } from "./fonts";
import { letterSpacings, lineHeights, typography } from "./typography";

const makeTheme = <T extends Theme>(t: T) => t;

const theme = makeTheme({
  config: { useLocalStorage: true },
  fonts: fontFamily,
  fontWeights,
  fontSizes,
  typography,
  colors,
  letterSpacings,
  lineHeights,
  space: [
    pxToRem(0), // 0
    pxToRem(4), // 1
    pxToRem(8), // 2
    pxToRem(16), // 3
    pxToRem(32), // 4
    pxToRem(64), // 5
  ],
  breakpoints: ["640px", "768px", "1024px", "1280px"],
  sizes: {
    full: "100%",
    header: pxToRem(64),
    tab: pxToRem(48),
    icon: pxToRem(24),
    smallIcon: pxToRem(16),
    smallIconButton: pxToRem(36),
    largeIconButton: pxToRem(48),
    touchTarget: pxToRem(48),
    pageMaxWidth: pxToRem(984),
    avatar: pxToRem(40),
    LargeAvatar: pxToRem(80),
    tag: pxToRem(36),
    dropdownMenuItem: pxToRem(48),
    coverSizes: {
      xs: pxToRem(56),
      sm: pxToRem(76),
      md: pxToRem(104),
      lg: pxToRem(112),
      xl: pxToRem(256),
    },
  },
  zIndices: {
    dropdownMenu: 55,
    tabBar: 10,
    toast: 60,
    appBar: 30,
    bottomBar: 30,
    dialog: 50,
    sideMenu: 40,
  },
  shadows: {
    default: `0px 0px ${pxToRem(32)} 0px rgba(203, 213, 224, 0.3)`,
    converge: `0px 0px ${pxToRem(8)} 0px rgba(203, 213, 224, 0.3)`,
  },
  radii: {
    default: "0.25rem", // 4 px
    middle: "0.5rem", // 8 px:
    extra: "50rem", // 800 px
    round: "50%",
  },
  styles: {
    root: {
      fontFamily: "body",
      overflowX: "hidden",
    },
    img: {
      maxWidth: "full",
      width: "full",
      height: "auto",
    },
    hr: {
      width: "full",
      height: 1,
      color: "gray.5",
      m: 0,
    },
    spinner: {
      color: "gray.3",
      strokeWidth: pxToRem(2),
    },
  },
  forms: {
    input: {
      variant: "typography.body.14.regular",
      alignSelf: "stretch",
      p: 3,
      resize: "vertical",
      border: 0,
      "&:disabled": {
        cursor: "not-allowed",
        "&::placeholder": { color: "gray.4" },
      },
      "&::placeholder": { color: "gray.6" },
    },
    textarea: {
      borderWidth: pxToRem(1),
      borderStyle: "solid",
      borderRadius: "default",
      overflow: "hidden",
      transition: "border-color .3s ease-out",
      backgroundColor: "gray.1",
      variant: "typography.body.14.regular",
      p: 3,
      "&:disabled": {
        cursor: "not-allowed",
        "&::placeholder": { color: "gray.4" },
      },
      "&::placeholder": { color: "gray.6" },
    },
  },
  absoluteCenter: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
  },
  layout: {
    superCenter: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },
    dialog: {
      position: "fixed",
      top: 0,
      left: 0,
      width: "full",
      height: "full",
      zIndex: "dialog",
    },
    container: {
      maxWidth: "pageMaxWidth",
      mx: "auto",
    },
  },
  singleLineTruncation: {
    textOverflow: "ellipsis",
    overflow: "hidden",
    whiteSpace: "nowrap",
  },
  appBar: {
    width: "full",
    height: "header",
    display: "flex",
    flex: "row nowrap",
    alignItems: "center",
    justifyContent: "space-between",
    gap: 3,
    position: "sticky",
    top: 0,
    px: "3",
    backgroundColor: "background",
    zIndex: "appBar",
  },
  sideMenu: {
    position: "fixed",
    top: 0,
    left: 0,
    display: "flex",
    justifyContent: "flex-end",
    width: "full",
    height: "full",
    zIndex: "sideMenu",
  },
  dropdownMenu: {
    width: pxToRem(256),
    backgroundColor: "gray.0",
    boxShadow: "default",
    borderRadius: "default",
    overflow: "hidden",
  },
  dropdownMenuItem: {
    variant: "typography.body.14.medium",
    px: 3,
    width: pxToRem(256),
    height: "dropdownMenuItem",
    placeItems: "center",
    transition: "background-color .25s ease-out",
    ":hover": { backgroundColor: "gray.1" },
  },
  buttons: {
    // deprecated
    primary: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      color: "white",
      backgroundColor: "primary",
      height: "touchTarget",
      px: 3,
      borderRadius: "default",
    },
    // deprecated
    outline: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      color: "primary",
      backgroundColor: "background",
      borderColor: "primary",
      borderWidth: "1px",
      borderStyle: "solid",
      height: "touchTarget",
      px: 3,
      borderRadius: "default",
    },
    icon: {
      fontSize: 6,
      color: "gray.8",
      strokeWidth: "1.5",
      width: "icon",
      height: "icon",
    },
    small_icon: {
      fontSize: 4,
      color: "gray.8",
      strokeWidth: "1.5",
      width: "smallIcon",
      height: "smallIcon",
    },
    basic: {
      variant: "layout.superCenter",
      userSelect: "none",
      gap: 2,
      px: 3,
      color: "current",
      whiteSpace: "nowrap",
    },
    lg: {
      ...typography.body[14].medium,
      variant: "buttons.basic",
      height: "largeIconButton",
      width: "full",
      maxWidth: pxToRem(256),
      borderRadius: "extra",
      svg: {
        variant: "icon.md",
        flex: "0 0 auto",
      },
    },
    sm: {
      ...typography.body[14].regular,
      variant: "buttons.basic",
      height: "smallIconButton",
      width: "auto",
      maxWidth: "full",
      borderRadius: "36px",
      svg: {
        variant: "icon.sm",
        flex: "0 0 auto",
      },
    },
    filled_primary: {
      color: "white",
      bg: "primary",
      transition: "opacity .3s ease-out",
      "&:hover": { opacity: 0.8 },
      "&:disabled": {
        opacity: 1,
        backgroundColor: "gray.4",
        cursor: "not-allowed",
      },
      "@media (hover: none)": {
        ":hover, :active": {
          opacity: 1,
        },
      },
    },
    filled_secondary: {
      color: "gray.8",
      bg: "gray.1",
      transition: "opacity .3s ease-out",
      "&:hover": { opacity: 0.8 },
      "&:disabled": { opacity: 1, color: "gray.4", cursor: "not-allowed" },
      "@media (hover: none)": {
        ":hover, :active": {
          opacity: 1,
        },
      },
    },
    outlined_primary: {
      color: "primary",
      bg: "transparent",
      borderWidth: pxToRem(1),
      borderStyle: "solid",
      borderColor: "primary",
      transition: "opacity .3s ease-out",
      "&:hover": { opacity: 0.8 },
      "&:disabled": {
        opacity: 1,
        color: "gray.4",
        borderColor: "gray.4",
        cursor: "not-allowed",
      },
      "@media (hover: none)": {
        ":hover, :active": {
          opacity: 1,
        },
      },
    },
    outlined_secondary: {
      color: "gray.8",
      bg: "transparent",
      borderWidth: pxToRem(1),
      borderStyle: "solid",
      borderColor: "gray.4",
      transition: "opacity .3s ease-out",
      "&:hover": { opacity: 0.8 },
      "&:disabled": { opacity: 1, color: "gray.4", cursor: "not-allowed" },
      "@media (hover: none)": {
        ":hover, :active": {
          opacity: 1,
        },
      },
    },
    text: {
      variant: "typography.body.14.medium",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      userSelect: "none",
      gap: 2,
      px: 3,
      py: 0,
      bg: "transparent",
      height: "touchTarget",
      svg: {
        variant: "icon.sm",
      },
    },
    text_primary: {
      color: "primary",
      transition: "opacity .3s ease-out",
      "&:hover": { opacity: 0.8 },
      "&:disabled": { opacity: 1, color: "gray.4", cursor: "not-allowed" },
      "@media (hover: none)": {
        ":hover, :active": {
          opacity: 1,
        },
      },
    },
    text_secondary: {
      color: "gray.8",
      transition: "opacity .3s ease-out",
      "&:hover": { opacity: 0.8 },
      "&:disabled": { opacity: 1, color: "gray.4", cursor: "not-allowed" },
      "@media (hover: none)": {
        ":hover, :active": {
          opacity: 1,
        },
      },
    },
    text_tertiary: {
      color: "gray.6",
      transition: "opacity .3s ease-out",
      "&:hover": { opacity: 0.8 },
      "&:disabled": { opacity: 1, color: "gray.4", cursor: "not-allowed" },
      "@media (hover: none)": {
        ":hover, :active": {
          opacity: 1,
        },
      },
    },
    menu: {
      variant: "typography.body.14.medium",
      bg: "transparent",
      height: "largeIconButton",
      p: 0,
      transition: "color .3s ease-out",
      "&:hover": { color: "gray.6" },
      "&:disabled": { color: "gray.4", cursor: "not-allowed" },
    },
    icon_v2: {
      variant: "layout.superCenter",
      borderRadius: "round",
      color: "gray.8",
      flex: "0 0 auto",
      svg: {
        flex: "0 0 auto",
      },
      "&:disabled": {
        cursor: "not-allowed",
        svg: {
          color: "gray.4",
        },
      },
    },
  },
  tag: {
    base: {
      variant: "typography.body.14.regular",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      height: "tag",
      borderRadius: "extra",
      px: 3,
      width: "auto",
      maxWidth: "full",
    },
    fill: {
      variant: "tag.base",
      color: "gray.0",
      backgroundColor: "primary",
      ":hover, :active": {
        backgroundColor: "gray.8",
      },
      transition: "background-color .3s ease-out",
    },
    outline: {
      variant: "tag.base",
      color: "primary",
      backgroundColor: "transparent",
      borderWidth: "1px",
      borderStyle: "solid",
      borderColor: "primary",
      // 在觸控裝置，移除Hover特效
      // @link https://stackoverflow.com/questions/23885255/how-to-remove-ignore-hover-css-style-on-touch-devices
      "@media (hover: hover)": {
        ":hover, :active": {
          color: "gray.8",
          borderColor: "gray.8",
        },
      },
      "&:disabled": {
        color: "gray.4",
        borderColor: "gray.4",
        cursor: "not-allowed",
      },
      transition: "border-color .3s ease-out, color .3s ease-out",
    },
  },
  images: {
    avatar: {
      position: "relative",
      height: "avatar",
      width: "avatar",
      borderRadius: "round",
      overflow: "hidden",
      large: {
        position: "relative",
        height: "LargeAvatar",
        width: "LargeAvatar",
        borderRadius: "round",
        overflow: "hidden",
      },
    },
  },
  avatar: {
    default: {
      position: "relative",
      height: "avatar",
      width: "avatar",
      borderRadius: "round",
    },
    large: {
      position: "relative",
      height: "LargeAvatar",
      width: "LargeAvatar",
      borderRadius: "round",
    },
  },
  touchTarget: {
    flex: "0 0 auto",
    width: "touchTarget",
    height: "touchTarget",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  dimmer: {
    position: "absolute",
    left: 0,
    top: 0,
    width: "full",
    height: "full",
    backgroundColor: "rgba(74, 85, 104 , 0.8)",
    zIndex: -1,
    cursor: "pointer",
  },
  messages: {
    basic: {
      variant: "typography.body.14.regular",
      display: "flex",
      alignItems: "center",
      gap: 3,
      p: 3,
      borderRadius: "default",
      boxShadow: "default",
      borderLeft: "none",
      backgroundColor: "gray.2",
    },
    error: {
      variant: "messages.basic",
      backgroundColor: "fairPink",
    },
    success: {
      variant: "messages.basic",
      backgroundColor: "polar",
    },
  },
  icon: {
    sm: { fontSize: 2 }, // 16px
    md: { fontSize: 4, strokeWidth: "1.5" }, // 24px
    lg: { fontSize: pxToRem(40) }, // 40px
    xl: { fontSize: pxToRem(80), strokeWidth: "1" }, // 80px
  },
});

export default theme;
// Theme的type
export type ThemeType = typeof theme;
