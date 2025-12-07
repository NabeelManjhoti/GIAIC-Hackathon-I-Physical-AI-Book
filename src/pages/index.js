import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';

import Heading from '@theme/Heading';
import styles from './Home.module.css'; // Updated to use new dark-themed CSS module

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx(styles.heroBanner)}>
      <div className={styles.heroContent}>
        <div className={styles.heroTextCentered}>
          <Heading as="h1" className={styles.heroTitle}>
            Physical AI & Humanoid Robotics Textbook
          </Heading>
          <p className={styles.heroSubtitle}>Master Embodied AI and Humanoid Robotics with ROS 2 and NVIDIA Isaac Sim</p>
          <div className={styles.buttons}>
            <Link
              className={styles.primaryButton}
              to="/author-intro/">
              Meet The Author
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
