import Image from "next/image";
import Link from "next/link";

interface ExperienceCard {
	id: number;
	company: string;
	position: string;
	duration: string;
	location: string;
	description: string;
	achievements: string[];
	technologies: string[];
	icon: string;
}

const experienceCards: ExperienceCard[] = [
	{
		id: 1,
		company: "Genesys Tech Hub",
		position: "Backend Developer Intern",
		duration: "Dec 2024 - Present",
		location: "Enugu, Nigeria",
		description: "Tutera - White‑Label Learning Management System",
		achievements: [
			"Built scalable multi‑tenant architecture for educators",
			"Implemented role‑based access control system",
			"Developed custom branding features for academies",
			"Optimized database queries for better performance",
		],
		technologies: ["Node.js", "PostgreSQL", "Docker", "AWS", "Redis"],
		icon: "/cards/card-1.png",
	},
	{
		id: 2,
		company: "Genesys Tech Hub",
		position: "Backend Developer Intern",
		duration: "Dec 2024 - Present",
		location: "Enugu, Nigeria",
		description: "Gbese - Peer‑to‑Peer Loan Transfer Platform",
		achievements: [
			"Designed and implemented peer‑to‑peer loan transfer system",
			"Built responsive frontend using React and TypeScript",
			"Developed RESTful APIs with Node.js and Express",
			"Implemented secure authentication and authorization",
		],
		technologies: ["React", "Node.js", "MongoDB", "TypeScript", "Express.js"],
		icon: "/cards/card-2.png",
	},
	{
		id: 3,
		company: "Genesys Tech Hub",
		position: "Frontend Developer Intern",
		duration: "Dec 2023 - Jul 2024",
		location: "Enugu, Nigeria",
		description: "Learnable Training Modules",
		achievements: [
			"Built responsive UI components using React, Vite and Next.js",
			"Integrated APIs and implemented dynamic routing and state management",
			"Delivered web apps as part of Learnable training modules",
		],
		technologies: [
			"React",
			"Vite",
			"Next.js",
			"TypeScript",
			"State Management",
		],
		icon: "/cards/card-3.png",
	},
	{
		id: 4,
		company: "Innocent Michael Network",
		position: "Full Stack Software Developer",
		duration: "Feb 2023 - Dec 2023",
		location: "North York, Canada",
		description: "Internal Platform Development",
		achievements: [
			"Led cross-functional teams in backend integration and training",
			"Built Spring Boot APIs and VPS infrastructure for automation",
			"Improved system stability by 40% through optimized deployments",
		],
		technologies: [
			"Spring Boot",
			"VPS",
			"Database Management",
			"Android SDK",
			"API Integration",
		],
		icon: "/cards/card-4.png",
	},
];

export default function Experience(): React.JSX.Element {
	return (
		<section id="experience" className="py-20 px-6">
			<div className="container mx-auto max-w-6xl">
				<h2 className="text-4xl lg:text-5xl font-bold text-white mb-12 text-center">
					Work Experience
				</h2>
				<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
					{experienceCards.map((card) => (
						<div
							key={card.id}
							className="bg-linear-to-r from-slate-950 via-purple-950 to-slate-950 backdrop-blur-sm rounded-xl p-6 border-t-3 border-purple-700 hover:shadow-2xl hover:shadow-purple-900"
						>
							<div className="flex items-start gap-4">
								<div className="shrink-0">
									<Image
										src={card.icon}
										alt={card.company}
										width={60}
										height={60}
										className="object-contain rounded-lg"
									/>
								</div>
								<div className="flex-1">
									<div className="mb-3">
										<h3 className="text-xl font-semibold text-white mb-1">
											{card.position}
										</h3>
										<p className="text-purple-400 font-medium mb-1">
											{card.company}
										</p>
										<div className="flex items-center gap-3 text-sm text-white/60 mb-2">
											<span className="flex items-center gap-1">
												📅 {card.duration}
											</span>
											<span className="flex items-center gap-1">
												📍 {card.location}
											</span>
										</div>
										<p className="text-white/80 text-sm mb-3">
											{card.description}
										</p>
									</div>

									<div className="mb-4">
										<h4 className="text-sm font-semibold text-white/90 mb-2">
											Key Achievements:
										</h4>
										<ul className="space-y-1">
											{card.achievements.map((achievement, index) => (
												<li
													key={index}
													className="text-sm text-white/70 flex items-start gap-2"
												>
													<span className="text-purple-400 mt-1">•</span>
													{achievement}
												</li>
											))}
										</ul>
									</div>

									<div className="mb-4">
										<h4 className="text-sm font-semibold text-white/90 mb-2">
											Technologies:
										</h4>
										<div className="flex flex-wrap gap-2">
											{card.technologies.map((tech, index) => (
												<span
													key={index}
													className="px-2 py-1 bg-purple-900/50 text-purple-300 text-xs rounded-full border border-purple-700/50"
												>
													{tech}
												</span>
											))}
										</div>
									</div>

									<Link
										href="#"
										target="_blank"
										rel="noopener noreferrer"
										className="text-purple-400 hover:text-purple-300 font-medium text-sm transition-colors inline-block"
									>
										VIEW PROJECT →
									</Link>
								</div>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
