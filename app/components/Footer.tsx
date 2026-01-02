import Link from "next/link";
import { FaSquareXTwitter, FaGithub, FaLinkedin } from "react-icons/fa6";

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
					<Link
						href="https://x.com/IwehJohn/"
						target="_blank"
						rel="noopener noreferrer"
						className="w-10 h-10 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 border border-purple-500/30 hover:border-purple-500/50 transition-all"
						aria-label="Instagram"
					>
						<FaSquareXTwitter className="w-5 h-5" />
					</Link>
					<Link
						href="https://github.com/john-keno"
						target="_blank"
						rel="noopener noreferrer"
						className="w-10 h-10 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 border border-purple-500/30 hover:border-purple-500/50 transition-all"
						aria-label="GitHub"
					>
						<FaGithub className="w-5 h-5" />
					</Link>
					<Link
						href="https://www.linkedin.com/in/john-keno-iweh/"
						target="_blank"
						rel="noopener noreferrer"
						className="w-10 h-10 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 border border-purple-500/30 hover:border-purple-500/50 transition-all"
						aria-label="LinkedIn"
					>
						<FaLinkedin className="w-5 h-5" />
					</Link>
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
