import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs';
import {Book} from '../models/issue';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';

@Injectable()
export class DataService {
  private readonly API_URL = 'https://raw.githubusercontent.com/benoitvallon/100-best-books/master/books.json'

  dataChange: BehaviorSubject<Book[]> = new BehaviorSubject<Book[]>([]);
  dialogData: any;

  constructor(private httpClient: HttpClient) {}

  get data(): Book[] {
    return this.dataChange.value;
  }

  getDialogData() {
    return this.dialogData;
  }

  getAllIssues(): void {
    this.httpClient.get<Book[]>(this.API_URL).subscribe(data => {
        this.dataChange.next(data);
      },
      (error: HttpErrorResponse) => {
      console.log (error.name + ' ' + error.message);
      });
  }

  addIssue(book: Book): void {
    this.dialogData = book;
  }

  updateIssue(book: Book): void {
    this.dialogData = book;
  }

  deleteIssue(title: string): void {
    console.log(title);
  }
}






