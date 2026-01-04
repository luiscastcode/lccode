import HeroInterno from "../../components/HeroInterno";
import Image from "next/image";
export const metadata = {
  title: "Blog | Soluciones web para tu emprendimiento",
  description:
    "Creación y desarrollo de soluciones webs para emprendimientos que desean avanzar al siguiente nivel.",
};
export default function Articulo({params}) {
  return (
    <div className="mt-8 grid grid-cols-2 justify-center items-center dark:bg-gray-900">
      <div>
        <HeroInterno
          titulohero={params.articulosID}
          descriphero="Cuento con más de 10 años de experiencia en desarrollo web frontend, especializado en Wordpress, Joomla y Prestashop. Y ahora con todo el poder de react y nextjs
             deasarrollo proyectos ligeros y escalables."
        />
      </div>
      <div>
        <Image
          className="h-auto max-w-full rounded-lg"
          src="/lcc.svg"
          alt="yos"
          width={300}
          height={300}
        />
      </div>
    </div>
  );
}