import React, { useEffect, useRef } from 'react';

const OceanCursor = () => {
const animationRef = useRef(null);
const isHoveringRef = useRef(false);

useEffect(() => {
let mouseX = 0;
let mouseY = 0;
let currentX = 0;
let currentY = 0;

// Create enhanced trail elements for ultra-oceanic effect
const trailCount = 20;
const trails = [];

// Create main cursor core
const cursorCore = document.createElement('div');
cursorCore.className = 'ocean-cursor-core';
cursorCore.style.cssText = `
    position: fixed;
    width: 12px;
    height: 12px;
    border-radius: 50%;
    pointer-events: none;
    z-index: 10000;
    background: radial-gradient(circle, 
    rgba(255, 255, 255, 0.3) 0%,
    rgba(67, 73, 255, 0.2) 40%,
    rgba(124, 58, 237, 0.15) 70%,
    transparent 100%);
    transform: translate(-50%, -50%);
    transition: all 0.1s ease;
    box-shadow: 
    0 0 8px rgba(255, 255, 255, 0.2),
    0 0 16px rgba(67, 73, 255, 0.15),
    0 0 24px rgba(124, 58, 237, 0.1);
    animation: core-pulse-dim 3s ease-in-out infinite;
`;
document.body.appendChild(cursorCore);

for (let i = 0; i < trailCount; i++) {
    const trail = document.createElement('div');
    trail.className = 'ocean-trail-enhanced';
    const size = 60 - i * 2.5; // Smaller trails
    const opacity = 0.4 - i * 0.015; // Much more dim
    const hue = (240 + i * 8) % 360; // Color cycle through ocean colors
    
    trail.style.cssText = `
    position: fixed;
    width: ${size}px;
    height: ${size}px;
    border-radius: 50%;
    pointer-events: none;
    z-index: ${9999 - i};
    opacity: ${opacity};
    background: radial-gradient(circle, 
        hsla(${hue}, 40%, 50%, ${0.1 - i * 0.005}) 0%,
        hsla(${hue + 30}, 45%, 55%, ${0.08 - i * 0.004}) 30%,
        hsla(${hue + 60}, 50%, 60%, ${0.05 - i * 0.003}) 60%,
        transparent 80%);
    transform: translate(-50%, -50%);
    transition: all 0.${4 + i}s cubic-bezier(0.25, 0.46, 0.45, 0.94);
    filter: blur(${i * 0.4}px);
    box-shadow: 
        0 0 ${8 + i}px hsla(${hue}, 40%, 50%, ${0.15 - i * 0.008}),
        inset 0 0 ${5 + i * 0.5}px hsla(${hue + 120}, 45%, 60%, ${0.08 - i * 0.004});
    mix-blend-mode: screen;
    `;
    document.body.appendChild(trail);
    trails.push({
    element: trail,
    x: 0,
    y: 0,
    targetX: 0,
    targetY: 0,
    velocity: { x: 0, y: 0 },
    size: size,
    baseOpacity: opacity,
    hue: hue
    });
}

// Add CSS animations
const style = document.createElement('style');
style.textContent = `
    @keyframes core-pulse {
    0%, 100% { 
        transform: translate(-50%, -50%) scale(1);
        box-shadow: 
        0 0 20px rgba(255, 255, 255, 0.8),
        0 0 40px rgba(67, 73, 255, 0.6),
        0 0 60px rgba(124, 58, 237, 0.4);
    }
    50% { 
        transform: translate(-50%, -50%) scale(1.2);
        box-shadow: 
        0 0 30px rgba(255, 255, 255, 1),
        0 0 60px rgba(67, 73, 255, 0.8),
        0 0 90px rgba(124, 58, 237, 0.6);
    }
    }
    
    @keyframes ocean-ripple {
    0% { 
        transform: translate(-50%, -50%) scale(0.5);
        opacity: 1;
    }
    100% { 
        transform: translate(-50%, -50%) scale(3);
        opacity: 0;
    }
    }
`;
document.head.appendChild(style);

// Mouse move handler
const handleMouseMove = (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
};

// Click handler for ripple effect
const handleClick = (e) => {
    const ripple = document.createElement('div');
    ripple.style.cssText = `
    position: fixed;
    width: 100px;
    height: 100px;
    border-radius: 50%;
    pointer-events: none;
    z-index: 9998;
    background: radial-gradient(circle, 
        rgba(67, 73, 255, 0.4) 0%,
        rgba(124, 58, 237, 0.3) 30%,
        rgba(236, 72, 153, 0.2) 60%,
        transparent 100%);
    left: ${e.clientX}px;
    top: ${e.clientY}px;
    animation: ocean-ripple 0.8s ease-out forwards;
    `;
    document.body.appendChild(ripple);
    setTimeout(() => ripple.remove(), 800);
};

// Enhanced hover detection
const handleMouseEnter = () => {
    isHoveringRef.current = true;
    cursorCore.style.transform = 'translate(-50%, -50%) scale(1.5)';
    cursorCore.style.background = `radial-gradient(circle, 
    rgba(255, 255, 255, 1) 0%,
    rgba(67, 73, 255, 0.9) 40%,
    rgba(236, 72, 153, 0.7) 70%,
    transparent 100%)`;
};

const handleMouseLeave = () => {
    isHoveringRef.current = false;
    cursorCore.style.transform = 'translate(-50%, -50%) scale(1)';
    cursorCore.style.background = `radial-gradient(circle, 
    rgba(255, 255, 255, 0.9) 0%,
    rgba(67, 73, 255, 0.8) 40%,
    rgba(124, 58, 237, 0.6) 70%,
    transparent 100%)`;
};

// Animation loop for smooth following with enhanced physics
const animate = () => {
    // Smooth interpolation for main cursor
    const lerpFactor = isHoveringRef.current ? 0.15 : 0.1;
    currentX += (mouseX - currentX) * lerpFactor;
    currentY += (mouseY - currentY) * lerpFactor;

    // Update main cursor core
    cursorCore.style.left = `${currentX}px`;
    cursorCore.style.top = `${currentY}px`;

    // Update trails with enhanced physics and wave effects
    trails.forEach((trail, index) => {
    const delay = index * 0.02;
    const waveAmplitude = isHoveringRef.current ? 8 : 4;
    const waveFrequency = 0.003;
    
    // Create wave motion
    const waveX = Math.sin(Date.now() * waveFrequency + index * 0.5) * waveAmplitude;
    const waveY = Math.cos(Date.now() * waveFrequency + index * 0.3) * waveAmplitude;
    
    trail.targetX = currentX + waveX + (index * Math.sin(index) * 2);
    trail.targetY = currentY + waveY + (index * Math.cos(index) * 1.5);
    
    // Smooth movement with momentum
    trail.velocity.x += (trail.targetX - trail.x) * (0.08 - delay);
    trail.velocity.y += (trail.targetY - trail.y) * (0.08 - delay);
    
    // Apply velocity with damping
    trail.velocity.x *= 0.85;
    trail.velocity.y *= 0.85;
    
    trail.x += trail.velocity.x;
    trail.y += trail.velocity.y;
    
    trail.element.style.left = `${trail.x}px`;
    trail.element.style.top = `${trail.y}px`;
    
    // Enhanced floating animation with color shifts
    const floatY = Math.sin(Date.now() * 0.004 + index * 0.8) * 5;
    const scale = 1 + Math.sin(Date.now() * 0.003 + index * 0.6) * 0.15;
    const rotation = Math.sin(Date.now() * 0.002 + index) * 10;
    
    // Dynamic opacity based on movement and hover state
    const movementIntensity = Math.sqrt(trail.velocity.x ** 2 + trail.velocity.y ** 2);
    const dynamicOpacity = trail.baseOpacity + (movementIntensity * 0.05) + (isHoveringRef.current ? 0.2 : 0);
    
    trail.element.style.transform = `translate(-50%, -50%) translateY(${floatY}px) scale(${scale}) rotate(${rotation}deg)`;
    trail.element.style.opacity = Math.min(dynamicOpacity, 1);
    
    // Color shifting effect
    const timeShift = Date.now() * 0.001;
    const newHue = (trail.hue + timeShift + movementIntensity * 10) % 360;
    trail.element.style.background = `radial-gradient(circle, 
        hsla(${newHue}, 70%, 60%, ${0.3 - index * 0.01}) 0%,
        hsla(${newHue + 30}, 80%, 65%, ${0.2 - index * 0.008}) 30%,
        hsla(${newHue + 60}, 90%, 70%, ${0.1 - index * 0.005}) 60%,
        transparent 80%)`;
    });

    animationRef.current = requestAnimationFrame(animate);
};

// Start animation
animate();

// Add event listeners
document.addEventListener('mousemove', handleMouseMove);
document.addEventListener('click', handleClick);

// Enhanced interactive element detection
const interactiveElements = document.querySelectorAll('button, a, input, textarea, [role="button"], [data-interactive], .service-card, .pricing-card, .navbar-link, .footer-link, .footer-social');

interactiveElements.forEach(element => {
    element.addEventListener('mouseenter', handleMouseEnter);
    element.addEventListener('mouseleave', handleMouseLeave);
});

// Hide default cursor globally
document.body.style.cursor = 'none';
document.documentElement.style.cursor = 'none';

// Cleanup
return () => {
    document.removeEventListener('mousemove', handleMouseMove);
    document.removeEventListener('click', handleClick);
    document.body.style.cursor = 'default';
    document.documentElement.style.cursor = 'default';
    
    if (animationRef.current) {
    cancelAnimationFrame(animationRef.current);
    }
    
    trails.forEach(trail => {
    if (trail.element.parentNode) {
        trail.element.parentNode.removeChild(trail.element);
    }
    });

    if (cursorCore.parentNode) {
    cursorCore.parentNode.removeChild(cursorCore);
    }

    if (style.parentNode) {
    style.parentNode.removeChild(style);
    }

    interactiveElements.forEach(element => {
    element.removeEventListener('mouseenter', handleMouseEnter);
    element.removeEventListener('mouseleave', handleMouseLeave);
    });
};
}, []);

return null; // Component renders nothing, all DOM manipulation is manual
};

export default OceanCursor;