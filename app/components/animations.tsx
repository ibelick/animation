"use client";
import React, { useState } from "react";

const globalCn = "w-32 h-32 bg-neutral-800";

const ContainerAnimation = ({ children }: { children: React.ReactNode }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="relative"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {!isHovered ? <div className={globalCn} /> : children}
    </div>
  );
};

export const FadeIn = () => {
  return (
    <ContainerAnimation>
      <div className={`${globalCn} animate-fade-in`} />
    </ContainerAnimation>
  );
};

export const FadeOut = () => {
  return (
    <ContainerAnimation>
      <div className={`${globalCn} animate-fade-out`} />
    </ContainerAnimation>
  );
};

export const SlideInTop = () => {
  return (
    <ContainerAnimation>
      <div className={`${globalCn} animate-slide-in-top`} />
    </ContainerAnimation>
  );
};

export const SlideInBottom = () => {
  return (
    <ContainerAnimation>
      <div className={`${globalCn} animate-slide-in-bottom`} />
    </ContainerAnimation>
  );
};

export const SlideOutTop = () => {
  return (
    <ContainerAnimation>
      <div className={`${globalCn} animate-slide-out-top`} />
    </ContainerAnimation>
  );
};

export const SlideOutBottom = () => {
  return (
    <ContainerAnimation>
      <div className={`${globalCn} animate-slide-out-bottom`} />
    </ContainerAnimation>
  );
};

export const ZoomIn = () => {
  return (
    <ContainerAnimation>
      <div className={`${globalCn} animate-zoom-in`} />
    </ContainerAnimation>
  );
};

export const ZoomOut = () => {
  return (
    <ContainerAnimation>
      <div className={`${globalCn} animate-zoom-out`} />
    </ContainerAnimation>
  );
};
