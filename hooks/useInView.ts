"use client";

import { useCallback, useEffect, useRef, useState } from "react";

export function useInView(options?: IntersectionObserverInit) {
	const ref = useRef<HTMLElement | null>(null);
	const [inView, setInView] = useState(false);
	const [element, setElement] = useState<HTMLElement | null>(null);

	const setRef = useCallback((node: HTMLElement | null) => {
		ref.current = node;
		setElement(node);
	}, []);

	useEffect(() => {
		if (!element) return;
		const observer = new IntersectionObserver(
			([entry]) => {
				if (entry.isIntersecting) setInView(true);
			},
			{ threshold: 0.1, rootMargin: "-60px", ...options },
		);
		observer.observe(element);
		return () => observer.disconnect();
	}, [element]);

	return { ref: setRef, inView };
}
