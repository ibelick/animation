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

export const Rotate90 = () => {
  return (
    <ContainerAnimation>
      <div className={`${globalCn} animate-rotate-90`} />
    </ContainerAnimation>
  );
};

export const Rotate180 = () => {
  return (
    <ContainerAnimation>
      <div className={`${globalCn} animate-rotate-180`} />
    </ContainerAnimation>
  );
};

export const Rotate360 = () => {
  return (
    <ContainerAnimation>
      <div className={`${globalCn} animate-rotate-360`} />
    </ContainerAnimation>
  );
};

export const FlipHorizontal = () => {
  return (
    <ContainerAnimation>
      <div className={`${globalCn} animate-flip-horizontal`} />
    </ContainerAnimation>
  );
};

export const FlipVertical = () => {
  return (
    <ContainerAnimation>
      <div className={`${globalCn} animate-flip-vertical`} />
    </ContainerAnimation>
  );
};

export const Bounce = () => {
  return (
    <ContainerAnimation>
      <div className={`${globalCn} animate-bounce`} />
    </ContainerAnimation>
  );
};

export const Swing = () => {
  return (
    <ContainerAnimation>
      <div className={`${globalCn} animate-swing`} />
    </ContainerAnimation>
  );
};

export const Wobble = () => {
  return (
    <ContainerAnimation>
      <div className={`${globalCn} animate-wobble`} />
    </ContainerAnimation>
  );
};

export const Pulse = () => {
  return (
    <ContainerAnimation>
      <div className={`${globalCn} animate-pulse`} />
    </ContainerAnimation>
  );
};

export const Shake = () => {
  return (
    <ContainerAnimation>
      <div className={`${globalCn} animate-shake`} />
    </ContainerAnimation>
  );
};

export const Tada = () => {
  return (
    <ContainerAnimation>
      <div className={`${globalCn} animate-tada`} />
    </ContainerAnimation>
  );
};

export const Jump = () => {
  return (
    <ContainerAnimation>
      <div className={`${globalCn} animate-jump`} />
    </ContainerAnimation>
  );
};

export const Hang = () => {
  return (
    <ContainerAnimation>
      <div className={`${globalCn} animate-hang`} />
    </ContainerAnimation>
  );
};

export const RollIn = () => {
  return (
    <ContainerAnimation>
      <div className={`${globalCn} animate-roll-in`} />
    </ContainerAnimation>
  );
};

export const RollOut = () => {
  return (
    <ContainerAnimation>
      <div className={`${globalCn} animate-roll-out`} />
    </ContainerAnimation>
  );
};

export const Float = () => {
  return (
    <ContainerAnimation>
      <div className={`${globalCn} animate-float`} />
    </ContainerAnimation>
  );
};

export const Sink = () => {
  return (
    <ContainerAnimation>
      <div className={`${globalCn} animate-sink`} />
    </ContainerAnimation>
  );
};

export const Flash = () => {
  return (
    <ContainerAnimation>
      <div className={`${globalCn} animate-flash`} />
    </ContainerAnimation>
  );
};

export const Jiggle = () => {
  return (
    <ContainerAnimation>
      <div className={`${globalCn} animate-jiggle`} />
    </ContainerAnimation>
  );
};

export const RubberBand = () => {
  return (
    <ContainerAnimation>
      <div className={`${globalCn} animate-rubber-band`} />
    </ContainerAnimation>
  );
};
