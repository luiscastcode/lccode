
export default function BotonSecundario({url,nombre}){
return(
<a class="mr-4 group relative inline-block focus:ring-3 focus:outline-hidden" href={url}>
  <span
    class="absolute inset-0 translate-x-0 translate-y-0 bg-yellow-300 transition-transform group-hover:translate-x-1.5 group-hover:translate-y-1.5"
  ></span>

   <span
    class="relative inline-block border-2 border-current px-8 py-3 text-sm font-bold tracking-widest uppercase"
  >
    {nombre}
  </span>
</a>
);
}