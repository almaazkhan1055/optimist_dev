import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import Hero from "./Hero";
import { MdOutlineShoppingCart } from "react-icons/md";
import { FaPlay } from "react-icons/fa";
import Video from "./Video";
import AboutSingleCourse from "./AboutSingleCourse";
import CourseContent from "./CourseContent";
import TutorCourseReview from "./TutorCourseReview";
import CourseLength from "./CourseLength";
import Review from "./Review";
import Policy from "./Policy";
import TutorDetails from "./TutorDetails";
import Faq from "./Faq";
import Plans from "./Plans";
import CourseCurriculum from "./CourseCurriculum";

const SingleCourse = ({ singleCourseData }) => {
  const { slug } = useParams();

  const heroData = singleCourseData.find((course) => course.slug === slug);

  const modifiedData = {
    ...heroData,
    btnText: ["Watch Promo", "Enroll in Course"],
  };

  if (!heroData) {
    return <div>Course not found</div>;
  }

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);

  return (
    <div className="bg-[white]">
      <Hero
        heroData={modifiedData}
        slug={slug}
        icons={[<MdOutlineShoppingCart />, <FaPlay />]}
      />
      <Video videoData={modifiedData} />
      <AboutSingleCourse aboutSingleCourseData={modifiedData?.aboutCourse} />
      <CourseContent courseContentData={modifiedData} />
      <TutorCourseReview tutorCourseReview={modifiedData} />
      <CourseLength courseLength={modifiedData} />
      <CourseCurriculum
        courseCurriculumData={modifiedData?.courseCurriculumData}
      />
      <AboutSingleCourse
        aboutSingleCourseData={modifiedData?.coursePrerequisites}
        textAlign="center"
        coursePrerequisites
      />
      <Review reviewData={modifiedData?.reviewData} />
      <Policy singleCourse />
      <TutorDetails tutorDetailsData={modifiedData} />
      <Faq faqData={modifiedData?.courseFaqData} />
      <Plans plansCardData={modifiedData?.coursePlansCardData} singleCourse />
    </div>
  );
};

export default SingleCourse;
