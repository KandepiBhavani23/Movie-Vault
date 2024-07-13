import ContentWithVideo from "./ContentWithVideo";

const KidsSection = () => {
  const kidsTitle = "Crafting Childhood Magic";
  const kidsDescription = [
    "Introducing a world of imaginative possibilities for your little ones withthe creation of personalized profiles designed just for kids. Transport your children into enchanting adventures alongside their beloved characters, all within a safe and tailored space crafted exclusively for them.",
    " Watch as their faces light up with joy while they embark on journeys, learn valuable lessons, and explore a universe made just for them. Elevate their entertainment experience with profiles for kids, where creativity knows no bounds and discovery is always within reach.",
  ];

  return (
    <ContentWithVideo
      title={kidsTitle}
      description={kidsDescription}
      // videoSrc={kids}
      swapOrder={false}
    />
  );
};
export default KidsSection;
