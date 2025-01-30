import React from "react";
import { Route, Routes } from "react-router-dom";
import NotFound from "./pages/NotFound";
import Home from "./pages/Home";
import Courses from "./components/Courses";
import Support from "./pages/Support";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import SingleCourse from "./components/SingleCourse";
import Terms from "./pages/Terms";
import Privacy from "./pages/Privacy";
import Lectures from "./components/Lectures";

const AppRoutes = ({ data }) => {
  // useEffect(() => {
  //   const user = JSON.parse(localStorage.getItem("user"));
  //   if (user) {
  //     navigate("/home");
  //   } else {
  //     navigate("/signup");
  //   }
  // }, []);

  const { signUpData, loginData, courseData } = data;
  return (
    <Routes>
      <Route path="/signup" element={<Signup signUpData={signUpData} />} />
      <Route path="/login" element={<Login loginData={loginData} />} />
      <Route path="/" element={<Home data={data} />} />
      <Route path="/courses" element={<Courses courseData={courseData} />} />
      <Route path="/support" element={<Support />} />
      <Route
        path="/course/:slug"
        element={<SingleCourse singleCourseData={courseData?.courseCards} />}
      />
      <Route path="/terms" element={<Terms />} />
      <Route path="/policy" element={<Privacy />} />
      <Route
        path="/course/:slug/lectures/:id"
        element={<Lectures singleCourseData={courseData?.courseCards} />}
      />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default AppRoutes;
