import { CapacitorConfig } from "@capacitor/cli";

const config: CapacitorConfig = {
  appId: "com.example.app",
  appName: "myapp",
  webDir: "out",
  bundledWebRuntime: false,
  server: {
    url: "http://192.168.0.108:3000",
    cleartext: true,
  },
};

export default config;
