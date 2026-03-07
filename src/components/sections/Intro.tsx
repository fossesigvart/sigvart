"use client";
import { LinkPreview } from "@/components/ui/link-preview";

export function Intro() {
  return (
    <section className="bg-white px-10 py-28">
      <div className="max-w-5xl mx-auto">

        <p className="text-xs tracking-[0.3em] uppercase text-neutral-400 mb-10">What we do</p>

        <p className="text-3xl md:text-4xl lg:text-5xl text-neutral-800 leading-tight font-[family-name:var(--font-heading)] font-medium">
          We import and distribute{" "}
          <LinkPreview
            url="#"
            isStatic
            imageSrc="https://images.unsplash.com/photo-1531297484001-80022131f5a1?auto=format&fit=crop&w=400&q=80"
            noLink
            className="text-black underline underline-offset-4 decoration-neutral-300 hover:decoration-black transition-colors duration-200 cursor-default"
          >
            the world's most advanced home robots
          </LinkPreview>
          {" "}to Europe. We handle sourcing,{" "}
          <LinkPreview
            url="#"
            isStatic
            imageSrc="https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=400&q=80"
            noLink
            className="text-black underline underline-offset-4 decoration-neutral-300 hover:decoration-black transition-colors duration-200 cursor-default"
          >
            certification
          </LinkPreview>
          {" "}and delivery — so you get a robot that simply works,{" "}
          <LinkPreview
            url="#"
            isStatic
            imageSrc="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=400&q=80"
            noLink
            className="text-black underline underline-offset-4 decoration-neutral-300 hover:decoration-black transition-colors duration-200 cursor-default"
          >
            right out of the box.
          </LinkPreview>
        </p>


      </div>
    </section>
  );
}
