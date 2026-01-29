import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { images } from "../assets/images";
import { toast } from "react-toastify";

const sampleProjects = [
  {
    id: 1,
    title: "Hostel Management System",
    tech: ["Python", "Tkinter", "MySQL"],
    shortDescription:
      "A Python Tkinter desktop app with MySQL integration to manage hostel operations like user login, room allotment, visitor tracking, and membership-based access control.",
    fullDescription:
      "The Hostel Management System is a Python Tkinter desktop application integrated with MySQL to streamline hostel operations. It features secure user login and registration, gender-specific room allocation, bed availability validation, and visitor check-in/check-out tracking. Admins can add new rooms, manage resident movements, and view categorized records of both residents and visitors. The system includes a leave room feature to update availability and a structured logout process. It’s secured with system verification, ensuring only authorized devices can run it, and offers both monthly and yearly membership plans. Upon expiry, access is restricted until renewal. This application is ideal for hostel administrators seeking a secure, efficient, and user-friendly desktop management solution.",
    images: [
      images.hms0,
      images.hms1,
      images.hms2,
      images.hms3,
      images.hms4,
      images.hms5,
      images.hms6,
    ],
  },
  {
    id: 2,
    title: "Scientific Calculator",
    tech: ["Python", "Tkinter"],
    shortDescription:
      "A modern Python Tkinter scientific calculator with dark theme, supporting basic and advanced functions, memory operations, history, degree/radian mode, and full keyboard input.",
    fullDescription:
      "The Scientific Calculator is a Python Tkinter desktop application designed to perform a wide range of mathematical operations with ease. It supports both basic arithmetic and advanced scientific functions such as trigonometry, logarithms, powers, roots, and constants like π and e. The calculator includes memory operations (M+, M-, MR, MC), history tracking, and a last answer recall feature. It also offers a degree/radian mode switch for trigonometric calculations. The user interface is modern and sleek with a dark theme and responsive layout. Additionally, keyboard support and tooltips enhance user experience and accessibility.",
    images: [images.scl1],
  },
];

const sliderSettings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1, // show 1 image at a time
  slidesToScroll: 1,
  arrows: true,
  adaptiveHeight: true,
};

const SampleProjects = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [showContactPopup, setShowContactPopup] = useState(false);

  const [projectForm, setProjectForm] = useState({
    fullName: "",
    email: "",
    mobile: "",
    projectTitle: "",
    description: "",
  });

  const handleProjectChange = (e) =>
    setProjectForm({ ...projectForm, [e.target.name]: e.target.value });

  const handleProjectSubmit = async (e) => {
    e.preventDefault();

    try {
      const resp = await fetch("/api/create-project", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...projectForm,
          projectTitle: selectedProject?.title || "",
          techStack: selectedProject?.tech?.join(", ") || "", // join array to string
        }),
      });

      if (!resp.ok) throw new Error("Request failed");

      toast.success("Project request sent successfully!");
      setProjectForm({
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
    <section className="py-16 px-4 md:px-12 bg-gray-900 text-white">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
          Sample Projects
        </h2>
        <p className="text-xl text-gray-300 max-w-3xl mx-auto">
          A collection of personal projects built for practice and skill
          development.
        </p>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
        {sampleProjects.map((project) => (
          <div
            key={project.id}
            className="bg-gray-800 p-5 rounded-xl text-white shadow hover:shadow-lg transition"
          >
            <img
              src={project.images[0]}
              alt={project.title}
              className="w-full aspect-video object-cover rounded-lg mb-3"
            />
            <h3 className="text-xl font-bold text-yellow-400">
              {project.title}
            </h3>
            <p className="text-sm text-gray-300 mt-1">
              {project.shortDescription}
            </p>
            <div className="flex flex-wrap gap-2 mt-2 text-xs">
              {project.tech.map((tech, idx) => (
                <span key={idx} className="bg-gray-700 px-2 py-1 rounded">
                  {tech}
                </span>
              ))}
            </div>
            <button
              onClick={() => setSelectedProject(project)}
              className="mt-4 bg-yellow-500 text-black font-semibold px-4 py-2 rounded hover:bg-yellow-600"
            >
              Read More
            </button>
          </div>
        ))}
      </div>

      {selectedProject && (
        <div className="fixed inset-0 bg-black bg-opacity-70 z-50 flex items-center justify-center">
          <div className="bg-gray-900 max-w-2xl w-full p-0 rounded-xl relative overflow-y-auto max-h-[90vh] overflow-x-hidden scrollbar-hide">
            {/* Sticky Header Section (Close button + Title + Slider) */}
            <div className="sticky top-0 z-20 bg-gray-900 p-6 pb-2">
              <div className="flex justify-between items-start">
                <h2 className="text-2xl font-bold text-yellow-400">
                  {selectedProject.title}
                </h2>
                <button
                  onClick={() => setSelectedProject(null)}
                  className="text-white text-2xl"
                >
                  ×
                </button>
              </div>

              {/* Sticky Slider */}
              <div className="mt-4">
                <div className="slider-dots-white pb-5">
                  {" "}
                  {/* pb‑8 reserves space for the dots */}
                  <Slider {...sliderSettings}>
                    {selectedProject.images.map((img, idx) => (
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
              <p className="mt-4 text-gray-300">
                {selectedProject.fullDescription}
              </p>

              <div className="flex flex-wrap gap-2 mt-3">
                {selectedProject.tech.map((tech, idx) => (
                  <span
                    key={idx}
                    className="bg-yellow-500 text-black px-2 py-1 rounded text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>

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
              Contact to Create: {selectedProject?.title}
            </h2>

            <form className="space-y-4" onSubmit={handleProjectSubmit}>
              <input
                name="fullName"
                value={projectForm.fullName}
                onChange={handleProjectChange}
                className="w-full p-3 rounded bg-gray-800 text-white"
                placeholder="Your Name"
                required
              />
              <input
                type="email"
                name="email"
                value={projectForm.email}
                onChange={handleProjectChange}
                className="w-full p-3 rounded bg-gray-800 text-white"
                placeholder="Your Email"
                required
              />
              <input
                type="tel"
                name="mobile"
                value={projectForm.mobile}
                onChange={handleProjectChange}
                className="w-full p-3 rounded bg-gray-800 text-white"
                placeholder="Mobile Number"
                required
              />
              <input
                type="text"
                name="projectTitle"
                value={selectedProject?.title || ""}
                readOnly
                className="w-full p-3 rounded bg-gray-800 text-white"
                placeholder="Project Title"
              />
              <textarea
                name="description"
                value={projectForm.description}
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

export default SampleProjects;
