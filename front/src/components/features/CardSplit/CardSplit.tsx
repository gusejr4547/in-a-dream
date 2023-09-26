import React, { useEffect, useState } from "react";
import ImgCard from "../../common/ImgCard";

const CardSplit = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  const [scrollX, setScrollX] = useState<number>(0);
  const [scrollY, setScrollY] = useState<number>(0);

  const handleScroll = () => {
    setScrollX(window.scrollY / 100);
    setScrollY(window.scrollY / 100);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      className="cardSplit"
      style={{ position: "relative", height: "100vh", width: "100vw" }}
    >
      <div
        style={{
          position: "absolute",
          top: isLoaded ? "20vh" : "30vh",
          left: isLoaded ? "10vw" : "50vw",
          transform: `translateX(${
            scrollX <= 10 ? scrollX : "20"
          }rem)  translateY(${scrollY <= 10 ? scrollY : "20"}rem`,
          transition: "all 0.5s",
        }}
      >
        <ImgCard
          image="/CardSplit/image9.jpg"
          width="14vw"
          height="24vh"
          borderRadius={20}
        />
      </div>
      <div
        style={{
          position: "absolute",
          top: isLoaded ? "10vh" : "35vh",
          left: isLoaded ? "30vw" : "60vw",
          transition: "all 0.5s",
          transform: `translateX(${
            scrollX <= 10 ? scrollX : "20"
          }rem)  translateY(${scrollY <= 10 ? scrollY : "20"}rem`,
        }}
      >
        <ImgCard
          image="/CardSplit/image13.jpg"
          width="13vw"
          height="20vh"
          borderRadius={20}
        />
      </div>
      <div
        style={{
          position: "absolute",
          top: isLoaded ? "5vh" : "50vh",
          left: isLoaded ? "60vw" : "70vw",
          transition: "all 0.5s",
          transform: `translateX(${
            scrollX <= 10 ? -scrollX : "20"
          }rem)  translateY(${scrollY <= 10 ? scrollY : "20"}rem`,
        }}
      >
        <ImgCard
          image="/CardSplit/image11.jpg"
          width="13vw"
          height="21vh"
          borderRadius={20}
        />
      </div>
      <div
        style={{
          position: "absolute",
          top: isLoaded ? "20vh" : "65vh",
          left: isLoaded ? "80vw" : "60vw",
          transition: "all 0.5s",
          transform: `translateX(${
            scrollX <= 10 ? -scrollX * 1.5 : "20"
          }rem)  translateY(${scrollY <= 10 ? scrollY * 2 : "20"}rem`,
        }}
      >
        <ImgCard
          image="/CardSplit/image12.jpg"
          width="13vw"
          height="22vh"
          borderRadius={20}
        />
      </div>
      <div
        style={{
          position: "absolute",
          top: isLoaded ? "70vh" : "70vh",
          left: isLoaded ? "80vw" : "50vw",
          transition: "all 0.5s",
          transform: `translateX(${
            scrollX <= 10 ? -scrollX : "20"
          }rem)  translateY(${scrollY <= 10 ? -scrollY * 2 : "20"}rem`,
        }}
      >
        <ImgCard
          image="/CardSplit/image14.jpg"
          width="12vw"
          height="28vh"
          borderRadius={20}
        />
      </div>
      <div
        style={{
          position: "absolute",
          top: isLoaded ? "82vh" : "65vh",
          left: isLoaded ? "63vw" : "40vw",
          transition: "all 0.5s",
          transform: `translateX(${
            scrollX <= 10 ? -scrollX * 1.3 : "20"
          }rem)  translateY(${scrollY <= 10 ? -scrollY * 1.8 : "20"}rem`,
        }}
      >
        <ImgCard
          image="/CardSplit/image6.png"
          width="11vw"
          height="18vh"
          borderRadius={20}
        />
      </div>
      <div
        style={{
          position: "absolute",
          top: isLoaded ? "80vh" : "50vh",
          left: isLoaded ? "30vw" : "30vw",
          transition: "all 0.5s",
          transform: `translateX(${
            scrollX <= 10 ? scrollX * 1.3 : "20"
          }rem)  translateY(${scrollY <= 10 ? -scrollY * 1.8 : "20"}rem`,
        }}
      >
        <ImgCard
          image="/CardSplit/image10.jpg"
          width="18vw"
          height="28vh"
          borderRadius={20}
        />
      </div>
      <div
        style={{
          position: "absolute",
          top: isLoaded ? "70vh" : "35vh",
          left: isLoaded ? "12vw" : "40vw",
          transition: "all 0.5s",
          transform: `translateX(${
            scrollX <= 10 ? scrollX * 2 : "20"
          }rem)  translateY(${scrollY <= 10 ? -scrollY * 1.8 : "20"}rem`,
        }}
      >
        <ImgCard
          image="/CardSplit/image15.jpg"
          width="15vw"
          height="26vh"
          borderRadius={20}
        />
      </div>
    </div>
  );
};

export default CardSplit;
