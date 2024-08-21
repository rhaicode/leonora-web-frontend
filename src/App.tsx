import { ChakraProvider } from "@chakra-ui/react";
import { Suspense } from "react";
import { RouterProvider } from "react-router-dom";

import router from "@/routes/router";
import theme from "../chakra.config";

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Suspense fallback={<div>Loading...</div>}>
        <RouterProvider router={router} />
      </Suspense>
    </ChakraProvider>
  );
}

export default App;
