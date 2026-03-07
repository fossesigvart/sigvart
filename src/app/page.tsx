import { SplineSceneBasic } from "@/components/ui/demo";
import { Intro } from "@/components/sections/Intro";
import { OmOss } from "@/components/sections/OmOss";
import { MediaSeksjon } from "@/components/sections/MediaSeksjon";
import { Footer } from "@/components/sections/Footer";

export default function Home() {
  return (
    <>
      <section className="w-full h-screen bg-black overflow-hidden">
        <SplineSceneBasic />
      </section>
      <Intro />
      <OmOss />
      <MediaSeksjon />
      <Footer />
    </>
  );
}
