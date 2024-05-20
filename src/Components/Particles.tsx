"use client"
import { useEffect, useMemo, useState } from "react"
import Particles, { initParticlesEngine } from "@tsparticles/react"
import {
  type Container,
  type ISourceOptions,
  MoveDirection,
  OutMode,
} from "@tsparticles/engine"
import { loadSlim } from "@tsparticles/slim"

const ParticleBackground = () => {
  const [init, setInit] = useState(false)

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine)

      engine.addPreset("confetti", {
        particles: {
          color: {
            value: "#ff0000"
          },
          // Add other particle configurations here
        },
        // Add other configurations as needed
      });

    }).then(() => {
      setInit(true)
    })
  }, [])

  const particlesLoaded = async (container?: Container): Promise<void> => {
    console.log(container)
  }

  const options = useMemo(
    () => ({
      background: {
        color: {
          value: "#75c9b3",
        },
      },
      fpsLimit: 120,
      interactivity: {
        events: {
          onClick: {
            enable: true,
            mode: "push",
          },
          onHover: {
            enable: true,
            mode: ["bubble", "repulse"],
           
          },
          
        },
        modes: {
          push: {
            quantity: 4,
          },
          bubble: {
            distance: 400,
            duration: 3,
            opacity: 0.7,
            size: 12,
          },
        },
      },
      particles: {
        color: {
          value: ["#FF0000", "#FFA500", "#FFFF00"],
        },
        links: {
          color: "#ffffff",
          distance: 150,
          enable: true,
          opacity: 0.5,
          width: 1,
        },
        move: {
          direction: MoveDirection.none,
          enable: true,
          outModes: {
            default: OutMode.out,
          },
          random: false,
          speed: 2,
          straight: false,
        },
        number: {
          density: {
            enable: true,
          },
          value: 100,
        },
        opacity: {
          value: 0.5,
        },
        shape: {
          type: "circle",
        },
        size: {
          value: { min: 1, max: 5 },
        },
      },
      detectRetina: true,
    }),
    []
  )

  if (init) {
    return (
      <Particles
        id="tsparticles"
        particlesLoaded={particlesLoaded}
        options={options}
        className="absolute inset-0 h-full w-full -z-10"
      />
    )
  }

  return <></>
}

export default ParticleBackground
