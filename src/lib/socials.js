export const shareToFacebook = (url) => {
  const shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${url}`;
  window.open(shareUrl, "NewWindow");
};

export const shareToWhatsapp = (url) => {
  const shareUrl = `https://api.whatsapp.com/send?text=${url}`;
  window.open(shareUrl, "NewWindow");
};

export const shareToTwitter = (url) => {
  const shareUrl = `https://twitter.com/intent/tweet?url=${url}`;
  window.open(shareUrl, "NewWindow");
};

export const copyLinkToClipboard = (url) => {
  navigator.clipboard.writeText(url);
};
