import React from 'react';
import Layout from '../components/Layout';
import Image from 'next/image';

export const About = (): JSX.Element => {
  return (
    <Layout
      customMeta={{
        title: 'Artem Nikolaev',
      }}
    >
      <div className='flex flex-row justify-around'>
        <div className='flex flex-col justify-center content-center'>
          <h1>Артём Николаев</h1>
          <h2>Senior Web Developer</h2>
          <br/>
          <div className='flex flex-row justify-around'>
            <a target='_blank' href='https://www.linkedin.com/in/artem-nikolaev-b194b078/'>
              <Image
                alt={`Artem Nikolaev LinkedIn`}
                src={`/images/linkedin.png`}
                width={50}
                height={50}
                priority
              />
            </a>
            <a target='_blank' href='https://t.me/ArtemNikolaev'>
              <Image
                alt={`Artem Nikolaev Telegram`}
                src={`/images/Telegram_logo.png`}
                width={50}
                height={50}
                priority
              />
            </a>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>
        <Image
          alt={`Artem Nikolaev`}
          src={`/images/avatar-square-small.png`}
          width={500}
          height={500}
          priority
        />
      </div>
    </Layout>
  );
};

export default About;
