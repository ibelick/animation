import {
  TwitterLogoIcon,
  GitHubLogoIcon,
  ArrowRightIcon,
} from "@radix-ui/react-icons";
import Button from "@/components/ui/button";
import ListAnimation from "./components/list-animation";

export default function Home() {
  return (
    <>
      <div>
        <div className="relative mx-auto h-screen w-full max-w-7xl px-6 md:px-8 lg:px-12">
          <header className="flex items-center justify-between py-8">
            <div />
            <nav className="flex gap-6">
              <a
                href="https://twitter.com/Ibelick"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex"
              >
                <TwitterLogoIcon
                  className="h-6 w-6 text-neutral-800 transition-colors hover:text-neutral-600 dark:text-neutral-200 dark:hover:text-neutral-400"
                  strokeWidth={1.5}
                />
              </a>
              <a
                href="https://github.com/ibelick/animation"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex"
              >
                <GitHubLogoIcon
                  className="h-6 w-6 text-neutral-800 transition-colors hover:text-neutral-600 dark:text-neutral-200 dark:hover:text-neutral-400"
                  strokeWidth={1.5}
                />
              </a>
            </nav>
          </header>
          <div className="pt-8">
            <div className="relative mx-auto flex max-w-2xl flex-col items-center">
              {/* <div className="mb-8 flex">
                <a
                  href="https://github.com/ibelick/background-snippets"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex"
                >
                  <span className="relative inline-block overflow-hidden rounded-full p-[1px]">
                    <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#a9a9a9_0%,#0c0c0c_50%,#a9a9a9_100%)] dark:bg-[conic-gradient(from_90deg_at_50%_50%,#171717_0%,#737373_50%,#171717_100%)]" />
                    <div className="inline-flex h-full w-full cursor-pointer justify-center rounded-full bg-white px-3 py-1 text-xs font-medium leading-5 text-slate-600 backdrop-blur-xl dark:bg-black dark:text-slate-200">
                      New snippets ⚡️
                      <span className="inline-flex items-center pl-2 text-black dark:text-white">
                        Read more{" "}
                        <ArrowRightIcon className="pl-0.5 text-black dark:text-white" />
                      </span>
                    </div>
                  </span>
                </a>
              </div> */}
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
          <footer>
            <div className="flex items-center justify-center py-8">
              <span className="text-sm text-neutral-800 dark:text-neutral-200">
                Made by
                <a
                  href="https://twitter.com/Ibelick"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="ml-1 text-neutral-950 dark:text-neutral-100"
                >
                  @Ibelick
                </a>
              </span>
            </div>
          </footer>
        </div>
      </div>
    </>
  );
}
