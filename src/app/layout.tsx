import './globals.css';
import ThemeMui from '@/common/styles/overrides/theme';
import Navbar from '@/common/components/navbar';
import Footer from '@/common/components/footer';
import QueryClientProviders from '@/common/react-query/Provider';
import { ReduxProviders } from '@/common/redux/provider';
import { Metadata } from 'next/dist/lib/metadata/types/metadata-interface';

export const metadata: Metadata = {
  title: 'DT Travel',
  description: 'Traveling!',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <ThemeMui>
        <QueryClientProviders>
          {/* <ReduxProviders> */}
          <body>
            <Navbar />
            <main style={{ marginTop: '-70px' }}>{children}</main>
            <Footer />
          </body>
          {/* </ReduxProviders> */}
        </QueryClientProviders>
      </ThemeMui>
    </html>
  );
}
