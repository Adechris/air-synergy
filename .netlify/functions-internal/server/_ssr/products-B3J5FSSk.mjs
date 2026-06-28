import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { t as Reveal } from "./Reveal-Dc4eOVCd.mjs";
import { A as CircleCheck, b as Hammer, k as ArrowRight, l as Settings, n as Wrench, r as Wind, w as Cog, x as Factory } from "../_libs/lucide-react.mjs";
import { t as products_hero_default } from "./products-hero-BCaZ0jgN.mjs";
import { h as Link } from "../_libs/@tanstack/react-router+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/products-B3J5FSSk.js
var import_jsx_runtime = require_jsx_runtime();
var products = [
	{
		id: "piston",
		Icon: Cog,
		name: "Piston Air Compressors",
		short: "Reliable reciprocating compressors for workshop and light industrial duty.",
		full: "Single and two-stage reciprocating compressors built to last. Ideal for workshops, automotive repair, small fabrication and intermittent industrial duty.",
		specs: [
			["Power", "1 – 50 HP"],
			["Pressure", "8 – 15 bar"],
			["Tank", "100L – 500L"],
			["Type", "Belt or direct drive"]
		],
		industries: [
			"Workshops",
			"Automotive",
			"Carpentry",
			"Small Fabrication"
		]
	},
	{
		id: "screw",
		Icon: Settings,
		name: "Screw Air Compressors",
		short: "Heavy-duty rotary screw units for continuous industrial operation.",
		full: "Rotary screw compressors engineered for 24/7 industrial use. Variable speed and fixed-speed options for the lowest total cost of ownership.",
		specs: [
			["Power", "50 – 500 HP"],
			["Pressure", "7 – 13 bar"],
			["Drive", "VSD / Fixed"],
			["Cooling", "Air / Water"]
		],
		industries: [
			"Manufacturing",
			"Textile",
			"Plastics",
			"Heavy Industry"
		]
	},
	{
		id: "oil-free",
		Icon: Wind,
		name: "Oil-Free Compressors",
		short: "Class-zero clean air for food, pharma and medical applications.",
		full: "Certified oil-free compressors that deliver contamination-free air. Essential for industries where air purity is non-negotiable.",
		specs: [
			["Certification", "ISO 8573-1 Class 0"],
			["Power", "5 – 200 HP"],
			["Application", "Food, Pharma, Medical"],
			["Filtration", "Multi-stage"]
		],
		industries: [
			"Food & Beverage",
			"Pharmaceutical",
			"Hospitals",
			"Electronics"
		]
	},
	{
		id: "systems",
		Icon: Factory,
		name: "Industrial Compressor Systems",
		short: "Custom-engineered compressed air systems for full-scale plant operations.",
		full: "End-to-end compressed air system design including compressors, dryers, receivers, filtration and distribution piping.",
		specs: [
			["Design", "Custom-engineered"],
			["Capacity", "High volume"],
			["Includes", "Dryers, filters, piping"],
			["Service", "Turnkey install"]
		],
		industries: [
			"Process Plants",
			"Power Generation",
			"Cement & Mining",
			"Large Manufacturing"
		]
	},
	{
		id: "parts",
		Icon: Hammer,
		name: "Parts & Accessories",
		short: "Genuine OEM parts, filters, belts and valves for every brand.",
		full: "We stock and supply OEM-grade replacement parts for all major compressor brands — keeping your equipment in peak condition.",
		specs: [
			["Stock", "OEM parts"],
			["Range", "All major brands"],
			["Includes", "Filters, belts, valves, oils"],
			["Delivery", "Nationwide"]
		],
		industries: ["All Compressor Users"]
	},
	{
		id: "service",
		Icon: Wrench,
		name: "Maintenance & Servicing",
		short: "Preventive maintenance and emergency response on all major brands.",
		full: "Scheduled preventive maintenance contracts and emergency call-out services. Our engineers know every leading compressor brand.",
		specs: [
			["Plans", "Preventive contracts"],
			["Response", "Emergency call-out"],
			["Coverage", "All brands"],
			["Reporting", "Detailed logs"]
		],
		industries: [
			"Manufacturing",
			"Hospitals",
			"Workshops",
			"Commercial"
		]
	}
];
var otherServices = [
	{
		icon: "🏗️",
		title: "Cement Supply",
		text: "Quality cement brands supplied in bulk or retail quantities."
	},
	{
		icon: "🌾",
		title: "Foodstuffs & Commodities",
		text: "Reliable supply of essential food items and commodities."
	},
	{
		icon: "📦",
		title: "General Merchandise",
		text: "Other essential goods — contact us with your requirements."
	}
];
function ProductsPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "relative -mt-[72px] flex min-h-[60svh] items-end overflow-hidden bg-[var(--ink)]",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: products_hero_default,
					alt: "Engineer inspecting industrial compressor",
					width: 1920,
					height: 1080,
					className: "absolute inset-0 h-full w-full object-cover opacity-55"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-t from-[var(--ink)] via-[var(--ink)]/70 to-[var(--ink)]/40" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "container-x relative z-10 pb-20 pt-36 text-white",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "label-eyebrow text-[var(--brand-2)]",
							children: "Products & Services"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
							className: "mt-4 max-w-3xl font-display text-[clamp(2.5rem,7vw,5rem)] font-bold uppercase leading-[0.95]",
							children: ["Complete Air Compressor ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-[var(--brand-2)]",
								children: "Solutions"
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-6 max-w-2xl text-white/80",
							children: "From compact piston units to full plant-scale systems — and the parts, servicing and engineering support that keep them running."
						})
					] })
				})
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "bg-[var(--light-grey)] py-24",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "container-x",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "grid gap-6 sm:grid-cols-2 lg:grid-cols-3",
					children: products.map((p, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
						dir: "up",
						delay: i * .05,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
							href: `#${p.id}`,
							className: "group flex h-full flex-col border-t-[3px] border-[var(--brand)] bg-white p-7 transition-all hover:-translate-y-1 hover:shadow-[0_15px_40px_-10px_rgba(26,107,60,0.35)]",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(p.Icon, { className: "h-10 w-10 text-[var(--brand)]" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "mt-5 font-display text-xl font-bold uppercase",
									children: p.name
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-3 flex-1 text-sm leading-relaxed text-[var(--steel)]",
									children: p.short
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "mt-5 inline-flex items-center gap-1 text-xs font-bold uppercase tracking-[0.18em] text-[var(--brand)] group-hover:text-[var(--brand-2)]",
									children: ["Read more ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-3.5 w-3.5" })]
								})
							]
						})
					}, p.id))
				})
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "bg-white",
			children: products.map((p, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				id: p.id,
				className: `${i % 2 ? "bg-[var(--light-grey)]" : "bg-white"} scroll-mt-24 border-t border-[var(--border)] py-20`,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "container-x grid items-start gap-14 lg:grid-cols-[1fr_1.3fr]",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
						dir: "left",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "bg-[var(--ink)] p-10 text-white",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(p.Icon, { className: "h-12 w-12 text-[var(--brand-2)]" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
									className: "mt-5 font-display text-3xl font-bold uppercase leading-tight",
									children: p.name
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-4 leading-relaxed text-white/80",
									children: p.full
								})
							]
						})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
						dir: "right",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "label-eyebrow text-[var(--brand)]",
								children: "Key Specifications"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("table", {
								className: "mt-4 w-full border border-[var(--border)] text-sm",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("tbody", { children: p.specs.map(([k, v]) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", {
									className: "border-b border-[var(--border)] last:border-b-0",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
										className: "w-1/3 bg-white px-5 py-3 text-left font-semibold uppercase tracking-wider text-[var(--ink)]",
										children: k
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
										className: "px-5 py-3 text-[var(--steel)]",
										children: v
									})]
								}, k)) })
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mt-8 label-eyebrow text-[var(--brand)]",
								children: "Typical Industries"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mt-3 flex flex-wrap gap-2",
								children: p.industries.map((ind) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "bg-[var(--brand-light)] px-3 py-1.5 text-xs font-semibold uppercase tracking-wider text-[var(--brand)]",
									children: ind
								}, ind))
							})
						]
					})]
				})
			}, p.id))
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "bg-[var(--brand)] py-24 text-white",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "container-x grid gap-12 lg:grid-cols-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
					dir: "left",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "label-eyebrow text-white/80",
							children: "Maintenance Plans"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "mt-4 font-display text-4xl font-bold uppercase leading-tight",
							children: "Keep It Running. Always."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-5 text-white/90",
							children: "Our maintenance plans are built around your operations. Choose preventive contracts to maximize uptime, or call us when emergencies strike — we respond fast."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: "/contact",
							className: "mt-8 inline-flex items-center gap-2 bg-white px-6 py-3 text-sm font-bold uppercase tracking-[0.18em] text-[var(--brand)] hover:scale-105 transition-transform",
							children: ["Schedule a Service ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-4 w-4" })]
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					dir: "right",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "space-y-4",
						children: [
							"Scheduled preventive maintenance",
							"24/7 emergency call-out response",
							"OEM parts and consumables",
							"Compressor health diagnostics",
							"Energy efficiency audits",
							"Detailed service reports"
						].map((line) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
							className: "flex items-start gap-3 border-l-[3px] border-white/40 bg-white/10 px-5 py-4",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, { className: "mt-0.5 h-5 w-5 shrink-0 text-white" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-white/95",
								children: line
							})]
						}, line))
					})
				})]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "bg-[var(--light-grey)] py-24",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "container-x",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "max-w-2xl",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "label-eyebrow text-[var(--brand)]",
						children: "Beyond Compressors"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mt-4 font-display text-3xl font-bold uppercase leading-tight text-[var(--ink)]",
						children: "Other Supplies We Provide"
					})]
				}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-10 grid gap-6 md:grid-cols-3",
					children: otherServices.map((s, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
						dir: "up",
						delay: i * .06,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "h-full border-t-[3px] border-[var(--brand)] bg-white p-7 shadow-sm",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "text-3xl",
									children: s.icon
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "mt-4 font-display text-lg font-bold uppercase",
									children: s.title
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-3 text-sm leading-relaxed text-[var(--steel)]",
									children: s.text
								})
							]
						})
					}, s.title))
				})]
			})
		})
	] });
}
//#endregion
export { ProductsPage as component };
