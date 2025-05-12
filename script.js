// DOM Elements
const themeSelect = document.getElementById('theme');
const speedSelect = document.getElementById('animation-speed');
const savePrefsBtn = document.getElementById('save-prefs');
const animateBtn = document.getElementById('animate-btn');
const animatedElement = document.getElementById('animated-element');

// Load user preferences from localStorage
function loadPreferences() {
    const theme = localStorage.getItem('theme') || 'light';
    const speed = localStorage.getItem('animationSpeed') || 'normal';
    
    // Apply saved preferences
    themeSelect.value = theme;
    speedSelect.value = speed;
    applyTheme(theme);
    updateAnimationSpeed(speed);
}

// Save user preferences to localStorage
function savePreferences() {
    const theme = themeSelect.value;
    const speed = speedSelect.value;
    
    localStorage.setItem('theme', theme);
    localStorage.setItem('animationSpeed', speed);
    
    applyTheme(theme);
    updateAnimationSpeed(speed);
    
    // Show feedback animation
    savePrefsBtn.textContent = 'Preferences Saved!';
    setTimeout(() => {
        savePrefsBtn.textContent = 'Save Preferences';
    }, 2000);
}

// Apply selected theme
function applyTheme(theme) {
    document.body.className = `${theme}-theme`;
}

// Update animation speed
function updateAnimationSpeed(speed) {
    animatedElement.classList.remove('slow-animation', 'fast-animation');
    
    if (speed === 'slow') {
        animatedElement.classList.add('slow-animation');
    } else if (speed === 'fast') {
        animatedElement.classList.add('fast-animation');
    }
}

// Trigger complex animation
function triggerAnimation() {
    // Reset animation by removing the class
    animatedElement.classList.remove('rotate-scale');
    
    // Trigger reflow to restart animation
    void animatedElement.offsetWidth;
    
    // Add animation class
    animatedElement.classList.add('rotate-scale');
    
    // Advanced function example with parameters and return value
    const animationDuration = calculateAnimationDuration(speedSelect.value);
    console.log(`Animation will run for ${animationDuration}ms`);
}

// Advanced function combining scope, parameters, and return values
function calculateAnimationDuration(speed) {
    const speedValues = {
        slow: 3000,
        normal: 2000,
        fast: 1000
    };
    
    // Return the duration based on speed with fallback to normal
    return speedValues[speed] || speedValues.normal;
}

// Event Listeners
savePrefsBtn.addEventListener('click', savePreferences);
animateBtn.addEventListener('click', triggerAnimation);

// Initialize
loadPreferences();