import React from "react";
import ReactDOM from "react-dom";
import NavBar from "./components/NavBar";
import CourseList from "./components/CourseList";

function App() {
  console.clear();
  return (
    <React.Fragment>
      <NavBar />
      <CourseList />
    </React.Fragment>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
