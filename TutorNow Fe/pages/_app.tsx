import { EmptyLayout } from "@/components/layout";
import { AppPropsWithLayout } from "@/models/index";
import store from "@/stores";
import { createEmotionCache, theme } from "@/utils";
import { CacheProvider } from "@emotion/react";
import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider } from "@mui/material/styles";
import { Provider } from "react-redux";
import "../styles/globals.css";
// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache();
export default function MyApp({
  Component,
  pageProps,
}: // emotionCache = clientSideEmotionCache,
AppPropsWithLayout) {
  const Layout = Component.Layout ?? EmptyLayout;
  return (
    <>
      <>
        <CacheProvider value={clientSideEmotionCache}>
          <ThemeProvider theme={theme}>
            <CssBaseline />
            <Provider store={store}>
              <Layout>
                <Component {...pageProps} />
              </Layout>
            </Provider>
          </ThemeProvider>
        </CacheProvider>
      </>
    </>
  );
}
