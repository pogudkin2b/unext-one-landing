import { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'UNEXT.ONE — юридический партнёр для роста бизнеса',
    short_name: 'UNEXT.ONE',
    description: 'Юридическая поддержка для стартапов, инвесторов, корпораций и Web3-команд',
    start_url: '/',
    display: 'standalone',
    background_color: '#0a0f1a',
    theme_color: '#00d9ff',
    icons: [
      {
        src: '/web-app-manifest-192x192.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        src: '/web-app-manifest-512x512.png',
        sizes: '512x512',
        type: 'image/png',
      },
    ],
  };
}
