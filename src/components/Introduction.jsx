import profileImage from "../icons/profile.jpg";
import { handleGA4Event } from "../lib/ga4";

export default function Introduction() {
  return (
    <div className="chart top">
      <h2 className="title">Introduction</h2>
      <p>
        Balancing the scales of being underpaid or overpaid requires huge
        deliberation. Oftentimes, leading to a heated discussions.
      </p>
      <br />
      <p>
        With the recent{" "}
        <a
          target="_blank"
          rel="noreferrer"
          href="https://www.theedgemarkets.com/article/new-minimum-wage-rm1500-month-may-1-%E2%80%94-pm"
        >
          <span className="text-gradient">news</span>
        </a>{" "}
        of Malaysian increasing the minimum wage to MYR 1500/month, the{" "}
        <a
          target="_blank"
          rel="noreferrer"
          href="https://www.instagram.com/malaysianpaygap/"
        >
          <span className="text-gradient">@malaysianpaygap</span>{" "}
        </a>{" "}
        Instagram account and the ongoing debates in{" "}
        <a
          target="_blank"
          rel="noreferrer"
          href="https://www.facebook.com/groups/developerkaki/"
        >
          <span className="text-gradient">DeveloperKaki</span>
        </a>
        , Malaysia's largest online developer community, I was inspired to use
        the data from the{" "}
        <a
          href="https://www.facebook.com/groups/developerkaki/permalink/1475965772749331/"
          target="_blank"
          rel="noreferrer"
        >
          <span className="text-gradient">Developer Salary Survey</span>
        </a>{" "}
        in 2021 to share some insights on the relationship between salary,
        demographics, geography, education and experience.
      </p>
      <br />
      <p>Let's discover the state of DeveloperKaki in 2021!</p>
      <br />
      <div className="flex gap-4">
        <div className="h-[60px] w-[60px] p-1 rounded-full border border-dashed">
          <img src={profileImage} alt="Chris Low" className="rounded-full" />
        </div>
        <div className="text-sm">
          <p className="font-semibold">Chris Low</p>
          <a
            href="https://itschrislow.com"
            target="_blank"
            rel="noreferrer"
            onClick={() =>
              handleGA4Event({
                category: "Social Media",
                action: "Portfolio (Introduction)",
                label: "Portfolio (Introduction)",
              })
            }
          >
            <span className="text-gradient">@itschrislow</span>
          </a>
          <p>Frontend Engineer</p>
        </div>
      </div>
    </div>
  );
}
