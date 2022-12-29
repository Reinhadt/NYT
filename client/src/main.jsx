import React from "react";
import { ChakraProvider } from "@chakra-ui/react";
import ReactDOM from "react-dom/client";
import App from "./App";
import NewsProvider from "./context/NewsProvider";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ChakraProvider>
      <NewsProvider>
        <App />
      </NewsProvider>
    </ChakraProvider>
  </React.StrictMode>
);
