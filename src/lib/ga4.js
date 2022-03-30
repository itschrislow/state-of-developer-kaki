import ReactGA from "react-ga4";

export const handlePageview = (page) => {
  ReactGA.send({ hitType: "pageview", page });
};

export const handleGA4Event = ({ category, action, label }) => {
  ReactGA.event({ category, action, label });
};
