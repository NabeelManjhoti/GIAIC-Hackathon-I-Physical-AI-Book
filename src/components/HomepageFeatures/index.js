import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Embodied Intelligence',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default, // Will be replaced with custom content
    description: (
      <>
        Explore the fascinating world of embodied AI where artificial intelligence meets physical interaction.
        Learn how robots can perceive, reason, and act in real-world environments.
      </>
    ),
  },
  {
    title: 'ROS 2 Integration',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default, // Will be replaced with custom content
    description: (
      <>
        Master the Robot Operating System 2 framework for building complex robotic applications
        with advanced communication, navigation, and control systems.
      </>
    ),
  },
  {
    title: 'NVIDIA Isaac Sim',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default, // Will be replaced with custom content
    description: (
      <>
        Leverage NVIDIA's powerful simulation environment for robotics development,
        testing, and training with realistic physics and sensor models.
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <div className={styles.featureSvg} role="img" style={{width: '200px', height: '200px', background: 'linear-gradient(135deg, #00BFFF 0%, #1E3A5F 100%)', borderRadius: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto'}}>
          <span style={{color: 'white', fontSize: '48px', fontWeight: 'bold'}}>{title.charAt(0)}</span>
        </div>
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}