import { useSelector } from "react-redux";
import useMovieTrailer from "../../../../Hooks/useMovieTrailer";

const VideoBackground = ({ movieId }) => {
  const trailerVideo = useSelector((store) => store?.movies?.movieTrailer);
  useMovieTrailer(movieId);

  return (
    <div className="w-[100%] h-[100%]">
      {/* <iframe
        className="object-cover w-screen aspect-video"
        src={`https://www.youtube.com/embed/${trailerVideo?.key}?autoplay=1&controls=0&showinfo=0&rel=0&iv_load_policy=3&modestbranding=1`}
        title="YouTube video player"
        loading="lazy"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen></iframe> */}
      <iframe
        className="w-[100%] aspect-video"
        src={`https://www.youtube.com/embed/${trailerVideo?.key}?&autoplay=1&mute=1`}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>
    </div>
  );
};

export default VideoBackground;
