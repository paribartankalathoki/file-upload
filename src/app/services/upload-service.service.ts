import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UploadServiceService {

  constructor(
    private httpClient: HttpClient
  ) { }

  uploadImage(image: FormData): Observable<any> {
    return this.httpClient.post(`${'apiUrl'}/upload`, image);
  }
}
