import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'LinkGenerator';
  originalUrl  : string = "";
  IsLinkGenerated : boolean = false;
  shortUrl : any = "";
  
public GenerateShortUrl(): any {

  console.log(this.originalUrl);
   
  fetch(`https://tinyurl.com/api-create.php?url=${this.originalUrl}`, {
    method: 'Get',
    headers: {
      'Content-Type': 'application/json;charset=utf-8'
    }})
    .then(res=> res.text())
    .then(res=>{ 
      
      
      if(res){
        this.shortUrl = res;
        this.IsLinkGenerated = true;
      }
                     
    
    })
  
  
  
  
  //for readig 
  
 
  // System.Uri address = new System.Uri("http://tinyurl.com/api-create.php?url=" + YOUR ADDRESS GOES HERE);
  // System.Net.WebClient client = new System.Net.WebClient();
  // string tinyUrl = client.DownloadString(address);
  // Console.WriteLine(tinyUrl);
return;
}

public CopyLink(){

  toastr.success('Hello world!', 'Toastr fun!');
}
}



