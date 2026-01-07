



import { FaSquareXTwitter, FaGithub, FaLinkedin } from "react-icons/fa6";
import { TbFileCv } from "react-icons/tb";
import TooltipLink from "./footer/TooltipLink";


export default function Footer(): React.JSX.Element {
	return (
		<footer id="contact" className="py-10  px-6 border-t border-white/10">
			<div className="container mx-auto max-w-6xl">
				<div className="text-center mb-12">
					<h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
						Contact
					</h2>
					<p className="text-md text-white/80 max-w-2xl mx-auto mb-8">
						I&apos;m currently looking to join a cross-functional team dedicated
						to improving lives with smart, accessible solutions, or have a
						project in mind? Let&apos;s connect and build something great
						together🤝.
					</p>
					<a
						href="mailto:iwehjohn@gmail.com"
						className="text-md text-purple-400 hover:text-purple-300 transition-colors"
					>
						iwehjohn@gmail.com
					</a>
				</div>
				{/* Social Media Icons */}
				<div className="flex justify-center gap-6 mt-12">
					<TooltipLink
						href="https://x.com/IwehJohn/"
						label="Twitter"
						tooltip="Follow me on X (Twitter)"
						target="_blank"
					>
						<FaSquareXTwitter className="w-5 h-5" />
					</TooltipLink>
					<TooltipLink
						href="https://github.com/john-keno"
						label="GitHub"
						tooltip="Check out my GitHub"
						target="_blank"
					>
						<FaGithub className="w-5 h-5" />
					</TooltipLink>
					<TooltipLink
						href="https://www.linkedin.com/in/john-keno-iweh/"
						label="LinkedIn"
						tooltip="Connect on LinkedIn"
						target="_blank"
					>
						<FaLinkedin className="w-5 h-5" />
					</TooltipLink>
					<TooltipLink
						href="https://docs.google.com/uc?export=download&id=1N7xBr9n0PZXnVuZBfyJ4K6qV9R04kmr7"
						label="Download CV"
						tooltip="Download my CV"
					>
						<TbFileCv className="w-5 h-5" />
					</TooltipLink>
				</div>

				<div className="text-center mt-12 pt-8 border-t border-white/10">
					<p className="text-white/60 text-sm">
						© {new Date().getFullYear()} John Iweh. All rights reserved.{" "}
					</p>
				</div>
			</div>
		</footer>
	);
}
