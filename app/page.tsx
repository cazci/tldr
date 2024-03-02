import { Post } from "./types";

export default async function Home() {
  const BASE_URL = process.env.BASE_URL;
  const res = await fetch(`${BASE_URL}/posts`, {
    next: { revalidate: 60 * 10 },
  });
  const json = await res.json();
  if (!res.ok) {
    throw new Error("Data fetch failed");
  }
  const posts: Post[] = Array.isArray(json) ? json : [];

  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <div className="z-10 max-w-5xl w-full text-sm lg:flex">
        <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none">
          <a href="/" className="text-2xl p-8 lg:p-0 lg:ml-5">
            TLDR
          </a>
        </div>
      </div>
      <div className="mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mt-8 lg:mb-0 lg:grid-cols-3 lg:gap-8 lg:text-left">
        {posts.map((post) => (
          <a
            key={post.id}
            href="#"
            className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          >
            <div className="mb-3 text-2xl font-semibold">
              {post.title}
              <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                &nbsp;⇨
              </span>
            </div>
            <p className="m-0 max-w-[30ch] text-sm opacity-50">Lorem ipsum</p>
          </a>
        ))}
      </div>
    </main>
  );
}
