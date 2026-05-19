import { Inter } from 'next/font/google';
import './globals.css';
import ThemeProvider from '@/components/ThemeProvider';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });

export const metadata = {
  title: 'FitLife Gym | Beauty & Wellness',
  description: 'FitLife Gym — professional Beauty & Wellness services',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.variable}>
        <ThemeProvider />
        {children}
      </body>
    </html>
  );
}
