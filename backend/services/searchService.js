// backend/services/searchService.js
const searchInText = (pdfText, userQuery) => {
  const lowerText = pdfText.toLowerCase();
  const lowerQuery = userQuery.toLowerCase();

  if (lowerText.includes(lowerQuery)) {
    const startIndex = lowerText.indexOf(lowerQuery);
    const snippet = pdfText.substring(startIndex, startIndex + 300);
    return snippet;
  }

  return 'Sorry, I could not find anything relevant in the document.';
};

module.exports = { searchInText };
