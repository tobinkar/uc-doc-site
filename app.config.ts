export default defineAppConfig({
  docus: {
    title: 'Unicourse Documentation Site',
    description: 'Master your learning journey with comprehensive guides, course creation tools, and learner management resources.',
    image: '/og-image.png',
    socials: {
      twitter: '',
      github: '',
    },
    header: {
      logo: true,
      showLinkIcon: true,
      exclude: [],
    },
    footer: {
      credits: {
        icon: '',
        text: 'Made with Docus',
        href: 'https://docus.dev',
      },
    },
    aside: {
      level: 0,
      exclude: [],
    },
    main: {
      padded: true,
      maxWidth: 900,
    },
    github: {
      dir: 'content',
      branch: 'main',
      repo: 'uc-doc-site',
      owner: 'tobinkar',
      edit: true,
    },
  },
})