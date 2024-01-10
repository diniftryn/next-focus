import About from "@/components/About";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Tasks from "@/components/Tasks";
import { TimerTab } from "@/components/TimerTab";
import { Separator } from "@/components/ui/separator";

export default function Home() {
  return (
    <main className="text-center">
      <Header />

      <section className="py-[60px]">
        <TimerTab />
      </section>

      <div className="flex justify-center items-center">
        <Separator className="flex items-center max-w-xl" />
      </div>

      <section className="py-10">
        <Tasks />
      </section>

      <div className="flex justify-center items-center">
        <Separator className="flex items-center max-w-xl" />
      </div>

      <section className="py-20 flex justify-center text-center">
        <About />
      </section>

      <Footer />
    </main>
  );
}
