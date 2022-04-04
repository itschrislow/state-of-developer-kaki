import { handleGA4Event } from "../lib/ga4";

export default function Future() {
  return (
    <div className="chart top">
      <h1 className="mb-4 title">Future</h1>
      <p>
        This is the first release of the state of DeveloperKaki and I plan to
        continue working on this project every year. As this is currently a
        1-man team, there are some time limitations.
      </p>
      <br />
      <p>
        However, the following are 3 key improvements I would like to integrate
        for the next year:
      </p>
      <ul className="mt-5 lg:mt-0 ml-4 list-disc list-outside">
        <li>Increase survey questions focused on technical aspects</li>
        <li>Improve outreach to larger and diverse group of developers</li>
        <li>Deeper insights and breakdown of data through charts and trends</li>
      </ul>
      <br />
      <p>
        If you are a data wizard interested in contributing to this project or
        if you would like to learn more about the project, please reach out to
        me{" "}
        <a
          href="https://itschrislow.com/#contact"
          target="_blank"
          rel="noreferrer"
          onClick={() =>
            handleGA4Event({
              category: "Social Media",
              action: "Email (Future)",
              label: "Email (Future)",
            })
          }
        >
          <span className="text-gradient">here</span>
        </a>
        .
      </p>
      <br />
      <p>See you next year 👋</p>
    </div>
  );
}
