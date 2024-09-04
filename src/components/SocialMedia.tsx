interface SocialMediaObj {
  media: string;
  link: string;
}

interface SocialMediaProps {
  socialMedias: SocialMediaObj[];
}

export default function SocialMedia({ socialMedias }: SocialMediaProps) {
  const SocialMedia = socialMedias.map((item) => (
    <li key={item.media} className="text-zinc-500 py-4">
      <a
        target="_blank"
        href={item.link}
        className="cursor-pointer hover:text-white ease-in duration-200 text-lg"
      >
        {item.media}
      </a>
    </li>
  ));
  return <ul className="flex gap-4 w-full lg:justify-end">{SocialMedia}</ul>;
}
