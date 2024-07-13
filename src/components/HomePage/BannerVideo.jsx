const bannerVideo = [
  {
    id: 1,
    url: "https://res.cloudinary.com/dassxiq3z/video/upload/f_auto:video,q_auto/v1/MovieVault/bannerVideo-1",
  },
  {
    id: 2,
    url: "https://res.cloudinary.com/dassxiq3z/video/upload/f_auto:video,q_auto/v1/MovieVault/bannerVideo-2",
  },
];

const BannerVideo = () => {
  return (
    <section className=" relative w-[90%] h-[80%] mx-auto grid grid-cols-2 col-span-10">
      {bannerVideo.map((video) => (
        <video
          key={video.id}
          controls
          width="100%"
          height="100%"
          autoPlay
          loop
          muted
          controlsList="nodownload"
          className=" scroll-smooth">
          <source src={video.url} type="video/mp4" />
        </video>
      ))}
    </section>
  );
};
export default BannerVideo;
