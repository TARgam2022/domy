Open Project

on package.json add a script called static that runs next build & next export
on next export paste:

const nextConfig = {
output: "export",
reactStrictMode: true,
swcMinify: true,
images: {
unoptimized: true,
},
};

run: npm run static, it will make an 'out' folder

then run

**_to setup phone_**

npm i -D @capacitor/cli
npm i @capacitor/core @capacitor/android @capacitor/ios
npx cap init

modify capacitor.config.JSON to capacitor.config.TS then run npm i -D typescript

paste:
import { CapacitorConfig } from "@capacitor/cli";

const config: CapacitorConfig = {
appId: "com.example.app",
appName: "myapp",
webDir: "out",
bundledWebRuntime: false,
server: {
url: "http://192.168.x.xx:3000",
cleartext: true,
},
};

export default config;

change webDir to "out"

open android studio and wait till it build everything and then hit run with the wireless debugging activated
run npm run dev
and run the android app.
youre ready to go

to copy to phone deploy the app with npm run dev run npx cap copy the npx cap sync then open xCode or android studio
