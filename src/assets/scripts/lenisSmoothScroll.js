import "@styles/lenis.css";

import Lenis from "lenis";

// Script to handle Lenis library settings for smooth scrolling
// https://github.com/darkroomengineering/lenis
const lenis = new Lenis({
    autoRaf: true,
});

// Expose lenis globally so modals can stop/start it
window.lenis = lenis;