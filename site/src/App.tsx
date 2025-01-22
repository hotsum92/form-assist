import React, { useState } from "react";

const App = () => {
  const [name, setName] = useState("");

  return (
    <form action="" method="post">
      <div>
        <label>お名前:</label>
        <input type="text" name="name" id="name" value={name}
          onChange={(e) => {
            setName(e.target.value);
            console.log('setName in onChange')
          }} />
      </div>
    </form>
  );
}

export default App;
