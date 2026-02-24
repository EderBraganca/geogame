import { useEffect, useRef } from 'react';
import timesquare from "../../assets/timesquare.png";
import "../../styles/menu.css";

const InteractiveBackground = ({ children }) => {
  const bgRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      const x = e.clientX / window.innerWidth - 0.5;
      const y = e.clientY / window.innerHeight - 0.5;

      const moveX = x * 100;
      const moveY = y * 100;

      bgRef.current.style.transform = `
        scale(1.1)
        translate(${moveX}px, ${moveY}px)
      `;
    };
    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div
      style={{
        position: "relative",
        width: "100%",
        overflow: "hidden",
      }}
    >
      {/* Background */}
      <div
        ref={bgRef}
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: `url(${timesquare})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          willChange: "transform",
          zIndex: 0,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
          height: "99.9vh",
          maxWidth: "100%",
          maxHeight: "99vh"
        }}
      />
      {/* Conteúdo */}
      <div
        style={{
          position: "relative",
          zIndex: 1,
          color: "white",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",        
          height: "99.9vh",
          maxWidth: "100%",
          alignItems: "center",
          backgroundColor: "rgba(0, 0, 0, 0.3)",
        }}
      >
        {children}
      </div>
    </div>
  );
}

export default InteractiveBackground;