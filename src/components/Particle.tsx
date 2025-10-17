import { useEffect, useMemo, useState,memo } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadFull } from "tsparticles"; 
import type {JSX} from 'react'
import type { IParticlesProps } from "@tsparticles/react";

function Particle():JSX.Element {
        const [init, setInit] = useState(false);
            useEffect(() => {
                initParticlesEngine(async (engine) => { 
                await loadFull(engine);
                }).then(() => {
                setInit(true);
                });
          }, []);
          const particlesLoaded = async (): Promise<void> => Promise.resolve();

            const options = useMemo<IParticlesProps["options"]>(() => ({
            "particles": {
                "number": {
                "value": 150,
                "density": {
                    "enable": true,
                    "area": 800
                }
                },
                "shape": {
                "type": "star",
                "options": {
                    "star": {
                    "sides": 5
                    }
                }
                },
                "color": {
                "value": ["#ffffff"],
                "animation": {
                    "enable": true,
                    "speed": 5,
                    "sync": false
                }
                },
                "opacity": {
                "value": 1,
                "random": true,
                "animation": {
                    "enable": true,
                    "speed": 0.5,
                    "minimumValue": 0.2,
                    "sync": false
                }
                },
                "size": {
                "value": {
                    "min": 1,
                    "max": 3
                },
                "random": true
                },
                "links": {
                "enable": true,
                "distance": 50,
                "color": "#ffffff",
                "opacity": 0.4,
                "width": 1
                },
                "move": {
                "enable": true,
                "speed": 0.3,
                "direction": "none",
                "random": true,
                "straight": false,
                "outModes": {
                    "default": "out"
                }
                },
                "twinkle": {
                "particles": {
                    "enable": true,
                    "frequency": 0.05,
                    "opacity": 1
                }
                }
            },
            "interactivity": {
                "events": {
                "onClick": {
                    "enable": true,
                    "mode": "push"
                },
                "resize": {
                    "enable":true
                }
                },
                "modes": {
                "repulse": {
                    "distance": 100,
                    "duration": 0.4
                },
                "push": {
                    "quantity": 4
                }
                }
            },
            "detectRetina": true
                        }),
                        [],
          );
        
          if (init) {
            return (
              <Particles
                className="z-6"
                id="tsparticles"
                particlesLoaded={particlesLoaded}
                options={options}
              />
            );
          }
    //----
    return (  
        <></>
    );
}

export default memo(Particle);