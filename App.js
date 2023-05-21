// Using Pure React

// Created h1 tag using React with message to display.
const element = React.createElement("h1", { className: "heading", id: "demo" }, "Hello Muskaan. Welcome to Namaste React!"
    , React.createElement("span", {}, "This is a span element."));
console.log(element);

// created root variable for the element having id = root in HTML, to which DOM manipulation will be done.
const root = ReactDOM.createRoot(document.getElementById("root"));
console.log(root);

// Added the new element in root.
root.render(element);