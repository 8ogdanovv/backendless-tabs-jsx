const updateURLFromPathString = () => {
  const currentURL = window.location.href;
  const splitURL = currentURL.split('/');
  const newURL = splitURL.filter((part, i) => i !== 3 && i !== 2 ? part : null).join('/');
  window.history.replaceState(null, null, newURL);
};

export default updateURLFromPathString;