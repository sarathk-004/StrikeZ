"use client";
import React, { useState, useEffect } from "react";
import { ContainerScroll } from "./ContainerScroll.jsx";
import Image from "../assets/CricDrb.gif";
import CustomCursorGIF from "../assets/cursor.gif";
import HeroBG from "../assets/HeroBG.png";

export function HeroSection() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const handleMouseMove = (event) => {
      setMousePosition({ x: event.clientX, y: event.clientY });
    };

    document.addEventListener("mousemove", handleMouseMove);
    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  // Function to update the cursor based on the background color
  const updateCursor = () => {
    const body = document.body;
    if (isHovering) {
      body.style.cursor = `url('/src/assets/inverted-cursor.png'), auto`;
    } else {
      body.style.cursor = `url('/src/assets/cursor.png'), auto`;
    }
  };

  useEffect(() => {
    updateCursor();
    return () => {
      document.body.style.cursor = 'auto'; // Reset cursor on unmount
    };
  }, [isHovering]);

  return (
    <div
      className="relative flex flex-col overflow-hidden"
      style={{
        backgroundImage: `url(${HeroBG})`,
        backgroundSize: 'contain',
      }}
    >
      {isHovering && (
        <div
          className="custom-cursor"
          style={{
            position: "absolute",
            top: mousePosition.y,
            left: mousePosition.x,
            pointerEvents: "none",
            transform: "translate(-50%, -50%)",
            zIndex: 5,
          }}
        >
          <img
            src={CustomCursorGIF}
            alt="Custom Cursor"
            width="80"
            height="80"
            style={{
              borderRadius: "50%",
              border: "3px solid #72bf6a",
              backgroundSize: "cover",
              margin: "0px",
            }}
          />
        </div>
      )}

      <ContainerScroll
        titleComponent={
          <>
            <h1 className="mb-4 text-5xl font-semibold text-black">
              We <span style={{ color: "#72bf6a" }}> create the stage</span> for
              <br />
              <span className="text-6xl md:text-[5rem] font-bold mt-2 leading-none">
                <span
                  className="hover-high"
                  onMouseEnter={() => setIsHovering(true)} 
                  onMouseLeave={() => setIsHovering(false)}
                  style={{ cursor: 'none' }} // Hide default cursor
                > CHAMPIONS </span> TO RISE! </span>
            </h1>
          </>
        }
      >
        <img
          src={Image}
          alt="hero"
          height={720}
          width={1400}
          className="mx-auto rounded-2xl object-cover h-full object-left-top"
          draggable={false}
          style={{
            filter: "grayscale(0)",
          }}
        />
      </ContainerScroll>

      <style jsx>{`
        .hover-high {
          transition: color 0.3s ease;
        }
        .hover-high:hover {
          color: #72bf6a;
        }
      `}</style>
    </div>
  );
}
