import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "SkyViu - AI-Powered Drone Surveillance & Security",
  description: 
    "SkyViu is an advanced AI-powered drone surveillance platform designed for real-time monitoring, security, and threat detection. Utilizing cutting-edge technology, including machine learning, computer vision, and cloud computing, SkyViu enhances situational awareness for businesses, law enforcement, and security agencies. With features such as live video streaming, automated threat alerts, and seamless integration with cloud infrastructure, SkyViu revolutionizes modern surveillance. Experience intelligent, efficient, and scalable aerial monitoring with SkyViu.",
};


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
