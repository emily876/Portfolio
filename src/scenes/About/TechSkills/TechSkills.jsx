import s from './TechSkills.module.scss';
import {
  DiJavascript1,
  DiReact,
  DiGit,
  DiGithubBadge,
  DiWordpress,
  DiBootstrap,
  DiPhp
} from 'react-icons/di';
import {
  SiHtml5,
  SiCss3,
  SiMysql,
  SiHeroku,
  SiCplusplus,
  SiPython,
  // SiNextdotJs
} from 'react-icons/si';

const TechSkills = () => {
  return (
    <ul className={s.container}>
      <li className={s.techIcon}>
        <SiHtml5 />
      </li>
      <li className={s.techIcon}>
        <SiCss3 />
      </li>
      <li className={s.techIcon}>
        <DiJavascript1 />
      </li>
      <li className={s.techIcon}>
        <DiReact />
      </li>
      <li className={s.techIcon}>
        <DiPhp />
      </li>
      <li className={s.techIcon}>
        <SiCplusplus />
      </li>
      <li className={s.techIcon}>
        <DiGithubBadge />
      </li>
      <li className={s.techIcon}>
        <SiPython />
      </li>
      <li className={s.techIcon}>
        <SiMysql />
      </li>
      <li className={s.techIcon}>
        <SiHeroku />
      </li>
      <li className={s.techIcon}>
        <DiWordpress />
      </li>
      <li className={s.techIcon}>
        <DiBootstrap />
      </li>
      <li className={s.techIcon}>
        <DiGit />
      </li>
    </ul>
  );
};

export default TechSkills;
