import { useState, useEffect, useMemo } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadFull } from "tsparticles";
import SearchResults from "./SearchResults";

const SearchPageBackground = () => {
  const [init, setInit] = useState(false);

  // Run only once per application lifetime
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
      fpsLimit: 60,
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
      },
      particles: {
        color: {
          value: [
            "#ff0000",
            "#ffffff",
            "#ffd700",
            "#00ff00",
            "#00ffff",
            "#ff00ff",
            "#ff4500",
          ],
        },
        links: {
          color: "#ffffff",
          distance: 150,
          enable: false,
          opacity: 0.3,
          width: 1,
        },
        move: {
          angle: {
            offset: 45,
            value: 90,
            enable: true,
            speed: 0.2,
          },
          enable: true,
          outModes: {
            default: "bounce",
          },
          random: true,
          speed: {
            min: 1,
            max: 3,
          },
          straight: false,
        },
        number: {
          density: {
            enable: true,
            area: 1200,
          },
          value: 150,
        },
        opacity: {
          value: 0.5,
          random: true,
        },
        shape: {
          type: [
            "circle",
            "polygon",
            "rectangle",
            "triangle",
            "octagon",
            "star",
            "edge",
          ],
        },
        size: {
          value: {
            min: 1,
            max: 2,
          },
          random: true,
          anim: {
            enable: true,
            speed: 4,
            size_min: 0.3,
            sync: false,
          },
        },

        twinkle: {
          particles: {
            enable: true,
            color: "#ffffff",
            speed: 0.5,
          },
        },
      },
      detectRetina: true,
    }),
    []
  );

  if (init) {
    return (
      <div className="px-5 mx-auto space-y-10 lg:px-0 md:space-y-14 xl:space-y-20 scroll-smooth">
        <div className="left-0 right-0 z-10">
          <Particles
            id="tsparticles"
            // particlesLoaded={particlesLoaded}
            options={options}
          />
        </div>
        <SearchResults />
      </div>
    );
  } else {
    return null;
  }
};

export default SearchPageBackground;
