import localFont from "next/font/local";

export const vilane = localFont({
  variable: "--font-vilane",
  src: [
    {
      path: "./vilane-light.ttf",
      weight: "300",
      style: "normal",
    },
    {
      path: "./vilane-regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "./vilane-medium.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "./vilane-semi-bold.ttf",
      weight: "600",
      style: "normal",
    },
  ],
  display: "swap",
});
