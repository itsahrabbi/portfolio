import connectMongoDB from "@utils/mongodb";
import Project from "@models/project";
import { Params } from "next/dist/shared/lib/router/utils/route-matcher";
import { NextResponse } from "next/server";

export async function PUT(request: Request, { params }: Params) {
    const { id } = params;
    const {
        src: src,
        alt: alt,
        title: title,
        desc: desc,
        website: website,
        github: github,
        slug: slug
    } = await request.json();
    await connectMongoDB();
    await Project.findByIdAndUpdate(id, {
        src,
        alt,
        title,
        desc,
        website,
        github,
        slug
    });
    return NextResponse.json({ message: "Project updated" }, { status: 200 });
}

export async function GET(request: Request, { params }: Params) {
    const { id } = params;
    const projects = {
        projects: [
            {
                _id: "66544413e27cea13979ac18b",
                src: "tsukiwa_tuxird",
                alt: "tsukiwa image",
                title: "tsukiwa",
                desc: "A place where your “Waifus” matter. This is a website that you can rank, rate, organize and flex your waifus all over the world. This is still currently in designing phase because of my schedule being strict to my academics and gaming. But, I swear that this will be in production once I get free time.",
                website: "",
                github: "https://github.com/moonbamijam/tsukiwa",
                slug: "tsukiwa",
                createdAt: "2024-05-27T08:28:03.577Z",
                updatedAt: "2024-05-27T08:28:03.577Z",
                __v: 0
            },
            {
                _id: "6654442de27cea13979ac191",
                src: "realpop_tzwysa",
                alt: "realpop image",
                title: "Realpop",
                desc: "An online store of K-Pop photocards. This is an e-commerce simulation website that is solely dedicated for photocards. This is a school project from my subject called DCIT 26. Realpop is now in production while still maintaining the e-commerce simulation. If you want to know more about Realpop, you can visit the site. If you are thinking of contributing to the project, you can go to its github repository.",
                website: "https://realpop.pythonanywhere.com",
                github: "https://github.com/moonbamijam/realpop-web",
                slug: "realpop",
                createdAt: "2024-05-27T08:28:29.612Z",
                updatedAt: "2024-05-27T08:28:29.612Z",
                __v: 0
            },
            {
                _id: "66544436e27cea13979ac193",
                src: "student_portal_app_jaj5r1",
                alt: "student portal app image",
                title: "Student Portal App",
                desc: "This is another school project from my subject called ITEC 80. It’s an application for students to monitor their academics. This is a team project so I didn’t do all of these by myself, special thanks to my members! If you are by any chance interested in the project, you can visit its github repository.",
                website: "",
                github: "https://github.com/moonbamijam/student-portal-app",
                slug: "student-portal-app",
                createdAt: "2024-05-27T08:28:38.022Z",
                updatedAt: "2024-05-27T08:28:38.022Z",
                __v: 0
            },
            {
                _id: "6654443ce27cea13979ac195",
                src: "ats_pvgnjq",
                alt: "apes together strong image",
                title: "Apes Together Strong",
                desc: "Apes Together Strong. An image compiling/transferring app for my ATS friends.",
                website: "",
                github: "https://github.com/moonbamijam/ats",
                slug: "apes-together-strong",
                createdAt: "2024-05-27T08:28:44.588Z",
                updatedAt: "2024-05-27T08:28:44.588Z",
                __v: 0
            },
            {
                _id: "66544444e27cea13979ac197",
                src: "bacoor_city_hall_bhs64w",
                alt: "cob chatbot image",
                title: "Interactive Chatbot for the City of Bacoor, Cavite",
                desc: "Our capstone project that uses nlp to generate response from users. This is still being under developed.",
                website: "",
                github: "https://github.com/Jireh-sama/cob-chatbot",
                slug: "cob-chatbot",
                createdAt: "2024-05-27T08:28:52.580Z",
                updatedAt: "2024-05-27T08:28:52.580Z",
                __v: 0
            },
            {
                _id: "666477446e3e6bb0b63773b7",
                src: "sassy_ou1yu8",
                alt: "sassy css image",
                title: "Sassy CSS",
                desc: "A simple single-page CSS library using Sass!",
                website: "",
                github: "https://github.com/moonbamijam/sassy-css",
                slug: "sassy",
                createdAt: "2024-06-08T15:22:44.353Z",
                updatedAt: "2024-06-17T00:54:43.392Z",
                __v: 0
            },
            {
                _id: "667fb24292501a1327d03a80",
                src: "ksa_n1ir4f",
                alt: "ksa image",
                title: "Kamote School Admission",
                desc: "A commissioned project from one of my friends that requires a basic CRUD functionality. Me and my friend Ecchiko developed this system that uses PHP as its main tech. If you want to get a copy of this project for yourself, school purposes or whatever. Please contact Moonbami by clicking the GitHub button.",
                website: "",
                github: "https://github.com/moonbamijam",
                slug: "ksa",
                createdAt: "2024-06-29T07:05:38.486Z",
                updatedAt: "2024-06-29T07:05:38.486Z",
                __v: 0
            }
        ]
    };
    const project = projects.projects.find(p => p.slug === id);
    if (project) {
        return NextResponse.json(project, { status: 200 });
    } else {
        return NextResponse.json(
            { error: "Project not found" },
            { status: 404 }
        );
    }
}
