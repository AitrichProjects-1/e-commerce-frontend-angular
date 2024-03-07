// import { Component } from '@angular/core';
// import { BrandService } from '../../services/brand.service';
// import { brand } from '../../model/brand';
// @Component({
//   selector: 'app-brand-display',
//   templateUrl: './brand-display.component.html',
//   styleUrls: ['./brand-display.component.css']
// })
// export class BrandDisplayComponent {
//   brand: any;
// brands: brand[] = [];

//   constructor(private brandservice: BrandService) {}

//   ngOnInit() {
//     this.getbrand(); 
//   }

//   getbrand() {
//     this.brandservice.getbrand().subscribe(
//       (data) => {
//         this.brands = data;
//       },
//       (error) => {
//         console.error('Error fetching items:', error);
//       }
//     );
//   }

// }

import { Component, OnInit } from '@angular/core';
import { BrandService } from '../../services/brand.service';
import { Brand } from '../../model/brand';

@Component({
  selector: 'app-brand-display',
  templateUrl: './brand-display.component.html',
  styleUrls: ['./brand-display.component.css']
})
export class BrandDisplayComponent implements OnInit {
  brands: Brand[] = [];

  constructor(private brandService: BrandService) {}

  ngOnInit() {
    this.getBrands(); 
  }



  getBrands() {
    this.brandService.getBrands().subscribe(
      (data) => {
        this.brands = data.map(brand => ({...brand, checked: false})); 
      },
      (error) => {
        console.error('Error fetching items:', error);
      }
    );
  }

  toggleVerified(event: any, brand: Brand) {
    brand.checked = event.target.checked;
  }

  setVerified(brand: Brand) {
   
  }



}

