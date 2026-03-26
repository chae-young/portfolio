import About from "@/components/About";
import Blog from "@/components/Blog";
import Career from "@/components/Career";
import Contact from "@/components/Contact";
import Hero from "@/components/Hero";
import Navigation from "@/components/Navigation";
import Projects from "@/components/Projects";
import Skill from "@/components/Skill";

export default function Home() {
	return (
		<main className="bg-bg min-h-screen">
			<Navigation />
			<Hero />
			<About />
			<Skill />
			<Career />
			<Projects />
			<Blog />
			<Contact />
		</main>
	);
}
