import { forwardRef } from 'react';
import style from '@/src/components/Award/style';
import Link from 'next/link';

const AWARD_ITEMS = [
  {
    year: 2014,
    name: 'Microsoft Windows Phone Develop Challenge',
    award: 'Merit Award',
    url: 'https://seminar.ithome.com.tw/live/appcompete/index.html#newbie',
  },
  {
    year: 2015,
    name: 'Microsoft Community Champion',
    award: '6th Place Award',
    url: '',
  },
  {
    year: 2017,
    name: 'Skill Evaluation Center of Workforce Development Agency, Taiwan 47th National Skills Competition - IT Network and Systems Administration	',
    award: 'Honorable Mention',
    url: 'https://ws.wda.gov.tw/Download.ashx?u=LzAwMS9VcGxvYWQvMzE1L1JlbEZpbGUvMTAyNDQvOTg1NjQvMjAxNzEwMzExNDE5MTQwLnBkZg%3D%3D&n=5Y2X5Y2A6Iux6ZuE5qacLnBkZg%3D%3D',
  },
  {
    year: 2017,
    name: '2017 Education Bureau, Kaohsiung City Government Traffic Safety Education Website',
    award: 'First Place Award',
    url: 'http://163.32.129.12/khtraffic/sign_up/result/106C.pdf',
  },
  {
    year: 2017,
    name: 'Chinese Professional Management Association of Hsinchu Charity / Technology / Humanities Creative Competition - App',
    award: 'First Place Award',
    url: 'https://www.cpmah.org.tw/2019/108-web-app-contest/2017-competition/455-20170925.html',
  },
  {
    year: 2017,
    name: 'Chinese Professional Management Association of Hsinchu Charity / Technology / Humanities Creative Competition - Web',
    award: 'First Place Award',
    url: 'https://www.cpmah.org.tw/2019/108-web-app-contest/2017-competition/455-20170925.html',
  },
  {
    year: 2018,
    name: '2018 Education Bureau, Kaohsiung City Government Traffic Safety Education Website',
    award: 'Merit Award',
    url: 'http://163.32.129.12/khtraffic/sign_up/result/107C.pdf',
  },
  {
    year: 2018,
    name: 'Chaoyang University of Technology Information Application Competition',
    award: 'Honorable Mention',
    url: '',
  },
  {
    year: 2018,
    name: 'Facebook x Wanted Taiwan Facebook Messenger Chatbot Competition',
    award: 'First Place Award',
    url: 'https://www.facebook.com/tw.wanted.jobs/posts/2342913062389717',
  },
  {
    year: 2020,
    name: 'ECPAY Information Creative Payment Application Competition',
    award: 'Judges Award',
    url: 'https://www.ecpay.com.tw/Announcement/DetailAnnouncement?nID=3759',
  },
  {
    year: 2020,
    name: 'Google Summer of Code 2020 - OpenEMR',
    award: 'Accepted',
    url: 'https://summerofcode.withgoogle.com/archive/2020/projects/6435955650592768',
  },
  {
    year: 2020,
    name: 'Online Achievement Exhibition of the Ministry of Education Smart Innovation Cross-domain Talent Cultivation Alliance Program and Software and Hardware Creation Competition',
    award: 'Honorable Mention',
    url: 'http://tec.ncut.edu.tw/files/14-1038-61716,r1500-1.php',
  },
];

const Award = forwardRef<HTMLDivElement>((props, ref) => {
  return (
    <div ref={ref} css={style.awardContainer}>
      <div css={style.contentContainer}>
        <h1 css={style.title}>Awards</h1>
        <hr />
        <table>
          <tbody>
            {AWARD_ITEMS.map((item) => {
              return (
                <tr key={item.name} css={style.tr}>
                  <td css={style.td}>{item.year}</td>
                  <td css={style.td}>{item.name}</td>
                  <td css={style.td}>{item.award}</td>
                  <td css={style.td}>
                    {item.url && (
                      <Link href={item.url} target="_blank" css={style.link}>
                        Link
                      </Link>
                    )}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
});

Award.displayName = 'Award';
export default Award;
