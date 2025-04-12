import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";

export default function App() {
  const comp = useRef(null);

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      const t1 = gsap.timeline();
      t1.from("#intro-slider", {
        xPercent: "-100",
        duration: 1.3,
        delay: 0.3,
      })
        .from(["#title-1", "#title-2", "#title-3"], {
          opacity: 0,
          y: "+=30",
          stagger: 0.5,
        })
        .to(["#title-1", "#title-2", "#title-3"], {
          opacity: 0,
          y: "-=30",
          delay: 0.3,
          stagger: 0.5,
        })
        .to("#intro-slider", {
          xPercent: "-=100",
          duration: 1.3,
        })
        .from("#welcome", {
          opacity: 0,
          duration: 0.5,
        });
    }, comp);

    return () => ctx.revert();
  }, []);
  return (
    <div className="relative" ref={comp}>
      <div
        id="intro-slider"
        className="h-screen p-10 bg-gray-50 absolute top-0 left-0 z-10 w-full flex flex-col gap-10 tracking-normal"
      >
        <h1 id="title-1" className="text-8xl font-semibold md:text-9xl ">
          Software Engineer
        </h1>
        <h1 id="title-2" className="font-semibold text-8xl md:text-9xl ">
          Designer
        </h1>
        <h1 id="title-3" className="font-semibold text-8xl md:text-9xl ">
          Freelancer
        </h1>
      </div>
      <div className="h-screen flex bg-gray-950 justify-center place-items-center">
        <h1
          id="welcome"
          className="text-8xl md:text-9xl font-semibold text-gray-100 font-spacegrotesk"
        >
          Welcome.
        </h1>
      </div>
    </div>
  );
}
