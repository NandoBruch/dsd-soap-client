import { useState } from "react";
import Input from "./components/Input";

const App = () => {
  const [video, setVideo] = useState({});

  const search = (ev: any) => {
    ev.preventDefault();
    console.log(ev.target.busca.value);
  };
  return (
    <div className="main">
      <div className="video">
        <form className="input-area" onSubmit={(ev) => search(ev)}>
          <Input placeholder="Procure pelo seu vídeo aqui ..." id="busca" />
          <button type="submit">Buscar</button>
        </form>
        <iframe width="600px" height="300px" src=""></iframe>
      </div>
    </div>
  );
};

export default App;
