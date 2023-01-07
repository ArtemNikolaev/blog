import React from 'react';
import Layout from '../components/Layout';
import Link from 'next/link';

export const About = (): JSX.Element => {
  return (
    <Layout
      customMeta={{
        title: 'Artem Nikolaev',
      }}
    >
      <div>
        <h2>База</h2>
        <ul className='list-none'>
          <li className='list-item'>
            <a href='https://telegra.ph/Tri-stolpa-resheniya-lyuboj-zadachi-11-06'>
              Три столпа решения любой задачи
            </a>
          </li>
          <li>
            <Link href="/posts/js-equality">
             Операторы = == ===
            </Link>
          </li>
        </ul>
      </div>

      <div>
        <h2>Callback Pattern</h2>
        <ul className='list-none'>
          <li className='list-item'>
            <a href='https://telegra.ph/Callback-Pattern-10-16'>
              Часть 1
            </a>
          </li>
          <li className='list-item'>
            <a href='https://telegra.ph/Callback-Pattern-22-10-18'>
              Часть 2
            </a>
          </li>
        </ul>
      </div>

      <div>
        <h2>Promises</h2>
        <ul className='list-none'>
          <li className='list-item'>
            <a href='https://telegra.ph/Promise-10-21'>
              Часть 1
            </a>
          </li>
          <li className='list-item'>
            <a href='https://telegra.ph/Kak-rabotayut-obeshchaniya-10-24'>
              Часть 2
            </a>
          </li>
          <li className='list-item'>
            <a href='https://telegra.ph/Kak-ispolzuyut-obeshchaniya-33-10-28'>
              Часть 3
            </a>
          </li>
        </ul>
      </div>

      <div>
        <h2><a href='https://telegra.ph/wip-async--await-11-01'>Async / Await</a></h2>
      </div>

      <div>
        <h2>Коллекции и Множества в JS</h2>
        <ul className='list-none'>
          <li className='list-item'>
            <a href='https://telegra.ph/Kollekcii-i-mnozhestva-v-Javascript-11-22'>
              Часть 1
            </a>
          </li>
          <li className='list-item'>
            <a href='https://telegra.ph/Kollekcii-i-mnozhestva-v-Javascript-24-12-05'>
              Часть 2
            </a>
          </li>
          <li className='list-item'>
            <a href='https://telegra.ph/Kollekcii-i-mnozhestva-v-Javascript-14-12-05'>
              Часть 3
            </a>
          </li>
        </ul>
      </div>

      <div>
        <h2>Итераторы и Генераторы в JS</h2>
        <ul className='list-none'>
          <li>
            <Link href="/posts/js-iterators">
              Итераторы
            </Link>
          </li>
          <li>
            <Link href="/posts/js-generators">
              Генераторы
            </Link>
          </li>
        </ul>
      </div>

    </Layout>
  );
};

export default About;
