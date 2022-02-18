import s from './AboutTextCard.module.scss';
import { ImArrowRight2 } from 'react-icons/im';

const AboutTextCard = () => {
  return (
    <div className={s.card}>
      <p style={{ textAlign: 'justify' }}>
        Hi Everyone, I am{' '}
        <span className={s.purple}> Devsi Singh </span>
        from <span className={s.purple}> Ambala, Haryana.</span>
        <br />
        Skilled Frontend and ReactJS Developer.
        <br /> Currently working as a Frontend Developer Intern 
        <br />
        in a Start-up company, based in Delhi.
        <br />
        <br />
        Apart from coding, some other activities that I love to do!
      </p>

      <ul>
        <li className={s.aboutActivity}>
          <ImArrowRight2 /> Content Writing
        </li>
        <li className={s.aboutActivity}>
          <ImArrowRight2 /> Reading novels and articles
        </li>
        <li className={s.aboutActivity}>
          <ImArrowRight2 /> Travelling
        </li>
      </ul>

      <p
        style={{
          color: 'rgb(155 126 172)',
          textAlign: 'center',
          marginTop: '1rem',
        }}
      >
        "Strive to build things that make a difference!"{' '}
      </p>
    </div>
  );
};

export default AboutTextCard;
