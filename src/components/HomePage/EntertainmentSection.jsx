import ContentWithVideo from "./ContentWithVideo";

const EntertainmentSection = () => {
  const entertainmentTitle = "Unlock a World of Entertainment";
  const entertainmentDescription = [
    "Indulge in an immersive viewing experience on your television! Elevate your entertainment by seamlessly streaming content on a variety of devices, including smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray players, and a host of other compatible platforms.",
    "Whether you prefer the vibrant display of your smart TV, the gaming prowess of consoles like PlayStation and Xbox, or the versatility of streaming devices like Chromecast and Apple TV, our platform ensures that you can enjoy your favorite content with convenience and flexibility.",
    "Simply sit back, relax, and let the captivating visuals unfold on the big screen, enhancing your viewing pleasure across a diverse range of entertainment devices.",
  ];

  return (
    <ContentWithVideo
      title={entertainmentTitle}
      description={entertainmentDescription}
      videoSrc="https://res.cloudinary.com/dassxiq3z/video/upload/f_auto:video,q_auto/v1/MovieVault/entertainment"
      swapOrder={false}
    />
  );
};
export default EntertainmentSection;
