import React, { lazy, Suspense } from "react";
import { createBrowserRouter } from "react-router-dom";
import Loading from "../components/Loading";
import Layout from "../layout/Layout";

import mypageRouter from "./mypageRouter";
import communityRouter from "./communityRouter";

const Main = lazy(() => import("../page/main"));

const Record = lazy(() => import("../page/record"));
const Community = lazy(() => import("../page/community"));
const Statistic = lazy(() => import("../page/statistic"));

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      ...mypageRouter,
      ...communityRouter,
      {
        path: "",
        element: (
          <Suspense fallback={<Loading />}>
            <Main />
          </Suspense>
        ),
      },
      {
        path: "record",
        element: (
          <Suspense fallback={<Loading />}>
            <Record />
          </Suspense>
        ),
      },
      {
        path: "community",
        element: (
          <Suspense fallback={<Loading />}>
            <Community />
          </Suspense>
        ),
      },
      {
        path: "statistic",
        element: (
          <Suspense fallback={<Loading />}>
            <Statistic />
          </Suspense>
        ),
      },
    ],
  },
]);

export default router;
