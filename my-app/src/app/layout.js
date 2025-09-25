"use client";

import { faL } from "@fortawesome/free-solid-svg-icons";
import Layout from "../components/layout";

export default function RootLayout({ children }) {

  const isLogin = false;

  if (isLogin) {
    return (
      <html lang="en">
        <head>
          <link
            href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap"
            rel="stylesheet"
          />
        </head>
        <body>{children}</body>
      </html>
    );
  }

  return (
    <html lang="en">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}