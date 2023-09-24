"use client";
import React, { useState } from "react";

const animDivCn = "w-32 h-32 bg-neutral-800 rounded-xl";
const animTextCn = "text-neutral-800 text-2xl font-bold";

type Type = "div" | "text";

type AnimationProps = {
  type: Type;
};

const ContentAnimation: React.FC<AnimationProps> = ({ type }) => {
  if (type === "text") {
    return <div className={animTextCn}>Hello World</div>;
  }

  if (type === "div") {
    return <div className={animDivCn} />;
  }

  return null;
};

const ContainerAnimation = ({
  children,
  type,
}: {
  children: React.ReactNode;
  type: Type;
}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="relative"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {!isHovered ? <ContentAnimation type={type} /> : children}
    </div>
  );
};

// @note: animate class doesn't work, so we use one component per animation

export const FadeIn: React.FC<AnimationProps> = ({ type }) => {
  if (type === "text") {
    return (
      <ContainerAnimation type={type}>
        <div className={`${animTextCn} animate-fade-in`}>Hello World</div>
      </ContainerAnimation>
    );
  }

  return (
    <ContainerAnimation type={type}>
      <div className={`${animDivCn} animate-fade-in`} />
    </ContainerAnimation>
  );
};

export const FadeOut: React.FC<AnimationProps> = ({ type }) => {
  if (type === "text") {
    return (
      <ContainerAnimation type={type}>
        <div className={`${animTextCn} animate-fade-out`}>Hello World</div>
      </ContainerAnimation>
    );
  }

  return (
    <ContainerAnimation type={type}>
      <div className={`${animDivCn} animate-fade-out`} />
    </ContainerAnimation>
  );
};

export const FadeInUp: React.FC<AnimationProps> = ({ type }) => {
  return (
    <ContainerAnimation type={type}>
      <div className={`${animDivCn} animate-fade-in-up`} />
    </ContainerAnimation>
  );
};

export const FadeInDown: React.FC<AnimationProps> = ({ type }) => {
  return (
    <ContainerAnimation type={type}>
      <div className={`${animDivCn} animate-fade-in-down`} />
    </ContainerAnimation>
  );
};

export const FadeInLeft: React.FC<AnimationProps> = ({ type }) => {
  return (
    <ContainerAnimation type={type}>
      <div className={`${animDivCn} animate-fade-in-left`} />
    </ContainerAnimation>
  );
};

export const FadeInRight: React.FC<AnimationProps> = ({ type }) => {
  return (
    <ContainerAnimation type={type}>
      <div className={`${animDivCn} animate-fade-in-right`} />
    </ContainerAnimation>
  );
};

export const FadeOutUp: React.FC<AnimationProps> = ({ type }) => {
  return (
    <ContainerAnimation type={type}>
      <div className={`${animDivCn} animate-fade-out-up`} />
    </ContainerAnimation>
  );
};

export const FadeOutDown: React.FC<AnimationProps> = ({ type }) => {
  return (
    <ContainerAnimation type={type}>
      <div className={`${animDivCn} animate-fade-out-down`} />
    </ContainerAnimation>
  );
};

export const FadeOutLeft: React.FC<AnimationProps> = ({ type }) => {
  return (
    <ContainerAnimation type={type}>
      <div className={`${animDivCn} animate-fade-out-left`} />
    </ContainerAnimation>
  );
};

export const FadeOutRight: React.FC<AnimationProps> = ({ type }) => {
  return (
    <ContainerAnimation type={type}>
      <div className={`${animDivCn} animate-fade-out-right`} />
    </ContainerAnimation>
  );
};

export const SlideInTop: React.FC<AnimationProps> = ({ type }) => {
  return (
    <ContainerAnimation type={type}>
      <div className={`${animDivCn} animate-slide-in-top`} />
    </ContainerAnimation>
  );
};

export const SlideInBottom: React.FC<AnimationProps> = ({ type }) => {
  return (
    <ContainerAnimation type={type}>
      <div className={`${animDivCn} animate-slide-in-bottom`} />
    </ContainerAnimation>
  );
};

export const SlideInLeft: React.FC<AnimationProps> = ({ type }) => {
  return (
    <ContainerAnimation type={type}>
      <div className={`${animDivCn} animate-slide-in-left`} />
    </ContainerAnimation>
  );
};

export const SlideInRight: React.FC<AnimationProps> = ({ type }) => {
  return (
    <ContainerAnimation type={type}>
      <div className={`${animDivCn} animate-slide-in-right`} />
    </ContainerAnimation>
  );
};

export const SlideOutTop: React.FC<AnimationProps> = ({ type }) => {
  return (
    <ContainerAnimation type={type}>
      <div className={`${animDivCn} animate-slide-out-top`} />
    </ContainerAnimation>
  );
};

export const SlideOutBottom: React.FC<AnimationProps> = ({ type }) => {
  return (
    <ContainerAnimation type={type}>
      <div className={`${animDivCn} animate-slide-out-bottom`} />
    </ContainerAnimation>
  );
};

