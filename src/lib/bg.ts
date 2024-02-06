export const initBG = (canvas: HTMLCanvasElement) => {
	const ctx = canvas.getContext('2d');
	if (!ctx) return;

	const resize = () => {
		canvas.width = window.innerWidth;
		canvas.height = window.innerHeight;
	};
	resize();
	window.addEventListener('resize', resize);

	const mousePos = { x: 0, y: 0 };
	document.addEventListener('mousemove', (e) => {
		mousePos.x = e.clientX;
		mousePos.y = e.clientY;
	});

	const dots: { x: number; y: number; r: number; vx: number; vy: number }[] = [];
	const numDots = 100;
	for (let i = 0; i < numDots; i++) {
		dots.push({
			x: Math.random() * canvas.width,
			y: Math.random() * canvas.height,
			r: 5,
			vx: Math.random() * 2 - 1,
			vy: Math.random() * 2 - 1
		});
	}

	const connectionDistance = 100;

	const render = () => {
		ctx.clearRect(0, 0, canvas.width, canvas.height);

		for (let i = 0; i < numDots; i++) {
			for (let j = i + 1; j < numDots; j++) {
				const dot1 = dots[i];
				const dot2 = dots[j];
				const dx = dot1.x - dot2.x;
				const dy = dot1.y - dot2.y;
				const distance = Math.sqrt(dx * dx + dy * dy);
				if (distance < connectionDistance) {
					ctx.strokeStyle = `rgba(255, 255, 255, ${1 - distance / connectionDistance})`;
					ctx.beginPath();
					ctx.moveTo(dot1.x, dot1.y);
					ctx.lineTo(dot2.x, dot2.y);
					ctx.stroke();
				}
			}
		}

		dots.forEach((dot) => {
			// move dots slightly away from mouse exponentially decreasing with distance
			const dx = dot.x - mousePos.x;
			const dy = dot.y - mousePos.y;
			const distance = Math.sqrt(dx * dx + dy * dy);
			if (distance < 100) {
				const force = (100 - distance) / 200;
				dot.vx += dx * force * 0.01;
				dot.vy += dy * force * 0.01;
			}

			// cap velocity
			const speed = Math.sqrt(dot.vx * dot.vx + dot.vy * dot.vy);
			if (speed > .7) {
				dot.vx *= .7 / speed;
				dot.vy *= .7 / speed;
			}

			dot.x += dot.vx;
			dot.y += dot.vy;
			if (dot.x + dot.r < 0) dot.x = canvas.width + dot.r;
			if (dot.x - dot.r > canvas.width) dot.x = -dot.r;
			if (dot.y + dot.r < 0) dot.y = canvas.height + dot.r;
			if (dot.y - dot.r > canvas.height) dot.y = -dot.r;
			ctx.fillStyle = 'rgba(255, 255, 255, 0.5)';
			ctx.beginPath();
			ctx.arc(dot.x, dot.y, dot.r, 0, Math.PI * 2);
			ctx.fill();
		});
		requestAnimationFrame(render);
	};
	requestAnimationFrame(render);
};
