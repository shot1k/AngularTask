import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  

  tagArray1: number[] = [];

  text: any = '';
  editingTags: any = '';

  addTagFunction(){
    console.log(this.text);
    if(this.text == ''){
      return;
    }
    this.fillTagArray1ArrayFromString(this.text)
    this.text = '';
  }
  deleteText(index){
    console.log(index)
    for(let i=0; i<this.tagArray1.length; i++){
      if(this.tagArray1[i] == this.tagArray1[index]){
        this.tagArray1.splice(index, 1);
        console.log(this.tagArray1[index]);
      }
    }
  }

  editTag(){
    console.log(this.tagArray1);
    this.editingTags = this.tagArray1;
  }
  
  updateTag(){
    this.fillTagArray1ArrayFromString(this.editingTags);
    this.editingTags = '';
  }

  fillTagArray1ArrayFromString(text){
    console.log(this.editingTags);
    this.tagArray1 = [];
    var tempTagarray = text.toString().split(' ').join(',').split(';').join(',').split(',');
    
    for(let i=0; i<tempTagarray.length; i++){
      if(isNaN(tempTagarray[i]) == false){
        console.log(tempTagarray[i]);
        this.tagArray1.push(tempTagarray[i]);
      }
    }
  }



}