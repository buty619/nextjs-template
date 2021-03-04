import React from 'react';

// Components
import Layout from '../components/Layout'
import Banner from '../components/Banner'
import Form from '../components/Form'
import People from '../components/People'
import OurServices from '../components/OurServices'


const Home: React.FC = () => (
  <Layout>
    <Banner />
    <Form />
    <People />
    <OurServices />
    <div>Test</div>
  </Layout>
);

export default Home;
