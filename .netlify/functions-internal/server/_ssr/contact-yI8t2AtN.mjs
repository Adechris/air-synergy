import { o as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { n as useForm, r as require_react, t as u } from "../_libs/@hookform/resolvers+[...].mjs";
import { t as motion } from "../_libs/motion.mjs";
import { t as Reveal } from "./Reveal-Dc4eOVCd.mjs";
import { E as Check, T as Clock, _ as Mail, f as Phone, g as MapPin, u as Send } from "../_libs/lucide-react.mjs";
import { t as contact_hero_default } from "./contact-hero-B9EaFLwi.mjs";
import { n as stringType, t as objectType } from "../_libs/zod.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/contact-yI8t2AtN.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var schema = objectType({
	fullName: stringType().min(2, "Please enter your full name"),
	email: stringType().email("Enter a valid email"),
	phone: stringType().min(7, "Enter a valid phone"),
	company: stringType().optional(),
	subject: stringType().min(1, "Choose a subject"),
	message: stringType().min(10, "Tell us a bit more")
});
function ContactPage() {
	const [submitted, setSubmitted] = (0, import_react.useState)(false);
	const { register, handleSubmit, formState: { errors, isSubmitting }, reset } = useForm({ resolver: u(schema) });
	const onSubmit = async (_) => {
		await new Promise((r) => setTimeout(r, 600));
		setSubmitted(true);
		reset();
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "relative -mt-[72px] flex min-h-[55svh] items-end overflow-hidden bg-[var(--ink)]",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
				src: contact_hero_default,
				alt: "Industrial pipes",
				width: 1920,
				height: 1080,
				className: "absolute inset-0 h-full w-full object-cover opacity-55"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-t from-[var(--ink)] via-[var(--ink)]/70 to-[var(--ink)]/30" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "container-x relative z-10 pb-20 pt-36 text-white",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "label-eyebrow text-[var(--brand-2)]",
						children: "Contact"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
						className: "mt-4 max-w-3xl font-display text-[clamp(2.5rem,7vw,5rem)] font-bold uppercase leading-[0.95]",
						children: ["Let's Talk. ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-[var(--brand-2)]",
							children: "We're Ready to Help."
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-6 max-w-2xl text-white/80",
						children: "Tell us about your operation and we'll get back within 24 hours with a specification and quote."
					})
				] })
			})
		]
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "bg-[var(--light-grey)] py-24",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "container-x grid gap-10 lg:grid-cols-[1.4fr_1fr]",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
				dir: "left",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "bg-white p-8 shadow-lg sm:p-10",
					children: submitted ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-col items-center py-12 text-center",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
								initial: { scale: 0 },
								animate: { scale: 1 },
								transition: {
									type: "spring",
									stiffness: 200,
									damping: 14
								},
								className: "grid h-20 w-20 place-items-center rounded-full bg-[var(--brand)] text-white",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, {
									className: "h-10 w-10",
									strokeWidth: 3
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "mt-6 font-display text-2xl font-bold uppercase text-[var(--ink)]",
								children: "Thank you!"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-3 max-w-md text-[var(--steel)]",
								children: "Your message has been received. Our team will respond within 24 hours."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								onClick: () => setSubmitted(false),
								className: "mt-6 text-sm font-semibold uppercase tracking-[0.18em] text-[var(--brand)] hover:text-[var(--brand-2)]",
								children: "Send another message"
							})
						]
					}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
						onSubmit: handleSubmit(onSubmit),
						className: "space-y-5",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "label-eyebrow text-[var(--brand)]",
								children: "Send Us A Message"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "grid gap-5 sm:grid-cols-2",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
										label: "Full Name",
										error: errors.fullName?.message,
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
											...register("fullName"),
											className: inputCls,
											placeholder: "David James"
										})
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
										label: "Email Address",
										error: errors.email?.message,
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
											...register("email"),
											type: "email",
											className: inputCls,
											placeholder: "you@company.com"
										})
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
										label: "Phone Number",
										error: errors.phone?.message,
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
											...register("phone"),
											className: inputCls,
											placeholder: "+234..."
										})
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
										label: "Company (optional)",
										error: errors.company?.message,
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
											...register("company"),
											className: inputCls,
											placeholder: "Company name"
										})
									})
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
								label: "Subject",
								error: errors.subject?.message,
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
									...register("subject"),
									className: inputCls,
									defaultValue: "",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
											value: "",
											disabled: true,
											children: "Select an option"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: "Air Compressor Enquiry" }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: "Request a Quote" }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: "Maintenance & Servicing" }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: "Cement / Foodstuffs Supply" }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: "General Enquiry" })
									]
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
								label: "Message",
								error: errors.message?.message,
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
									...register("message"),
									rows: 5,
									className: inputCls,
									placeholder: "Tell us about your requirements..."
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								type: "submit",
								disabled: isSubmitting,
								className: "group flex w-full items-center justify-center gap-2 bg-[var(--brand)] px-6 py-4 text-sm font-bold uppercase tracking-[0.2em] text-white transition-all hover:bg-[var(--brand-2)] hover:shadow-[0_10px_30px_rgba(46,155,90,0.4)] disabled:opacity-60",
								children: [isSubmitting ? "Sending..." : "Send Message", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Send, { className: "h-4 w-4 transition-transform group-hover:translate-x-1" })]
							})
						]
					})
				})
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
				dir: "right",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "space-y-5",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(InfoCard, {
							Icon: MapPin,
							title: "Visit Us",
							children: "Lagos, Nigeria"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(InfoCard, {
							Icon: Phone,
							title: "Call Us",
							href: "tel:+2348000000000",
							children: "+234 800 000 0000"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(InfoCard, {
							Icon: Mail,
							title: "Email Us",
							href: "mailto:info@airsynergy.ng",
							children: "info@airsynergy.com"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(InfoCard, {
							Icon: Clock,
							title: "Working Hours",
							children: [
								"Mon – Fri: 8AM – 6PM",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
								"Sat: 9AM – 3PM"
							]
						})
					]
				})
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "container-x mt-12",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "overflow-hidden border-l-[5px] border-[var(--brand)] shadow-lg",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("iframe", {
					title: "Map",
					src: "https://www.google.com/maps?q=Lagos,Nigeria&output=embed",
					className: "h-[400px] w-full",
					loading: "lazy",
					referrerPolicy: "no-referrer-when-downgrade"
				})
			}) })
		})]
	})] });
}
var inputCls = "w-full border border-[var(--border)] bg-white px-4 py-3 text-sm text-[var(--ink)] outline-none transition-colors focus:border-[var(--brand)] focus:ring-2 focus:ring-[var(--brand)]/20";
function Field({ label, error, children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
		className: "block",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "mb-2 block text-xs font-semibold uppercase tracking-[0.15em] text-[var(--ink)]",
				children: label
			}),
			children,
			error && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "mt-1 block text-xs text-red-600",
				children: error
			})
		]
	});
}
function InfoCard({ Icon, title, children, href }) {
	const inner = /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex items-start gap-4 border-l-[4px] border-[var(--brand)] bg-white p-5 shadow-sm transition-shadow hover:shadow-md",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "grid h-11 w-11 shrink-0 place-items-center bg-[var(--brand-light)] text-[var(--brand)]",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: "h-5 w-5" })
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "text-xs font-bold uppercase tracking-[0.18em] text-[var(--brand)]",
			children: title
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mt-1 text-[15px] text-[var(--ink)]",
			children
		})] })]
	});
	return href ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
		href,
		children: inner
	}) : inner;
}
//#endregion
export { ContactPage as component };
