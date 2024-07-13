import ContentWithVideo from "./ContentWithVideo";

const DownloadSection = () => {
  const downloadTitle = "Effortless Downloads for On-the-Go Enjoyment";
  const downloadDescription = [
    "Experience the freedom to enjoy your favorite shows anytime, anywhere with the convenience of offline viewing. Download your preferred shows effortlessly, ensuring that your entertainment is always at your fingertips, even without a stable internet connection.",
    "Say goodbye to buffering woes and hello to a world where your favorite shows are readily available, making downtime enjoyable and keeping your entertainment journey in sync with your on-the-go lifestyle.",
    "Save your favorites with ease and relish the assurance of having a curated selection ready for those moments when you simply want to unwind and immerse yourself in captivating stories.",
  ];

  return (
    <ContentWithVideo
      title={downloadTitle}
      description={downloadDescription}
      videoSrc="https://res.cloudinary.com/dassxiq3z/video/upload/f_auto:video,q_auto/v1/MovieVault/downloads"
      swapOrder={true}
    />
  );
};
export default DownloadSection;
