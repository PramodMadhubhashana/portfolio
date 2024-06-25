import { Inter } from "next/font/google";
import "./globals.css";
import Footer from "@/components/Footer";
import Header from "@/components/header";
import { ThemeProvider } from "@/components/themeProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: 'Pramod Madhubhashna - Mobile App and Web Developer',
  description: 'Pramod Madhubhashna - Mobile App and Web Developer. Specializing in Flutter, Kotlin, React Native for mobile development and HTML, CSS, PHP, Bootstrap, Tailwind CSS for web development.',
  url: 'https://www.pramodmadhubhashana.com/',
  image: '/assets/logo/meta.png',
  twitterHandle: '@P_madhubhashana',
  linkedinProfile: 'www.linkedin.com/in/pramod-madhubhashana',
};


export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <title>{metadata.title}</title>
      <link rel="icon" href="/assets/logo/Screenshot 2024-06-23 232932.png" />
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="description" content={metadata.description} />
      <meta name="keywords" content="Pramod Madhubhashna, Mobile App Developer, Web Developer, Flutter, Kotlin, React Native, HTML, CSS, PHP, Bootstrap, Tailwind CSS, NIBM" />
      <meta name="author" content="Pramod Madhubhashna" />
      <meta property="og:title" content={metadata.title} />
      <meta property="og:description" content={metadata.description} />
      <meta property="og:image" content={metadata.image} />
      <meta property="og:url" content={metadata.url} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={metadata.title} />
      <meta name="twitter:description" content={metadata.description} />
      <meta name="twitter:image" content={metadata.image} />
      <meta name="twitter:site" content={metadata.twitterHandle} />
      <meta property="linkedin:profile" content={metadata.linkedinProfile} />
      <body className={`${inter.className} min-h-screen flex flex-col`}>
        <ThemeProvider attribute='class' defaultTheme='light'>
          <Header />
          <main className="flex-grow container max-w-[1200px] mx-auto p-4">
            {children}
          </main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
