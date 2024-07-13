import Marquee from "react-fast-marquee";

const ImagesSection = ({ imagesData }) => {
  if (!imagesData || imagesData.length === 0) {
    return null;
  }

  return (
    <div>
      {imagesData?.length > 3 ? (
        <>
          <Marquee>
            {imagesData.map((images, index) => (
              <div key={index}>
                <img
                  src={`https://image.tmdb.org/t/p/original/${images?.file_path}`}
                  alt={index}
                  className="m-4 w-[200px] h-[150px] md:w-[250px] md:h-[200px] lg:h-[300px] lg:w-[300px] xl:w-[350px] xl:h-[350px] border-2 rounded-xl border-orange-300 object-fill"
                />
              </div>
            ))}
          </Marquee>
        </>
      ) : (
        <div className="flex">
          {imagesData.map((images, index) => (
            <div key={index}>
              <img
                src={`https://image.tmdb.org/t/p/original/${images.file_path}`}
                alt={index}
                className="m-4 w-[200px] h-[150px] md:w-[250px] md:h-[200px] lg:h-[300px] lg:w-[300px] xl:w-[350px] xl:h-[350px] border-2 rounded-xl border-orange-300 object-fill"
              />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
export default ImagesSection;
