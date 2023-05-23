import React from "react";
import ReactDOM from "react-dom/client";

// Using Pure React

// Created h1 tag using React with message to display.
const element = React.createElement("h1", { className: "heading", id: "demo" }, "Hello Muskaan. Welcome to Namaste React!"
    , React.createElement("span", {}, "This is a span element."));
console.log(element);

// created root variable for the element having id = root in HTML, to which DOM manipulation will be done.
const root = ReactDOM.createRoot(document.getElementById("root"));

// Added the new element in root.
root.render(element);

const element2 = React.createElement("h2", { className: "heading2", id: "demo2" }, "Wow!!"
    , React.createElement("p", {}, "This is a paragraph element."));
console.log(element2);
    
// created root2 variable for the element having id = left in HTML, to which DOM manipulation will be done.
const root2 = ReactDOM.createRoot(document.getElementById("left"));

// Added the new element in root2.
root2.render(element2);