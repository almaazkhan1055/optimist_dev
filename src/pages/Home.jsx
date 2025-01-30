import React, { useEffect, useRef } from "react";
import Hero from "../components/Hero";
import Testimonial from "../components/Testimonial";
import Policy from "../components/Policy";
import Plans from "../components/Plans";
import Courses from "../components/Courses";
import Review from "../components/Review";
import Faq from "../components/Faq";
import { useNavigate } from "react-router-dom";
import Video from "../components/Video";

const Home = ({ data }) => {
  const {
    heroData,
    videoData,
    testimonialData,
    policyData,
    plansCardData,
    courseData,
    reviewData,
    faqData,
  } = data;

  const planRef = useRef(null);
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("user"));

  useEffect(() => {
    if (!user) navigate("/signup");
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);

  return (
    <>
      <Hero heroData={heroData} planRef={planRef} />
      <Video videoData={videoData} />
      <Testimonial testimonialData={testimonialData} />
      <Policy policyData={policyData} />
      <Plans plansCardData={plansCardData} planRef={planRef} />
      <Courses courseData={courseData} />
      <Review reviewData={reviewData} />
      <Faq faqData={faqData} />
      <Plans plansCardData={plansCardData} />
    </>
  );
};

export default Home;
