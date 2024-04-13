const courses = [
    { category: "GATE", subCategory: "Computer Organization and Architecture", topic: "Computer Organization and Architecture Syllabus Discussion for GATE", creator: "Gate Smashers" },
    { category: "GATE", subCategory: "Computer Organization and Architecture", topic: "Von Neumann's Architecture | Stored Memory Concept", creator: "Gate Smashers" },
    { category: "GATE", subCategory: "Computer Organization and Architecture", topic: "Various General Purpose Registers", creator: "Gate Smashers" },
    { category: "GATE", subCategory: "Computer Organization and Architecture", topic: "Types of Buses (Address, Data and Control)", creator: "Gate Smashers" },
    { category: "GATE", subCategory: "Computer Organization and Architecture", topic: "Common bus system using multiplexer", creator: "Gate Smashers" },
    { category: "GATE", subCategory: "Computer Organization and Architecture", topic: "Common Bus system", creator: "Gate Smashers" },
    { category: "GATE", subCategory: "Computer Organization and Architecture", topic: "Types of Instructions in General Purpose Computer", creator: "Gate Smashers" },
    { category: "GATE", subCategory: "Computer Organization and Architecture", topic: "Data Transfer Instructions", creator: "Gate Smashers" },
    { category: "GATE", subCategory: "Computer Organization and Architecture", topic: "Arithmetic Instructions(Data Manipulation)", creator: "Gate Smashers" },
    { category: "GATE", subCategory: "Computer Organization and Architecture", topic: "Logical Instructions(Data Manipulation)", creator: "Gate Smashers" },
    { category: "GATE", subCategory: "Data Structures and Algorithms", topic: "Data Structures and Algorithms using Python", creator: "CampusX" },
    { category: "GATE", subCategory: "Data Structures and Algorithms", topic: "", creator: "CampusX" }, // Placeholder
    { category: "GATE", subCategory: "Data Structures and Algorithms", topic: "", creator: "CampusX" }, // Placeholder
    { category: "GATE", subCategory: "Data Structures and Algorithms", topic: "", creator: "CampusX" }, // Placeholder
    { category: "GATE", subCategory: "Data Structures and Algorithms", topic: "", creator: "CampusX" }, // Placeholder
    { category: "GATE", subCategory: "Data Structures and Algorithms", topic: "", creator: "CampusX" }, // Placeholder
    { category: "GATE", subCategory: "Data Structures and Algorithms", topic: "", creator: "CampusX" }, // Placeholder
    { category: "GATE", subCategory: "Data Structures and Algorithms", topic: "", creator: "CampusX" }, // Placeholder
    { category: "GATE", subCategory: "Data Structures and Algorithms", topic: "", creator: "CampusX" }, // Placeholder
    { category: "GATE", subCategory: "Data Structures and Algorithms", topic: "", creator: "CampusX" }, // Placeholder
    { category: "GATE", subCategory: "Data Structures and Algorithms", topic: "", creator: "CampusX" }, // Placeholder
    { category: "GATE", subCategory: "Digital Electronics", topic: "What is Signal?", creator: "Neso Academy" },
    { category: "GATE", subCategory: "Digital Electronics", topic: "What is an Analog Signal?", creator: "Neso Academy" },
    { category: "GATE", subCategory: "Digital Electronics", topic: "What is Digital Signal?", creator: "Neso Academy" },
    { category: "GATE", subCategory: "Digital Electronics", topic: "Need of Digital Signals", creator: "Neso Academy" },
    { category: "GATE", subCategory: "Digital Electronics", topic: "Introduction to Digital Electronics", creator: "Neso Academy" },
    { category: "GATE", subCategory: "Digital Electronics", topic: "Switch and Bits Intuition", creator: "Neso Academy" },
    { category: "GATE", subCategory: "Digital Electronics", topic: "Introduction to Boolean Algebra (Part 1)", creator: "Neso Academy" },
    { category: "GATE", subCategory: "Digital Electronics", topic: "Introduction to Boolean Algebra (Part 2)", creator: "Neso Academy" },
    { category: "GATE", subCategory: "Digital Electronics", topic: "Boolean Algebra Examples (Part 2)", creator: "Neso Academy" },
    { category: "GATE", subCategory: "Digital Electronics", topic: "Redundancy Theorem (Boolean Algebra Trick)", creator: "Neso Academy" },
    { category: "GATE", subCategory: "Digital Electronics", topic: "Sum of Products (Part 1)", creator: "Neso Academy" },
    { category: "GATE", subCategory: "Digital Electronics", topic: "Sum of Products (Part 2)", creator: "Neso Academy" },
    { category: "GATE", subCategory: "Digital Electronics", topic: "Product of Sums (Part 1) | POS Form", creator: "Neso Academy" },
    { category: "GATE", subCategory: "Digital Electronics", topic: "Product of Sums (Part 2) | POS Form", creator: "Neso Academy" },
    { category: "GATE", subCategory: "Digital Electronics", topic: "SOP and POS Form Examples", creator: "Neso Academy" },
    { category: "GATE", subCategory: "Digital Electronics", topic: "Minimal to Canonical Form Conversion (Part 1)", creator: "Neso Academy" },
    { category: "GATE", subCategory: "Digital Electronics", topic: "Minimal to Canonical Form Conversion (Part 2)", creator: "Neso Academy" },
    { category: "GATE", subCategory: "Digital Electronics", topic: "Examples & Tricks (SOP and POS Forms)", creator: "Neso Academy" },
    { category: "GATE", subCategory: "Discrete Mathematics", topic: "Motivation & Introduction to Propositional Logic", creator: "Neso Academy" },
    { category: "GATE", subCategory: "Discrete Mathematics", topic: "Propositional Logic, Propositional Variables & Compound Propositions", creator: "Neso Academy" },
    { category: "GATE", subCategory: "Discrete Mathematics", topic: "Logical Operators − Negation, Conjunction & Disjunction", creator: "Neso Academy" },
    { category: "GATE", subCategory: "Discrete Mathematics", topic: "Logical Operators − Exclusive OR", creator: "Neso Academy" },
    { category: "GATE", subCategory: "Discrete Mathematics", topic: "Logical Operators − Implication (Part 1)", creator: "Neso Academy" },
    { category: "GATE", subCategory: "Discrete Mathematics", topic: "Logical Operators − Implication (Part 2)", creator: "Neso Academy" },
    { category: "GATE", subCategory: "Discrete Mathematics", topic: "Logical Operators − Implication (Part 3)", creator: "Neso Academy" },
    { category: "GATE", subCategory: "Discrete Mathematics", topic: "Converse, Contrapositive and Inverse", creator: "Neso Academy" },
    { category: "GATE", subCategory: "Discrete Mathematics", topic: "Logical Operators − Biconditional Operator", creator: "Neso Academy" },
    { category: "GATE", subCategory: "Discrete Mathematics", topic: "Propositional Logic − Precedence of Logical Operators", creator: "Neso Academy" },

    
    
    { category: "Python Programming", subCategory: "Basic Python", topic: "<a href='https://www.youtube.com/watch?v=_uQrJ0TkZlc'>Python Tutorial for Beginners</a>", creator: "Programming with Mosh" },
    { category: "Python Programming", subCategory: "Basic Python", topic: "<a href='https://www.youtube.com/watch?v=rfscVS0vtbw'>Python Programming Full Course (Beginner to Advanced)</a>", creator: "freeCodeCamp.org" },
    { category: "Python Programming", subCategory: "Basic Python", topic: "<a href='https://www.youtube.com/watch?v=rfscVS0vtbw'>Learn Python - Full Course for Beginners</a>", creator: "freeCodeCamp.org" },
    { category: "Python Programming", subCategory: "Basic Python", topic: "<a href='https://www.youtube.com/watch?v=8DvywoWv6fI'>Python for Everybody - Full Course with Dr. Chuck</a>", creator: "Dr. Chuck" },
    { category: "Python Programming", subCategory: "Intermediate Python", topic: "<a href='https://www.youtube.com/playlist?list=PL-osiE80TeTt2d9bfVyTiXJA-UTHn6WwU'>Intermediate Python Programming Course</a>", creator: "Corey Schafer" },
    { category: "Python Programming", subCategory: "Intermediate Python", topic: "<a href='https://www.youtube.com/watch?v=ZDa-Z5JzLYM'>Python OOP Tutorial - Intermediate Python</a>", creator: "Corey Schafer" },
    { category: "Python Programming", subCategory: "Intermediate Python", topic: "<a href='https://www.youtube.com/playlist?list=PLzMcBGfZo4-kQkZp-j9PNyKq7Yw5VYjq9'>Python GUI Programming with Tkinter</a>", creator: "Tech With Tim" },
    { category: "Python Programming", subCategory: "Advanced Python", topic: "<a href='https://www.youtube.com/playlist?list=PL-osiE80TeTt2d9bfVyTiXJA-UTHn6WwU'>Advanced Python Tutorials</a>", creator: "Corey Schafer" },
    { category: "Python Programming", subCategory: "Advanced Python", topic: "<a href='https://www.youtube.com/playlist?list=PL-osiE80TeTt2d9bfVyTiXJA-UTHn6WwU'>Python Design Patterns</a>", creator: "Corey Schafer" },
    { category: "Python Programming", subCategory: "Advanced Python", topic: "<a href='https://www.youtube.com/watch?v=BI0asZuqFXM'>Python Concurrency with Asyncio</a>", creator: "Corey Schafer" }
   
    
    
];



