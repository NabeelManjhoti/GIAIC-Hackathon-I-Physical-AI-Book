import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import styles from './Home.module.css';

function HeroSection() {
  return (
    <section
      className={styles.heroBanner}
      style={{
        background: 'linear-gradient(135deg, var(--cyber-black) 0%, var(--dark-grey) 100%)',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        overflow: 'hidden'
      }}
    >
      {/* Background grid pattern for cyberpunk feel */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundImage: `
            linear-gradient(rgba(0, 243, 255, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0, 243, 255, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px',
          zIndex: 0
        }}
      />

      <div className={styles.heroContent} style={{ zIndex: 1 }}>
        <div className={styles.heroTextCentered}>
          <h1
            className={styles.heroTitle}
            style={{
              color: 'var(--neon-cyan)',
              textShadow: `
                0 0 10px var(--neon-cyan),
                0 0 20px var(--neon-cyan),
                0 0 30px var(--neon-cyan)
              `,
              fontFamily: `'Orbitron', 'Roboto Mono', monospace`,
              fontSize: '3.5rem',
              fontWeight: 'bold',
              marginBottom: '1rem'
            }}
          >
            The Age of Physical AI
          </h1>
          <p
            className={styles.heroSubtitle}
            style={{
              color: 'var(--light-grey)',
              fontSize: '1.5rem',
              marginBottom: '2rem',
              textShadow: '0 0 5px rgba(224, 224, 224, 0.3)',
              fontFamily: `'Roboto Mono', monospace`
            }}
          >
            Master ROS 2, Gazebo, and Isaac Sim.
          </p>
          <div className={styles.buttons}>
            <Link
              className={clsx(
                styles.primaryButton,
                'button button--lg'
              )}
              to="/author-intro/"
              style={{
                background: 'transparent',
                border: '2px solid var(--neon-cyan)',
                color: 'var(--neon-cyan)',
                padding: '1rem 2rem',
                fontSize: '1.2rem',
                fontWeight: 'bold',
                borderRadius: '4px',
                cursor: 'pointer',
                textDecoration: 'none',
                transition: 'all 0.3s ease',
                position: 'relative',
                overflow: 'hidden',
                boxShadow: '0 0 10px var(--neon-cyan)',
                fontFamily: `'Roboto Mono', monospace`
              }}
              onMouseEnter={(e) => {
                e.target.style.boxShadow = '0 0 20px var(--neon-cyan)';
                e.target.style.background = 'rgba(0, 243, 255, 0.1)';
              }}
              onMouseLeave={(e) => {
                e.target.style.boxShadow = '0 0 10px var(--neon-cyan)';
                e.target.style.background = 'transparent';
              }}
            >
              Enter the Simulation
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

function FeatureCard({ title, description, iconUrl }) {
  return (
    <div
      className="col col--4"
      style={{
        padding: '1rem',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}
    >
      <div
        style={{
          background: 'var(--glass-bg)',
          backdropFilter: 'blur(10px)',
          border: '1px solid var(--glass-border)',
          borderRadius: '12px',
          padding: '2rem',
          width: '100%',
          minHeight: '250px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          textAlign: 'center',
          boxShadow: 'var(--glass-glow), 0 4px 20px rgba(0, 0, 0, 0.3)',
          transition: 'all 0.3s ease',
          position: 'relative',
          overflow: 'hidden'
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.boxShadow = '0 0 25px rgba(0, 243, 255, 0.8), 0 4px 20px rgba(0, 0, 0, 0.3)';
          e.currentTarget.style.backdropFilter = 'blur(15px)';
          e.currentTarget.style.transform = 'scale(1.02)';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.boxShadow = 'var(--glass-glow), 0 4px 20px rgba(0, 0, 0, 0.3)';
          e.currentTarget.style.backdropFilter = 'blur(10px)';
          e.currentTarget.style.transform = 'scale(1)';
        }}
      >
        <div style={{
          width: '80px',
          height: '80px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          marginBottom: '1rem'
        }}>
          <img
            src={iconUrl}
            alt={title}
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'contain',
              filter: 'drop-shadow(0 0 5px var(--neon-cyan))'
            }}
          />
        </div>
        <h3
          style={{
            color: 'var(--neon-cyan)',
            fontSize: '1.5rem',
            fontWeight: 'bold',
            marginBottom: '0.5rem',
            fontFamily: `'Orbitron', 'Roboto Mono', monospace`,
            textShadow: '0 0 5px var(--neon-cyan)'
          }}
        >
          {title}
        </h3>
        <p
          style={{
            color: 'var(--light-grey)',
            fontSize: '1rem',
            margin: 0,
            fontFamily: `'Roboto Mono', monospace`
          }}
        >
          {description}
        </p>
      </div>
    </div>
  );
}

function FeatureGrid() {
  const features = [
    {
      title: 'ROS 2',
      description: 'Robot Operating System fundamentals for building intelligent robotic applications',
      iconUrl: 'https://placehold.co/80x80/121212/00f3ff?text=ROS'
    },
    {
      title: 'Simulation',
      description: 'Gazebo and environment simulation for testing and development',
      iconUrl: 'https://placehold.co/80x80/121212/00f3ff?text=SIM'
    },
    {
      title: 'RL',
      description: 'Reinforcement Learning applications for autonomous robot behavior',
      iconUrl: 'https://placehold.co/80x80/121212/00f3ff?text=RL'
    }
  ];

  return (
    <section
      style={{
        padding: '4rem 0',
        background: 'var(--dark-grey)',
        color: 'var(--light-grey)'
      }}
    >
      <div className="container">
        <div className="row">
          {features.map((feature, idx) => (
            <FeatureCard key={idx} {...feature} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default function Home() {
  const { siteConfig } = useDocusaurusContext();

  return (
    <Layout
      title={`${siteConfig.title}`}
      description="Physical AI & Humanoid Robotics Textbook">
      <HeroSection />
      <FeatureGrid />
    </Layout>
  );
}