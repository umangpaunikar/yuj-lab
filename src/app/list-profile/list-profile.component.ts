import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'yuj-list-profile',
  templateUrl: './list-profile.component.html',
  styleUrls: ['./list-profile.component.scss'],
})
export class ListProfileComponent implements OnInit {
  public userProfile = [
    {
      name: 'User 1',
      img: 'assets/profile.jpeg',
      shortDes:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum obcaecati nemo numquam facere hic similique consequuntur culpa modi reiciendis molestiae.',
      linkTitle: 'View',
      productFeature: ['Cloud fire store', 'Authentication'],
    },
    {
      name: 'User 2',
      img: 'assets/profile.jpeg',
      shortDes:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum obcaecati nemo numquam facere hic similique consequuntur culpa modi reiciendis molestiae.',
      linkTitle: 'View',
      productFeature: ['File Monitoring', 'Google Analytics'],
    },
  ];

  constructor(private productSrv: ProductService) {}

  ngOnInit(): void {
    // let prod = this.productSrv.getProduct();
    // console.log(prod);
  }
}
