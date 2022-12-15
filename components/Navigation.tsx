import Link from 'next/link';
import React from 'react';
import Image from 'next/image';

const Navigation = (): JSX.Element => {
  return (
    <nav>
      <Link href="/">
        <a className="text-gray-900 dark:text-white pr-6 py-4">Блог</a>
      </Link>
      <Link href="/articles">
        <a className="text-gray-900 dark:text-white px-6 py-4">Статьи</a>
      </Link>
      <Link href="/about">
        <a className="text-gray-900 dark:text-white px-6 py-4">Обо мне</a>
      </Link>
      <a target='_blank' href='https://t.me/das_programm'>
        <Image
          alt={`Artem Nikolaev Telegram`}
          src={`/images/Telegram_logo.png`}
          width={50}
          height={50}
          priority
        />
      </a>
    </nav>
  );
};

export default Navigation;
