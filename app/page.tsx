import { ArrowRightIcon } from "@radix-ui/react-icons";
import Button from "@/components/ui/button";
import ListAnimation from "./components/list-animation";

export default function Home() {
  return (
    <>
      <div className="pt-8">
        <div className="relative mx-auto flex max-w-2xl flex-col items-center">
          <h2 className="text-center text-3xl font-medium text-gray-900 dark:text-gray-50 sm:text-6xl">
            Collection of Tailwind CSS{" "}
            <span className="animate-text-gradient inline-flex bg-gradient-to-b from-neutral-900 via-slate-500 to-neutral-500 bg-[200%_auto] bg-clip-text leading-tight text-transparent dark:from-neutral-100 dark:via-slate-400 dark:to-neutral-400">
              animations
            </span>
          </h2>
          <p className="mt-6 text-center text-lg leading-6 text-gray-600 dark:text-gray-200">
            Ready-to-use, simply copy and paste into your next project. All
            snippets crafted with Tailwind CSS.
          </p>
          <div className="mt-10 flex gap-4">
            <a
              href="https://github.com/ibelick/animation"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center"
            >
              <Button>
                Go to GitHub <ArrowRightIcon className="pl-0.5" />
              </Button>{" "}
            </a>
          </div>
        </div>
      </div>
      <div className="overflow-hidden px-4 pb-20 pt-52 md:px-10">
        <ListAnimation />
      </div>
    </>
  );
}
