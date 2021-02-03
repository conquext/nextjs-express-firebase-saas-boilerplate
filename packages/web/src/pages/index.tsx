import Head from 'next/head';

// Components
import { Card, Button } from 'antd';
import { GoogleOutlined } from '@ant-design/icons';

// Styles
import styles from 'styles/pages/home.module.scss';

const Home = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>SaaS boilerplate</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1>Sign in to SaaS</h1>
        <Card className={styles.card}>
          <Button
            className={styles.googleSignIn}
            type="primary"
            size="large"
            icon={<GoogleOutlined />}
            onClick={() => null}
          >
            Sign in with Google
          </Button>
        </Card>
      </main>
    </div>
  );
};

export default Home;
