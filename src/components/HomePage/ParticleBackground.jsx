import { useState, useEffect, useMemo } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadFull } from "tsparticles";
import CarouselSlider from "./CarouselSlider";
import ScrollHorizontal from "./ScrollHorizontal";
import { scrollImagesArray } from "../../utils/scrollHorizontal";
import BannerVideo from "./BannerVideo";
import EntertainmentSection from "./EntertainmentSection";
import DownloadSection from "./DownloadSection";
import KidsSection from "./KidsSection";

const ParticleBackground = () => {
  const [init, setInit] = useState(false);

  // this should be run only once per application lifetime
  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadFull(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const options = useMemo(
    () => ({
      background: {
        color: {
          value: "#000",
        },
      },
      fpsLimit: 120,
      interactivity: {
        events: {
          onClick: {
            enable: false,
            mode: "push",
          },
          onHover: {
            enable: false,
            mode: "repulse",
          },
        },
        modes: {
          push: {
            quantity: 4,
          },
          repulse: {
            distance: 150,
            duration: 0.4,
          },
        },
      },
      particles: {
        color: {
          value: ["#ffffff", "#FF5733", "#33FF57", "#5733FF", "#FF33E6"],
          random: true,
        },
        links: {
          color: ["#ffffff"],
          distance: 80,
          enable: true,
          opacity: 1,
          width: 1,
          random: true,
        },
        move: {
          direction: "none",
          enable: true,
          outModes: {
            default: "bounce",
          },
          random: false,
          speed: 4,
          straight: false,
        },
        number: {
          density: {
            enable: true,
          },
          value: 200,
        },
        opacity: {
          value: 0.5,
        },
        shape: {
          type: "circle",
        },
        size: {
          value: { min: 2, max: 5 },
        },
      },
      detectRetina: true,
    }),
    []
  );

  if (init) {
    return (
      <div className="px-5 mx-auto space-y-10 lg:px-0 md:space-y-14 xl:space-y-20 scroll-smooth">
        <div className="z-[1] left-0 right-0">
          <Particles
            id="tsparticles"
            // particlesLoaded={particlesLoaded}
            options={options}
          />
        </div>

        <BannerVideo className="space-y-0" />

        <CarouselSlider />

        <div className="py-5 mx-auto xl:py-10 md:space-y-16 space-y-14 lg:space-y-20 max-w-7xl">
          <ScrollHorizontal scrollImagesArray={scrollImagesArray} />

          <EntertainmentSection />

          <DownloadSection />

          <KidsSection />
        </div>
      </div>
    );
  }
};
export default ParticleBackground;
