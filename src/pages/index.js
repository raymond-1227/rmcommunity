import React from "react";
import clsx from "clsx";
import Layout from "@theme/Layout";
import Link from "@docusaurus/Link";
import Translate, { translate } from "@docusaurus/Translate";
import styles from "./index.module.css";
import HomepageFeatures from "@site/src/components/HomepageFeatures";
//
function HomepageHeader() {
  return (
    <header className={clsx("hero hero--primary", styles.heroBanner)}>
      <div className="container">
        <h1 className="hero__title">
          <Translate id="homepage.Title">r/realme Community</Translate>
        </h1>
        <p className="hero__subtitle">
          <Translate id="homepage.Subtitle">
            The unofficial community for realme users.
          </Translate>
        </p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="https://discord.gg/5D6UPMTdjy"
          >
            <Translate
              id="homepage.linkLabel"
              description="The label for the link to the Discord server"
            >
              Join Server
            </Translate>
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  return (
    <Layout
      title={`Home`}
      description="The unofficial community for realme users."
    >
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
