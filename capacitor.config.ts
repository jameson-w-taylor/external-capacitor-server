import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'io.ionic.starter',
  appName: 'external-capacitor-server',
  webDir: 'www',
  bundledWebRuntime: false,
  server: {
    url: 'http://localhost:3000',
    allowNavigation: ['*']
  }
};

export default config;
