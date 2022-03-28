import linkedIn from "../icons/linkedIn.svg";
import github from "../icons/github.svg";
import portfolio from "../icons/portfolio.svg";
import email from "../icons/email.svg";

export default function SocialMedia({ className }) {
  return (
    <div className={`w-full flex items-center gap-4 ${className}`}>
      <a
        href="https://www.linkedin.com/in/itschrislow/"
        target="_blank"
        rel="noreferrer"
      >
        <img src={linkedIn} alt="LinkedIn" className="w-6 h-6" />
      </a>
      <a href="https://github.com/itschrislow" target="_blank" rel="noreferrer">
        <img src={github} alt="Github" className="w-6 h-6" />
      </a>
      <div className="-ml-1">
        <a href="https://itschrislow.com/" target="_blank" rel="noreferrer">
          <img src={portfolio} alt="Portfolio" className="w-[30px] h-[30px]" />
        </a>
      </div>
      <div className="-ml-1">
        <a
          href="https://itschrislow.com/#contact"
          target="_blank"
          rel="noreferrer"
        >
          <img src={email} alt="Portfolio" className="w-[30px] h-[30px]" />
        </a>
      </div>
    </div>
  );
}
