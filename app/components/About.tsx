import Image from "next/image";

export default function About(): React.JSX.Element {
	return (
		<section id="about" className="py-20 px-6">
			<div className="container mx-auto max-w-6xl">
				<div className="text-center mb-16">
					<p className="text-2xl max-w-6xl mx-auto">
						I&apos;m currently looking to join a{" "}
						<span className="text-purple-400">cross-functional team</span>
						<br />
						<span className="text-sm">
							{" "}
							dedicated to improving lives with smart, accessible solutions.
						</span>
					</p>
				</div>
				<Image
					src="/assets/skills-illustration.png"
					alt="Skills"
					width={800}
					height={800}
					className="object-cover mx-auto w-auto h-auto"
				/>
			</div>
		</section>
	);
}
