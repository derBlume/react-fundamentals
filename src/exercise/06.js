// Basic Forms
// http://localhost:3000/isolated/exercise/06.js

import * as React from 'react';

function UsernameForm({onSubmitUsername}) {
  const refToUsernameInput = React.useRef();

  const [username, setUsername] = React.useState('');
  //const [error, setError] = React.useState(null);

  function handleChange({target: {value}}) {
    //const isValid = value === value.toLowerCase();
    //setError(isValid ? null : 'Username must be lower case');
    setUsername(value.toLowerCase());
  }

  function handleSubmit(event) {
    event.preventDefault();
    onSubmitUsername(refToUsernameInput.current.value);
    //onSubmitUsername(event.target.elements.usernameInput.value);
  }

  // 🐨 get the value from the username input (using whichever method
  // you prefer from the options mentioned in the instructions)
  // 💰 For example: event.target.elements[0].value
  // 🐨 Call `onSubmitUsername` with the value of the input

  // 🐨 add the onSubmit handler to the <form> below

  // 🐨 make sure to associate the label to the input.
  // to do so, set the value of 'htmlFor' prop of the label to the id of input
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="usernameInput">Username:</label>
        <input
          value={username}
          onChange={handleChange}
          ref={refToUsernameInput}
          id="usernameInput"
          type="text"
        />
      </div>
      {/* <div>{error}</div> */}
      <button type="submit" /* disabled={error ? true : false} */>
        Submit
      </button>
    </form>
  );
}

function App() {
  const onSubmitUsername = username => alert(`You entered: ${username}`);
  return <UsernameForm onSubmitUsername={onSubmitUsername} />;
}

export default App;
