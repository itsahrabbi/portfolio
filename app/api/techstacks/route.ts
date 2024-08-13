import connectMongoDB from "@utils/mongodb";
import TechStack from "@models/techstack";
import { NextResponse } from "next/server";

export async function POST(request: Request, response: Response) {
    const { ariaLabel, href, src, alt } = await request.json();
    await connectMongoDB();
    await TechStack.create({
        ariaLabel,
        href,
        src,
        alt
    });
    return NextResponse.json({ message: "Project created" });
}

export async function GET() {
    const techstacks = {
        techstacks: [
            {
                _id: "6654431be27cea13979ac15d",
                ariaLabel: "Python",
                href: "https://www.python.org/",
                src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
                alt: "python logo",
                createdAt: "2024-05-27T08:23:55.542Z",
                updatedAt: "2024-05-27T08:23:55.542Z",
                __v: 0
            },
            {
                _id: "66544330e27cea13979ac160",
                ariaLabel: "Ren'Py",
                href: "https://www.renpy.org/",
                src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/renpy/renpy-original.svg",
                alt: "renpy logo",
                createdAt: "2024-05-27T08:24:16.669Z",
                updatedAt: "2024-05-27T08:24:16.669Z",
                __v: 0
            },
            {
                _id: "6654433ae27cea13979ac162",
                ariaLabel: "JavaScript",
                href: "https://www.javascript.com/",
                src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
                alt: "javascript logo",
                createdAt: "2024-05-27T08:24:26.591Z",
                updatedAt: "2024-05-27T08:24:26.591Z",
                __v: 0
            },
            {
                _id: "66544343e27cea13979ac164",
                ariaLabel: "TypeScript",
                href: "https://www.typescriptlang.org/",
                src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
                alt: "typescript logo",
                createdAt: "2024-05-27T08:24:35.835Z",
                updatedAt: "2024-05-27T08:24:35.835Z",
                __v: 0
            },
            {
                _id: "6654434de27cea13979ac166",
                ariaLabel: "React",
                href: "https://react.dev/",
                src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
                alt: "react logo",
                createdAt: "2024-05-27T08:24:45.859Z",
                updatedAt: "2024-05-27T08:24:45.859Z",
                __v: 0
            },
            {
                _id: "66544354e27cea13979ac168",
                ariaLabel: "NextJs",
                href: "https://nextjs.org/",
                src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg",
                alt: "nextjs logo",
                createdAt: "2024-05-27T08:24:52.392Z",
                updatedAt: "2024-05-27T08:24:52.392Z",
                __v: 0
            },
            {
                _id: "6654435ae27cea13979ac16a",
                ariaLabel: "NodeJs",
                href: "https://nodejs.org/en",
                src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg",
                alt: "nodejs logo",
                createdAt: "2024-05-27T08:24:58.728Z",
                updatedAt: "2024-05-27T08:24:58.728Z",
                __v: 0
            },
            {
                _id: "66544362e27cea13979ac16c",
                ariaLabel: "ExpressJS",
                href: "https://expressjs.com/",
                src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg",
                alt: "expressjs logo",
                createdAt: "2024-05-27T08:25:06.468Z",
                updatedAt: "2024-05-27T08:25:06.468Z",
                __v: 0
            },
            {
                _id: "6654436ae27cea13979ac16e",
                ariaLabel: "TailwindCSS",
                href: "https://tailwindcss.com/",
                src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg",
                alt: "tailwindcss logo",
                createdAt: "2024-05-27T08:25:14.541Z",
                updatedAt: "2024-05-27T08:25:14.541Z",
                __v: 0
            },
            {
                _id: "66544371e27cea13979ac170",
                ariaLabel: "Sass",
                href: "https://sass-lang.com/",
                src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg",
                alt: "sass logo",
                createdAt: "2024-05-27T08:25:21.624Z",
                updatedAt: "2024-05-27T08:25:21.624Z",
                __v: 0
            },
            {
                _id: "66544379e27cea13979ac172",
                ariaLabel: "CSS",
                href: "https://web.dev/learn/css",
                src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
                alt: "css3 logo",
                createdAt: "2024-05-27T08:25:29.308Z",
                updatedAt: "2024-05-27T08:25:29.308Z",
                __v: 0
            },
            {
                _id: "6654437fe27cea13979ac174",
                ariaLabel: "HTML",
                href: "https://html.com/",
                src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
                alt: "html5 logo",
                createdAt: "2024-05-27T08:25:35.153Z",
                updatedAt: "2024-05-27T08:25:35.153Z",
                __v: 0
            },
            {
                _id: "66544385e27cea13979ac176",
                ariaLabel: "Figma",
                href: "https://www.figma.com/",
                src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg",
                alt: "figma logo",
                createdAt: "2024-05-27T08:25:41.511Z",
                updatedAt: "2024-05-27T08:25:41.511Z",
                __v: 0
            },
            {
                _id: "6654438be27cea13979ac178",
                ariaLabel: "Photoshop",
                href: "https://www.adobe.com/ph_en/products/photoshop/free-trial-download.html",
                src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/photoshop/photoshop-original.svg",
                alt: "photoshop logo",
                createdAt: "2024-05-27T08:25:47.765Z",
                updatedAt: "2024-05-27T08:25:47.765Z",
                __v: 0
            },
            {
                _id: "66544398e27cea13979ac17c",
                ariaLabel: "MongoDB",
                href: "https://www.mongodb.com/",
                src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
                alt: "mongodb logo",
                createdAt: "2024-05-27T08:26:00.521Z",
                updatedAt: "2024-05-27T08:26:00.521Z",
                __v: 0
            },
            {
                _id: "6654439ee27cea13979ac17e",
                ariaLabel: "Firebase",
                href: "https://firebase.google.com/",
                src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg",
                alt: "firebase logo",
                createdAt: "2024-05-27T08:26:06.627Z",
                updatedAt: "2024-05-27T08:26:06.627Z",
                __v: 0
            },
            {
                _id: "6684b4f9d1587cb36c066263",
                ariaLabel: "Godot",
                href: "https://godotengine.org/",
                src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/godot/godot-original.svg",
                alt: "godot logo",
                createdAt: "2024-07-03T02:18:33.376Z",
                updatedAt: "2024-07-03T02:18:33.376Z",
                __v: 0
            },
            {
                _id: "6684b529d1587cb36c06626c",
                ariaLabel: "Vite",
                href: "https://vitejs.dev/",
                src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vitejs/vitejs-original.svg",
                alt: "vite logo",
                createdAt: "2024-07-03T02:19:21.794Z",
                updatedAt: "2024-07-03T02:19:21.794Z",
                __v: 0
            },
            {
                _id: "6684b574eee51f0afa5737fa",
                ariaLabel: "PNPM",
                href: "https://pnpm.io/",
                src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/pnpm/pnpm-original.svg",
                alt: "pnpm logo",
                createdAt: "2024-07-03T02:20:36.778Z",
                updatedAt: "2024-07-03T02:20:36.778Z",
                __v: 0
            },
            {
                _id: "6684b5cea8a794c50bb1776c",
                ariaLabel: "VSCode",
                href: "https://code.visualstudio.com/",
                src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vscode/vscode-original.svg",
                alt: "vscode logo",
                createdAt: "2024-07-03T02:22:06.868Z",
                updatedAt: "2024-07-03T02:22:06.868Z",
                __v: 0
            }
        ]
    };
    return NextResponse.json(techstacks);
}
