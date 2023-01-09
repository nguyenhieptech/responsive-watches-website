import Head from 'next/head';
import { DemoComponent } from 'components';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Responsive Watches Website</title>
        <meta name="description" content="Responsive Watches Website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <DemoComponent />
    </div>
  );
}
