import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const sliderSettings = {
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  speed: 4000,
  pauseOnHover: true,
  lazyLoad: true,
};

const VideoSection = ({ videosData }) => {
  if (!videosData || videosData.length === 0) {
    return null;
  }
  return (
    <section>
      <Slider {...sliderSettings}>
        {videosData.map((video) => (
          <div key={video.id}>
            <iframe
              className="w-full border-2 shadow-xl rounded-xl h-[300px] md:h-[400px] lg:h-[500px] xl:h-[600px]"
              src={`https://www.youtube.com/embed/${video.key}`}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen></iframe>
          </div>
        ))}
      </Slider>
    </section>
  );
};
export default VideoSection;
