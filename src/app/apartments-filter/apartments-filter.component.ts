import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-apartments-filter",
  templateUrl: "./apartments-filter.component.html",
  styleUrls: ["./apartments-filter.component.scss"]
})
export class ApartmentsFilterComponent implements OnInit {
  constructor() {}
  scrollToDownload(element: any) {
    element.scrollIntoView({ behavior: "smooth" });
  }

  ngOnInit() {}
}
