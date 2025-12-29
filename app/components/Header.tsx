import Link from "next/link";
export default function Header(): React.JSX.Element {
	return (
		<header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-2xl border-b border-white/10">
			<nav className="px-6 py-4">
				<div className="container mx-auto max-w-6xl flex items-center justify-between h-full">
					<Link
						href="/"
						className="font-semibold text-3xl decoration-none max-lg:text-2xl"
					>
						<span className="text-primary">John</span> Iweh
					</Link>
					<ul className="flex items-center gap-8 list-none m-0 p-0">
						<li className="m-0 p-0">
							<Link
								href="#home"
								className="text-white hover:text-purple-400 transition-colors text-base font-normal"
							>
								Home
							</Link>
						</li>
						<li className="m-0 p-0">
							<Link
								href="#about"
								className="text-white hover:text-purple-400 transition-colors text-base font-normal"
							>
								About
							</Link>
						</li>
						<li className="m-0 p-0">
							<Link
								href="#lab"
								className="text-white hover:text-purple-400 transition-colors text-base font-normal"
							>
								Lab
							</Link>
						</li>
					</ul>
				</div>
			</nav>
		</header>
	);
}
