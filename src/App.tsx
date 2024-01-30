import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { RootLayout, ProtectedLayout } from "./layouts";
import { HomePage, SignInPage, SignUpPage, GeneratorsPage, TextGeneratorPage, BirthNumberGeneratorPage, TimeReport, SettingsPage, Tags } from "./pages";
import { ThemeProvider } from "./services/Context/ThemeProvider";
import { Toaster } from "./components/ui/toaster";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout />,
      children: [
        {
          index: true,
          element: <HomePage />,
        },
        {
          path: "/sign-in",
          element: <SignInPage />,
        },
        {
          path: "/sign-up",
          element: <SignUpPage />,
        },
        {
          path: "generators",
          element: <ProtectedLayout />,
          children: [
            {
              index: true,
              element: <GeneratorsPage />,
            },
            {
              path: "text-generator",
              element: <TextGeneratorPage />,
            },
            {
              path: "birth-number",
              element: <BirthNumberGeneratorPage />,
            },
            {
              path: "tags",
              element: <Tags />,
            },
            {
              path: "time-report",
              element: <TimeReport />,
            },
            {
              path: "settings",
              element: <SettingsPage />,
            },
          ],
        },
      ],
    },
  ]);

  return (
    <>
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        <Toaster />
        <RouterProvider router={router}></RouterProvider>
      </ThemeProvider>
    </>
  );
}

export default App;