export const SlideOutLeft: React.FC<AnimationProps> = ({ type }) => {
  return (
    <ContainerAnimation type={type}>
      <div className={`${animDivCn} animate-slide-out-left`} />
    </ContainerAnimation>
  );
};

export const SlideOutRight: React.FC<AnimationProps> = ({ type }) => {
  return (
    <ContainerAnimation type={type}>
      <div className={`${animDivCn} animate-slide-out-right`} />
    </ContainerAnimation>
  );
};

export const SlideRotateIn: React.FC<AnimationProps> = ({ type }) => {
  return (
    <ContainerAnimation type={type}>
      <div className={`${animDivCn} animate-slide-rotate-in`} />
    </ContainerAnimation>
  );
};

export const SlideRotateOut: React.FC<AnimationProps> = ({ type }) => {
  return (
    <ContainerAnimation type={type}>
      <div className={`${animDivCn} animate-slide-rotate-out`} />
    </ContainerAnimation>
  );
};

export const ZoomIn: React.FC<AnimationProps> = ({ type }) => {
  return (
    <ContainerAnimation type={type}>
      <div className={`${animDivCn} animate-zoom-in`} />
    </ContainerAnimation>
  );
};

export const ZoomOut: React.FC<AnimationProps> = ({ type }) => {
  return (
    <ContainerAnimation type={type}>
      <div className={`${animDivCn} animate-zoom-out`} />
    </ContainerAnimation>
  );
};

export const Rotate90: React.FC<AnimationProps> = ({ type }) => {
  return (
    <ContainerAnimation type={type}>
      <div className={`${animDivCn} animate-rotate-90`} />
    </ContainerAnimation>
  );
};

export const Rotate180: React.FC<AnimationProps> = ({ type }) => {
  return (
    <ContainerAnimation type={type}>
      <div className={`${animDivCn} animate-rotate-180`} />
    </ContainerAnimation>
  );
};

export const Rotate360: React.FC<AnimationProps> = ({ type }) => {
  return (
    <ContainerAnimation type={type}>
      <div className={`${animDivCn} animate-rotate-360`} />
    </ContainerAnimation>
  );
};

export const RotateIn: React.FC<AnimationProps> = ({ type }) => {
  return (
    <ContainerAnimation type={type}>
      <div className={`${animDivCn} animate-rotate-in`} />
    </ContainerAnimation>
  );
};

export const RotateOut: React.FC<AnimationProps> = ({ type }) => {
  return (
    <ContainerAnimation type={type}>
      <div className={`${animDivCn} animate-rotate-out`} />
    </ContainerAnimation>
  );
};

export const SpinClockwise: React.FC<AnimationProps> = ({ type }) => {
  return (
    <ContainerAnimation type={type}>
      <div className={`${animDivCn} animate-spin-clockwise`} />
    </ContainerAnimation>
  );
};

export const SpinAntiClockwise: React.FC<AnimationProps> = ({ type }) => {
  return (
    <ContainerAnimation type={type}>
      <div className={`${animDivCn} animate-spin-anti-clockwise`} />
    </ContainerAnimation>
  );
};

export const FlipHorizontal: React.FC<AnimationProps> = ({ type }) => {
  return (
    <ContainerAnimation type={type}>
      <div className={`${animDivCn} animate-flip-horizontal`} />
    </ContainerAnimation>
  );
};

export const FlipVertical: React.FC<AnimationProps> = ({ type }) => {
  return (
    <ContainerAnimation type={type}>
      <div className={`${animDivCn} animate-flip-vertical`} />
    </ContainerAnimation>
  );
};

export const FlipX: React.FC<AnimationProps> = ({ type }) => {
  return (
    <ContainerAnimation type={type}>
      <div className={`${animDivCn} animate-flip-x`} />
    </ContainerAnimation>
  );
};

export const FlipY: React.FC<AnimationProps> = ({ type }) => {
  return (
    <ContainerAnimation type={type}>
      <div className={`${animDivCn} animate-flip-y`} />
    </ContainerAnimation>
  );
};

export const FlipInX: React.FC<AnimationProps> = ({ type }) => {
  return (
    <ContainerAnimation type={type}>
      <div className={`${animDivCn} animate-flip-in-x`} />
    </ContainerAnimation>
  );
};

export const FlipInY: React.FC<AnimationProps> = ({ type }) => {
  return (
    <ContainerAnimation type={type}>
      <div className={`${animDivCn} animate-flip-in-y`} />
    </ContainerAnimation>
  );
};

export const FlipOutX: React.FC<AnimationProps> = ({ type }) => {
  return (
    <ContainerAnimation type={type}>
      <div className={`${animDivCn} animate-flip-out-x`} />
    </ContainerAnimation>
  );
};

export const FlipOutY: React.FC<AnimationProps> = ({ type }) => {
  return (
    <ContainerAnimation type={type}>
      <div className={`${animDivCn} animate-flip-out-y`} />
    </ContainerAnimation>
  );
};

export const Bounce: React.FC<AnimationProps> = ({ type }) => {
  return (
    <ContainerAnimation type={type}>
      <div className={`${animDivCn} animate-bounce`} />
    </ContainerAnimation>
  );
};

