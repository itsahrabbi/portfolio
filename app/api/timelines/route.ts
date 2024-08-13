import { NextResponse } from "next/server";
import connectMongoDB from "@utils/mongodb";
import Timeline from "@models/timeline";

export async function POST(request: Request, response: Response) {
    const { date, type, note, message } = await request.json();
    await connectMongoDB();
    await Timeline.create({
        date,
        type,
        note,
        message
    });
    return NextResponse.json({ message: "New Timeline created" });
}

export async function GET() {
    const timelines = {
        timelines: [
            {
                _id: "66824e7f5b395bf8ff1f6e43",
                date: "present",
                type: "present",
                note: "This is me now!",
                message:
                    "For all these years, I've learned that experience is the best sensei!",
                createdAt: "2024-07-01T06:36:47.365Z",
                updatedAt: "2024-07-01T06:36:47.365Z",
                __v: 0
            },
            {
                _id: "66824ef25b395bf8ff1f6e48",
                date: "August 15, 2002",
                type: "born",
                note: "Happy birthday to me!",
                message: "This is the day I was born, where it all started <3",
                createdAt: "2024-07-01T06:38:42.711Z",
                updatedAt: "2024-07-01T06:38:42.711Z",
                __v: 0
            },
            {
                _id: "66824f5e5b395bf8ff1f6e4d",
                date: "June 22, 2024",
                type: "programming",
                note: "First commissioned project",
                message:
                    "This was my very first project that I started to earn money! Even though it was a rushed project, I have fun developing it alongside my partner in crime, Ecchiko.",
                createdAt: "2024-07-01T06:40:30.731Z",
                updatedAt: "2024-07-01T06:40:30.731Z",
                __v: 0
            },
            {
                _id: "66824fc35b395bf8ff1f6e52",
                date: "June 17, 2009",
                type: "school",
                note: "Starting to learn",
                message: "I was really nervous at my first day in school XD",
                createdAt: "2024-07-01T06:42:11.428Z",
                updatedAt: "2024-07-01T06:42:11.428Z",
                __v: 0
            },
            {
                _id: "6682501e5b395bf8ff1f6e54",
                date: "October 7, 2012",
                type: "religion",
                note: "First communion",
                message: "This is my first time accepting the bread and wine.",
                createdAt: "2024-07-01T06:43:42.571Z",
                updatedAt: "2024-07-01T06:43:42.571Z",
                __v: 0
            },
            {
                _id: "668250715b395bf8ff1f6e58",
                date: "February 26, 2015",
                type: "school",
                note: "First time graduating",
                message:
                    "Really happy about this day, also feeling sad because of the parting part with good ol' friends",
                createdAt: "2024-07-01T06:45:05.839Z",
                updatedAt: "2024-07-01T06:45:05.839Z",
                __v: 0
            },
            {
                _id: "668250d35b395bf8ff1f6e5c",
                date: "April 13, 2019",
                type: "school",
                note: "Finally graduated Junior High!",
                message:
                    "One of the happiest time of my life was Junior High School",
                createdAt: "2024-07-01T06:46:43.881Z",
                updatedAt: "2024-07-01T06:46:43.881Z",
                __v: 0
            },
            {
                _id: "668251145b395bf8ff1f6e5e",
                date: "May 14, 2021",
                type: "school",
                note: "Done with Senior High.",
                message:
                    "I've only enjoyed half of it since unfortunately, COVID pandemic occurs at the second year",
                createdAt: "2024-07-01T06:47:48.714Z",
                updatedAt: "2024-07-01T06:47:48.714Z",
                __v: 0
            },
            {
                _id: "6682515e5b395bf8ff1f6e60",
                date: "March 26, 2023",
                type: "game",
                note: "Played Honkai: Star Rail",
                message:
                    "Kafka was one of the reason why I played this game. Now, Firefly is the reason why I continued playing.",
                createdAt: "2024-07-01T06:49:02.630Z",
                updatedAt: "2024-07-01T06:49:02.630Z",
                __v: 0
            },
            {
                _id: "668251a45b395bf8ff1f6e62",
                date: "February 22, 2023",
                type: "game",
                note: "Played Blue Archive",
                message:
                    "I forgot when did I really started playing Blue Archive, but I am sure my first accout was created on Aru's first banner",
                createdAt: "2024-07-01T06:50:12.559Z",
                updatedAt: "2024-07-01T06:50:12.559Z",
                __v: 0
            },
            {
                _id: "668251f75b395bf8ff1f6e68",
                date: "December 16, 2020",
                type: "game",
                note: "Played Illusion Connect",
                message: "I miss this game.",
                createdAt: "2024-07-01T06:51:35.310Z",
                updatedAt: "2024-07-01T06:51:35.310Z",
                __v: 0
            },
            {
                _id: "668252555b395bf8ff1f6e6a",
                date: "September 13, 2021",
                type: "school",
                note: "Started college at CVSU Bacoor",
                message:
                    "This is where I've found my interest in something I didn't expect I would",
                createdAt: "2024-07-01T06:53:09.959Z",
                updatedAt: "2024-07-01T06:53:09.959Z",
                __v: 0
            },
            {
                _id: "668252895b395bf8ff1f6e6c",
                date: "August 30, 2021",
                type: "game",
                note: "Played Genshin Impact",
                message:
                    "Started playing Genshin Impact in my main account because of Kamisato Ayaka.",
                createdAt: "2024-07-01T06:54:01.227Z",
                updatedAt: "2024-07-01T06:54:01.227Z",
                __v: 0
            },
            {
                _id: "668252bb5b395bf8ff1f6e6e",
                date: "August 15, 2023",
                type: "birthday",
                note: "Happy 21 years old!",
                message: "Yes, my Debut date. I'm officially matured XD",
                createdAt: "2024-07-01T06:54:51.036Z",
                updatedAt: "2024-07-01T06:54:51.036Z",
                __v: 0
            },
            {
                _id: "668253385b395bf8ff1f6e70",
                date: "April 15, 2023",
                type: "programming",
                note: "Where it all started",
                message:
                    "The day I started having interest in programming. This is the day where it all started!",
                createdAt: "2024-07-01T06:56:56.175Z",
                updatedAt: "2024-07-01T06:56:56.175Z",
                __v: 0
            },
            {
                _id: "668253795b395bf8ff1f6e72",
                date: "October 29, 2023",
                type: "programming",
                note: "Created my portfolio",
                message:
                    "I want to create my own website that contains information about me. A website that I can share with other people.",
                createdAt: "2024-07-01T06:58:01.849Z",
                updatedAt: "2024-07-01T06:58:01.849Z",
                __v: 0
            },
            {
                _id: "668253d95b395bf8ff1f6e76",
                date: "August 1, 2023",
                type: "programming",
                note: "Joined GitHub",
                message:
                    "I've decided that I want to level things up in my programming career.",
                createdAt: "2024-07-01T06:59:37.613Z",
                updatedAt: "2024-07-01T06:59:37.613Z",
                __v: 0
            },
            {
                _id: "668254095b395bf8ff1f6e78",
                date: "August 31, 2023",
                type: "programming",
                note: "Created tsukiwa",
                message:
                    "One of the reason why I started programming. I want to create something that will someday make people love!",
                createdAt: "2024-07-01T07:00:25.055Z",
                updatedAt: "2024-07-01T07:00:25.055Z",
                __v: 0
            },
            {
                _id: "66825f7082bfbd7ac34e5f12",
                date: "November 18, 2021",
                type: "gift",
                note: "My first PC!",
                message:
                    "Received my very first pc in my entire life from my mother!",
                createdAt: "2024-07-01T07:49:04.522Z",
                updatedAt: "2024-07-01T07:49:04.522Z",
                __v: 0
            },
            {
                _id: "668fb48833bc57b47df0eb77",
                date: "July 10, 2024",
                type: "game",
                note: "Played Zenless Zone Zero!",
                message:
                    "I didn't expect myself playing this game. On this date, I've started playing Zenless Zone Zero because of Ellen Joe! I'm so happy ^^",
                createdAt: "2024-07-11T10:31:36.404Z",
                updatedAt: "2024-07-11T10:33:59.249Z",
                __v: 0
            }
        ]
    };
    return NextResponse.json(timelines);
}
