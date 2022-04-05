export const shareToFacebook = (url) => {
  const shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
    url
  )}`;
  window.open(shareUrl, "NewWindow");
};

export const shareToWhatsapp = (url) => {
  const shareUrl = `https://api.whatsapp.com/send?text=${encodeURIComponent(
    url
  )}`;
  window.open(shareUrl, "NewWindow");
};

export const shareToTwitter = (url) => {
  const shareUrl = `https://twitter.com/intent/tweet?url=${encodeURIComponent(
    url
  )}`;
  window.open(shareUrl, "NewWindow");
};

export const copyLinkToClipboard = (url) => {
  navigator.clipboard.writeText(url);
};

export const getPercentage = (value, total, decimals) => {
  const percentage = (value / total) * 100;
  return percentage.toFixed(Number.isInteger(percentage) ? 0 : decimals);
};
