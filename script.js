function navigateTo(page) {
  window.location.href = page;
}
// Wait for the window to load
window.addEventListener('load', () => {
  // Wait until the text fade-in finishes (adjust this delay based on your animation duration)
  setTimeout(() => {
    // Select the welcome section
    const welcomeSection = document.querySelector('.welcome-section');
    
    // Add a class that triggers opacity change
    welcomeSection.classList.add('background-fade');
  }, 1500); // Delay based on text fade-in duration (in milliseconds)
});

