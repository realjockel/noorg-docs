import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Editor Agnostic',
    size: 'large',
    emoji: '📝',
    description: (
      <>
        Use your favorite editor - whether it's VS Code, Vim, Emacs, or Obsidian. 
        Noorg works alongside your existing tools, not against them.
      </>
    ),
  },
  {
    title: 'Stop Organizing, Start Capturing',
    size: 'small',
    emoji: '🧠',
    description: (
      <>
        Break free from rigid organization systems. Focus on capturing your thoughts
        while Noorg handles the metadata and connections automatically.
      </>
    ),
  },
  {
    title: 'Extensible Runtime',
    size: 'large',
    emoji: '🔧',
    description: (
      <>
        Extend functionality using Python, Lua, or Rust. Create custom observers,
        add automation, and build your perfect note-taking system.
      </>
    ),
  },
  {
    title: 'Offline First',
    size: 'small',
    emoji: '🔒',
    description: (
      <>
        Your notes stay on your machine. No cloud dependencies, no subscription fees,
        complete privacy and control over your data.
      </>
    ),
  },
  {
    title: 'Dynamic Views',
    size: 'large',
    emoji: '📊',
    description: (
      <>
        Create powerful SQL-based views of your notes. Filter, sort, and visualize
        your knowledge base with custom queries and kanban boards.
      </>
    ),
  },
  {
    title: 'Automated Processing',
    size: 'small',
    emoji: '⚡',
    description: (
      <>
        Let observers handle the heavy lifting. Automatic TOC generation, tag indexing,
        time tracking, and content metrics - all without manual intervention.
      </>
    ),
  },
  {
    title: 'Community Driven',
    size: 'full',
    emoji: '🌟',
    description: (
      <>
        Open source and built for the community. Share observers, contribute features,
        and help shape the future of note-taking.
      </>
    ),
  },
];

function Feature({emoji, title, description, size}) {
  return (
    <div className={clsx(
      'col',
      {
        'col--6': size === 'large',
        'col--6': size === 'small',
        'col--12': size === 'full',
      },
      styles.feature,
      styles[`feature${size}`]
    )}>
      <div className="text--center">
        <span className={clsx(styles.featureEmoji, styles[`featureEmoji${size}`])}>{emoji}</span>
      </div>
      <div className={clsx("text--center padding-horiz--md", styles[`featureContent${size}`])}>
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className={clsx('container', styles.featureContainer)}>
        <div className={clsx('row', styles.featureRow)}>
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
