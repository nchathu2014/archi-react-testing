import React from "react";
function Example04() {
  const [state, setState] = React.useState({
    name: "",
    age: "",
  });
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  const updateName = (e) => {
    e.preventDefault();
    setState({ ...state, name: e.target.value });
  };
  const updateAge = (e) => {
    e.preventDefault();
    setState({ ...state, age: e.target.value });
  };
  return (
    <div className="App">
      <h1>Welcome {state.name}</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input
            data-testid="name"
            type="text"
            value={state.name}
            onChange={updateName}
          />
        </label>
        <br />
        <label>
          Age:
          <input
            data-testid="age"
            type="number"
            value={state.age}
            onChange={updateAge}
          />
        </label>
        <br />
        <input
          role="button"
          type="submit"
          value="Submit"
          disabled={state.name === ""}
        />
      </form>
    </div>
  );
}
export default Example04;
