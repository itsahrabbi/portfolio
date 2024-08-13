import connectMongoDB from "@utils/mongodb";
import Topic from "@models/topic";
import { NextResponse } from "next/server";

export async function POST(request: Request, response: Response) {
    const { title, desc } = await request.json();
    await connectMongoDB();
    await Topic.create({
        title,
        desc
    });
    return NextResponse.json({ message: "New topic created" });
}

export async function GET() {
    const topics = {
        topics: [
            {
                _id: "665444cde27cea13979ac1ab",
                title: "universe",
                desc: "I love talking about topics like these! I've been curious about if humans are the only living beings in the universe since I was a small child. I have so many questions, this being just one of them. I hope to glimpse the future of Earth before I leave from it. Like what it may be like to have advanced technology, floating cars, and a lot more! I truly hope that Earth outlives both the scientific and YouTube speculative forecasts. I always wonder at night if there will ever be an opportunity for us to occupy another planet. \n\nI've always wondered how it would feel and appear. For me, staring up into space at that recently occupied planet is like receiving a chef's kiss. Witnessing our own Milky Way Galaxy up close is definitely a once-in-a-lifetime opportunity. Even so, it is visible to us here on Earth. Light pollution makes it impossible for humans to see. I therefore want to be able to see the stars and our galaxy with greater clarity at least once in my lifetime.",
                createdAt: "2024-05-27T08:31:09.082Z",
                updatedAt: "2024-05-27T08:31:09.082Z",
                __v: 0
            },
            {
                _id: "665444d5e27cea13979ac1ad",
                title: "programming",
                desc: "I started learning programming in 2023. I never had any interest in programming back then. At our Campus, there is an activity where you have to generate and utilize basic HTML. One day, I don't even know where to begin because I lack the necessary information. Fortunately, it's a pair, so my buddy helped me up. I was watching him at that point while he worked on HTML for our activity. I feel as though I am falling behind and that I SHOULD be aware of these kinds of things. After the activity, I began studying the fundamentals of web developing about a week later. I became immediately fixated on organizing your files, folders, codes, etc. the idea that your workspace should be tidy and well-organized. \n\nThat's a feeling I want to experience repeatedly. That's when it all began, and now I find myself in this situation. I simply adore the sense of being able to use programming to construct a virtual world of your own. To be honest, though, there are moments when you won't achieve the desired outcome and you'll find it difficult to resolve bugs. However, after you eventually resolved that terrible bug after a feeling of years of work, that's when the fun in programming really began XD.",
                createdAt: "2024-05-27T08:31:17.569Z",
                updatedAt: "2024-05-27T08:31:17.569Z",
                __v: 0
            }
        ]
    };
    return NextResponse.json(topics);
}
