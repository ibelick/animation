import Playground from "@/components/app/playground";
import { animations } from "@/data/animations";
import config from "../../tailwind.config";
import CodeBlock from "@/components/app/code-block";

const EffectPage = async ({ params }: { params: { slug: string } }) => {
  const animation = animations.find(
    (animation) => animation.slug === params.slug,
  );

  if (!animation || !animation.slug) {
    return <div>Not found</div>;
  }

  const twAnimation =
    config.theme?.extend?.animation &&
    (config.theme.extend.animation as { [key: string]: string })[
      animation.slug
    ];
  const twKeyframes =
    config.theme?.extend?.keyframes &&
    ((config.theme.extend.keyframes as { [key: string]: any })[
      animation.slug
    ] as {
      [key: string]: any;
    });

  const code = {
    animation: {
      [animation.slug]: twAnimation,
    },
    [animation.slug]: {
      ...twKeyframes,
    },
  };

  const twCode = JSON.stringify(code, null, 2);

  return (
    <div>
      <Playground>
        <animation.component type="div" />
      </Playground>
      <div>
        <div className="mt-8">
          <CodeBlock code={twCode} lang="json" fileName="tailwind.config.ts" />
        </div>
      </div>
    </div>
  );
};

export default EffectPage;
