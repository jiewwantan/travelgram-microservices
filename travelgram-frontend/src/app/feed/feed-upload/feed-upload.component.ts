import { Component, OnInit } from '@angular/core';

import { 
  Validators, 
  FormBuilder, 
  FormGroup, 
  FormArray,
  FormControl } from '@angular/forms';

import { FeedProviderService } from '../services/feed.provider.service';
import { ActivatedRoute, Router  } from '@angular/router';
import { LoadingController, ModalController } from '@ionic/angular';

@Component({
  selector: 'app-feed-upload',
  templateUrl: './feed-upload.component.html',
  styleUrls: ['./feed-upload.component.scss'],
})
export class FeedUploadComponent implements OnInit {
  previewDataUrl;
  file: File;
  uploadForm: FormGroup;

  singleChoice: any[] = [
    {
      nbr: '1',
      question: 'Have you been there?',
      choice1: 'Yes',
      choice2: 'No'
    },
  ];

  constructor(
    private feed: FeedProviderService,
    private formBuilder: FormBuilder,
    private router: Router,
    private loadingController: LoadingController,
    private modalController: ModalController
  ) { 
    this.uploadForm = this.formBuilder.group({
      beenthere: this.formBuilder.array([
        this.initQuests()
      ])
    });
  }

  initQuests() {
    return this.formBuilder.group({
      nbr: '1',
      question: 'Have you been there?',
      choice1: 'Yes',
      choice2: 'No',
      choice: ''
    });
  }

  setQuest(beenthere: any) {
    const arr = new FormArray([]);
    beenthere.forEach((q: any) => {
      arr.push(this.formBuilder.group({
        nbr: q.nbr,
        question: q.question,
        nchoice1br: q.choice1,
        choice1: q.choice1,
        choice2: q.choice2,
        choice: ''
      }));
    });
    return arr;
  }

  ngOnInit() {
    this.uploadForm = this.formBuilder.group({
      destination: new FormControl('', Validators.required),
      country: new FormControl('', Validators.required),
      beenthere: this.setQuest(this.singleChoice)
    });
  }
  
  setPreviewDataUrl(file: Blob) {
    const reader  = new FileReader();
    reader.onloadend = () => {
      this.previewDataUrl = reader.result;
    };

    reader.readAsDataURL(file);
  }

  selectImage(event) {
    const file = event.srcElement.files;

    if (!file) {
      return;
    }
    this.file = file[0];
    this.setPreviewDataUrl(this.file);

  }

  onSubmit($event) {
    $event.preventDefault();
    this.loadingController.create();
    
    if (!this.uploadForm.valid || !this.file) { return; }
    this.feed.uploadFeedItem(
      this.uploadForm.controls.destination.value, 
      this.uploadForm.controls.country.value, 
      this.file, 
      this.uploadForm.value.beenthere[0].choice)
      .then((result) => {
        this.modalController.dismiss();
        this.loadingController.dismiss();
      });
  }

  cancel() {
    this.modalController.dismiss();
  }
}
