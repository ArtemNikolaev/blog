import Link from 'next/link';

const DockerGetStartedContentList = (): JSX.Element => {
  return (
    <ol>
      <li>
        <Link href="/posts/tr-docker-get-started-01">
          <a className="text-gray-900 dark:text-white pr-6 py-4">Обзор</a>
        </Link>
      </li>
      <li>
        <Link href="/posts/tr-docker-get-started-02">
          <a className="text-gray-900 dark:text-white pr-6 py-4">Контейнеризация приложения</a>
        </Link>
      </li>
      <li>
        <Link href="/posts/tr-docker-get-started-03">
          <a className="text-gray-900 dark:text-white pr-6 py-4">Обновляем приложение</a>
        </Link>
      </li>
      <li>
        <Link href="/posts/tr-docker-get-started-04">
          <a className="text-gray-900 dark:text-white pr-6 py-4">Делимся приложением</a>
        </Link>
      </li>
      <li>
        <Link href="/posts/tr-docker-get-started-05">
          <a className="text-gray-900 dark:text-white pr-6 py-4">Сохраняем состояние БД</a>
        </Link>
      </li>
      <li>
        <Link href="/posts/tr-docker-get-started-06">
          <a className="text-gray-900 dark:text-white pr-6 py-4">Использование bind mounts</a>
        </Link>
      </li>
      <li>
        <Link href="/posts/tr-docker-get-started-07">
          <a className="text-gray-900 dark:text-white pr-6 py-4">Мультиконтейнерное приложение</a>
        </Link>
      </li>
      <li>
        <Link href="/posts/tr-docker-get-started-08">
          <a className="text-gray-900 dark:text-white pr-6 py-4">Использование docker compose</a>
        </Link>
      </li>
      <li>
        <Link href="/posts/tr-docker-get-started-09">
          <a className="text-gray-900 dark:text-white pr-6 py-4">Лучшие правктики создания представления(image)</a>
        </Link>
      </li>
      <li>
        <Link href="/posts/tr-docker-get-started-10">
          <a className="text-gray-900 dark:text-white pr-6 py-4">Что дальше?</a>
        </Link>
      </li>
    </ol>
  );
};

export default DockerGetStartedContentList;
