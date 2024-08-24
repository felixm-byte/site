import React from 'react'
import styled from '@emotion/styled'
import { Box } from 'rebass'
import { Container } from './blocks'
import { useColorMode } from 'theme-ui'
import theme from './theme'

const data = {
  sponsors: [
    {
      name: 'APEERS',
      link: 'https://apeers.org/',
      image:
        'https://apeers.org/_next/image?url=%2Fimages%2Flogos%2Flogo.png&w=256&q=75'
    },
    {
      name: 'Art of Problem Solving',
      link: 'https://artofproblemsolving.com',
      image:
        'https://s3.amazonaws.com/challengepost/sponsors/logos/000/036/693/highres/AoPS_Main_Logo_%281%29.png'
    },
    {
      name: 'Axure',
      link: 'https://axure.com',
      image:
        'https://s3.amazonaws.com/challengepost/sponsors/logos/000/036/687/highres/Axure_logo_400_1x.png'
    },
    {
      name: 'Flatlogic',
      link: 'https://flatlogic.com',
      image:
        'https://flatlogic.com/assets/icons/footer_logo-de78b41db6b030c9df0959f026e09cba40cf81695fbc7f09c62390ba2cf3ea81.svg'
    },

    {
      name: 'GenXYZ',
      link: 'https://gen.xyz',
      image:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fc/.xyz_logo.svg/1920px-.xyz_logo.svg.png'
    },
    {
      name: 'HowToHackathon',
      link: 'https://howtohackathon.xyz',
      image:
        'https://s3.amazonaws.com/challengepost/sponsors/logos/000/033/865/highres/Howtohacklogo.png'
    },

  ],
  fiscalSponsor: [

    {
      name: 'HCB',
      link: 'https://hackclub.com/bank',
      image:
        'https://image-store-5tn.pages.dev/public/hcb-icon.png'
    },

  ],
  resourcesAdaptedFrom: [
    {
      name: '80,000 Hours',
      link: 'https://80000hours.org/',
      image: 'https://80000hours.org/wp-content/uploads/2018/07/og-logo_0.png'
    }
  ]
}

const Base = styled(Box)`
  display: grid;
  grid-row-gap: ${theme.space[2]}px;
  grid-template-columns: repeat(
    auto-fit,
    minmax(${props => (props.section === 'sponsors' ? 256 : 192)}px, 1fr)
  );
  align-items: center;
  justify-content: center;
  margin-bottom: ${theme.space[4]}px;
  a {
    width: 100%;
  }
  img {
    max-width: 75%;
    max-height: ${props => (props.section === 'sponsors' ? 6 : 4)}rem;
    ${props =>
      props.colorMode === 'dark' && `filter: invert() hue-rotate(180deg);`}
  }
`

const Sponsors = ({ section = 'sponsors', ...props }) => {
  const [colorMode] = useColorMode()
  return (
    <Base colorMode={colorMode} section={section} {...props}>
      {data[section].map(sponsor => (
        <a href={sponsor.link} target="_blank" key={sponsor.name}>
          <img alt={sponsor.name} src={sponsor.image} />
        </a>
      ))}
    </Base>
  )
}

export default Sponsors
