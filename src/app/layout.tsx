"use client";
import createEmotionCache from "@/utils/createEmotionCache";
import { CacheProvider } from "@emotion/react";
import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider } from "@mui/material/styles";
import { QueryClient, QueryClientProvider } from "react-query";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import "react-datepicker/dist/react-datepicker.css";
import "../utils/i18n";

//Components
import BottomNavBar from "@/components/bottomNavBar";
import WebNavBar from "@/components/webNavBar";

// Styles
import theme from "@/utils/theme";
import { useEffect, useMemo, useState } from "react";
import { useTranslation } from "react-i18next";
import "./globals.css";
import { queryClient } from "@/apis/__helpers/request";
import { usePathname, useRouter } from "next/navigation";
import Login from "./login/page";

// Client-side cache, shared for the whole session of the user in the browser.
const { ltrCache, rtlCache } = createEmotionCache();

// export const metadata = {
//   title: "Turn-Around Management System",
//   description: "Manage Optimize the turn-around process of an aircraft.",
// };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const { i18n } = useTranslation();
  const pathName = usePathname();

  let tmsToken: string | null = null;
  if (typeof window !== "undefined") {
    // Perform localStorage action
    tmsToken = localStorage.getItem("x-access-token");
  }
  const router = useRouter();
  useEffect(() => {
    if (!tmsToken) {
      router.push("/login");
    }
  }, [tmsToken]);

  useEffect(() => {
    i18n.on("languageChanged", (lng) => {
      document.documentElement.setAttribute("lang", lng);
    });
  }, [i18n]);

  // memoize the direction to avoid unnecessary re-renders
  const direction = useMemo(() => (i18n.language.startsWith("ar_AR") ? "rtl" : "ltr"), [i18n.language]);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const loader = document.getElementById("globalLoader");
      if (loader) loader.remove();
    }
  }, []);

  return (
    <html lang="en_EN">
      <title>RAC - TMS</title>
      <body
        style={{
          direction: direction,
        }}
      >
        <QueryClientProvider client={queryClient} contextSharing={true}>
          <ThemeProvider theme={theme}>
            <CacheProvider value={direction === "ltr" ? ltrCache : rtlCache}>
              <CssBaseline />
              {pathName === "/login" || pathName === "/verify" ? null : <WebNavBar />}
              {children}
              <BottomNavBar />
              <ToastContainer />
            </CacheProvider>
          </ThemeProvider>
        </QueryClientProvider>

        <div id="globalLoader">
          <h4 style={{ color: "white", marginBottom: "2em" }}>RAC - Turn Around Management Systems</h4>
          <span className="loader"></span>
        </div>
      </body>
    </html>
  );
}
