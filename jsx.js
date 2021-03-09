let weather = {     
    morning: "morning",
    weatherM: "Sunny",
    day: "day",
    weatherD: "Sanny",
    evening: "evening",
    weatherE: "Sunny",
    night: "night",
    weatherN: "Sunny"
  };
  function Morning() {
        return (
          <div>
            <weather morning />
            <weather  weatherM />
          </div>
        );
      }
  function Day() {
        return (
          <div>
            <weather day />
            <weather  weatherD />
          </div>
        );
      }
  function Evening() {
        return (
          <div>
            <weather evening />
            <weather  weatherE />
          </div>
        );
      }
  function Night() {
        return (
          <div>
            <weather night />
            <weather  weatherN />
          </div>
        );
      }
  ReactDOM.render(
        <App />,
        document.getElementById('container')
      );
  ReactDOM.render(
        <App />,
        document.getElementById('container2')
      );
  ReactDOM.render(
        <App />,
        document.getElementById('container3')
      );
  ReactDOM.render(
        <App />,
        document.getElementById('container4')
      );