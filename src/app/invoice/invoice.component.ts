import { Component } from '@angular/core';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import { TaxableComponent } from '../taxable/taxable.component';
import { CommonModule } from '@angular/common';
import { TaxsummeryComponent } from '../taxsummery/taxsummery.component';

@Component({
  selector: 'app-invoice',
  imports: [
    TaxableComponent,
    CommonModule,
    TaxsummeryComponent
  ],
  templateUrl: './invoice.component.html',
  styleUrl: './invoice.component.css'
})
export class InvoiceComponent {
  // printInvoice(): void {
  //   window.print();
  // }
  printInvoice(): void {
    const printContent = document.getElementById('invoice-content');
    if (!printContent) {
      console.error('Invoice content not found');
      return;
    }
  
    // Open a new window for printing
    const printWindow = window.open('', '', 'width=900,height=650');
    if (!printWindow) {
      console.error('Failed to open the print window');
      return;
    }
  
    // Write the content and styles to the new window
    printWindow.document.write(`
      <html>
        <head>
          <title>Print Invoice</title>
          <style>
            /* Ensure the content fits within the page */
            @page {
              size: A4;
              margin: 0;
            }
  
            /* General body styling */
            body {
              font-family: Arial, sans-serif;
              margin: 0;
              padding: 0;
              background-color: #fff;
            }
  
            /* Invoice content styling */
            #invoice-content {
              padding: 20px;
              box-sizing: border-box;
            }
  
            /* Add any additional specific styles for printing */
            .print-header, .print-footer {
              text-align: center;
              margin: 20px 0;
            }
  
            /* Hide the print button or other non-essential elements during print */
            .no-print {
              display: none;
            }
  
            /* Additional media query for print */
            @media print {
              .no-print {
                display: none; /* Hide non-essential elements like buttons */
              }
  
              body {
                font-size: 12px; /* Adjust the font size for printing */
              }
            }
          </style>
        </head>
        <body>
          <div id="invoice-content">
            ${printContent.innerHTML}
          </div>
        </body>
      </html>
    `);
  
    // Ensure the document is fully loaded before printing
    printWindow.document.close();
    printWindow.focus();
  
    // Wait for the document to load and then print
    setTimeout(() => {
      printWindow.print();
      // printWindow.close();
    }, 500); // Allow time for styles and content to load
  }
  

  // Function to download the invoice as a PDF
 
  downloadInvoice(): void {
    const invoiceContent = document.getElementById('invoice-content');
    if (!invoiceContent) return;
  
    // Capture the invoice content as a canvas
    html2canvas(invoiceContent).then((canvas) => {
      const imgData = canvas.toDataURL('image/png');
      const pdf = new jsPDF('p', 'mm', 'a4');
      const pageWidth = pdf.internal.pageSize.getWidth();
      const pageHeight = pdf.internal.pageSize.getHeight();
      const imgWidth = canvas.width;
      const imgHeight = canvas.height;
  
      // Scale the image to fit within the PDF's page dimensions
      const ratio = Math.min(pageWidth / imgWidth, pageHeight / imgHeight);
      const scaledWidth = imgWidth * ratio;
      const scaledHeight = imgHeight * ratio;
  
      // Calculate the center position to align the image
      const xOffset = (pageWidth - scaledWidth) / 2;
      const yOffset = (pageHeight - scaledHeight) / 2;
  
      // Add the image to the PDF with the calculated offsets
      pdf.addImage(imgData, 'PNG', xOffset, yOffset, scaledWidth, scaledHeight);
  
      // Save the PDF
      pdf.save('invoice.pdf');
    });
  }
  
}
