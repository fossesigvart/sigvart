export function Intro() {
  return (
    <section id="about" className="bg-white px-6 md:px-10 py-16 md:py-28">
      <div className="max-w-5xl mx-auto">

        <p className="text-xs tracking-[0.3em] uppercase text-neutral-400 mb-10">What we do</p>

        <p className="text-3xl md:text-4xl lg:text-5xl text-neutral-800 leading-tight font-[family-name:var(--font-heading)] font-medium">
          Scandinavia's first dedicated hub for{" "}
          <span className="text-black underline underline-offset-4 decoration-neutral-300">
            industrial robots
          </span>
          . From{" "}
          <span className="text-black underline underline-offset-4 decoration-neutral-300">
            sourcing and certification
          </span>
          {" "}to{" "}
          <span className="text-black underline underline-offset-4 decoration-neutral-300">
            training, service, and pilot testing
          </span>
          .
        </p>


      </div>
    </section>
  );
}
