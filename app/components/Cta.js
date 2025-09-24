import Link from "next/link";
export default function Cta({
  titulocta,
  descripcta,
  idcta,
  urlcta,
  targetcta,
  textboton,
}) {
  return (
    <div className="w-full mt-6 p-4 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <div
        id={idcta}
        className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16"
      >
        <h1 className="mb-4 text-4xl tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-transparent bg-clip-text bg-gradient-to-r to-amber-600 from-sky-400">
          {titulocta}
        </h1>
        <p className="mb-8 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 lg:px-48 dark:text-gray-400">
          {descripcta}
        </p>
        <Link
          href={urlcta}
          target={targetcta}
          rel="noreferrer noopener"
          className="group relative inline-block focus:ring-3 focus:outline-hidden"
        >
          <span className="absolute inset-0 translate-x-1.5 translate-y-1.5 bg-yellow-300 transition-transform group-hover:translate-x-0 group-hover:translate-y-0"></span>
          <span className="relative inline-block border-2 border-current px-8 py-3 text-sm font-bold tracking-widest text-black uppercase">
            {textboton}
          </span>
        </Link>
      </div>
    </div>
  );
}
