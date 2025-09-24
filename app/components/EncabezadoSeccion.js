export default function EncabezadoSeccion({
  tituloseccion,
  descripseccion,
  idseccion,
}) {
  return (
    <div
      id={idseccion}
      className="py-8 px-4 mx-auto w-full text-center lg:py-8"
    >
      <h1 className="mt-6 mb-4 text-4xl tracking-tight leading-none text-gray-900 md:text-5xl">
        {tituloseccion}
      </h1>
      <p className="mb-8 text-lg text-gray-500 md:text-xl sm:px-16 lg:px-48">
        {descripseccion}
      </p>
      <hr className="w-48 h-1 mx-auto my-4 border-0 rounded md:my-10 bg-gray-700"></hr>
    </div>
  );
}
