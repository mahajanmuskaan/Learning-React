import React from "react";
import ReactDOM from "react-dom/client";

/*
 * Using Pure React.
 * The code demonstrates the creation and rendering of React elements to the DOM using React's createElement function
 * and ReactDOM's createRoot and render methods.
*/

// Created h1 tag using React with message to display.

const element = React.createElement(
    "h1",
    { className: "heading", id: "demo", key: "h1" },             // Introducing Key attribute in props for Concept- Reconciliation.
    "Hello Muskaan. Welcome to Namaste React!",
    React.createElement("span", {}, "This is a span element.")
);
console.log(element);

// created root variable for the element having id = root in HTML, to which DOM manipulation will be done.
const root = ReactDOM.createRoot(document.getElementById("root"));

// Added the new element in root.
root.render(element);

const element2 = React.createElement(
    "h2",
    { className: "heading2", id: "demo2", key: "h2" },
    "Wow!!",
    React.createElement("p", {}, "This is a paragraph element.")
);
console.log(element2);

// created root2 variable for the element having id = left in HTML, to which DOM manipulation will be done.
const root2 = ReactDOM.createRoot(document.getElementById("left"));

// Added the new element in root2.
root2.render(element2);

// Created new div element
const divEle = React.createElement(
    "div",
    { id: "div" },
    "This is a div element.",
    [element, element2]         // element1 and element2 are its children
);

root2.render(divEle);