import "../styles/variables.css";
import "../styles/globals.css";
import "../styles/fonts.css";
import { ThemeProvider, useTheme } from "@mui/styles";

function MyApp({ Component, pageProps }) {
  const theme = useTheme();
  return (
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
