import { lazy, Suspense } from "react";
import { createBrowserRouter } from "react-router-dom";
import Loading from "../components/common/loading/Loading";
const Home = lazy(() => import("../pages/Home"));
const ProjectDetails = lazy(() => import("../pages/ProjectDetails"));
const Main = lazy(() => import("../layouts/Main"));

// const repoName = import.meta.env.VITE_REPO_NAME || "";

export const router = createBrowserRouter(
  [
    {
      path: `/`,
      element: (
        <Suspense fallback={<Loading />}>
          <Main />
        </Suspense>
      ),
      children: [
        {
          index: true,
          // element: <Home></Home>,
          element: <Home />,
        },
        {
          path: "projects/:slug",
          element: <ProjectDetails></ProjectDetails>,
        },
      ],
    },
  ],
  // { basename: `/${repoName}` }
);
