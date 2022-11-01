# Capacitor v3 External Server Test
This application was created to demonstrate a working v3 Capacitor application that renders an app being served up locally on a developer's computer instead of served from the bundled files of the installed app itself. It was specifically built to show a working configuration utilizing a native plugin (`@capacitor/storage` in this case).

## Setup
1. Using a static file server of your choice (I use [serve](https://www.npmjs.com/package/serve)), serve the `www` folder at `http://localhost:3000`.
2. Ensure the android emulator has access to the localhost on your computer by running:
   ```bash
   adb reverse tcp:3000 tcp:3000
   ```
3. Using the Capacitor CLI, deploy and launch the app in the emulator (I tested using a Pixel 4 w/Play API 31).
4. Open Chrome and navigate to `chrome://inspect` and inspect the emulator to view console output of the running app
5. In the emulator, navigate to Tab 2 which will result in the `@capacitor/storage` plugin generating console output in the Chrome dev tools from step 4.