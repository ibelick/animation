import { GitHubLogoIcon, TwitterLogoIcon } from '@radix-ui/react-icons';
import './globals.css';
import { Inter_Tight } from 'next/font/google';
import Link from 'next/link';
import Script from 'next/script';

const interTight = Inter_Tight({ subsets: ['latin'] });

export const metadata = {
  title: 'animation.ibelick - Tailwind CSS animation gallery',
  description:
    'A curated collection of animations crafted exclusively with Tailwind CSS. Ready to integrate with a simple copy-paste.',
};

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className='relative mx-auto h-screen w-full max-w-7xl px-6 md:px-8 lg:px-12'>
      <header className='flex animate-fade-in items-center justify-between py-8'>
        <Link href='/'>
          <span className='text-neutral-950'>animation.ibelick</span>
        </Link>
        <nav className='flex gap-6'>
          <a
            href='https://twitter.com/Ibelick'
            target='_blank'
            rel='noopener noreferrer'
            className='inline-flex'
          >
            <TwitterLogoIcon className='h-6 w-6 text-neutral-800 transition-colors hover:text-neutral-600' />
          </a>
          <a
            href='https://github.com/ibelick/animation'
            target='_blank'
            rel='noopener noreferrer'
            className='inline-flex'
          >
            <GitHubLogoIcon className='h-6 w-6 text-neutral-800 transition-colors hover:text-neutral-600' />
          </a>
        </nav>
      </header>
      <main>{children}</main>
      <footer>
        <div className='flex items-center justify-center py-8'>
          <span className='text-sm text-neutral-800'>
            Made by
            <a
              href='https://twitter.com/Ibelick'
              target='_blank'
              rel='noopener noreferrer'
              className='ml-1 rounded-full bg-neutral-100 px-2 py-1 text-neutral-950'
            >
              @Ibelick
            </a>
          </span>
        </div>
      </footer>
    </div>
  );
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const isDev = process.env.NODE_ENV === 'development';

  return (
    <html lang='en'>
      {!isDev ? (
        <Script
          async
          src='https://analytics.umami.is/script.js'
          data-website-id='0768af12-de21-46d7-a57a-9c3849b1e524'
        />
      ) : null}
      <body className={interTight.className}>
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}
