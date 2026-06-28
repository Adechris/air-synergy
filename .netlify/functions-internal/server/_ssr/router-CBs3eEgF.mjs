import { o as __toESM } from "../_runtime.mjs";
import { t as about_hero_default } from "./about-hero-Ci_ID0hV.mjs";
import { n as require_jsx_runtime, t as QueryClientProvider } from "../_libs/react+tanstack__react-query.mjs";
import { r as require_react } from "../_libs/@hookform/resolvers+[...].mjs";
import { S as Facebook, _ as Mail, f as Phone, g as MapPin, h as Menu, k as ArrowRight, m as MessageCircle, t as X, v as Linkedin } from "../_libs/lucide-react.mjs";
import { t as contact_hero_default } from "./contact-hero-B9EaFLwi.mjs";
import { n as stringType, t as objectType } from "../_libs/zod.mjs";
import { t as products_hero_default } from "./products-hero-BCaZ0jgN.mjs";
import { M as useRouter, c as HeadContent, d as Outlet, f as lazyRouteComponent, h as Link, m as createRootRouteWithContext, p as createFileRoute, s as Scripts, u as createRouter } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as QueryClient } from "../_libs/tanstack__query-core.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/router-CBs3eEgF.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var styles_default = "/assets/styles-CMuCQMo2.css";
var links = [
	{
		to: "/",
		label: "Home"
	},
	{
		to: "/about",
		label: "About"
	},
	{
		to: "/products",
		label: "Products & Services"
	},
	{
		to: "/contact",
		label: "Contact"
	}
];
function Navbar() {
	const [scrolled, setScrolled] = (0, import_react.useState)(false);
	const [open, setOpen] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		const onScroll = () => setScrolled(window.scrollY > 20);
		onScroll();
		window.addEventListener("scroll", onScroll, { passive: true });
		return () => window.removeEventListener("scroll", onScroll);
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
		className: `fixed inset-x-0 top-0 z-50 transition-all duration-300 ${scrolled ? "bg-[var(--ink)] shadow-[0_8px_30px_rgba(0,0,0,0.4)]" : "bg-[var(--ink)]"} border-b border-[var(--brand)]/40`,
		style: { backgroundColor: "var(--ink)" },
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "container-x flex h-[72px] items-center justify-between",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: "/",
					className: "flex flex-col leading-none",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "font-display text-2xl font-bold tracking-wide text-[var(--brand-2)]",
						children: "AIR SYNERGY"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "label-eyebrow text-[10px] text-white/70",
						children: "Technology Limited"
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
					className: "hidden items-center gap-9 lg:flex",
					children: links.map((l) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: l.to,
						className: "text-[13px] font-medium uppercase tracking-[0.18em] text-white/85 transition-colors hover:text-[var(--brand-2)]",
						children: l.label
					}, l.to))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: "/contact",
					className: "hidden items-center gap-2 bg-[var(--brand)] px-5 py-3 text-[12px] font-semibold uppercase tracking-[0.18em] text-white transition-colors hover:bg-[var(--brand-2)] lg:inline-flex",
					children: ["Get In Touch ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-4 w-4" })]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					"aria-label": "Open menu",
					onClick: () => setOpen(true),
					className: "rounded-sm border border-white/20 p-2 text-white lg:hidden",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Menu, { className: "h-5 w-5" })
				})
			]
		}), open && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "fixed inset-0 z-[60] flex flex-col bg-[var(--ink)] px-6 py-6 lg:hidden",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center justify-between",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "font-display text-2xl font-bold text-[var(--brand-2)]",
						children: "AIR SYNERGY"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						"aria-label": "Close menu",
						onClick: () => setOpen(false),
						className: "rounded-sm border border-white/20 p-2 text-white",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "h-5 w-5" })
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
					className: "mt-16 flex flex-col gap-6",
					children: links.map((l) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: l.to,
						onClick: () => setOpen(false),
						className: "font-display text-4xl font-bold uppercase text-white hover:text-[var(--brand-2)]",
						children: l.label
					}, l.to))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: "/contact",
					onClick: () => setOpen(false),
					className: "mt-auto inline-flex items-center justify-center gap-2 bg-[var(--brand)] px-6 py-4 text-sm font-semibold uppercase tracking-[0.2em] text-white",
					children: ["Get In Touch ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-4 w-4" })]
				})
			]
		})]
	});
}
function Footer() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("footer", {
		className: "relative bg-[#081A0F] text-white",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "industrial-grid-bg absolute inset-0 opacity-40",
			"aria-hidden": true
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "container-x relative py-20",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid gap-12 lg:grid-cols-[1.2fr_1fr_1fr_1.3fr]",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "font-display text-3xl font-bold tracking-wide text-[var(--brand-2)]",
								children: "AIR SYNERGY"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "label-eyebrow mt-1 text-white/60",
								children: "Technology Limited"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-6 max-w-xs text-sm leading-relaxed text-white/70",
								children: "Powering Nigerian Industry. Every Day."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mt-6 flex gap-3",
								children: [
									Linkedin,
									Facebook,
									MessageCircle
								].map((Icon, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									href: "#",
									className: "grid h-10 w-10 place-items-center border border-white/15 text-white/80 transition-colors hover:border-[var(--brand-2)] hover:text-[var(--brand-2)]",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: "h-4 w-4" })
								}, i))
							})
						] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
							className: "label-eyebrow mb-5 text-[var(--brand-2)]",
							children: "Quick Links"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
							className: "space-y-3 text-sm text-white/75",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
									to: "/",
									className: "hover:text-[var(--brand-2)]",
									children: "Home"
								}) }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
									to: "/about",
									className: "hover:text-[var(--brand-2)]",
									children: "About"
								}) }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
									to: "/products",
									className: "hover:text-[var(--brand-2)]",
									children: "Products"
								}) }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
									to: "/contact",
									className: "hover:text-[var(--brand-2)]",
									children: "Contact"
								}) })
							]
						})] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
							className: "label-eyebrow mb-5 text-[var(--brand-2)]",
							children: "Our Products"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
							className: "space-y-3 text-sm text-white/75",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Piston Compressors" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Screw Compressors" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Oil-Free Compressors" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Parts & Accessories" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Maintenance & Servicing" })
							]
						})] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
							className: "label-eyebrow mb-5 text-[var(--brand-2)]",
							children: "Contact"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
							className: "space-y-3 text-sm text-white/75",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
									className: "flex gap-3",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, { className: "mt-0.5 h-4 w-4 shrink-0 text-[var(--brand-2)]" }), " Lagos, Nigeria"]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
									className: "flex gap-3",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, { className: "mt-0.5 h-4 w-4 shrink-0 text-[var(--brand-2)]" }), " +234 800 000 0000"]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
									className: "flex gap-3",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mail, { className: "mt-0.5 h-4 w-4 shrink-0 text-[var(--brand-2)]" }),
										" ",
										"info@airsynergy.com"
									]
								})
							]
						})] })
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "mt-14 h-px w-full bg-gradient-to-r from-transparent via-[var(--brand-2)]/60 to-transparent" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-6 flex flex-col items-start justify-between gap-4 text-xs text-white/50 sm:flex-row sm:items-center",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [
						"© ",
						(/* @__PURE__ */ new Date()).getFullYear(),
						" Air Synergy Technology Limited. All rights reserved."
					] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "label-eyebrow text-white/40",
						children: "Built for industry."
					})]
				})
			]
		})]
	});
}
function WhatsAppFloat() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
		href: "https://wa.me/2348000000000?text=Hello%20Air%20Synergy%20Limited%2C%20I%27d%20like%20to%20enquire%20about...",
		target: "_blank",
		rel: "noreferrer",
		"aria-label": "Chat on WhatsApp",
		className: "fixed bottom-6 right-6 z-40 grid h-14 w-14 place-items-center rounded-full bg-[var(--brand-2)] text-white shadow-[0_10px_30px_rgba(46,155,90,0.45)] ring-4 ring-[var(--brand-2)]/20 transition-transform hover:scale-110 hover:bg-[var(--brand)]",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MessageCircle, { className: "h-6 w-6" })
	});
}
function NotFoundComponent() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex min-h-screen items-center justify-center bg-background px-4",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-md text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "text-7xl font-bold text-foreground",
					children: "404"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-4 text-xl font-semibold text-foreground",
					children: "Page not found"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-muted-foreground",
					children: "The page you're looking for doesn't exist or has been moved."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-6",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/",
						className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
						children: "Go home"
					})
				})
			]
		})
	});
}
function ErrorComponent({ error, reset }) {
	console.error(error);
	const router = useRouter();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex min-h-screen items-center justify-center bg-background px-4",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-md text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "text-xl font-semibold tracking-tight text-foreground",
					children: "This page didn't load"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-muted-foreground",
					children: "Something went wrong on our end. You can try refreshing or head back home."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-6 flex flex-wrap justify-center gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: () => {
							router.invalidate();
							reset();
						},
						className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
						children: "Try again"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: "/",
						className: "inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent",
						children: "Go home"
					})]
				})
			]
		})
	});
}
var Route$4 = createRootRouteWithContext()({
	head: () => ({
		meta: [
			{ charSet: "utf-8" },
			{
				name: "viewport",
				content: "width=device-width, initial-scale=1"
			},
			{ title: "Air Synergy Technology Limited — Industrial Air Compressor Solutions" },
			{
				name: "description",
				content: "Air Synergy Technology Limited supplies, installs and services industrial-grade air compressor systems across Nigeria. We also supply cement, foodstuffs and essential commodities."
			},
			{
				name: "author",
				content: "Air Synergy Technology Limited"
			},
			{
				property: "og:title",
				content: "Air Synergy Technology Limited — Industrial Air Compressor Solutions"
			},
			{
				property: "og:description",
				content: "Power that never stops working. Industrial air compressors, parts and 24/7 servicing."
			},
			{
				property: "og:type",
				content: "website"
			},
			{
				name: "twitter:card",
				content: "summary"
			}
		],
		links: [
			{
				rel: "stylesheet",
				href: styles_default
			},
			{
				rel: "preconnect",
				href: "https://fonts.googleapis.com"
			},
			{
				rel: "preconnect",
				href: "https://fonts.gstatic.com",
				crossOrigin: "anonymous"
			},
			{
				rel: "stylesheet",
				href: "https://fonts.googleapis.com/css2?family=Oswald:wght@400;500;600;700&family=Inter:wght@400;500;600;700&display=swap"
			}
		]
	}),
	shellComponent: RootShell,
	component: RootComponent,
	notFoundComponent: NotFoundComponent,
	errorComponent: ErrorComponent
});
function RootShell({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("html", {
		lang: "en",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("head", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeadContent, {}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("body", {
			className: "bg-[var(--background)]",
			children: [children, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Scripts, {})]
		})]
	});
}
function RootComponent() {
	const { queryClient } = Route$4.useRouteContext();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(QueryClientProvider, {
		client: queryClient,
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Navbar, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("main", {
				className: "pt-[72px]",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Outlet, {})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Footer, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(WhatsAppFloat, {})
		]
	});
}
var $$splitComponentImporter$3 = () => import("./products-B3J5FSSk.mjs");
var Route$3 = createFileRoute("/products")({
	head: () => ({ meta: [
		{ title: "Products & Services — Air Synergy Limited" },
		{
			name: "description",
			content: "Complete range of air compressor solutions: piston, screw, oil-free, parts and full maintenance services."
		},
		{
			property: "og:title",
			content: "Products & Services — Air Synergy Limited"
		},
		{
			property: "og:description",
			content: "Piston, screw, oil-free compressors and full servicing across Nigeria."
		},
		{
			property: "og:image",
			content: products_hero_default
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$3, "component")
});
var $$splitComponentImporter$2 = () => import("./contact-yI8t2AtN.mjs");
var Route$2 = createFileRoute("/contact")({
	head: () => ({ meta: [
		{ title: "Contact — Air Synergy Limited" },
		{
			name: "description",
			content: "Talk to Air Synergy Limited about air compressors, parts, servicing and supply enquiries. Lagos, Nigeria."
		},
		{
			property: "og:title",
			content: "Contact — Air Synergy Limited"
		},
		{
			property: "og:description",
			content: "We're ready to help. Get a quote within 24 hours."
		},
		{
			property: "og:image",
			content: contact_hero_default
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$2, "component")
});
objectType({
	fullName: stringType().min(2, "Please enter your full name"),
	email: stringType().email("Enter a valid email"),
	phone: stringType().min(7, "Enter a valid phone"),
	company: stringType().optional(),
	subject: stringType().min(1, "Choose a subject"),
	message: stringType().min(10, "Tell us a bit more")
});
var $$splitComponentImporter$1 = () => import("./about-BXECpzja.mjs");
var Route$1 = createFileRoute("/about")({
	head: () => ({ meta: [
		{ title: "About — Air Synergy Limited" },
		{
			name: "description",
			content: "Built on experience. Driven by precision. Learn the story, mission and values of Air Synergy Limited."
		},
		{
			property: "og:title",
			content: "About — Air Synergy Limited"
		},
		{
			property: "og:description",
			content: "15+ years powering Nigerian industry with reliable air compressor solutions."
		},
		{
			property: "og:image",
			content: about_hero_default
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$1, "component")
});
var $$splitComponentImporter = () => import("./routes-DDLzdpG5.mjs");
var Route = createFileRoute("/")({
	head: () => ({ meta: [
		{ title: "Air Synergy Limited — Industrial Air Compressor Solutions in Nigeria" },
		{
			name: "description",
			content: "Industrial-grade air compressors, parts and 24/7 servicing across Nigeria. We also supply cement, foodstuffs and essential commodities."
		},
		{
			property: "og:title",
			content: "Air Synergy Limited — Power That Never Stops Working"
		},
		{
			property: "og:description",
			content: "Trusted air compressor specialists for Nigeria's industries. Piston, screw, oil-free, parts and maintenance."
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
var ProductsRoute = Route$3.update({
	id: "/products",
	path: "/products",
	getParentRoute: () => Route$4
});
var ContactRoute = Route$2.update({
	id: "/contact",
	path: "/contact",
	getParentRoute: () => Route$4
});
var AboutRoute = Route$1.update({
	id: "/about",
	path: "/about",
	getParentRoute: () => Route$4
});
var rootRouteChildren = {
	IndexRoute: Route.update({
		id: "/",
		path: "/",
		getParentRoute: () => Route$4
	}),
	AboutRoute,
	ContactRoute,
	ProductsRoute
};
var routeTree = Route$4._addFileChildren(rootRouteChildren)._addFileTypes();
var getRouter = () => {
	return createRouter({
		routeTree,
		context: { queryClient: new QueryClient() },
		scrollRestoration: true,
		defaultPreloadStaleTime: 0
	});
};
//#endregion
export { getRouter };
