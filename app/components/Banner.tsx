"use client";

import Image from "next/image";
import { ReactTyped } from "react-typed";

export default function Banner(): React.JSX.Element {
	const rolesText: string[] = [
		"Frontend Developer",
		"Backend Developer",
		"Software Engineer",
		"React Native Developer",
		"Embedded Systems Engineer",
	];

	return (
		<section
			id="home"
			className="min-h-screen flex items-center justify-center pt-20 px-6"
		>
			<div className="container mx-auto max-w-6xl">
				<div className="flex flex-col lg:flex-row items-center ">
					{/* Left side - Text content */}
					{/* Right side - Character image */}
					<div className="flex justify-center lg:justify-end relative w-full lg:w-auto">
						<div className="relative top-1">
							{/* Mobile: Hello text positioned on top of image */}
							<div className="lg:hidden -top-150 z-10">
								<div className="relative inline-block ">
									<Image
										src="/assets/arrow.png"
										alt="Arrow pointer"
										width={80}
										height={80}
										className="absolute top-5 rotate-z-280 w-auto h-auto"
									/>
									<div className="relative">
										<p className="text-white text-lg whitespace-nowrap">
											Hello! I Am{" "}
											<span className="text-primary">John Iweh</span>
										</p>
									</div>
									<div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-8 border-l-transparent border-r-8 border-r-transparent border-t-8 border-t-white/10"></div>
								</div>
							</div>
							<Image
								src="/assets/me.png"
								alt="John Iweh - Software Engineer and Firmware developer"
								width={300}
								height={300}
								className=" max-w-sm absolute w-[300px] h-[300px] rounded-3xl"
								priority
							/>
							<Image
								src="/assets/me-glow.png"
								alt="John Iweh - Software Engineer and Firmware developer"
								width={300}
								height={300}
								className="max-w-md"
								priority
							/>
						</div>
					</div>
					<div className="flex-1 space-y-6 text-center lg:text-left lg:pl-10">
						{/* Desktop: Hello text in original position */}
						<div className="hidden lg:inline-block relative">
							<Image
								src="/assets/arrow.png"
								alt="Arrow pointer"
								width={100}
								height={100}
								className="absolute -left-28 -top-4.5 w-auto h-auto"
							/>
							<div className="relative">
								<p className="text-white text-lg">
									Hello! I Am <span className="text-primary">John Iweh</span>
								</p>
							</div>
							<div className="absolute -bottom-2 left-8 w-0 h-0 border-l-8 border-l-transparent border-r-8 border-r-transparent border-t-8 border-t-white/10"></div>
						</div>
						<div className="">
							<p className="text-2xl"> A Full Stack Developer who </p>
							<h1 className="text-5xl tracking-tight lg:text-7xl font-semibold text-white leading-tight">
								judges an app
								<br /> by its first{" "}
								<span className="relative inline-block">
									{/* <Image
										src="/assets/circle.png"
										alt="Circle"
										width={300}
										height={300}
										className="absolute"
										// TODO: Add circle or Click image
									/> */}
									<span className="bg-linear-to-r from-blue-600 via-blue-400 to-blue-600 bg-clip-text text-transparent">
										click
									</span>
								</span>
								...
							</h1>
							<p className="text-md text-white/80">
								Because if the experience doesn&apos;t impress, what else can?
							</p>
						</div>
					</div>
				</div>
				<div className="space-y-3 pt-15 text-center lg:text-left">
					<p className="text-5xl text-white font-bold">
						I&apos;m a &nbsp;
						<ReactTyped
							strings={rolesText}
							typeSpeed={100}
							backSpeed={100}
							loop
						/>
					</p>
					<p className="text-lg lg:text-xl text-white/90 tracking-wide flex flex-wrap items-center justify-center lg:justify-start gap-2">
						<span>Currently, I&apos;m a Software Engineer at</span>
						<span className="flex items-center gap-2">
							<span className="text-blue-400 font-semibold">Freelance,</span>
						</span>
					</p>
					<p className="text-lg text-white/80 max-w-2xl mt-15 mx-auto lg:mx-0">
						A Full Stack Web Developer and Software Engineer from Nigeria
						passionate about crafting responsive interfaces, building scalable
						backend systems, and developing embedded firmware. As a freelance
						developer, I deliver tailored, performance-driven software solutions
						designed to elevate user experience and functionality.
					</p>
				</div>
			</div>
		</section>
	);
}
