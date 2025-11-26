export function StructuredData() {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    name: 'UNEXT.ONE',
    description: 'Юридическая поддержка для стартапов, инвесторов и корпораций',
    url: 'https://unext.one',
    logo: 'https://unext.one/web-app-manifest-512x512.png',
    email: 'info@unext.one',
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'RU',
    },
    sameAs: [],
    serviceType: [
      'Юридические услуги',
      'Корпоративное право',
      'M&A сделки',
      'Инвестиционные сделки'
    ],
    areaServed: {
      '@type': 'Country',
      name: 'Россия',
    },
    priceRange: '$$',
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}
