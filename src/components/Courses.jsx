import React, { useState } from "react";
import { toast } from "react-toastify";
import Slider from "react-slick";
import dummyCourses from "../data/AllCourses"; // Importing the dummy courses data

const CustomArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <button
      type="button"
      className={className}
      style={style}
      onClick={onClick}
    />
  );
};

const sliderSettings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1, // show 1 image at a time
  slidesToScroll: 1,
  arrows: true,
  adaptiveHeight: true,
  nextArrow: <CustomArrow direction="right" />,
  prevArrow: <CustomArrow direction="left" />,
};

const CoursesSection = () => {
  const [selectedCourse, setSelectedCourse] = useState(null);
  const [showContactPopup, setShowContactPopup] = useState(false);

  const [courseForm, setCourseForm] = useState({
    fullName: "",
    email: "",
    mobile: "",
    projectTitle: "",
    description: "",
  });

  const handleProjectChange = (e) =>
    setCourseForm({ ...courseForm, [e.target.name]: e.target.value });

  const handleProjectSubmit = async (e) => {
    e.preventDefault();

    try {
      const resp = await fetch("/api/create-project", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...courseForm,
          projectTitle: selectedCourse?.title || "",
          techStack: selectedCourse?.projects?.join(", ") || "", // join array to string
        }),
      });

      if (!resp.ok) throw new Error("Request failed");

      toast.success("Project request sent successfully!");
      setCourseForm({
        fullName: "",
        email: "",
        mobile: "",
        projectTitle: "",
        description: "",
      });
      setShowContactPopup(false);
    } catch (err) {
      console.error(err);
      toast.error("Something went wrong. Try again!");
    }
  };

  return (
    <section className="py-16 px-4 md:px-12 bg-gray-950 text-white">
      <h2 className="text-3xl font-bold text-center mb-6">All Courses</h2>
      <p className="text-center text-gray-400 mb-10">
        Explore a variety of courses designed to boost your skills and guide
        your learning journey in tech.
      </p>

      <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
        {dummyCourses.map((course) => (
          <div
            key={course.id}
            className="bg-gray-800 p-5 rounded-xl text-white shadow hover:shadow-lg transition flex flex-col h-full"
          >
            <img
              loading="lazy"
              src={course.images[0]}
              alt={course.title}
              className="w-full aspect-video object-cover rounded-lg mb-3"
            />
            <h3 className="text-xl font-bold text-yellow-400">
              {course.title}
            </h3>
            <p className="text-sm text-gray-300 my-3 flex-grow">
              {course.description}
            </p>
            <div className="mt-auto">
              <div className="flex flex-wrap gap-2 mb-4 items-center">
                <span className="text-xs font-bold text-yellow-400">
                  Projects:
                </span>
                {course.projects.map((tech, idx) => (
                  <span
                    key={idx}
                    className="bg-yellow-500 text-black px-2 py-1 rounded text-xs"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <button
                onClick={() => setSelectedCourse(course)}
                className="bg-yellow-500 text-black font-semibold px-4 py-2 rounded hover:bg-yellow-600"
              >
                Read More
              </button>
            </div>
          </div>
        ))}
      </div>

      {selectedCourse && (
        <div className="fixed inset-0 bg-black bg-opacity-70 z-50 flex items-center justify-center">
          <div className="bg-gray-900 max-w-2xl w-full p-0 rounded-xl relative overflow-y-auto max-h-[90vh] overflow-x-hidden scrollbar-hide">
            {/* Sticky Header Section (Close button + Title + Slider) */}
            <div className="sticky top-0 z-20 bg-gray-900 p-6 pb-2">
              <div className="flex justify-between items-start">
                <h2 className="text-2xl font-bold text-yellow-400">
                  {selectedCourse.title}
                </h2>
                <button
                  onClick={() => setSelectedCourse(null)}
                  className="text-white text-2xl"
                >
                  ×
                </button>
              </div>
            </div>

            <div className="mt-4">
              <div className="slider-dots-white pb-5">
                {" "}
                {/* pb‑8 reserves space for the dots */}
                <Slider {...sliderSettings}>
                  {selectedCourse.images.map((img, idx) => (
                    <img
                      loading="lazy"
                      key={idx}
                      src={img}
                      alt={`Screenshot ${idx + 1}`}
                      className="w-full rounded-xl aspect-video object-cover"
                    />
                  ))}
                </Slider>
              </div>
            </div>

            {/* Scrollable Content */}
            <div className="px-6 pb-6">
              {/* Details Title */}
              <h2 className="text-2xl font-extrabold text-yellow-400 mb-4 text-center drop-shadow">
                Complete Core Python Course Overview
              </h2>
              {Array.isArray(selectedCourse.details) ? (
                <div className="mt-4 space-y-3">
                  {selectedCourse.details.map((para, idx) => (
                    <p
                      key={idx}
                      className="text-gray-300 text-base leading-relaxed"
                    >
                      {para}
                    </p>
                  ))}
                </div>
              ) : (
                <p className="mt-4 text-gray-300">{selectedCourse.details}</p>
              )}

              {/* <div className="flex flex-wrap gap-2 mt-3">
                {selectedCourse.projects.map((tech, idx) => (
                  <span
                    key={idx}
                    className="bg-yellow-500 text-black px-2 py-1 rounded text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div> */}

              <div className="mt-6">
                <h3 className="text-lg font-bold text-yellow-400 mb-2">
                  Course Structure
                </h3>
                <div className="space-y-4">
                  {selectedCourse.course_structure &&
                    selectedCourse.course_structure.map((unit, idx) => (
                      <div key={idx} className="bg-gray-800 rounded-lg p-4">
                        <div className="flex items-center mb-1">
                          <span className="bg-yellow-500 text-black font-bold px-2 py-1 rounded mr-2 text-xs">
                            Unit {unit.unit}
                          </span>
                          <span className="font-semibold text-white text-base">
                            {unit.title}
                          </span>
                        </div>
                        <ul className="list-disc list-inside ml-4 mt-2 space-y-1 text-gray-300 text-sm">
                          {unit.topics.map((topic, tIdx) =>
                            typeof topic === "string" ? (
                              <li key={tIdx}>{topic}</li>
                            ) : (
                              <li key={tIdx}>
                                <span className="font-semibold text-yellow-300">
                                  {topic.topic_name}
                                </span>
                                {Array.isArray(topic.mini_topic) && (
                                  <ul className="check-mark-list list-inside ml-6 mt-1">
                                    {topic.mini_topic.map((mini, mIdx) => (
                                      <li key={mIdx} className="text-gray-50">
                                        {mini}
                                      </li>
                                    ))}
                                  </ul>
                                )}
                              </li>
                            )
                          )}
                        </ul>
                      </div>
                    ))}
                </div>
              </div>

              {/* Projects Section - visually focused */}
              <div className="mb-4 mt-6">
                <div className="bg-gray-800 rounded-lg p-4 shadow flex flex-col items-start">
                  <div className="flex items-center mb-2">
                    <svg
                      className="w-5 h-5 text-yellow-400 mr-2"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M9 17v-2a4 4 0 014-4h6M9 17H7a4 4 0 01-4-4V7a4 4 0 014-4h10a4 4 0 014 4v6a4 4 0 01-4 4h-2"
                      />
                    </svg>
                    <span className="text-yellow-400 font-semibold text-base">
                      Projects Included
                    </span>
                  </div>
                  <div className="flex flex-wrap gap-2 mt-1">
                    {selectedCourse.projects.map((tech, idx) => (
                      <span
                        key={idx}
                        className="bg-yellow-500 text-black px-3 py-1 rounded-full text-xs font-semibold shadow-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Price Section - visually focused */}
              <div className="flex items-end gap-3 mb-4 mt-2">
                <span className="text-3xl font-extrabold text-yellow-400 drop-shadow">
                  {selectedCourse.offerPrice}
                </span>
                <span className="line-through text-gray-400 text-lg mb-1">
                  {selectedCourse.originalPrice}
                </span>
                <span className="bg-green-600 text-white text-xs font-bold px-2 py-1 rounded ml-2">
                  Best Offer
                </span>
              </div>

              <button
                onClick={() => setShowContactPopup(true)}
                className="mt-2 bg-yellow-500 text-black font-semibold px-4 py-2 rounded hover:bg-yellow-600"
              >
                Join Now
              </button>
            </div>
          </div>
        </div>
      )}

      {showContactPopup && (
        <div className="fixed inset-0 bg-black bg-opacity-70 z-50 flex items-center justify-center">
          <div className="bg-gray-900 max-w-lg w-full p-6 rounded-xl relative">
            <button
              onClick={() => setShowContactPopup(false)}
              className="absolute top-4 right-4 text-white text-xl"
            >
              ×
            </button>

            <h2 className="text-2xl font-bold text-yellow-400 mb-4">
              Contact to Create: {selectedCourse?.title}
            </h2>

            <form className="space-y-4" onSubmit={handleProjectSubmit}>
              <input
                name="fullName"
                value={courseForm.fullName}
                onChange={handleProjectChange}
                className="w-full p-3 rounded bg-gray-800 text-white"
                placeholder="Your Name"
                required
              />
              <input
                type="email"
                name="email"
                value={courseForm.email}
                onChange={handleProjectChange}
                className="w-full p-3 rounded bg-gray-800 text-white"
                placeholder="Your Email"
                required
              />
              <input
                type="tel"
                name="mobile"
                value={courseForm.mobile}
                onChange={handleProjectChange}
                className="w-full p-3 rounded bg-gray-800 text-white"
                placeholder="Mobile Number"
                required
              />
              <input
                type="text"
                name="projectTitle"
                value={selectedCourse?.title || ""}
                readOnly
                className="w-full p-3 rounded bg-gray-800 text-white"
                placeholder="Project Title"
              />
              <textarea
                name="description"
                value={courseForm.description}
                onChange={handleProjectChange}
                className="w-full p-3 rounded bg-gray-800 text-white"
                placeholder="Any other queries..."
                required
              />
              <button
                type="submit"
                className="bg-yellow-500 text-black font-semibold px-4 py-2 rounded hover:bg-yellow-600"
              >
                Submit Request
              </button>
            </form>
          </div>
        </div>
      )}
    </section>
  );
};

export default CoursesSection;
