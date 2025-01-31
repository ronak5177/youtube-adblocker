// Function to remove ads from the YouTube page
function removeAds() {
    // Selectors for different types of ads on YouTube
    const selectors = [
      '.video-ads', // In-video ads
      '.ytd-ad-slot-renderer', // Sidebar ads
      '.ytd-in-feed-ad-layout-renderer', // In-feed ads
      '.ytd-display-ad-renderer', // Display ads
      '.ytd-action-companion-ad-renderer' // Companion ads
    ];
  
    selectors.forEach(selector => {
      const ads = document.querySelectorAll(selector);
      ads.forEach(ad => ad.remove());
    });
  }
  
  // Run the function initially
  removeAds();
  
  // Set up a MutationObserver to watch for new ads
  const observer = new MutationObserver(removeAds);
  observer.observe(document.body, { childList: true, subtree: true });