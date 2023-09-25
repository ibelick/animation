import Playground from "@/components/app/playground";
import { animations } from "@/data/animations";

const EffectPage = async ({ params }: { params: { slug: string } }) => {
  const animation = animations.find(
    (animation) => animation.slug === params.slug
  );

  if (!animation) {
    return <div>Not found</div>;
  }

  return (
    <Playground>
      <animation.component type="div" />
    </Playground>
  );
};

export default EffectPage;
