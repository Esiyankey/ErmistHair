'use client'

// import type { Metadata } from "next";
import "../styles/globals.css";
import Navbar from "../components/layout/navbar";
import localFont from "next/font/local";
import {store} from "../store/store";
import { Provider } from "react-redux";

const monaSans = localFont({
  src: [
    {
      path: "../public/fonts/MonaSans-VariableFont_wdth,wght.ttf",
      weight: "400",
      style: "normal",
    },
  ],
});

// export const metadata: Metadata = {
//   title: "Create Next App",
//   description: "Generated by create next app",
// };

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={monaSans.className}>
        <Provider store={store}>
          <Navbar />
          {children}
        </Provider>
      </body>
    </html>
  );
}
