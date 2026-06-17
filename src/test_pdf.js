const fs = require('fs');
const path = require('path');

async function test() {
  console.log("Loading pdfjs-dist...");
  const pdfjsLib = await import('pdfjs-dist/legacy/build/pdf.mjs');
  
  const pdfPath = path.join(__dirname, '..', 'public', "Cipher'26.pdf");
  console.log("Reading PDF from:", pdfPath);
  
  if (!fs.existsSync(pdfPath)) {
    console.error("PDF file does not exist at path!");
    return;
  }
  
  const data = fs.readFileSync(pdfPath);
  console.log("Read PDF bytes:", data.length);
  
  try {
    const loadingTask = pdfjsLib.getDocument({ data: new Uint8Array(data) });
    const pdf = await loadingTask.promise;
    console.log("Successfully loaded PDF!");
    console.log("Number of pages:", pdf.numPages);
  } catch (err) {
    console.error("Error loading PDF:", err);
  }
}

test();
