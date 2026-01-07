"use client";

import Link from "next/link";
import { useState } from "react";

interface TooltipLinkProps {
	href: string;
	label: string;
	tooltip: string;
	children: React.ReactNode;
	target?: string;
}

export default function TooltipLink({
	href,
	label,
	tooltip,
	children,
	target,
}: TooltipLinkProps) {
	const [isHovered, setIsHovered] = useState(false);

	return (
		<div className="relative">
			<Link
				href={href}
				target={target}
				rel="noopener noreferrer"
				className="w-10 h-10 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 border border-purple-500/30 hover:border-purple-500/50 transition-all duration-500 ease-in-out"
				aria-label={label}
				onMouseEnter={() => setIsHovered(true)}
				onMouseLeave={() => setIsHovered(false)}
			>
				{children}
			</Link>
			{isHovered && (
				<div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-2 py-1 bg-gray-900 text-white text-xs rounded whitespace-nowrap z-50">
					{tooltip}
					<div className="absolute top-full left-1/2 transform -translate-x-1/2 -mt-1 border-4 border-transparent border-t-gray-900"></div>
				</div>
			)}
		</div>
	);
}
