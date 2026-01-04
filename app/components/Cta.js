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
    <div className="m-1 md:m-6 p-1 md:p-4 bg-white border border-gray-200 rounded-lg shadow">
      <div
        id={idcta}
        className="flex flex-col items-center justify-center mx-auto py-8 px-4 max-w-screen-xl text-center md:py-16"
      >
        <h1 className="mb-4 text-4xl tracking-tight leading-none  md:text-6xl text-transparent bg-clip-text bg-gradient-to-r to-amber-600 from-sky-400">
          {titulocta}
        </h1>
        <p className="mb-8 text-lg font-normal text-gray-500 md:text-xl sm:px-16 lg:px-48">
          {descripcta}
        </p>
        <Link
          href={urlcta}
          target={targetcta}
          rel="noreferrer noopener"
          className="group relative inline-block focus:ring-3 focus:outline-hidden"
        >
          <span className="absolute inset-0 translate-x-1.5 translate-y-1.5 bg-yellow-300 transition-transform group-hover:translate-x-0 group-hover:translate-y-0"></span>
          <span className="relative inline-block border-2 border-current px-8 py-3 text-sm font-bold tracking-widest uppercase">
            {textboton}
          </span>
        </Link>
      </div>
    </div>
  );
}
