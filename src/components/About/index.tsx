import profileImg from '../../assest/images/profileImg.jpg';
import './index.css'
import { BiLogoBootstrap, BiLogoCPlusPlus, BiLogoCss3, BiLogoDocker, BiLogoGit, BiLogoHtml5, BiLogoJavascript, BiLogoReact, BiLogoTypescript } from "react-icons/bi";
import { Link } from 'react-router-dom';
import { FaRegFilePdf } from "react-icons/fa6";


export default function About(): JSX.Element {
  return (
    <div className="about-section">
      <img src={profileImg} alt={"profile image"} className="profile-image" rel="noreferrer" />

      <h1>Abdelhay Bouramdane</h1>

      <p>
        I'm a <b>Software developer</b> student at 1337 School (42 Network). Skilled in C, C++, JavaScript, shell and problem solving. with more then 200 <a rel="noreferrer" href={'https://leetcode.com/abouramd'} target='_blank'>LeetCode</a> problems Solved.
      </p>

      <p>
        Over the last two years i had Built multiple projects using various languages and technologe.
      </p>

      <p>
        If you'd like to collaborate, please send me an email or reach out <Link rel="noreferrer" to='/contact' style={{ fontWeight: 'bold' }}>Here</Link>.
      </p>

      <div className='show-skills'>
        <a href={'/assest/docs/abdelhay_bouramdane_resume.pdf'} rel="noreferrer" target={'_blank'} className="resume-link">
          <FaRegFilePdf className='pdf-icon' /> View Resume
        </a>
        <hr className="separator"></hr>

        <BiLogoHtml5 className="icon html-icon" />
        <BiLogoCss3 className="icon css-icon" />
        <BiLogoJavascript className="icon js-icon" />
        <BiLogoTypescript className="icon ts-icon" />
        <BiLogoReact className="icon react-icon" />
        <BiLogoDocker className="icon docker-icon" />
        <BiLogoCPlusPlus className="icon cpp-icon" />
        <BiLogoGit className="icon git-icon" />
        <BiLogoBootstrap className="icon bootstrap-icon" />


      </div>
    </div >
  );
}
