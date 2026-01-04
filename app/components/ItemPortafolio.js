"use client";
import { motion } from "framer-motion";
import Image from "next/image";

export default function ItemPortfolio({
  id,
  titulo,
  descrip,
  categ1,
  categ2,
  destacado,
  imagen,
  url,
  target,
  tituloBtn,
}) {
  const itemsportafolio = [
    {
      id: 1,
      titulo: "CriptoMine",
      descrip:
        "Simple billetera para criptomonedas, para trading, esta plantilla es para la venta",
      categ1: "HTML, CSS, JS",
      categ2: "Admin Lite",
      destacado: "bg-gradient-to-r from-green-400 to-blue-500",
      imagen: "/img/proyectos/cripto.jpg",
      url: "https://www.templatemonster.com/website-templates/criptomine-wallet-website-template-248029.html",
      target: "_blank",
      tituloBtn: "comprar",
    },
    {
      id: 2,
      titulo: "Federación Venezolana de Esgrima",
      descrip:
        "Página oficial de la federación venezolana de esgrima, hecha con tecnologia de Wordpress.",
      categ1: "Wordpress",
      categ2: "Elementor",
      destacado: "bg-[#252734]",
      imagen: "/img/proyectos/fencingven.jpg",
      url: "https://fencingven.com",
      target: "_blank ",
      tituloBtn: "visitar",
    },
    {
      id: 3,
      titulo: "Gotoca Imports",
      descrip:
        "Diseño y desarrollo de un ecommerce para la empresa importadora de repuestos para camiones Gotoca Imports.",
      categ1: "Wordpress",
      categ2: "Woocommerce Elementor",
      destacado: "bg-[#252734]",
      imagen: "/img/proyectos/gotoca.jpg",
      url: "",
      target: " _blank",
      tituloBtn: "inactivo",
    },
    {
      id: 4,
      titulo: "Luis Cast Code",
      descrip:
        "Desarrollo de mi propia web portafolio, hecha con react, nextjs y framer motion.",
      categ1: "React",
      categ2: "NextJS Framework",
      destacado: "bg-[#252734]",
      imagen: "/img/proyectos/lcc.jpg",
      url: "https://lcastcode.vercel.app/",
      target: " ",
      tituloBtn: "visitar",
    },
    {
      id: 5,
      titulo: "Directorio IA",
      descrip: "Directorio de aplicaciones webs con inteligencia artificial.",
      categ1: "React",
      categ2: "Astro Framework",
      destacado: "bg-[#252734]",
      imagen: "/img/proyectos/directorioia.webp",
      url: "https://aplicacionesdeia.site",
      target: "_blank ",
      tituloBtn: "visitar",
    },
    {
      id: 6,
      titulo: "Viralization Mkt",
      descrip:
        "Agencia de marketing digital radicada en Lima, Peru, diseño y configuración de su web.",
      categ1: "Wordpress",
      categ2: "Diseño Web",
      destacado: "bg-[#252734]",
      imagen: "/img/proyectos/viralmkt.jpg",
      url: "https://viralizationmkt.com/",
      target: "_blank ",
      tituloBtn: "visitar",
    },
    {
      id: 7,
      titulo: "Bodegón Diesel",
      descrip:
        "Tienda retail para venta de respuestos para camiones diesel y transporte de carga.",
      categ1: "Wordpress",
      categ2: "Elementor",
      destacado: "bg-[#252734]",
      imagen: "/img/proyectos/bd.jpg",
      url: " ",
      target: "_blank",
      tituloBtn: "inactivo",
    },

    {
      id: 8,
      titulo: "Qantyka",
      descrip:
        "Mi primera web internacional, rediseño general de su web a un diseño más corporativo.",
      categ1: "Wordpress",
      categ2: "Elementor",
      destacado: "bg-[#252734]",
      imagen: "/img/proyectos/quanthyka.png",
      url: "",
      target: " ",
      tituloBtn: "inactivo",
    },
  ];
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-3 justify-center gap-1">
        {itemsportafolio.map(
          ({
            id,
            titulo,
            descrip,
            categ1,
            categ2,
            destacado,
            imagen,
            url,
            target,
            tituloBtn,
          }) => (
            <div
              key={id}
              className={`${destacado} w-full bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700`}
            >
              <motion.div
                whileHover={{ scale: 1.2 }}
                transition={{
                  ease: "linear",
                  duration: 2,
                  x: { duration: 1 },
                }}
              >
                <Image
                  width="1200"
                  height="750"
                  className="rounded-t-lg cursor-pointer"
                  src={imagen}
                  alt={descrip}
                />
              </motion.div>

              <div className="p-5">
                <h4 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">
                  {titulo}
                </h4>

                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                  {categ1}
                </span>
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                  {categ2}
                </span>
                <p className="mb-3 text-gray-700">
                  {descrip}
                </p>
                <a
                  class="inline-flex items-center gap-2 rounded-xl border border-indigo-600 bg-indigo-600 px-4 py-3 text-white hover:bg-transparent hover:text-indigo-600 focus:ring-3 focus:outline-hidden"
                  href={url}
                  target={target}
                >
                  <span class="text-lg font-medium uppercase"> {tituloBtn} </span>

                  <svg
                    class="size-5 shadow-sm rtl:rotate-180"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </a>
              </div>
            </div>
          )
        )}
      </div>
    </>
  );
}
