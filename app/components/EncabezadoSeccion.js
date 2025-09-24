export default function EncabezadoSeccion({
  tituloseccion,
  descripseccion,
  idseccion,
}) {
  return (
    <div
      id={idseccion}
      className="p-2 mx-auto w-full text-center"
    >
      <h1 className="mt-6 mb-4 text-4xl tracking-tight leading-none text-white md:text-5xl">
        {tituloseccion}
      </h1>
      <p className="mb-8 text-lg text-slate-300 md:text-xl">
        {descripseccion}
      </p>
      <hr className="w-full h-4 mx-auto my-2 border-0 rounded md:my-10 bg-indigo-50"></hr>
    </div>
  );
}
