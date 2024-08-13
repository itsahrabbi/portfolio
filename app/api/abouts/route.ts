import connectMongoDB from "@utils/mongodb";
import About from "@models/about";
import { NextResponse } from "next/server";

export async function POST(request: Request, response: Response) {
    const {
        displayName,
        desc,
        fullName,
        nickname,
        age,
        birthday,
        sex,
        nationality,
        status,
        languages
    } = await request.json();
    await connectMongoDB();
    await About.create({
        displayName,
        desc,
        fullName,
        nickname,
        age,
        birthday,
        sex,
        nationality,
        status,
        languages
    });
    return NextResponse.json({ message: "About created" });
}

export async function GET() {
    const abouts = {
        abouts: [
            {
                _id: "665444b1e27cea13979ac1a3",
                displayName: "Ahmed Rabbi",
                desc: "You might wonder what is the meaning behind Ahmed Rabbi. Well, it is the combination of my very first favorite female anime character and me being a selenophile, or a person who loves the moon as they call it.Here are the other details about me that you might want to know",
                fullName: "Jamiraquai Mikhail Alvarez",
                nickname: "Jam",
                age: 21,
                birthday: "august 15, 2002",
                sex: "male",
                nationality: "filipino",
                status: "single",
                languages: "Tagalog, English, Japanese(currently learning)",
                createdAt: "2024-05-27T08:30:41.860Z",
                updatedAt: "2024-05-27T08:30:41.860Z",
                __v: 0
            }
        ]
    };
    return NextResponse.json(abouts);
}
