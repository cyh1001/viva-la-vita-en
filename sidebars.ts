import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
  tutorialSidebar: [
    'intro',
    {
      type: 'category',
      label: 'Getting Started',
      items: [
        'getting-started/introduction',
        'getting-started/basics',
      ],
    },
    {
      type: 'category',
      label: 'General',
      items: [
        'general',
        'general/theory',
        'general/basics',
        'general/levels', 
        'general/development',
        'general/prolongation',
        'general/play'
      ],
    },
    {
      type: 'category',
      label: 'Nipple',
      items: [
        'nipple',
        {
          type: 'category',
          label: 'Principle',
          items: [
            'nipple/principle',
            'nipple/principle/myths',
          ],
        },
        {
          type: 'category', 
          label: 'Development',
          items: [
            'nipple/development',
            'nipple/development/risk',
            'nipple/development/hand',
            'nipple/development/acupuncture',
            'nipple/development/compensation',
            'nipple/development/acceleration',
            'nipple/development/level',
          ],
        },
        {
          type: 'category',
          label: 'Masturbation',
          items: [
            'nipple/masturbation',
            'nipple/masturbation/preparation',
            'nipple/masturbation/technique',
            'nipple/masturbation/pleasure',
            'nipple/masturbation/orgasm',
            'nipple/masturbation/toy',
          ],
        },
        {
          type: 'category',
          label: 'Appendix',
          items: [
            'nipple/appendix',
            'nipple/appendix/faq',
          ],
        },
      ],
    },
    {
      type: 'category',
      label: 'Penis',
      items: [
        'penis',
        'penis/basic',
        'penis/development-techniques',
        'penis/prostate',
        'penis/testicle',
        'penis/masturbator',
        'penis/vagina',
      ],
    },
    {
      type: 'category',
      label: 'Squirting',
      items: [
        'squirting',
        'squirting/definition',
        'squirting/preparation',
        'squirting/techniques',
        'squirting/connection',
        'squirting/masturbation-orgasm',
        'squirting/toys',
        'squirting/conclusion',
      ],
    },
    {
      type: 'category',
      label: 'Prostate',
      items: [
        'prostate',
        {
          type: 'category',
          label: 'Anal',
          items: [
            'prostate/anal',
            'prostate/anal/step',
          ],
        },
        'prostate/anal-development',
        'prostate/aneros-overview',
        'prostate/appendix',
      ],
    },
    {
      type: 'category',
      label: 'Advanced',
      items: [
        'advanced/concepts',
        'advanced/techniques',
      ],
    },
    {
      type: 'category',
      label: 'Hypnosis',
      items: [
        'hypnosis',
        'hypnosis/basics',
        'hypnosis/theory',
        'hypnosis/audio',
        'hypnosis/audio-usage',
        'hypnosis/resource',
        'hypnosis/resources',
      ],
    },
  ],
};

export default sidebars;