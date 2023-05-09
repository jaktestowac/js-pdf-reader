import { PDFExtract } from "pdf.js-extract";

const pdfExtract = new PDFExtract();
const options = {}; 
const rows = [];

// Path do PDF to read:
const samplePdf = "test-pdfs/sample pdf.pdf";

await pdfExtract.extract(samplePdf, options)
  .then(data => { 
    data.pages.forEach(page => {
      page.content.forEach(row => {
        rows.push(row.str);
      });
    });
    
})
.catch(err=> console.log(err));

console.log('--------------------');
console.log('Content from PDF as array of rows:');
console.log(rows);

console.log('--------------------');
console.log('Content from PDF:');
console.log(rows.join('\n'));
