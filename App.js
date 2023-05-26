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


// JSX Introduction - JSX is a HTML Like Syntax but not a HTML inside Javascript.

const name = "Muskaan";
const styles = {
    textAlign: "center",
    color: "red",
    fontSize: "2rem"
}
const parastyle = {
    textAlign: "center",
    color: "blue",
    fontSize: "1.5rem"
}
const imagestyle = {
    marginLeft: "35rem",
    width: "200px",
    height: "300px"
}
const newHeading = (
    <>
        <div>
            <h1 id="title" key="newh1" style={styles}>
                Welcome {name}, to Namaste React!!
            </h1>
            <p style={parastyle}>Hi, this is paragraph tag written in JSX.</p>
            <img style={imagestyle} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQH1OQtddA8vkWeuyeVtgSurQhHp0oowHifo3Ge5OJEwQa3ItK67OpuO4UelUZ8-0EW7bg&usqp=CAU" alt="JSX Logo" />
            <span>
                <p style={parastyle}>Hi, this is nested paragraph tag written in JSX.</p>
            </span>
        </div>
    </>
);

const right = ReactDOM.createRoot(document.getElementById("right"));
right.render(newHeading);


// React Components Introduction
// Functional Component Introduction: Functional Component is just a Function.

const Headingold = () => (
    <div>
        <h4>This is a H4 tag heading from Functional Component.
        </h4>
    </div>

);

const Heading = () => (
    /* I can get already created React element , calculations here also by adding its name in {} braces */
    <div>
        {newHeading}
        {13 + 97}
        <h3>This is a H3 tag heading from Functional Component.
        </h3>
        {/* <Headingold />  OR  {Headingold()}*/}
    </div>

);

console.log(Heading);
const root4 = ReactDOM.createRoot(document.getElementById("bottom"));
root4.render(<Heading />);