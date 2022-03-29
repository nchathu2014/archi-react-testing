import React from "react";
import "./App.css";
import Hello from "./components/hello/hello";
import FavoriteNumber from "./components/example/example";
import Example01 from "./components/01/example";
import Example02 from "./components/02/example";
import Example03 from "./components/03/example";
import Example04 from "./components/04/example";
import SimpleAPIForm from "./components/05/example";
import TestAxios from "./components/06/test-axios";

function getUser() {
  return Promise.resolve({
    id: 1,
    name: "Nuwan",
  });
}

function App() {
  return (
    <div>
      {/* <Example01 /> */}
      {/*  <Example02 /> */}
      {/*  <Example03 /> */}
      {/* <Example04 /> */}
      {/* <SimpleAPIForm /> */}
      <TestAxios url="https://jsonplaceholder.typicode.com/posts/1" />
    </div>
  );
}

export default App;
