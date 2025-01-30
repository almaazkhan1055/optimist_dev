import React, { useEffect } from "react";
import Button from "../components/Button";
import { Link, useNavigate } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const Signup = ({ signUpData }) => {
  const navigate = useNavigate();

  const validationSchema = Yup.object().shape({
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
    fullname: Yup.string()
      .required("Fullname is required")
      .matches(/^[a-zA-Z\s]+$/, "Fullname must only contain letters"),
  });

  const initialValues = {
    fullname: "",
    email: "",
  };

  const handleSubmit = (e) => {
    localStorage.setItem(
      "user",
      JSON.stringify({
        fullname: e.fullname,
        email: e.email,
      })
    );
    navigate("/login");
  };

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    if (user) {
      navigate("/");
    } else {
      navigate("/signup");
    }
     window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);

  return (
    <div className="flex items-center justify-center w-full h-screen bg-[--goat-milk]">
      <div className="w-[346px] max-w-full max-lg:px-5">
        <h2 className="text-3xl font-semibold text-[--squid-ink] text-center">
          {signUpData?.heading}
        </h2>

        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {({ isSubmitting }) => (
            <Form>
              <div className="mt-6">
                {signUpData?.inputs.map((input, index) => (
                  <div key={index} className="mb-4">
                    <label className="block text-sm text-[#646464]">
                      {input?.title}
                    </label>
                    <Field
                      type={input?.type || "text"}
                      name={input.name || "name"}
                      placeholder={input.placeholder}
                      className="w-full p-2 mt-1 border border-[#646464] rounded text-[#646464] focus:border-[--cornflower-blue] focus:shadow-md focus:outline-none"
                    />
                    <ErrorMessage
                      name={input.name || "name"}
                      component="div"
                      className="text-sm text-red-500"
                    />
                  </div>
                ))}
              </div>

              <div className="flex gap-2 mt-4">
                <Field
                  type="checkbox"
                  name="rememberMe"
                  className="w-5 h-5 border-2 border-gray-900 rounded focus:ring-[--cornflower-blue]"
                />
                <p className="text-sm text-[#646464]">{signUpData?.terms}</p>
              </div>

              <p className="mt-4 text-xs text-[#646464]">
                {signUpData?.disclaimer}
              </p>

              <Button
                bgColor="--checkbox-color"
                text={signUpData?.buttonText}
                py="1rem"
                px="2rem"
                color="--goat-milk"
                type="submit"
                disabled={isSubmitting}
                width="full"
                rounded="10px"
              />

              <p className="mt-4 text-sm font-medium text-center text-[#646464]">
                {signUpData?.userExists}{" "}
                <Link
                  to="/login"
                  type="button"
                  className="underline hover:no-underline focus:outline-none"
                >
                  Log in
                </Link>
              </p>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default Signup;
