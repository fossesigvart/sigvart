import { SplineSceneBasic } from "@/components/ui/demo";
import { Intro } from "@/components/sections/Intro";
import { OmOss } from "@/components/sections/OmOss";
import { MediaSeksjon } from "@/components/sections/MediaSeksjon";
import { Footer } from "@/components/sections/Footer";
import { FullwidthBilde } from "@/components/sections/FullwidthBilde";

export default function Home() {
  return (
    <>
      <section className="w-full h-screen bg-black overflow-hidden">
        <SplineSceneBasic />
      </section>
      {/* <FullwidthBilde
        src="https://norgesdomene.b-cdn.net/3.png"
        alt="Industrial robot in operation"
        label="Built for industry"
        heading={"Precision at\nindustrial scale."}
        sub="Our robots operate in the most demanding environments — from factory floors to logistics hubs across Scandinavia."
      /> */}
<Intro />
      <OmOss />
      <MediaSeksjon />
      <Footer />
    </>
  );
}
