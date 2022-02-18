import s from './IntroSection.module.scss';
import avatar from '../../../assets/avatar.svg';
import { AiFillGithub } from 'react-icons/ai';
import {
  FaFacebookSquare,
  FaLinkedinIn,
  FaTelegramPlane,
} from 'react-icons/fa';
import Tilt from 'react-parallax-tilt';
import { LazyLoadImage } from 'react-lazy-load-image-component';

const IntroSection = () => {
  return (
    <section className={s.content}>
      <div className={s.introduction}>
        <div className={s.introductionText}>
          <h1 className={s.title}>
            LET ME <span className={s.purple}> INTRODUCE </span>{' '}
            MYSELF
          </h1>

          <div className={s.description}>
            <p>
            I am currently in 3rd year of my Bachelor of Technology<br/> in Computer Science and
engineering from CEC Mohali .
            </p>

            <p>
              
I have been <span className={s.purple}>tinkering</span> with <span className={s.purple}>code</span> since my high school . 
I love working with <br/>new <span className={s.purple}>technologies</span> and contributing in a <span className={s.purple}>team</span>. 
I actively participate in <span className={s.purple}>hackathons</span> too.
            </p>

            <p>
            Well, my favourite qoute is
              <i>
                <b className={s.purple}> Unless you try to do something beyond <br/>what you have already mastered, you will never grow</b>
              </i>{' '}
              which I always try <br/>to inculcate in myself.
            </p>
          </div>
        </div>

        <Tilt trackOnWindow={true}>
          <LazyLoadImage alt="avatar" effect="blur" src={avatar} style={{width:400}}/>
        </Tilt>
      </div>

      <div className={s.introSocial}>
        <h1>FIND ME ON</h1>
        <p>
          Feel free to <span className={s.purple}>connect </span>with
          me
        </p>
        <ul className={s.socialLinks}>
          <li className={s.socialLink}>
            <a
              href="https://github.com/emily876"
              target="_blank"
              rel="noreferrer"
              className={s.socialIcon}
            >
              <AiFillGithub />
            </a>
          </li>
          <li className={s.socialLink}>
            <a
              href="https://www.facebook.com/devsi.singh.10"
              target="_blank"
              rel="noreferrer"
              className={s.socialIcon}
            >
              <FaFacebookSquare />
            </a>
          </li>
          <li className={s.socialLink}>
            <a
              href="https://t.me/spark28"
              target="_blank"
              rel="noreferrer"
              className={s.socialIcon}
            >
              <FaTelegramPlane />
            </a>
          </li>
          <li className={s.socialLink}>
            <a
              href="https://www.linkedin.com/in/devsi-singh"
              target="_blank"
              rel="noreferrer"
              className={s.socialIcon}
            >
              <FaLinkedinIn />
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default IntroSection;
