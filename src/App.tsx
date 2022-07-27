import { useState } from "react";
import Input from "./components/Input";
import { spotifySearch } from "./service/spotify";
import { youtubeSearch } from "./service/youtube";
import Toggle from "react-toggle";
import "react-toggle/style.css";

const setIframe = (src: string, title?: string) => {
  let player = document.getElementById("player");
  if (player)
    player.innerHTML = `
    <iframe
      width="600"
      height="300"
      src="${src}"
      title="${title}"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen;"
      allowFullScreen
    />`;
};

const App = () => {
  const [searchApi, setSearchApi] = useState<"Youtube" | "Spotify">("Spotify");

  const toggleApi = (checked: boolean) => {
    let player = document.getElementById("player");
    if (player) player.innerHTML = "<div></div>";
    setSearchApi(checked ? "Youtube" : "Spotify");
  };

  const search = async (ev: any) => {
    ev.preventDefault();
    const query = ev.target.busca.value;
    const { data: video } =
      searchApi === "Youtube"
        ? await youtubeSearch(query)
        : await spotifySearch(query);
    setIframe(video.url, video?.title);
  };
  return (
    <div className="main">
      <div className="video">
        <Toggle
          icons={{ checked: "" }}
          onChange={(ev) => toggleApi(ev.target.checked)}
        />
        <form className="input-area" onSubmit={(ev) => search(ev)}>
          <Input placeholder="Procure pelo seu vídeo aqui ..." id="busca" />
          <button type="submit">Buscar</button>
        </form>
        <div id="player"></div>
      </div>
    </div>
  );
};

export default App;
