import { Button } from '@chakra-ui/react'
import { Link } from '@saas-ui/react'
import { NextSeoProps } from 'next-seo'
import { FaGithub, FaTwitter } from 'react-icons/fa'
import { FiCheck } from 'react-icons/fi'
import { Logo } from './logo'

const siteConfig = {
  logo: Logo,
  seo: {
    title: 'Astrazen ERP',
    description: 'The ERP for startups',
  } as NextSeoProps,
  termsUrl: '#',
  privacyUrl: '#',
  header: {
    links: [
      {
        id: 'features',
        label: 'Features',
      },
      {
        id: 'pricing',
        label: 'Pricing',
      },
      {
        id: 'faq',
        label: 'FAQ',
      },
      {
        label: 'Login',
        href: '/login',
      },
      {
        label: 'Sign Up',
        href: '/signup',
        variant: 'primary',
      },
    ],
  },
  footer: {
     //   copyright: (
     //  <>
     //   Built by{' '}
     //   <Link href="https://twitter.com/Pagebakers">Eelco Wiersma</Link>
     // </>
    // ),
    links: [
      {
        href: 'mailto:anish.adamane@gmail.com',
        label: 'Contact',
      },
      {
        href: 'https://x.com/AdamaneAnish',
        label: <FaTwitter size="14" />,
      },
      {
        href: 'https://github.com/GeniusPlums',
        label: <FaGithub size="14" />,
      },
    ],
  },
  signup: {
    title: 'Start building with Astrazen ERP',
    features: [
      {
        icon: FiCheck,
        title: 'Accessible',
        description: 'All components strictly follow WAI-ARIA standards.',
      },
      {
        icon: FiCheck,
        title: 'Themable',
        description:
          'Fully customize all components to your brand with theme support and style props.',
      },
      {
        icon: FiCheck,
        title: 'Composable',
        description:
          'Compose components to fit your needs and mix them together to create new ones.',
      },
      {
        icon: FiCheck,
        title: 'Productive',
        description:
          'Designed to reduce boilerplate and fully typed, build your product at speed.',
      },
    ],
  },
}

export default siteConfig
