import ReactLogo from '../assets/react.svg';
import ReactRouterLogo from '../assets/react-router-mark-color.svg';
import MUILogo from '../assets/MUI-logo.svg';
import { FacebookIcon, LinkedInIcon, GithubIcon } from '../components/LinkIcons';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="read-the-docs">
        <section className='footer-toolkit'>
          <a href="https://react.dev" target="_blank" rel="noreferrer">
            <img src={ReactLogo} className="logo react" alt="React logo" />
          </a>
          <a href="https://reactrouter.com/" target="_blank" rel="noreferrer">
            <img src={ReactRouterLogo} className="logo router" alt="React-router logo" />
          </a>
          <a href="https://mui.com/" target="_blank" rel="noreferrer">
            <img src={MUILogo} className="logo mui" alt="MUI logo" />
          </a>
        </section>

        <p>
          Click on the React, React-router and MUI logos to learn more
        </p>
      </div>

      <div className='footer-contacts'>
        <section className='footer-links'>
          <a
            href="https://www.facebook.com/vadym4che/"
            target="_blank"
            rel="noreferrer"
            className="link-image"
          >
            <FacebookIcon />
          </a>
          <a
            href="https://www.linkedin.com/in/vadym4che/"
            target="_blank"
            rel="noreferrer"
            className="link-image"
          >
            <LinkedInIcon />
          </a>
          <a
            href="https://github.com/vadym4che"
            target="_blank"
            rel="noreferrer"
            className="link-image"
          >
            <GithubIcon />
          </a>
        </section>

        <p>
          &copy; 2023 Vadym Chervoniak @vadym4che https://bit.ly/Ful1-5tack
        </p>
      </div>
    </footer>
  )
}
