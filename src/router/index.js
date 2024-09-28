import React, { lazy, Suspense } from "react";
import { createBrowserRouter } from "react-router-dom";
import Loading from "../components/Loading";
import Layout from "../layout/Layout";

import mypageRouter from "./mypageRouter";
import communityRouter from "./communityRouter";

const Main = lazy(() => import("../page/main"));

const Record = lazy(() => import("../page/record"));

const Statistic = lazy(() => import("../page/statistic"));
const Week = lazy(() => import("../page/statistic/component/Week"));
const DrinkRecord = lazy(() => import("../page/record/component/DrinkRecord"));

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
        path: "statistic",
        element: (
          <Suspense fallback={<Loading />}>
            <Statistic />
          </Suspense>
        ),
      },
      {
        path: "week",
        element: (
          <Suspense fallback={<Loading />}>
            <Week />
          </Suspense>
        ),
      },
      {
        path: "drinkrecord",
        element: (
          <Suspense fallback={<Loading />}>
            <DrinkRecord />
          </Suspense>
        ),
      },
    ],
  },
]);

export default router;