export const Swing: React.FC<AnimationProps> = ({ type }) => {
  return (
    <ContainerAnimation type={type}>
      <div className={`${animDivCn} animate-swing`} />
    </ContainerAnimation>
  );
};

export const Wobble: React.FC<AnimationProps> = ({ type }) => {
  return (
    <ContainerAnimation type={type}>
      <div className={`${animDivCn} animate-wobble`} />
    </ContainerAnimation>
  );
};

export const Pulse: React.FC<AnimationProps> = ({ type }) => {
  return (
    <ContainerAnimation type={type}>
      <div className={`${animDivCn} animate-pulse`} />
    </ContainerAnimation>
  );
};

export const Shake: React.FC<AnimationProps> = ({ type }) => {
  return (
    <ContainerAnimation type={type}>
      <div className={`${animDivCn} animate-shake`} />
    </ContainerAnimation>
  );
};

export const Tada: React.FC<AnimationProps> = ({ type }) => {
  return (
    <ContainerAnimation type={type}>
      <div className={`${animDivCn} animate-tada`} />
    </ContainerAnimation>
  );
};

export const Jump: React.FC<AnimationProps> = ({ type }) => {
  return (
    <ContainerAnimation type={type}>
      <div className={`${animDivCn} animate-jump`} />
    </ContainerAnimation>
  );
};

export const Hang: React.FC<AnimationProps> = ({ type }) => {
  return (
    <ContainerAnimation type={type}>
      <div className={`${animDivCn} animate-hang`} />
    </ContainerAnimation>
  );
};

export const RollIn: React.FC<AnimationProps> = ({ type }) => {
  return (
    <ContainerAnimation type={type}>
      <div className={`${animDivCn} animate-roll-in`} />
    </ContainerAnimation>
  );
};

export const RollOut: React.FC<AnimationProps> = ({ type }) => {
  return (
    <ContainerAnimation type={type}>
      <div className={`${animDivCn} animate-roll-out`} />
    </ContainerAnimation>
  );
};

export const Float: React.FC<AnimationProps> = ({ type }) => {
  return (
    <ContainerAnimation type={type}>
      <div className={`${animDivCn} animate-float`} />
    </ContainerAnimation>
  );
};

export const Sink: React.FC<AnimationProps> = ({ type }) => {
  return (
    <ContainerAnimation type={type}>
      <div className={`${animDivCn} animate-sink`} />
    </ContainerAnimation>
  );
};

export const Sway: React.FC<AnimationProps> = ({ type }) => {
  return (
    <ContainerAnimation type={type}>
      <div className={`${animDivCn} animate-sway`} />
    </ContainerAnimation>
  );
};

export const Flash: React.FC<AnimationProps> = ({ type }) => {
  return (
    <ContainerAnimation type={type}>
      <div className={`${animDivCn} animate-flash`} />
    </ContainerAnimation>
  );
};

export const Jiggle: React.FC<AnimationProps> = ({ type }) => {
  return (
    <ContainerAnimation type={type}>
      <div className={`${animDivCn} animate-jiggle`} />
    </ContainerAnimation>
  );
};

export const Blink: React.FC<AnimationProps> = ({ type }) => {
  return (
    <ContainerAnimation type={type}>
      <div className={`${animDivCn} animate-blink`} />
    </ContainerAnimation>
  );
};

export const Pop: React.FC<AnimationProps> = ({ type }) => {
  return (
    <ContainerAnimation type={type}>
      <div className={`${animDivCn} animate-pop`} />
    </ContainerAnimation>
  );
};

export const Heartbeat: React.FC<AnimationProps> = ({ type }) => {
  return (
    <ContainerAnimation type={type}>
      <div className={`${animDivCn} animate-heartbeat`} />
    </ContainerAnimation>
  );
};

export const ExpandHorizontally: React.FC<AnimationProps> = ({ type }) => {
  return (
    <ContainerAnimation type={type}>
      <div className={`${animDivCn} animate-expand-horizontally`} />
    </ContainerAnimation>
  );
};

export const ContractHorizontally: React.FC<AnimationProps> = ({ type }) => {
  return (
    <ContainerAnimation type={type}>
      <div className={`${animDivCn} animate-contract-horizontally`} />
    </ContainerAnimation>
  );
};

export const ExpandVertically: React.FC<AnimationProps> = ({ type }) => {
  return (
    <ContainerAnimation type={type}>
      <div className={`${animDivCn} animate-expand-vertically`} />
    </ContainerAnimation>
  );
};

export const ContractVertically: React.FC<AnimationProps> = ({ type }) => {
  return (
    <ContainerAnimation type={type}>
      <div className={`${animDivCn} animate-contract-vertically`} />
    </ContainerAnimation>
  );
};

export const RubberBand: React.FC<AnimationProps> = ({ type }) => {
  return (
    <ContainerAnimation type={type}>
      <div className={`${animDivCn} animate-rubber-band`} />
    </ContainerAnimation>
  );
};
