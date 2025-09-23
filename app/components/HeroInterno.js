

export default function HeroInterno({ titulohero, descriphero }) {
  return (
    <section class="bg-white dark:bg-gray-900">
      <div class="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16">
        <h1 class="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl dark:text-transparent bg-clip-text bg-gradient-to-r to-amber-600 from-sky-400">
          {titulohero}
        </h1>
        <p class="mb-8 text-lg font-normal text-justify text-gray-500 lg:text-xl sm:px-16 lg:px-40 dark:text-gray-400">
          {descriphero}
        </p>
         
      </div>
    </section>
  );
}
