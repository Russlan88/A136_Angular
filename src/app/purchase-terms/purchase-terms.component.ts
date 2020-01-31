import {
  Component,
  OnInit,
  Renderer
} from '@angular/core';


@Component({
  selector: 'app-purchase-terms',
  templateUrl: './purchase-terms.component.html',
  styleUrls: ['./purchase-terms.component.scss']
})
export class PurchaseTermsComponent implements OnInit {
  constructor(
    private renderer: Renderer,
  ) {}


  ngOnInit() {
  }
}
