export const metadata = {
  title: 'Taxi Hub Tours | Premium Sri Lanka Transfers',
  description: 'Luxury airport transfers and private tours across Sri Lanka.',
};

import './globals.css';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
