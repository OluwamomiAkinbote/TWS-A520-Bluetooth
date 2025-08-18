import './globals.css';
import FloatingContactWidget from '@/components/FloatingContactWidget';

export const metadata = {
  title: {
    default: 'TWS-A520 | Touch Control Bluetooth 5.3 Earphones with Mic',
    template: '%s | TWS-A520 - Premium Wireless Earbuds',
  },
  description:
    'Unlock the rhythm of your life with the A520 Earphone with Microphone! HiFi Stereo Waterproof TWS with Touch Control, Bluetooth 5.3, and crystal-clear sound.',
  keywords: [
    'TWS-A520',
    'Bluetooth 5.3 earphones',
    'wireless earbuds with mic',
    'HiFi stereo earphones',
    'waterproof earbuds',
    'touch control earphones',
    'sports earphones',
    'gym earphones',
  ],
  authors: [{ name: 'Emerald Store', url: 'https://www.emeraldstore.com' }],
  metadataBase: new URL('https://www.emeraldstore.com'),
  openGraph: {
    title: 'TWS-A520 | Premium Touch Control Bluetooth Earphones',
    description:
      'Dive into immersive sound with TWS-A520 HiFi Stereo Waterproof Earphones. Perfect for workouts, travel, and everyday life.',
    url: 'https://www.emeraldstore.com/',
    siteName: 'Emerald Store',
    images: [
      {
        url: 'https://boltzmann.s3.us-east-1.amazonaws.com/Abstract/free-delivery.jpg',
        width: 1200,
        height: 630,
        alt: 'TWS-A520 Bluetooth 5.3 Earphones',
      },
    ],
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'TWS-A520 Bluetooth 5.3 Earphones',
    site: '@emeraldstore',
    description:
      'Enjoy HiFi Stereo sound, waterproof design, and touch controls with TWS-A520 wireless earbuds.',
    images: [
      'https://boltzmann.s3.us-east-1.amazonaws.com/Abstract/free-delivery.jpg',
    ],
  },
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        {/* Meta Pixel Code */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              !function(f,b,e,v,n,t,s)
              {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
              n.callMethod.apply(n,arguments):n.queue.push(arguments)};
              if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
              n.queue=[];t=b.createElement(e);t.async=!0;
              t.src=v;s=b.getElementsByTagName(e)[0];
              s.parentNode.insertBefore(t,s)}(window, document,'script',
              'https://connect.facebook.net/en_US/fbevents.js');
              fbq('init', '1176033614217437');
              fbq('track', 'PageView');
            `,
          }}
        />
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: 'none' }}
            src="https://www.facebook.com/tr?id=1176033614217437&ev=PageView&noscript=1"
            alt="facebook pixel"
          />
        </noscript>
        {/* End Meta Pixel Code */}
      </head>
      <body className="font-poppins min-h-screen flex flex-col bg-gradient-to-r from-[#000000] via-[#0a0a0a] to-[#000000]">
        <main className="flex-grow">
          <FloatingContactWidget />
          {children}
        </main>
      </body>
    </html>
  );
}
