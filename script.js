function genqr(){
    var gapi="https://chart.googleapis.com/chart?cht=qr&chs=";
    var myimg=document.getElementById("img");
    var mytext=document.getElementById("qrtext").value;
    var mysize=document.getElementById("size").value;

    if(mytext!=""){
    if(myimg == "100"){
        myimg.src =gapi+"100x100"+"&chl="+mytext;
    }
    else  if( myimg == "150"){
        myimg.src =gapi+"150x150"+"&chl="+mytext;
    }
   else if(mytext!=="" &&  myimg == "200"){
        myimg.src =gapi+"200x200"+"&chl="+mytext;
    }
    else  if(mytext!=="" &&  myimg == "250"){
        myimg.src =gapi+"250x250"+"&chl="+mytext;
    }
    else {
        myimg.src =gapi+"300x300"+"&chl="+mytext;
    } }
    else{
        alert("Please enter text!")
    }
}
