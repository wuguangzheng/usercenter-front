import { GithubOutlined } from '@ant-design/icons';
import { DefaultFooter } from '@ant-design/pro-layout';

const Footer: React.FC = () => {
  const defaultMessage = '秋阳出品';
  const currentYear = new Date().getFullYear();
  return (
    <DefaultFooter
      copyright={`${currentYear} ${defaultMessage}`}
      links={[
        {
          key: 'csdn',
          title: '有事找谁埃斯弟嗯',
          href: 'https://csdn.net',
          blankTarget: true,
        },
        {
          key: 'baidu',
          title: '再不行找百度',
          href: 'https://www.baidu.com',
          blankTarget: true,
        },
        {
          key: 'github',
          title:<> <GithubOutlined /> GitHub目前还是真神! </>,
          href: 'https://github.com',
          blankTarget: true,
        },

      ]}
    />
  );
};

export default Footer;
