import { handleGA4Event } from "../lib/ga4";

export default function About() {
  return (
    <div className="chart top">
      <h2 className="mb-4 title">About</h2>
      <p>
        The Developer Salary Survey is an ongoing survey published on July 26,
        2021 and there were a total of 634 responses in 2021.
      </p>
      <h3 className="mt-4 subtitle">Survey</h3>
      <p>
        The survey is designed by{" "}
        <a href="https://www.linkedin.com/in/daren-tan">
          <span className="text-gradient">Daren Tan</span>
        </a>
        , myself and a group of volunteers from DeveloperKaki, created with
        Google Form and distributed in the public DeveloperKaki Facebook group
        with over 10,000 members.
      </p>
      <h3 className="mt-4 subtitle">Dataset</h3>
      <p>
        The raw dataset is a{" "}
        <a href="https://docs.google.com/spreadsheets/d/11OrbJjxKWXm9qZUmLi0zuWvOAhW4CSflWZYb5EVgve4/edit?fbclid=IwAR3RUpPIRAxUKmN939EsqYmJ8jqrobmJTiTOqUBzpm3_5EhbcSQdbkTh1x0#gid=1132462481">
          <span className="text-gradient">public CSV file</span>
        </a>{" "}
        on Google Sheets. I cleaned the dataset programmatically to include only
        responses submitted in 2021 where the participant's current country of
        residence is Malaysia and converted all salaries to Malaysian Ringgit
        (MYR) using the average exchange rate for the specific currency in 2021.
      </p>
      <h3 className="mt-4 subtitle">Results</h3>
      <p>
        This website is designed and built by me,{" "}
        <a
          href="https://itschrislow.com/"
          onClick={() =>
            handleGA4Event({
              category: "Social Media",
              action: "Portfolio (About)",
              label: "Portfolio (About)",
            })
          }
        >
          <span className="text-gradient">Chris Low</span>
        </a>
        . Public repository available{" "}
        <span className="text-gradient">
          <a
            href="https://github.com/itschrislow/state-of-developer-kaki"
            target="_blank"
            rel="noreferrer"
          >
            here
          </a>
        </span>{" "}
        on Github.
      </p>

      <br />
      <p>Technical Stack:</p>
      <ul className="list-disc list-inside">
        <li>React</li>
        <li>JavaScript</li>
        <li>Tailwind CSS</li>
        <li>Nivo</li>
        <li>Vercel</li>
      </ul>
      <br />
      <p>Inspirations:</p>
      <ul className="list-disc list-inside">
        <li>
          <a href="https://2021.stateofcss.com/en-US/">
            <span className="text-gradient">State of CSS</span>
          </a>
        </li>
        <li>
          <a href="https://2021.stateofjs.com/en-US/">
            <span className="text-gradient">State of JavaScript</span>
          </a>
        </li>
      </ul>
    </div>
  );
}
