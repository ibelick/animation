'use client';
import { useState } from 'react';

export const animDivCn = 'w-32 h-32 bg-neutral-800 rounded-xl';
export const animTextCn = 'text-neutral-800 text-2xl font-bold';

type Type = 'div' | 'text';

export type AnimationProps = {
  type: Type;
  children?: React.ReactNode;
};

const ContentAnimation: React.FC<AnimationProps> = ({ type }) => {
  const className = type === 'text' ? animTextCn : animDivCn;
  return (
    <div className={className}>{type === 'text' ? 'Hello World' : null}</div>
  );
};

const ContainerAnimation: React.FC<AnimationProps> = ({ type, children }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {isHovered ? children : <ContentAnimation type={type} />}
    </div>
  );
};

const withAnimation = (
  WrappedComponent: React.FC<AnimationProps>,
  animationClass: string,
) => {
  const WithAnimationComponent: React.FC<AnimationProps> = ({ type }) => (
    <ContainerAnimation type={type}>
      <div
        className={`${
          type === 'text' ? animTextCn : animDivCn
        } ${animationClass}`}
      >
        {type === 'text' ? 'Hello World' : null}
      </div>
    </ContainerAnimation>
  );

  WithAnimationComponent.displayName = `WithAnimation(${getDisplayName(
    WrappedComponent,
  )})`;

  return WithAnimationComponent;
};

function getDisplayName(WrappedComponent: React.ComponentType<any>): string {
  return WrappedComponent.displayName || WrappedComponent.name || 'Component';
}

