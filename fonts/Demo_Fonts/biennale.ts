import localFont from "next/font/local";

export const biennale = localFont({
  variable: "--font-biennale",
  src: [
    {
      path: "./Fontspring-DEMO-biennale-thin.otf",
      weight: "300",
      style: "normal",
    },
    {
      path: "./Fontspring-DEMO-biennale-regular.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "./Fontspring-DEMO-biennale-medium.otf",
      weight: "500",
      style: "normal",
    },
    {
      path: "./Fontspring-DEMO-biennale-semibold.otf",
      weight: "600",
      style: "normal",
    },
  ],
  display: "swap",
});
