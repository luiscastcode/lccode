import Image from "next/image";
import BotonSocial from "../components/BotonSocial";

export default function HeroInterno({ titulohero, descriphero }) {
  return (
    <section>
      <div class="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 md:px-8 bg-slate-200 rounded-md mt-[75px]">
        <div class="grid grid-cols-1 gap-4 md:grid-cols-2 md:items-center md:gap-8">
          <div>
            <div class="max-w-prose md:max-w-none">
              <h2 class="text-2xl sm:text-3xl text-transparent bg-clip-text bg-gradient-to-r to-amber-600 from-sky-400">
                {titulohero}
              </h2>

              <p class="mt-4 text-gray-700">
                {descriphero}
              </p>
            </div>
            <div class="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0 my-8">
              <BotonSocial />
            </div>
          </div>

          <div>
            <Image
              className="mt-[-48px] rounded-lg"
              src="/img/yo.png"
              alt="yos"
              width={334}
              height={548}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
