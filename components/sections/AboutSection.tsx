import { useFetch } from "@hooks/useFetch";
import { AboutType } from "@lib/types";
import Picture from "@components/common/Picture";
import Section from "@components/common/Section";
import Heading from "@components/ui/Heading";
import AboutUi from "@components/ui/AboutUi";
import LoadingSpinner from "@components/ui/LoadingSpinner";
import ImageCredits from "@components/ui/ImageCredits";

export default async function AboutSection() {
  const { abouts } = await useFetch("/api/abouts");

  const renderAbout = () => {
    if (abouts) {
      return abouts.map((about: AboutType) => (
        <AboutUi
          key={about._id}
          displayName={about.displayName}
          desc={about.desc}
          fullName={about.fullName}
          nickname={about.nickname}
          age={about.age}
          birthday={about.birthday}
          sex={about.sex}
          nationality={about.nationality}
          status={about.status}
          languages={about.languages}
        />
      ));
    } else return <LoadingSpinner size="100px" fontSize="64px" />;
  };

  return (
    <Section id={"about"}>
      <Heading
        name={"about me"}
        desc={"Let's dive deeper of who am I behind the social media."}
      />
      <div className="about-me w-full flex flex-col lg:flex-row justify-between items-center lg:items-start xl:justify-evenly ">
        <div className="relative w-[300px] h-[300px] lg:w-[400px] lg:h-[400px] 2xl:w-[500px] 2xl:h-[500px] aspect-square shadow-md hover:shadow-primary-dark mb-4 rounded-lg [&>span]:hover:opacity-70 overflow-hidden">
          <Picture
            src={"/itsahrabbi-home.jpg"}
            alt={"Ahmed Rabbi"}
            isPriority={true}
          />
          <ImageCredits
            creditsTo="Chris"
            creditLink="https://www.instagram.com/lakezeus_/"
          />
        </div>
        <div className="about-me flex flex-col gap-[30px] ">
          {renderAbout()}
        </div>
      </div>
    </Section>
  );
}
