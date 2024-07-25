export default function Footer() {
  return (
    <footer className="flex flex-col mt-3 text-center">
      <div className="flex mx-auto mb-4">
        <p className="text-text">
          OpenGraph image generation tool for{" "}
          <a
            href="https://sydneyn.dev"
            className="text-blue hover:underline underline-offset-2 transition-all ease-in-out duration-200"
          >
            sydneyn.dev
          </a>
        </p>
      </div>
      <div className="flex flex-col space-y-1">
        <p className="text-subtext1 text-sm">Made with ❤️ by Sydney Newmark</p>
        <p className="text-subtext0 text-xs">
          Created using{" "}
          <a
            href="https://nextjs.org"
            className="text-blue hover:underline underline-offset-2 transition-all ease-in-out duration-200"
          >
            Next.js
          </a>{" "}
          and{" "}
          <a
            href="https://www.npmjs.com/package/@vercel/og"
            className="text-blue hover:underline underline-offset-2 transition-all ease-in-out duration-200"
          >
            @vercel/og
          </a>
        </p>
      </div>
    </footer>
  );
}
