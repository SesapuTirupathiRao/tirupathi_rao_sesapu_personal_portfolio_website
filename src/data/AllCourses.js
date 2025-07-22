import { courseImages } from "../assets/images";

const dummyCourses = [
  {
    id: 1,
    title: "Core Python",
    description:
      "Master Python from scratch: fundamentals, data types, control flow, OOP, functions, modules, packages, and real-world projects—ideal for beginners and those looking to strengthen their programming foundation.",
    details: [
      "This Core Python course provides a thorough introduction to programming and Python, starting from the very basics. The journey begins with an overview of programming languages, their types, and paradigms, giving you a strong foundation for understanding how Python fits into the broader world of software development.",
      "You’ll then explore Python’s history, features, and real-world applications, followed by hands-on guidance for installing Python and using popular IDEs. The course covers essential language fundamentals such as keywords, identifiers, data types, and syntax, and explains the differences between Python and other languages like Java.",
      "You’ll learn to write and run Python programs in both interactive and scripting modes, including how to add comments and use different editors. Key topics include working with variables, string formatting, input/output operations, and data conversion functions.",
      "The course then delves into Python’s operators, covering arithmetic, comparison, assignment, logical, bitwise, shift, membership, identity, and ternary operators, as well as operator precedence and the difference between 'is' and '=='.",
      "You’ll master control statements, including conditional statements (if, if-else, if-elif-else, nested-if), loop statements (for, while, nested loops), and branching statements (break, continue, pass, return). The course also introduces data structures, explaining sequences (strings, lists, tuples) and non-sequences (sets, frozensets, dictionaries), along with their importance and applications.",
      "Function programming is covered in detail, from defining and calling functions to understanding arguments, lambda functions, nested functions, and the use of global and non-local variables. You’ll also learn about closures, decorators, and generators.",
      "Finally, the course explores modular programming with Python modules and packages, including creating and importing modules, using module aliases, and understanding built-in module properties. You’ll learn how to organize projects into packages, the difference between packages and folders, the role of the __init__.py file, and how to use PIP for package management.",
      "By the end of this course, you’ll have a solid grasp of Python’s core concepts and be ready to build your own projects or continue to more advanced topics.",
    ],
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
    images: [courseImages.python], // Using the imported image
  },
];

export default dummyCourses;
