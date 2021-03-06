import React, { useState } from "react";

import "./App.css";

const App = () => {
  const [option, setOption] = useState("");
  const [value, setValue] = useState("");
  const [options, setOptions] = useState(["Wróżba pierwsza", "Wróżba druga", "Wróżba trzecia"]);

  const handleShowOption = () => {
    const index = Math.floor(Math.random() * options.length);
    setOption(options[index]);
  };

  const handleInputChange = (e) => {
    setValue(e.target.value);
  };

  const handleAddOption = () => {
    if (value === "") return alert("Wpisz wróżbę");
    const omen = options.concat(value); 
    // const omen = [...options];
    // omen.push(value);
    setOptions(omen);
    setValue('')
    alert(`dodana wróżba: ${value}`);
  };

  return (
    <div>
      <button onClick={handleShowOption}>Wylosuj wróżbę</button>
      <br />
      <input type="text" value={value} onChange={handleInputChange} />
      <button onClick={handleAddOption}>Dodaj wróżbę</button>
      <br />
      {option ? <h1>{option}</h1> : null}
    </div>
  );
};

export default App;
