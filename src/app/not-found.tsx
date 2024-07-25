export default function NotFound() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm text-text lg:flex">
        <p className="fixed left-0 top-0 flex w-full justify-center border-b border-mantle pb-6 pt-8 lg:static lg:w-auto lg:rounded-xl lg:border lg:bg-mantle lg:p-4">
          https://og.sydneyn.dev
        </p>
        <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center lg:static lg:size-auto lg:bg-none">
          <a
            className="pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0"
            href="https://sydneyn.dev"
            target="_blank"
            rel="noopener noreferrer"
          >
            <p className="font-bold">@cecelot</p>
          </a>
        </div>
      </div>
    </main>
  );
}
