import Head from 'next/head'

export default ({
  title = 'Code for Impact',
  description = 'Learn how to maximise your impact, and create an awesome project, in this 2-day hackathon.',
  image = 'https://image-store-5tn.pages.dev/public/code-for-impact-logo.png',
  url = 'https://codeforimpact.dev'
}) => (
  <Head>
    <title>{title}</title>
    <meta property="og:title" content={title} />
    <meta name="twitter:title" content={title} />
    <meta name="og:url" content={url} />
    <meta property="og:type" content="website" />
    <meta property="og:site_name" content="Code for Impact" />
    <meta name="description" content={description} />
    <meta property="og:description" content={description} />
    <meta name="twitter:description" content={description} />
    <meta property="og:image" content={image} />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:image" content={image} />
    {/* <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'Organization',
          name: 'codeforimpact',
          url: 'https://codeforimpact.dev',
          logo: 'https://image-store-5tn.pages.dev/public/code-for-impact-logo.png',
          contactPoint: [
            {
              '@type': 'ContactPoint',
              email: 'felix@codeforimpact.dev',
              contactType: 'customer support',
              url: 'https://codeforimpact.dev'
            }
          ]
        })
      }}
    />
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          '@context': 'http://schema.org/',
          '@type': 'Event',
          name: 'Code for Impact Virtual Hackathon',
          startDate: '2024-09-28',
          endDate: '2024-09-29',
          description:
            'Register today for 12 hours of coding, fun, free food, and prizes. AngelHacks will be on October 26, 2019 and open to all middle and high school students.',
          isAccessibleForFree: true,
          url: 'https://codeforimpact.dev',
          image: 'https://angelhacks.org/public/logo-inverted.png',
          location: {
            '@type': 'Place',
            name: 'Online event',
          },
          sponsor: {
            '@type': 'Organization',
            name: 'Hack Club',
            url: 'https://hackclub.com'
          },
          offers: {
            '@type': 'Offer',
            name: 'Free Admission',
            url: 'https://codeforimpact.dev',
            price: '0',
            priceCurrency: 'USD',
            availability: 'https://schema.org/InStock',
            validFrom: '2024-05-20',
            validThrough: '2019-09-27'
          },
          performer: {
            '@type': 'PerformingGroup',
            name: 'Code for Impact team + sponsors'
          }
        })
      }}
    /> */}
  </Head>
)
