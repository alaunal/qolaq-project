import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "@/components/Layout";

import Home from "@/views/Home";
import Transfer from "@/views/Transfer";
import Transactions from "@/views/Transactions";
import ErrorPage from "@/views/ErrorPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: "transfer", element: <Transfer /> },
      { path: "transactions", element: <Transactions /> },
    ],
    errorElement: <ErrorPage />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
