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

export const FadeInUp = () => {
  return (
    <ContainerAnimation>
      <div className={`${globalCn} animate-fade-in-up`} />
    </ContainerAnimation>
  );
};

export const FadeInDown = () => {
  return (
    <ContainerAnimation>
      <div className={`${globalCn} animate-fade-in-down`} />
    </ContainerAnimation>
  );
};

export const FadeInLeft = () => {
  return (
    <ContainerAnimation>
      <div className={`${globalCn} animate-fade-in-left`} />
    </ContainerAnimation>
  );
};

export const FadeInRight = () => {
  return (
    <ContainerAnimation>
      <div className={`${globalCn} animate-fade-in-right`} />
    </ContainerAnimation>
  );
};

export const FadeOutUp = () => {
  return (
    <ContainerAnimation>
      <div className={`${globalCn} animate-fade-out-up`} />
    </ContainerAnimation>
  );
};

export const FadeOutDown = () => {
  return (
    <ContainerAnimation>
      <div className={`${globalCn} animate-fade-out-down`} />
    </ContainerAnimation>
  );
};

export const FadeOutLeft = () => {
  return (
    <ContainerAnimation>
      <div className={`${globalCn} animate-fade-out-left`} />
    </ContainerAnimation>
  );
};

export const FadeOutRight = () => {
  return (
    <ContainerAnimation>
      <div className={`${globalCn} animate-fade-out-right`} />
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

export const SlideInLeft = () => {
  return (
    <ContainerAnimation>
      <div className={`${globalCn} animate-slide-in-left`} />
    </ContainerAnimation>
  );
};

export const SlideInRight = () => {
  return (
    <ContainerAnimation>
      <div className={`${globalCn} animate-slide-in-right`} />
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

export const SlideOutLeft = () => {
  return (
    <ContainerAnimation>
      <div className={`${globalCn} animate-slide-out-left`} />
    </ContainerAnimation>
  );
};

export const SlideOutRight = () => {
  return (
    <ContainerAnimation>
      <div className={`${globalCn} animate-slide-out-right`} />
    </ContainerAnimation>
  );
};

export const SlideRotateIn = () => {
  return (
    <ContainerAnimation>
      <div className={`${globalCn} animate-slide-rotate-in`} />
    </ContainerAnimation>
  );
};

export const SlideRotateOut = () => {
  return (
    <ContainerAnimation>
      <div className={`${globalCn} animate-slide-rotate-out`} />
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

export const RotateIn = () => {
  return (
    <ContainerAnimation>
      <div className={`${globalCn} animate-rotate-in`} />
    </ContainerAnimation>
  );
};

export const RotateOut = () => {
  return (
    <ContainerAnimation>
      <div className={`${globalCn} animate-rotate-out`} />
    </ContainerAnimation>
  );
};

export const SpinClockwise = () => {
  return (
    <ContainerAnimation>
      <div className={`${globalCn} animate-spin-clockwise`} />
    </ContainerAnimation>
  );
};

export const SpinAntiClockwise = () => {
  return (
    <ContainerAnimation>
      <div className={`${globalCn} animate-spin-anti-clockwise`} />
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

export const FlipX = () => {
  return (
    <ContainerAnimation>
      <div className={`${globalCn} animate-flip-x`} />
    </ContainerAnimation>
  );
};

export const FlipY = () => {
  return (
    <ContainerAnimation>
      <div className={`${globalCn} animate-flip-y`} />
    </ContainerAnimation>
  );
};

export const FlipInX = () => {
  return (
    <ContainerAnimation>
      <div className={`${globalCn} animate-flip-in-x`} />
    </ContainerAnimation>
  );
};

export const FlipInY = () => {
  return (
    <ContainerAnimation>
      <div className={`${globalCn} animate-flip-in-y`} />
    </ContainerAnimation>
  );
};

export const FlipOutX = () => {
  return (
    <ContainerAnimation>
      <div className={`${globalCn} animate-flip-out-x`} />
    </ContainerAnimation>
  );
};

export const FlipOutY = () => {
  return (
    <ContainerAnimation>
      <div className={`${globalCn} animate-flip-out-y`} />
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

export const Sway = () => {
  return (
    <ContainerAnimation>
      <div className={`${globalCn} animate-sway`} />
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

export const Blink = () => {
  return (
    <ContainerAnimation>
      <div className={`${globalCn} animate-blink`} />
    </ContainerAnimation>
  );
};

export const Pop = () => {
  return (
    <ContainerAnimation>
      <div className={`${globalCn} animate-pop`} />
    </ContainerAnimation>
  );
};

export const Heartbeat = () => {
  return (
    <ContainerAnimation>
      <div className={`${globalCn} animate-heartbeat`} />
    </ContainerAnimation>
  );
};

export const ExpandHorizontally = () => {
  return (
    <ContainerAnimation>
      <div className={`${globalCn} animate-expand-horizontally`} />
    </ContainerAnimation>
  );
};

export const ContractHorizontally = () => {
  return (
    <ContainerAnimation>
      <div className={`${globalCn} animate-contract-horizontally`} />
    </ContainerAnimation>
  );
};

export const ExpandVertically = () => {
  return (
    <ContainerAnimation>
      <div className={`${globalCn} animate-expand-vertically`} />
    </ContainerAnimation>
  );
};

export const ContractVertically = () => {
  return (
    <ContainerAnimation>
      <div className={`${globalCn} animate-contract-vertically`} />
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
