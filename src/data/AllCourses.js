import { courseImages } from "../assets/images";

const dummyCourses = [
  {
    id: 1,
    title: "Core Python",
    description: "Master the fundamentals of Python programming.",
    details:
      "This course covers Python basics, data types, control flow, functions, and basic OOP.",
    structure: "Day 1: Basics\nDay 2: Data Types\nDay 3: Control Flow\n...",
    course_structure: [
      {
        unit: 1,
        title: "Introduction to Languages",
        topics: [
          "What is Languages",
          "Types of Languages",
          "Translators",
          "Scripting Languages",
          "Programming Language",
          "Programming Paradigm",
        ],
      },
      {
        unit: 2,
        title: "Introduction to Python",
        topics: [
          "What is Python",
          "History of Python",
          "Implementation of Python",
          "Applications",
          "Features of Python",
          "Versions",
        ],
      },
      {
        unit: 3,
        title: "Python Software’s",
        topics: [
          "Python Installation Process",
          "Online Python IDE",
          "Python Real-time IDE’s like PyCharm, VS Code",
        ],
      },
      {
        unit: 4,
        title: "Python Language Fundamentals",
        topics: [
          "Keywords",
          "Identifiers",
          "Data Types",
          "Python vs Java",
          "Python Syntax",
        ],
      },
      {
        unit: 5,
        title: "Different Modes of Python",
        topics: [
          "Interactive Mode",
          "Scripting Mode",
          "First Python Application",
          "Comments in Python",
          "Edit and Run Python Program without IDE",
          "Edit and Run Python Program with IDE",
        ],
      },
      {
        unit: 6,
        title: "Python variables",
        topics: [
          "Introduction to variables",
          "String Formatting in Python",
          "Input and Output operations",
          "Data conversion functions",
        ],
      },
      {
        unit: 7,
        title: "Operators",
        topics: [
          "What is Operator and Operand",
          "Arithmetic Operators",
          "Comparison Operators",
          "Assignment Operators",
          "Logical Operators",
          "Bitwise Operators",
          "Shift Operators",
          "Membership Operators",
          "Identity Operators",
          "Ternary Operators",
          "Operator Precedence",
          "Difference between 'is' vs '=='",
        ],
      },
      {
        unit: 8,
        title: "Control Statements",
        topics: [
          {
            sub_topic: 1,
            topic_name: "Conditional Control Statements",
            mini_topic: ["if", "if-else", "if-elif-else", "nested-if"],
          },
          {
            sub_topic: 2,
            topic_name: "Loop Control Statements",
            mini_topic: ["for", "while", "nested loops"],
          },
          {
            sub_topic: 3,
            topic_name: "Branching Statements",
            mini_topic: ["break", "continue", "pass", "return"],
          },
        ],
      },
      {
        unit: 9,
        title: "Data Structures",
        topics: [
          "Introduction",
          "Importance of Data Structures",
          "Applications of Data Structures",
          "Types of Collections",
          "\tSequence",
          "\t\tstrings, list, tuple",
          "\tNon sequence",
          "\t\tset, frozen set, dictionary",
        ],
      },
      {
        unit: 10,
        title: "Functions",
        topics: [
          "What is Function",
          "syntax and writing function",
          "Advantages of Functions",
          "calling or invoking function",
          "Python argument type functions",
          "‘pass’ keyword in functions",
          "Lambda functions",
          "Nested functions",
          "Non local variables, global variables",
          "Closures",
          "Decorators",
          "Generators",
        ],
      },
      {
        unit: 11,
        title: "Python Modules",
        topics: [
          "Importance of modular programming",
          "What is module",
          "Types of modules",
          "User defines modules creation",
          "Functions based modules",
          "Class based modules",
          "Importing and Connecting modules",
          "Module alias/ Renaming module ",
          "Built in properties of module",
        ],
      },
      {
        unit: 12,
        title: "Packages",
        topics: [
          "Organizing python project into packages",
          "Types of packages",
          "Package vs Folder",
          " init .py file",
          "Importing package",
          "PIP",
        ],
      },
    ],
    projects: ["Calculator", "Guess the Number"],
    offerPrice: "₹499",
    originalPrice: "₹1999",
    thumbnail: "https://source.unsplash.com/featured/?python",
    images: [courseImages.python], // Using the imported image
  },
];

export default dummyCourses;
