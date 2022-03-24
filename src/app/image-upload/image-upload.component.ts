import { Component, OnInit, ViewChild } from '@angular/core';
import { UploadServiceService } from '../services/upload-service.service';

@Component({
  selector: 'app-image-upload',
  templateUrl: './image-upload.component.html',
  styleUrls: ['./image-upload.component.scss'],
})
export class ImageUploadComponent implements OnInit {
  fileName: string = '';
  @ViewChild('fileUpload') fileUpload: any;
  
  fileOutputFormat: string = '';

  message: string = '';

  fileMsg: string = '';

  file: File | any;

  constructor(
    private uploadServiceService: UploadServiceService
  ) {}

  ngOnInit(): void {}

  onFileSelected(event: any) {
    this.file = event.target.files[0];
    if (this.file) {
      this.fileName = this.file.name;
    }
  }

  getBase64(file: Blob) {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = error => reject(error);
    });
  }
  
  onChange(event: any) {
    this.fileOutputFormat = event.target.value;
  }

  onFileUploadClick() {
    this.fileUpload.nativeElement.value = '';
  }
  async onUpload() {
    if (!this.fileOutputFormat) {
      this.message = "Please select output format";
    }
    if (!this.file) {
      this.fileMsg = "Please select file";
    }
    if (!this.file || !this.fileOutputFormat) return;
    if (this.fileOutputFormat === 'base64') {
      this.file = await this.getBase64(this.file).then();
    } else {
      this.file = this.file;
    }
    const formData = new FormData();
    formData.append('file', this.file);
    this.uploadServiceService.uploadImage(formData).subscribe({
      next: (res) => {
        console.log('upload complete: ', res);
        this.file = this.fileName = '';
      },
      error: (error) => {
        this.file = this.fileName = '';
        console.log('could not upload file');
      } 
    });
  }

}
