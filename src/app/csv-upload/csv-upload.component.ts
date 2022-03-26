import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-csv-upload',
  templateUrl: './csv-upload.component.html',
  styleUrls: ['./csv-upload.component.scss'],
})
export class CsvUploadComponent implements OnInit {
  fileName: string = '';
  file: File | any;

  @ViewChild('fileUpload') fileUpload: any;

  message: string = '';

  constructor() {}

  ngOnInit(): void {}

  onFileUploadClick() {
    this.fileUpload.nativeElement.value = '';
  }

  changeListener(files: any) {
    console.log(files);
    files = files.target.files;
    if (files && files.length > 0) {
      this.file = files.item(0);
      console.log(this.file.name);
    }
  }

  onUpload() {
    console.log(this.file?.name);
    console.log(this.file?.size);
    console.log(this.file?.type);
    if (!this.file) {
      this.message = "Please select file";
      return;
    }
    let reader: FileReader = new FileReader();
    reader.readAsText(this.file);
    reader.onload = (e) => {
      let csv: string = reader.result as string;
      // now you can save your data into database by calling your api
      console.log(csv);
    };
  }
}
