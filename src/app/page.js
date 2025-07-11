import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
//import Timeline from "@/components/Timeline";

export default function Home() {
  return (
    <>
      {/* 🔥 Fullscreen Background Video */}
      <div className="fixed top-0 left-0 w-full h-full z-[-1] overflow-hidden">
        <video
          className="w-full h-full object-cover"
          autoPlay
          loop
          muted
          playsInline
        >
          <source src="/gokuultrainstinct.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        {/* Optional dark overlay for better text contrast */}
        <div className="absolute inset-0 bg-black/60"></div>
      </div>

      <Header />

      {/* 💡 Main Content */}
      <main className="flex flex-col items-center justify-center text-white text-center">
        <section
          id="intro"
          className="min-h-screen flex flex-col items-center justify-center px-8 py-16 w-full"
        >
          <h1 className="text-4xl font-bold mb-4 z-10">Hi, I&apos;m Rahul!</h1>
          <p className="text-xl mb-6 max-w-2xl z-10">
            I&apos;m a software developer, former mechanical engineer, curious explorer,
            and perfectionist at heart. I love learning, building, and pushing limits —
            from writing clean code to understanding how the universe works.
          </p>
          <a
            href="https://github.com/rahul-yadav00"
            target="_blank"
            className="z-10 bg-white text-black px-4 py-2 rounded hover:bg-gray-200 transition"
          >
            Visit My GitHub
          </a>
        </section>

        <About />
        <Skills />
        <Projects />
        {/*<Timeline />*/}
        <Contact />
        <Footer />
      </main>
    </>
  );
}
