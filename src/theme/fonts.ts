import { pxToRem } from "../utils/styles";
import { Noto_Sans_JP, Noto_Sans_SC, Noto_Sans_TC } from "next/font/google";
import localFont from "next/font/local";

const notoSansTC = Noto_Sans_TC({
  subsets: ["latin"],
  display: "swap",
});

const notoSansSC = Noto_Sans_SC({
  subsets: ["latin"],
  display: "swap",
});

const notoSansJP = Noto_Sans_JP({
  subsets: ["latin"],
  display: "swap",
});

/*
  新增 GenYoGothic 字型的原因可以參考這張單：https://kadokado.atlassian.net/browse/KAD-3225
  字體載點：https://github.com/ButTaiwan/genyog-font
 */
const genYoGothic = localFont({
  src: [
    {
      path: "../../public/static/fonts/GenYoGothic/GenYoGothic2TW-L.otf",
      weight: "300",
      style: "normal",
    },
    {
      path: "../../public/static/fonts/GenYoGothic/GenYoGothic2TW-R.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/static/fonts/GenYoGothic/GenYoGothic2TW-M.otf",
      weight: "500",
      style: "normal",
    },
  ],
});

const fontFamilyList = [
  notoSansTC.style.fontFamily,
  notoSansSC.style.fontFamily,
  notoSansJP.style.fontFamily,
  genYoGothic.style.fontFamily,
];

const fontFamily = {
  body: fontFamilyList.join(", "),
};

const fontSizes = [
  pxToRem(12), // 0
  pxToRem(14), // 1
  pxToRem(16), // 2
  pxToRem(20), // 3
  pxToRem(24), // 4
  pxToRem(28), // 5
  pxToRem(32), // 6
  pxToRem(48), // 7
];

const fontWeights = {
  thin: 100,
  light: 300,
  regular: 400,
  medium: 500,
  bold: 700,
  black: 900,
};

export { fontFamily, fontSizes, fontWeights };
