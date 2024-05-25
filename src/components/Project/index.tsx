import { forwardRef } from 'react';
import style from '@/src/components/Project/style';
import ProjectItem from '@/src/components/ProjectItem';

const PROJECT_ITEMS = [
  {
    name: 'NKUST LINE Bot',
    imageUrl: '/images/nkust_line_bot.jpg',
    url: 'https://github.com/stu01509/Node.js-NKUST-Line-Bot',
  },
  {
    name: 'Memory Card Game',
    imageUrl: '/images/memory_card_game.jpg',
    url: 'https://www.cliffsu.me/Front-end-Side-Project/Memory%20Card%20Game/',
  },
  {
    name: 'Fun Kaohsiung',
    imageUrl: '/images/fun_kaohsiung.jpg',
    url: 'https://khfun.azurewebsites.net/',
  },
  {
    name: 'Raspberry Pi IoT',
    imageUrl: '/images/raspberry_pi_iot.png',
    url: 'https://github.com/stu01509/Node.js-Raspberry-Pi-GPIO-DHT11',
  },
  {
    name: 'Facebook Anonymous Post System',
    imageUrl: '/images/facebook_anonymous_post.jpg',
    url: 'https://github.com/stu01509/Node.js-Facebook-Anonymous-Post',
  },
  {
    name: 'Mobile Payment Easy PAY!',
    imageUrl: '/images/mobile_payment.jpg',
  },
  {
    name: '2018 Kaohsiung Traffic Education Website - 1',
    imageUrl: '/images/107_1_traffic_web.jpg',
    url: '',
  },
  {
    name: '2018 Kaohsiung Traffic Education Website - 2',
    imageUrl: '/images/107_2_traffic_web.jpg',
    url: '',
  },
  {
    name: 'Earthquake Notify System',
    imageUrl: '/images/earthquake_come.jpg',
    url: 'https://github.com/stu01509/Node.js-Eearthquake_Crawler_Post',
  },
  {
    name: '2017 Kaohsiung Traffic Education Website',
    imageUrl: '/images/106_traffic_web.jpg',
    url: '',
  },
];

const Project = forwardRef<HTMLDivElement>((props, ref) => {
  return (
    <div ref={ref} css={style.projectContainer}>
      <div css={style.contentContainer}>
        <h1 css={style.title}>Projects</h1>
        <hr />
        <div css={style.itemContainer}>
          {PROJECT_ITEMS.map((item) => {
            return (
              <ProjectItem
                key={item.name}
                name={item.name}
                url={item.url}
                imageUrl={item.imageUrl}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
});

Project.displayName = 'Project';
export default Project;
