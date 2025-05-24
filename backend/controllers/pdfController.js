// backend/controllers/pdfController.js
const path = require('path');
const { extractTextFromPdf } = require('../services/pdfService');
const { searchInText } = require('../services/searchService');

const searchFromPdf = async (req, res) => {
  try {
    const userQuery = req.body.query;
    const pdfPath = path.join(__dirname, '..', 'uploads', 'her-rights.pdf');
    
    const text = await extractTextFromPdf(pdfPath);
    const answer = searchInText(text, userQuery);

    res.json({ answer });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to process PDF' });
  }
};

module.exports = { searchFromPdf };
