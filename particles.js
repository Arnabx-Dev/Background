// tsParticles CDN loader
// https://particles.js.org/
document.addEventListener('DOMContentLoaded', function() {
  const particlesScript = document.createElement('script');
  particlesScript.src = 'https://cdn.jsdelivr.net/npm/tsparticles-engine@3/tsparticles.engine.min.js';
  particlesScript.onload = function() {
    const loaderScript = document.createElement('script');
    loaderScript.src = 'https://cdn.jsdelivr.net/npm/tsparticles@3/tsparticles.min.js';
    loaderScript.onload = function() {
      window.tsParticles.load('tsparticles', {
        fullScreen: { enable: true, zIndex: 0 },
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
    };
    document.body.appendChild(loaderScript);
  };
  document.body.appendChild(particlesScript);
});
