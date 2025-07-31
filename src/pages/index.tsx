import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusarusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';

import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusarusContext();
  return (
    <header className="homepage-hero">
      <div className="container">
        <div className="row">
          <div className="col col--8 col--offset-2">
            <div className="text--center">
              <Heading as="h1">
                Viva La Vida Knowledge Base
              </Heading>
              <p style={{fontSize: '1.3rem', fontStyle: 'italic', color: 'white'}}>
                Explore Beautiful and Novel Sexual Experiences
              </p>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

function KnowledgeCategories() {
  return (
    <section className="category-cards">
      <div className="container">
        <div className="text--center margin-bottom--lg">
          <p style={{fontSize: '1.1rem', color: '#666', marginBottom: '3rem'}}>
            A knowledge sharing project initiated by Viva La Vida creators who love communication and sharing, dedicated to producing, collecting, and disseminating knowledge about sexual development. Our content comes from both our own internet writing and some from third-party internet content.
          </p>
          <p style={{fontSize: '0.9rem', color: '#666', marginBottom: '3rem'}}>
            Unless otherwise noted, content in this repository is released under <Link to="https://creativecommons.org/licenses/by-sa/4.0/" style={{color: '#bd5057'}}>CC BY-SA 4.0</Link> license. We welcome you to freely copy and use our content. For derivative works and improvements, we only require you to maintain appropriate attribution and follow the same license terms to continue sharing your derivative works.
          </p>
          <p style={{fontSize: '0.9rem', color: '#666', marginBottom: '3rem'}}>
            Below are the main categories of knowledge series, please click on each category for detailed content.
          </p>
        </div>
        
        <div className="category-grid">
          <Link to="/docs/getting-started/basics" className="category-card">
            <span>Basics</span>
          </Link>
          <Link to="/docs/specialized/nipple" className="category-card">
            <span>Nipple</span>
          </Link>
          <Link to="/docs/advanced/prostate/introduction" className="category-card">
            <span>Prostate</span>
          </Link>
          <Link to="/docs/hypnosis/introduction" className="category-card">
            <span>Hypnosis</span>
          </Link>
          <Link to="/docs/specialized/penis" className="category-card">
            <span>Penis</span>
          </Link>
          <Link to="/docs/specialized/squirting" className="category-card">
            <span>Squirting</span>
          </Link>
        </div>
      </div>
    </section>
  );
}

export default function Home(): JSX.Element {
  const {siteConfig} = useDocusarusContext();
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="Community-driven educational resources and knowledge sharing platform">
      <HomepageHeader />
      <main>
        <KnowledgeCategories />
      </main>
    </Layout>
  );
}