export const FadeIn = withAnimation(ContainerAnimation, 'animate-fade-in');
export const FadeOut = withAnimation(ContainerAnimation, 'animate-fade-out');
export const FadeInUp = withAnimation(ContainerAnimation, 'animate-fade-in-up');
export const FadeInDown = withAnimation(
  ContainerAnimation,
  'animate-fade-in-down',
);
export const FadeInLeft = withAnimation(
  ContainerAnimation,
  'animate-fade-in-left',
);
export const FadeInRight = withAnimation(
  ContainerAnimation,
  'animate-fade-in-right',
);
export const FadeOutUp = withAnimation(
  ContainerAnimation,
  'animate-fade-out-up',
);
export const FadeOutDown = withAnimation(
  ContainerAnimation,
  'animate-fade-out-down',
);
export const FadeOutLeft = withAnimation(
  ContainerAnimation,
  'animate-fade-out-left',
);
export const FadeOutRight = withAnimation(
  ContainerAnimation,
  'animate-fade-out-right',
);
export const SlideInTop = withAnimation(
  ContainerAnimation,
  'animate-slide-in-top',
);
export const SlideInBottom = withAnimation(
  ContainerAnimation,
  'animate-slide-in-bottom',
);
export const SlideInLeft = withAnimation(
  ContainerAnimation,
  'animate-slide-in-left',
);
export const SlideInRight = withAnimation(
  ContainerAnimation,
  'animate-slide-in-right',
);
export const SlideOutTop = withAnimation(
  ContainerAnimation,
  'animate-slide-out-top',
);
export const SlideOutBottom = withAnimation(
  ContainerAnimation,
  'animate-slide-out-bottom',
);
export const SlideOutLeft = withAnimation(
  ContainerAnimation,
  'animate-slide-out-left',
);
export const SlideOutRight = withAnimation(
  ContainerAnimation,
  'animate-slide-out-right',
);
export const SlideRotateIn = withAnimation(
  ContainerAnimation,
  'animate-slide-rotate-in',
);
export const SlideRotateOut = withAnimation(
  ContainerAnimation,
  'animate-slide-rotate-out',
);
export const ZoomIn = withAnimation(ContainerAnimation, 'animate-zoom-in');
export const ZoomOut = withAnimation(ContainerAnimation, 'animate-zoom-out');
export const Rotate90 = withAnimation(ContainerAnimation, 'animate-rotate-90');
export const Rotate180 = withAnimation(
  ContainerAnimation,
  'animate-rotate-180',
);
export const Rotate360 = withAnimation(
  ContainerAnimation,
  'animate-rotate-360',
);
export const RotateIn = withAnimation(ContainerAnimation, 'animate-rotate-in');
export const RotateOut = withAnimation(
  ContainerAnimation,
  'animate-rotate-out',
);
export const SpinClockwise = withAnimation(
  ContainerAnimation,
  'animate-spin-clockwise',
);
export const SpinCounterClockwise = withAnimation(
  ContainerAnimation,
  'animate-spin-counter-clockwise',
);
export const FlipHorizontal = withAnimation(
  ContainerAnimation,
  'animate-flip-horizontal',
);
export const FlipVertical = withAnimation(
  ContainerAnimation,
  'animate-flip-vertical',
);
export const FlipX = withAnimation(ContainerAnimation, 'animate-flip-x');
export const FlipY = withAnimation(ContainerAnimation, 'animate-flip-y');
export const FlipInX = withAnimation(ContainerAnimation, 'animate-flip-in-x');
export const FlipInY = withAnimation(ContainerAnimation, 'animate-flip-in-y');
export const FlipOutX = withAnimation(ContainerAnimation, 'animate-flip-out-x');
export const FlipOutY = withAnimation(ContainerAnimation, 'animate-flip-out-y');
export const Bounce = withAnimation(ContainerAnimation, 'animate-bounce');
export const Swing = withAnimation(ContainerAnimation, 'animate-swing');
export const Wobble = withAnimation(ContainerAnimation, 'animate-wobble');
export const Pulse = withAnimation(ContainerAnimation, 'animate-pulse');
export const Shake = withAnimation(ContainerAnimation, 'animate-shake');
export const Tada = withAnimation(ContainerAnimation, 'animate-tada');
export const Jump = withAnimation(ContainerAnimation, 'animate-jump');
export const Hang = withAnimation(ContainerAnimation, 'animate-hang');
export const RollIn = withAnimation(ContainerAnimation, 'animate-roll-in');
export const RollOut = withAnimation(ContainerAnimation, 'animate-roll-out');
export const Float = withAnimation(ContainerAnimation, 'animate-float');
export const Sink = withAnimation(ContainerAnimation, 'animate-sink');
export const Sway = withAnimation(ContainerAnimation, 'animate-sway');
export const Flash = withAnimation(ContainerAnimation, 'animate-flash');
export const Jiggle = withAnimation(ContainerAnimation, 'animate-jiggle');
export const Blink = withAnimation(ContainerAnimation, 'animate-blink');
export const Pop = withAnimation(ContainerAnimation, 'animate-pop');
export const Heartbeat = withAnimation(ContainerAnimation, 'animate-heartbeat');
export const ExpandHorizontally = withAnimation(
  ContainerAnimation,
  'animate-expand-horizontally',
);
export const ContractHorizontally = withAnimation(
  ContainerAnimation,
  'animate-contract-horizontally',
);
export const ExpandVertically = withAnimation(
  ContainerAnimation,
  'animate-expand-vertically',
);
export const ContractVertically = withAnimation(
  ContainerAnimation,
  'animate-contract-vertically',
);
export const RubberBand = withAnimation(
  ContainerAnimation,
  'animate-rubber-band',
);
export const BlurredFadeIn = withAnimation(
  ContainerAnimation,
  'animate-blurred-fade-in',
);
export const HorizontalVibration = withAnimation(
  ContainerAnimation,
  'animate-horizontal-vibration',
);
export const RotationalWave = withAnimation(
  ContainerAnimation,
  'animate-rotational-wave',
);
export const Skew = withAnimation(ContainerAnimation, 'animate-skew');
export const VerticalBounce = withAnimation(
  ContainerAnimation,
  'animate-vertical-bounce',
);
export const HorizontalBounce = withAnimation(
  ContainerAnimation,
  'animate-horizontal-bounce',
);
export const Tilt = withAnimation(ContainerAnimation, 'animate-tilt');
export const Squeeze = withAnimation(ContainerAnimation, 'animate-squeeze');
export const SlideUpFade = withAnimation(
  ContainerAnimation,
  'animate-slide-up-fade',
);
export const BounceFadeIn = withAnimation(
  ContainerAnimation,
  'animate-bounce-fade-in',
);
export const SwingDropIn = withAnimation(
  ContainerAnimation,
  'animate-swing-drop-in',
);
export const PulseFadeIn = withAnimation(
  ContainerAnimation,
  'animate-pulse-fade-in',
);
