import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { t as motion } from "../_libs/motion.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/Reveal-Dc4eOVCd.js
var import_jsx_runtime = require_jsx_runtime();
var variants = {
	up: {
		hidden: {
			opacity: 0,
			y: 40
		},
		show: {
			opacity: 1,
			y: 0,
			transition: {
				duration: .7,
				ease: [
					.22,
					1,
					.36,
					1
				]
			}
		}
	},
	left: {
		hidden: {
			opacity: 0,
			x: -60
		},
		show: {
			opacity: 1,
			x: 0,
			transition: {
				duration: .7,
				ease: [
					.22,
					1,
					.36,
					1
				]
			}
		}
	},
	right: {
		hidden: {
			opacity: 0,
			x: 60
		},
		show: {
			opacity: 1,
			x: 0,
			transition: {
				duration: .7,
				ease: [
					.22,
					1,
					.36,
					1
				]
			}
		}
	}
};
function Reveal({ children, dir = "up", delay = 0, className }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
		className,
		initial: "hidden",
		whileInView: "show",
		viewport: {
			once: true,
			margin: "-80px"
		},
		variants: variants[dir],
		transition: { delay },
		children
	});
}
//#endregion
export { Reveal as t };
