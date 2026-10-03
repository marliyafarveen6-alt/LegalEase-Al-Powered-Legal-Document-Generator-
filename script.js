let generatedText="";
function generateDocument(){
 const type=document.getElementById("documentType").value||"Legal Document";
 const parties=document.getElementById("parties").value||"Not specified";
 const terms=document.getElementById("terms").value||"Not specified";
 const date=document.getElementById("date").value||"Not specified";
 generatedText=`${type}\n\nPARTIES INVOLVED\n${parties}\n\nEFFECTIVE DATE\n${date}\n\nTERMS & CONDITIONS\n${terms.split(";").map((x,i)=>`${i+1}. ${x.trim()}`).join("\n")}\n\nAI NOTE\nGenerated using the LegalEase educational Gemini AI concept. This is a document-generation demo and should be reviewed before real-world legal use.`;
 document.getElementById("preview").textContent=generatedText;
}
function editDocument(){
 const p=document.getElementById("preview");
 p.contentEditable="true";p.focus();
}
function downloadTXT(){
 if(!generatedText) generateDocument();
 const a=document.createElement("a");a.href=URL.createObjectURL(new Blob([generatedText],{type:"text/plain"}));a.download="LegalEase_Document.txt";a.click();
}
function downloadDOC(){
 if(!generatedText) generateDocument();
 const html="<html><body><pre>"+generatedText.replace(/</g,"&lt;")+"</pre></body></html>";
 const a=document.createElement("a");a.href=URL.createObjectURL(new Blob([html],{type:"application/msword"}));a.download="LegalEase_Document.doc";a.click();
}
function downloadPDF(){alert("PDF export in this HTML/CSS/JavaScript demo is a placeholder. The project document specifies PDF generation through the backend using FPDF.");}
