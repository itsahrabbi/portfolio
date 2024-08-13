import connectMongoDB from "@utils/mongodb";
import Project from "@models/project";
import { Params } from "next/dist/shared/lib/router/utils/route-matcher";
import { NextResponse } from "next/server";
import { projects } from "@lib/data";

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
    const project = projects.find(p => p.slug === id);
    if (project) {
        
        return NextResponse.json(project, { status: 200 });
    } else {
        return NextResponse.json(
            { error: "Project not found" },
            { status: 404 }
        );
    }
}
