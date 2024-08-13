import connectMongoDB from "@utils/mongodb";
import Project from "@models/project";
import { NextResponse } from "next/server";
import { projects } from "@lib/data";
export async function POST(request: Request, response: Response) {
    const { src, alt, title, desc, website, github, slug } =
        await request.json();
    await connectMongoDB();
    await Project.create({
        src,
        alt,
        title,
        desc,
        website,
        github,
        slug
    });
    return NextResponse.json({ message: "Project created" });
}

export async function GET() {
    return NextResponse.json({ projects });
}
