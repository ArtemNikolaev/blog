import Image from 'next/image';
import DockerGetStartedContentList from './docker-get-started-content-list';

const DockerGetStartedContent = (): JSX.Element => {
  return (
    <div>
      <h2>Как начать работу с Docker ([перевод](https://docs.docker.com/get-started/)</h2>
      <Image
        alt={`Bridge`}
        src={`/images/tr-docker-get-started/docker-logo.png`}
        width={150}
        height={108}
        priority
      />
      <DockerGetStartedContentList />
    </div>
  );
};

export default DockerGetStartedContent;
