import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-taxsummery',
  imports: [
    CommonModule
  ],
  templateUrl: './taxsummery.component.html',
  styleUrl: './taxsummery.component.css'
})
export class TaxsummeryComponent {

  taxSummary = [
    { hsn: '0401', gst: 0, taxableValue: 799000.0, cgst: 0.0, sgst: 0.0, igst: 0.0, totalTaxValue: 0.0 },
    { hsn: '17019990', gst: 5, taxableValue: 701000.0, cgst: 17525.0, sgst: 17525.0, igst: 0.0, totalTaxValue: 35050.0 },
    { hsn: '90189099', gst: 12, taxableValue: 120000000.0, cgst: 7200000.0, sgst: 7200000.0, igst: 0.0, totalTaxValue: 14400000.0 },
    { hsn: '84713020', gst: 18, taxableValue: 10000000.0, cgst: 900000.0, sgst: 900000.0, igst: 0.0, totalTaxValue: 1800000.0 },
    { hsn: '71131910', gst: 28, taxableValue: 12000000.0, cgst: 1680000.0, sgst: 1680000.0, igst: 0.0, totalTaxValue: 3360000.0 },
  ];

  subTotal = 1312780900.0;
  discount = 1100.0;
  totalCGST = 82697525.0;
  totalSGST = 82697525.0;
  totalIGST = 0.0;
  tcs = 1478176.0;
  roundOff = 0.0;
  invoiceTotal = 1479654126.0;

  getTotalTaxableValue() {
    return this.taxSummary.reduce((total, item) => total + item.taxableValue, 0);
  }

  getTotalCGST() {
    return this.taxSummary.reduce((total, item) => total + item.cgst, 0);
  }

  getTotalSGST() {
    return this.taxSummary.reduce((total, item) => total + item.sgst, 0);
  }

  getTotalIGST() {
    return this.taxSummary.reduce((total, item) => total + item.igst, 0);
  }

  getTotalTaxValue() {
    return this.taxSummary.reduce((total, item) => total + item.totalTaxValue, 0);
  }

}
