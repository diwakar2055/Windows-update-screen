# Windows Update Simulator

A Node.js and Express-based web application that provides a highly realistic, full-screen Windows Update simulation for pranks or demonstrations. The simulation is designed to be as inescapable as possible within the limits of a web browser, featuring a locked-down interface, disabled input, and an authentic animated update screen.

## ✨ Features

### Landing Page
-   **Modern, Interactive UI:** A colorful, responsive interface with smooth animations and visual feedback.
-   **Custom Exit Code:** Users can set their own secret key combination (e.g., `Ctrl+Alt+U`) to exit the simulation.
-   **Prank Guide:** Includes a detailed, user-friendly guide on how to achieve a truly inescapable prank by using third-party tools like **SharpKeys** to disable system keys (`Esc`, `Alt+Tab`, Windows Key) and how to disable touchpad gestures.


### Simulation Screen
-   **Authentic Animation:** A pure CSS, dynamically animated "chasing dots" spinner that perfectly mimics the modern Windows 11 update screen, including the "elastic" movement.
-   **True Fullscreen:** The simulation launches into fullscreen mode, hiding all browser UI.
-   **Total Input Lockdown:**
    -   **Mouse Disabled:** The mouse cursor is hidden, and all mouse actions (clicks, right-clicks, scroll) are blocked.
    -   **Pointer Lock:** The Pointer Lock API is used to lock the mouse pointer to the center of the screen, preventing it from triggering browser UI like the fullscreen exit button.
    -   **Keyboard Disabled:** All keyboard input is blocked, except for the user-defined secret exit combination.

## 🚀 How to Use

1.  **Install Dependencies:**
    ```bash
    npm install
    ```
2.  **Run the Server:**
    ```bash
    node server.js
    ```
3.  Open your browser and navigate to `http://localhost:3000`.

## 🎯 For the Ultimate Prank

For the most convincing experience, follow the guide on the landing page to:
1.  **Disable System Keys:** Use a tool like **SharpKeys** to temporarily turn off `Esc`, `Alt`, `Tab`, and the `Windows Key`.
2.  **Disable Touchpad Gestures:** Set three-finger and four-finger touchpad gestures to "Nothing" in your Windows settings.

This will make the simulation nearly impossible to exit without the secret key combination.

## 🛠️ Tech Stack
-   **Backend:** Node.js, Express
-   **Frontend:** HTML5, CSS3 (with advanced animations), JavaScript (ES6) 