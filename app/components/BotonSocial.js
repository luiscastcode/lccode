import {
  IconMailOpened,
  IconBrandGithub,
  IconBrandInstagram,
} from "@tabler/icons-react";
import Link from "next/link";

export default function BotonSocial({ id, title, url, socialicon }) {
  const itemsocial = [
    {
      id: 1,
      title: "Email",
      url: "mailto:castilloluis2005@gmail.com",
      socialicon: <IconMailOpened />,
    },
    {
      id: 2,
      title: "GitHub",
      url: "https://github.com/luiscastcode",
      socialicon: <IconBrandGithub />,
    },
    {
      id: 3,
      title: "Instagram",
      url: "https://www.instagram.com/k25disenaweb",
      socialicon: <IconBrandInstagram />,
    },
  ];
  return (
    <div className="flex bg-white w-fit px-1.25 py-1 shadow-box-up rounded-2xl">
      {itemsocial.map(({ id, title, url, socialicon }) => (
        <div
          key={id}
          className="rounded-2xl w-full px-1.5 py-1.5 md:px-3 md:py-1"
        >
          <Link
            href={url}
            target="_blank"
            className="text-light-blue-light hover:text-black border-2 inline-flex items-center mr-4 last-of-type:mr-0 p-2.5 border-transparent bg-light-secondary shadow-button-flat-nopressed hover:shadow-button-flat-pressed focus:opacity-100 focus:outline-none active:border-2 active:shadow-button-flat-pressed font-medium rounded-full text-sm text-center"
            title={title}
          >
            {socialicon}
          </Link>
        </div>
      ))}
    </div>
  );
}
