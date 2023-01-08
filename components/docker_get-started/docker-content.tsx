import Image from 'next/image';
import DockerGetStartedContentList from './docker-get-started-content-list';

const DockerGetStartedContent = (): JSX.Element => {
  return (
    <div>
      <h2>Начать работу с Docker </h2>
      <Image
        alt={`Bridge`}
        src={`/images/tr-docker-get-started/docker-logo.png`}
        width={601}
        height={431}
        priority
      />
      <DockerGetStartedContentList />
    </div>
  );
};

export default DockerGetStartedContent;
