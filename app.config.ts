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
      title: 'Unicourse Docs',
      logo: {
        src: '/logo-unicourse-light-1.png',
        alt: 'Unicourse Logo',
      },
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
    assistant: {
      // Show the floating input on documentation pages
      floatingInput: true,

      // Show the "Explain with AI" button in the sidebar
      explainWithAi: true,

      // FAQ questions to display when chat is empty
      faqQuestions: [
        'How do I create a new course?',
        'How do I update my billing information?',
        'How do I view my learners\' course progress?'
      ],

      // Keyboard shortcuts
      shortcuts: {
        focusInput: 'meta_i'
      },

      // Custom icons
      icons: {
        trigger: 'i-lucide-sparkles',
        explain: 'i-lucide-brain'
      }
  },
  }
})