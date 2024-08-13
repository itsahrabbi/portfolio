"use client";
import Image from "next/image";
import { Url } from "next/dist/shared/lib/router/router";

type Props = {
    src: string | Url;
    alt: string;
    isPriority?: boolean;
    className?: string;
};

const isAbsoluteOrRootRelative = (url: string) =>
    /^(?:[a-z]+:)?\/\/|^\//i.test(url);

export default function Picture({ src, alt, isPriority, className }: Props) {
    const imageSrc = typeof src === 'string' ? src : src.toString();
    const source = isAbsoluteOrRootRelative(imageSrc) ? imageSrc : "/prev.jpg";

    return (
        <Image
            priority={isPriority}
            src={source}
            fill
            sizes="(min-width: 475px) 100vw, (min-width: 768px) 1080px, (min-width: 1024px) 1920px"
            alt={alt}
            className={`object-cover ${className}`}
        />
    );
}