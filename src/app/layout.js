import './globals.css';

export const metadata = {
  title: 'Eye Edit',
  description: 'Professional Editing and Proofreading Service',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
