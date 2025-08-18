
// tsParticles loader for CDN
// https://particles.js.org/
document.addEventListener('DOMContentLoaded', function() {
  // Check if the container exists
  if (!document.getElementById('tsparticles')) {
    const div = document.createElement('div');
    div.id = 'tsparticles';
    document.body.prepend(div);
  }

  // Load tsParticles from CDN (single bundle)
  const script = document.createElement('script');
  script.src = 'https://cdn.jsdelivr.net/npm/tsparticles@2.12.0/tsparticles.bundle.min.js';
  script.onload = function() {
    if (window.tsParticles && window.tsParticles.load) {
      window.tsParticles.load('tsparticles', {
        fullScreen: { enable: true, zIndex: 1 },
        background: { color: 'transparent' },
        particles: {
          number: { value: 60, density: { enable: true, area: 800 } },
          color: { value: '#00ffe7' },
          shape: { type: 'circle' },
          opacity: { value: 0.5 },
          size: { value: 3, random: { enable: true, minimumValue: 1 } },
          move: { enable: true, speed: 1.2, direction: 'none', outModes: { default: 'out' } },
          links: { enable: true, distance: 120, color: '#00ffe7', opacity: 0.3, width: 1 }
        },
        interactivity: {
          events: {
            onHover: { enable: true, mode: 'repulse' },
            onClick: { enable: true, mode: 'push' }
          },
          modes: {
            repulse: { distance: 100, duration: 0.4 },
            push: { quantity: 4 }
          }
        },
        detectRetina: true
      });
    } else {
      console.error('tsParticles failed to load.');
    }
  };
  script.onerror = function() {
    console.error('Failed to load tsParticles script.');
  };
  document.body.appendChild(script);
});
