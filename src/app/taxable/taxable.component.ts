import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-taxable',
  imports: [
    CommonModule
  ],
  templateUrl: './taxable.component.html',
  styleUrl: './taxable.component.css'
})
export class TaxableComponent {

  invoiceItems = [
    {
      itemId: 'MIS0000100',
      itemParticulars: 'Fresh Cow Milk',
      description: 'Item Description: It contains about 87 percent water hence fresh milk...',
      hsnSac: '0401',
      quantity: '1000 Ltr',
      rate: 79.00,
      gst: 0,
      discount: 100.00,
      taxableValue: 79900.00
    },
    {
      itemId: 'MIS0000254',
      itemParticulars: 'Parry Sugar',
      hsnSac: '17019990',
      quantity: '9000 Kgs',
      rate: 77.89,
      gst: 5,
      discount: 1000.00,
      taxableValue: 701000.00
    },
    {
      itemId: 'MIS0004152',
      itemParticulars: 'Nerofax EEG-1200J/K Medical Equipments',
      hsnSac: '90189099',
      quantity: '100 Pcs',
      rate: 12000000.00,
      gst: 12,
      discount: 0.00,
      taxableValue: 120000000.00
    },
    {
      itemId: 'MIS0003325',
      itemParticulars: 'Lenovo Thinkpad Slim3',
      description: 'Item Description: Intel i7, SSD-1TB, Make-2024, Serial No: ALADK86DB5699',
      hsnSac: '84713020',
      quantity: '1000 Nos',
      rate: 100000.00,
      gst: 18,
      discount: 0.00,
      taxableValue: 10000000.00
    },
    {
      itemId: 'MIS0006352',
      itemParticulars: 'MRF Radial Tyre 24x24x18',
      hsnSac: '71131910',
      quantity: '1000 Nos',
      rate: 12000.00,
      gst: 28,
      discount: 0.00,
      taxableValue: 12000000.00
    }
  ];

  getTotalDiscount(): number {
    return this.invoiceItems.reduce((sum, item) => sum + item.discount, 0);
  }

  getTotalTaxableValue(): number {
    return this.invoiceItems.reduce((sum, item) => sum + item.taxableValue, 0);
  }

}
