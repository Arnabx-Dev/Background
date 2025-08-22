const css = document.querySelector("h3");
const color1 = document.getElementById("color1");
const color2 = document.getElementById("color2");
const body = document.getElementById("gradient");
const copyBtn = document.querySelector('.copy-btn');
const toast = document.getElementById('toast');

function setGradient() {
	const gradient = `linear-gradient(to right, ${color1.value}, ${color2.value})`;
	body.style.background = gradient;
	css.textContent = `background: ${gradient};`;
	// Update color input backgrounds for accessibility
	color1.style.backgroundColor = color1.value;
	color2.style.backgroundColor = color2.value;
}

function showToast(message) {
	toast.textContent = message;
	toast.classList.add('show');
	setTimeout(() => {
		toast.classList.remove('show');
	}, 1800);
}

if (copyBtn) {
	copyBtn.addEventListener('click', function () {
		if (css && css.textContent) {
			navigator.clipboard.writeText(css.textContent)
				.then(() => showToast('CSS copied!'))
				.catch(() => showToast('Copy failed'));
		}
	});
}

color1.addEventListener("input", setGradient);
color2.addEventListener("input", setGradient);

// Animate heading glow
const neon = document.querySelector('.neon');
if (neon) {
	let glow = 0;
	setInterval(() => {
		glow = (glow + 1) % 100;
		neon.style.textShadow = `0 0 8px #00ffe7, 0 0 16px #00ffe7, 0 0 ${16 + 16 * Math.abs(Math.sin(glow / 15))}px #00ffe7`;
	}, 80);
}

// Initial gradient
setGradient();