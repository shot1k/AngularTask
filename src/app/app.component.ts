import { Component, OnInit}  from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  

  tagArray: number[] = [];

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
    for(let i=0; i<this.tagArray.length; i++){
      if(this.tagArray[i] == this.tagArray[index]){
        this.tagArray.splice(index, 1);
        console.log(this.tagArray[index]);
      }
    }
    localStorage.setItem("tags", JSON.stringify(this.tagArray));
  }

  editTag(){
    console.log(this.tagArray);
    this.editingTags = this.tagArray;
  }
  
  updateTag(){
    this.fillTagArray1ArrayFromString(this.editingTags);
    this.editingTags = '';
  }

  fillTagArray1ArrayFromString(text){
    console.log(this.editingTags);
    this.tagArray = [];
    var tempTagarray = text.toString().split(' ').join(',').split(';').join(',').split(',');
    
    for(let i=0; i<tempTagarray.length; i++){
      if(isNaN(tempTagarray[i]) == false){
        console.log(tempTagarray[i]);
        this.tagArray.push(tempTagarray[i]);
      }
    }
    localStorage.setItem("tags", JSON.stringify(this.tagArray));
  }

  ngOnInit() {
    console.log(localStorage.getItem('tags'));
    this.tagArray = JSON.parse(localStorage.getItem("tags"));
  }



}