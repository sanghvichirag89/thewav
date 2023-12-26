import React from "react";
import "./App.css";
import Landing from "./pages/Landing/Landing";
import Contact from "./pages/Contact/Contact";

//* Routing Module:::Version [@_6.4_] of react-router
import { useLocation, useRoutes } from "react-router-dom";

//! Another style to implement routes...
// const router = createBrowserRouter(
//   createRoutesFromElements(
//     <Route path="/" element={<Landing />}>
//     <Route path="contact" element={<Contact />} />
//     <Route path="branding" element={<Branding />} />
//     <Route path="performance_marketing" element={<PerformanceMarketing />} />
//     <Route path="uxui" element={<UxUi />} />
//     </Route>
//   )
// );

function App() {
  const location = useLocation();

  const element = useRoutes([
    {
      path: "/",
      element: <Landing />,
    },
    {
      path: "/contact",
      element: <Contact />,
    },
  ]);

  if (!element) return null;

  // return (
  //   <AnimatePresence mode="sync">
  //     {React.cloneElement(element, { key: location.pathname })}
  //   </AnimatePresence>
  // );

  return <>{React.cloneElement(element, { key: location.pathname })}</>;
}

export default App;
