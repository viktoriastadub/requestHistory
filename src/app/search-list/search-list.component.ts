import { Component, OnInit } from '@angular/core';
import { SearchService } from '../services/search.service';
import { Observable, Subject } from "rxjs/Rx";

@Component({
  selector: 'app-search-list',
  templateUrl: './search-list.component.html',
  styleUrls: ['./search-list.component.scss']
})

export class SearchListComponent implements OnInit {
  public isShowDeleteAlert:Boolean;
  private deletes$ = new Subject<void>();
  constructor(private searchService: SearchService) {}

  ngOnInit() {
    this.deletes$
      .map(() => Observable.timer(3000).take(1))
      .switch()
      .subscribe(() => this.isShowDeleteAlert = false);
  }

  public requests = this.searchService.getSearchHistory();

  delete(key) {
    this.searchService.delete(key).then(() => {
      this.isShowDeleteAlert = true;
      this.deletes$.next();
    });
  }
}