// Function to find courses based on user query
// Function to find courses based on user query
function findCourses(query) {
    const matchedCourses = courses.filter(course =>
        course.category.toLowerCase().includes(query.toLowerCase()) ||
        course.subCategory.toLowerCase().includes(query.toLowerCase()) ||
        course.topic.toLowerCase().includes(query.toLowerCase()) ||
        course.creator.toLowerCase().includes(query.toLowerCase())
    );
    return matchedCourses;
}


function getBotResponse(input) {
    // Rock paper scissors
    if (input == "rock") {
        return "paper";
    } else if (input == "paper") {
        return "scissors";
    } else if (input == "scissors") {
        return "rock";
    }

    // Simple responses
    if (input.includes("hi") || input.includes("hello") || input.includes("hey")) {
        return "Hello there!";
    } else if (input == "goodbye") {
        return "Talk to you later!";
    }
    
     else {
        // Responses based on keywords
        if (input.includes("learn about") || input.includes("course on") || input.includes("study")) {
            // Extract the topic from the query
            const queryTopic = input.replace("learn about", "").replace("course on", "").replace("study", "").trim();
            // Find courses related to the topic
            const matchedCourses = findCourses(queryTopic);
            if (matchedCourses.length > 0) {
                // Construct the response with matched courses
                let response = "Here are some courses related to '" + queryTopic + "':<br>";
                matchedCourses.forEach(course => {
                    response += "- " + course.topic + " by " + course.creator + "<br>";
                });
                return response;
            } else {
                return "Sorry, I couldn't find any courses related to '" + queryTopic + "'.";
            } }
        else if (input.includes("your age") || input.includes("how old are you")) {
            return "I am just a computer program, so I don't have an age!";
        }
         else if (input.includes("how are you")) {
            return "I'm just a bot, but I'm doing well. How about you?";
        } else if (input.includes("who are you")) {
            return "I'm a chatbot designed to assist you with various questions!";
        } else if (input.includes("what can you do")) {
            return "I can play rock paper scissors, answer basic questions, and have simple conversations.";
        } else if (input.includes("what is the time") || input.includes("what time is it") || input.includes("time?")) {
            return new Date().toLocaleTimeString();
        } else if (input.includes("tell me a joke")) {
            return "Why don't scientists trust atoms? Because they make up everything!";
        } else if (input.includes("tell me about yourself")) {
            return "I'm a chatbot created to help with tasks and provide information!";
        } else if (input.includes("how do you work")) {
            return "I work by processing your input and generating responses based on predefined patterns and rules!";
        } else if (input.includes("your name")) {
            return "I am Sikshaadhikar Bot";
        } else if (input.includes("DSA") || input.includes("dsa") || input.includes("Dsa")) {
            return "Sure! Here's a YouTube link to learn about DSA: <a href='https://youtu.be/fdMxpD60v24?si=JAVXkOJRBTBvgxZn' target='_blank'>Click here</a>";
        } else if (input.includes("contact support") || input.includes("Contact support") || input.includes("Customer care")) {
            return "You can contact support via:<br>- Phone: <a href='tel:1-800-123-4567'>1-800-123-4567</a><br>- Email: <a href='mailto:support@example.com'>support@example.com</a><br>- Live chat: <a href='https://example.com/livechat' target='_blank'>Click here</a>";
        } else {
            return "Try asking something else!";
        }
    }
}
