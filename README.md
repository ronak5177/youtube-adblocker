# YouTube AdBlocker Extension

🚀 **Block YouTube Ads Seamlessly!**  
This browser extension blocks all ads on YouTube, ensuring a smooth and uninterrupted video-watching experience. Built with Manifest V3, it uses the Declarative Net Request API to block ad requests and removes ad elements from the page dynamically.

---

## Features ✨

- **Blocks Video Ads**: Prevents pre-roll, mid-roll, and post-roll ads from playing.
- **Removes Banner Ads**: Hides sidebar and banner ads on the YouTube homepage and video pages.
- **Lightweight and Fast**: Built with efficiency in mind, ensuring minimal impact on browser performance.
- **Open Source**: Fully customizable and transparent code.

---

## Installation 🛠️

### For Chrome (and Chromium-based browsers like Edge, Brave, etc.)

1. **Download the Extension**:
   - Clone this repository or download the ZIP file and extract it.

2. **Load the Extension**:
   - Open Chrome and go to `chrome://extensions/`.
   - Enable **Developer Mode** (toggle in the top-right corner).
   - Click **Load unpacked** and select the folder containing the extension files.
   - Please add your icon in icons directory if icon48.png is not working properly.

3. **Enjoy Ad-Free YouTube**:
   - Navigate to YouTube and start watching videos without ads!

---

## How It Works 🔧

- **Declarative Net Request API**: Blocks requests to known ad servers (e.g., `doubleclick.net`, `googlesyndication.com`).
- **Content Script**: Dynamically removes ad elements from the YouTube page using a `MutationObserver`.

---

## Code Structure 📂

- **`manifest.json`**: Defines the extension's metadata and permissions.
- **`rules.json`**: Contains rules for blocking ad-related network requests.
- **`content.js`**: Removes ad elements from the YouTube page.
- **`icons/`**: Contains the extension's icons.

---

## Contributing 🤝

Contributions are welcome! If you'd like to improve this extension, follow these steps:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature/YourFeatureName`).
3. Commit your changes (`git commit -m 'Add some feature'`).
4. Push to the branch (`git push origin feature/YourFeatureName`).
5. Open a Pull Request.

---

## License 📜

This project is licensed under the **MIT License**. See the [LICENSE](LICENSE) file for details.

---

## Support 💖

If you find this extension useful, consider supporting it by:
- ⭐ **Starring this repository**.
- 🐛 **Reporting issues** or suggesting new features.
- 💬 **Sharing it with friends** who hate YouTube ads!

---

## Disclaimer ⚠️

This extension is intended for educational and personal use. Blocking ads may impact content creators who rely on ad revenue. Consider supporting creators through YouTube Premium or other means.

---

Enjoy your ad-free YouTube experience! 🎉
