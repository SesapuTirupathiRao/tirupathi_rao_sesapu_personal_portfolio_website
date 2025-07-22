import React, { useState } from "react";
import { toast } from "react-toastify";
import Slider from "react-slick";
import dummyCourses from "../data/AllCourses"; // Importing the dummy courses data

const sliderSettings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1, // show 1 image at a time
  slidesToScroll: 1,
  arrows: true,
  adaptiveHeight: true,
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
      <h2 className="text-3xl font-bold text-center mb-6">Sample Projects</h2>
      <p className="text-center text-gray-400 mb-10">
        A collection of personal projects built for practice and skill
        development.
      </p>

      <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
        {dummyCourses.map((course) => (
          <div
            key={course.id}
            className="bg-gray-800 p-5 rounded-xl text-white shadow hover:shadow-lg transition flex flex-col h-full"
          >
            <img
              src={course.images[0]}
              alt={course.title}
              className="w-full aspect-video object-cover rounded-lg mb-3"
            />
            <h3 className="text-xl font-bold text-yellow-400">
              {course.title}
            </h3>
            <p className="text-sm text-gray-300 my-3 flex-grow">
              {course.details}
            </p>
            <div className="mt-auto">
              <div className="flex flex-wrap gap-2 text-xs mb-4">
                <span className="bg-gray-900 px-2 py-1 rounded">Projects:</span>
                {course.projects.map((tech, idx) => (
                  <span key={idx} className="bg-gray-700 px-2 py-1 rounded">
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

              <div className="mt-4">
                <div className="slider-dots-white pb-5">
                  {" "}
                  {/* pb‑8 reserves space for the dots */}
                  <Slider {...sliderSettings}>
                    {selectedCourse.images.map((img, idx) => (
                      <img
                        key={idx}
                        src={img}
                        alt={`Screenshot ${idx + 1}`}
                        className="w-full rounded-xl aspect-video object-cover"
                      />
                    ))}
                  </Slider>
                </div>
              </div>
            </div>

            {/* Scrollable Content */}
            <div className="px-6 pb-6">
              <p className="mt-4 text-gray-300">{selectedCourse.details}</p>

              <div className="flex flex-wrap gap-2 mt-3">
                {selectedCourse.projects.map((tech, idx) => (
                  <span
                    key={idx}
                    className="bg-yellow-500 text-black px-2 py-1 rounded text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div>{selectedCourse.structure}</div>

              <button
                onClick={() => setShowContactPopup(true)}
                className="mt-6 bg-yellow-500 text-black font-semibold px-4 py-2 rounded hover:bg-yellow-600"
              >
                Create the Project Like This
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
