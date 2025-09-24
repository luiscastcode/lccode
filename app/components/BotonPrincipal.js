
export default function BotonPrincipal({url,nombre}){
return(
<a className="mr-4 group relative inline-block focus:ring-3 focus:outline-hidden" href={url}>
  <span
    className="absolute inset-0 translate-x-1.5 translate-y-1.5 bg-yellow-300 transition-transform group-hover:translate-x-0 group-hover:translate-y-0"
  ></span>

  <span
    className="relative inline-block border-2 border-current px-8 py-3 text-sm font-bold tracking-widest text-black uppercase"
  >
    {nombre}
  </span>
</a>
);
}