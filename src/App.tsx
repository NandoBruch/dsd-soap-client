import Input from "./components/Input";
import { search as ytSearch, searchv2 } from "./service/youtube";

interface Video {
  url: string;
  title: string;
  thumbnail: string;
}

interface VideoResponseText {
  _text: string;
}
interface VideResponse {
  url: VideoResponseText;
  title: VideoResponseText;
  thumbnail: VideoResponseText;
}

const App = () => {
  const parseVideo = (videoRes: VideResponse): Video => {
    return {
      url: videoRes.url._text,
      title: videoRes.title._text,
      thumbnail: videoRes.thumbnail._text,
    };
  };

  const search = async (ev: any) => {
    ev.preventDefault();
    const query = ev.target.busca.value;
    const { data: videoRes } = await searchv2(query);
    const video = parseVideo(videoRes);
    let player = document.getElementById("player");
    if (player)
      player.innerHTML = `
      <iframe
        width="600"
        height="300"
        src="${video?.url}""
        title="${video.title}"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>`;
  };
  return (
    <div className="main">
      <div className="video">
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
