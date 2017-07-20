import { Component } from '@angular/core';
import { SearchService } from '../services/search.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable } from "rxjs/Rx";

@Component({
  selector: 'app-search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.scss']
})
export class SearchFormComponent {
  public isShowAlert:Boolean;

  constructor(private searchService: SearchService) {}

  public searchForm = new FormGroup ({
    searchString: new FormControl('Text of my search request', [Validators.required, Validators.minLength(1), Validators.maxLength(100)])
  });

  public send(str) {
    this.searchService.search(str).then(() => {
      this.isShowAlert = true;

      Observable.timer(3000)
        .take(1)
        .subscribe(() => {
          this.isShowAlert = false;
        });
    });
  }
}
