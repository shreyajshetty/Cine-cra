import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import { SearchContextProvider } from "./Context/SearchContext";

const theme = extendTheme({
  fonts: {
    heading: "Tahoma",
  },
  breakpoints: {
    sm: "30em", // 480px
    md: "48em", // 768px
    lg: "62em", // 992px
    xl: "80em", // 1280px
    "2xl": "96em", // 1536px
  },
  components: {
    Header: {
      baseStyle: {
        width: "80%",
      },
      sm: {
        width: "20%",
      },
      md: {
        width: "50%",
      },
    },
    Footer: {
      baseStyle: {
        width: "80%",
      },
      sm: {
        width: "20%",
      },
      md: {
        width: "50%",
      },
    },
  },
});

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <SearchContextProvider>
      <ChakraProvider theme={theme}>
        <App />
      </ChakraProvider>
    </SearchContextProvider>
  </React.StrictMode>
);
