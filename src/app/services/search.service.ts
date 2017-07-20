import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import {AngularFireDatabase, FirebaseListObservable} from 'angularfire2/database';

@Injectable()
export class SearchService {
  public requests:FirebaseListObservable<any>;

  constructor(public db:AngularFireDatabase) {
    this.requests = this.db.list('requests');
  }

  public search(searchString:string) {
    return this.requests.push({body: searchString, date: new Date().toString()});
  }

  public delete(id:string) {
    return this.requests.remove(id);
  }

  public getSearchHistory():Observable< Array<Object> > {
    return this.requests.map(requests => {
      return requests.map(request => {
        return {
          key: request.$key,
          body: request.body,
          date: Date.parse(request.date)
        };
      }).reverse();
    });
  }
}
