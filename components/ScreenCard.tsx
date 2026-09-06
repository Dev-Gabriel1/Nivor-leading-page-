import Image from "next/image";

type Props = { src: string; alt: string; priority?: boolean; className?: string };

export function ScreenCard({ src, alt, priority = false, className = "" }: Props) {
  return (
    <div className={`screen-frame ${className}`}>
      <div className="screen-notch" aria-hidden="true" />
      <Image src={src} alt={alt} width={900} height={1948} priority={priority} sizes="(max-width: 760px) 78vw, 340px" />
    </div>
  );
}
