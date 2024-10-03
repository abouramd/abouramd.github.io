import { BiLogoGithub, BiLogoLinkedinSquare } from 'react-icons/bi';
import { SiCodingame, SiLeetcode } from 'react-icons/si';
import './index.css';

export default function Footer(): JSX.Element {
  return (
    <footer>
      <a href='https://github.com/abouramd' target={'_blank'}><BiLogoGithub className="icon github-icon" /></a>
      <a href='https://linkedin.com/in/abouramd' target={'_blank'}><BiLogoLinkedinSquare className="icon linkedin-icon" /></a>
      <a href='https://leetcode.com/abouramd' target={'_blank'}><SiLeetcode className="icon leetcode-icon" /></a>
      <a href='https://codingame.com/profile/a02769bc923e885e36be2e1367d86d645638184' target={'_blank'}><SiCodingame className="icon codingame-icon" /></a>
    </footer >
  );
}
