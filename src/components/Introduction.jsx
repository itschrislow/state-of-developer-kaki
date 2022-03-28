import profileImage from "../icons/profile.jpg";

export default function Introduction() {
  return (
    <div className="chart">
      <h2 className="title">Introduction</h2>
      <p>
        Balancing the scales of being underpaid or overpaid requires huge
        deliberation. Oftentimes, leading to a heated discussions.
      </p>
      <br />
      <p>
        With the recent{" "}
        <span className="text-gradient">
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.theedgemarkets.com/article/new-minimum-wage-rm1500-month-may-1-%E2%80%94-pm"
          >
            news
          </a>
        </span>{" "}
        of Malaysian increasing the minimum wage to MYR 1500/month, the{" "}
        <span className="text-gradient">
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.instagram.com/malaysianpaygap/"
          >
            @malaysianpaygap
          </a>
        </span>{" "}
        Instagram account and the ongoing debates in{" "}
        <span className="text-gradient">
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.facebook.com/groups/developerkaki/"
          >
            DeveloperKaki
          </a>
        </span>
        , Malaysia's largest online developer community, I was inspired to use
        the data from the{" "}
        <span className="text-gradient">
          <a
            href="https://www.facebook.com/groups/developerkaki/permalink/1475965772749331/"
            target="_blank"
            rel="noreferrer"
          >
            Developer Salary Survey
          </a>
        </span>{" "}
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
          <span className="text-gradient">
            <a
              href="https://github.com/itschrislow"
              target="_blank"
              rel="noreferrer"
            >
              @itschrislow
            </a>
          </span>
          <p>Frontend Engineer</p>
        </div>
      </div>
    </div>
  );
}
