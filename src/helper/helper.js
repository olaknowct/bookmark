// Validation
const isValidHttpUrl = (string) => {
  let url;
  try {
    url = new URL(string);
  } catch (e) {
    return false;
  }

  return url.protocol === 'http:' || url.protocol === 'https:';
};

export const validateLinkInput = (link) => {
  const defaulErrorMsg = 'Whoops, makesure its an email';
  if (link === '') {
    throw Error(defaulErrorMsg);
  }

  if (!isValidHttpUrl(link)) {
    throw Error(defaulErrorMsg);
  }
};
