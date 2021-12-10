import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'yuj-list-profile',
  templateUrl: './list-profile.component.html',
  styleUrls: ['./list-profile.component.scss'],
})
export class ListProfileComponent implements OnInit {
  public productProfile = [
    {
      name: 'Build',
      img: 'assets/profile.jpeg',
      shortDes:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum obcaecati nemo numquam facere hic similique consequuntur culpa modi reiciendis molestiae.',
      linkTitle: 'View all product',
      productFeature: ['Cloud fire store', 'Authentication'],
    },
    {
      name: 'Build',
      img: 'assets/profile.jpeg',
      shortDes:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum obcaecati nemo numquam facere hic similique consequuntur culpa modi reiciendis molestiae.',
      linkTitle: 'View all product',
      productFeature: ['File Monitoring', 'Google Analytics'],
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
