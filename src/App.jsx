import "./App.css";

function App() {
  const handleChange = (e) => {
    console.log(e.target.value, "event");
  };

  const handleClick = (e) => {
    console.log(e, "ul");
  };

  return (
    <>
      <div>
        <label htmlFor="name">Name</label>
        <br />
        <input
          id="name"
          type="text"
          autoComplete="off"
          onChange={handleChange}
          onPaste={(e) => {
            e.preventDefault();
            alert("Paste now allowed");
          }}
        />

        <ul onClick={handleClick}>
          <li>aa</li>
          <li>bb</li>
        </ul>
      </div>
    </>
  );
}

export default App;
