
    var i = 1;
    setInterval(function(){
        var imgID = document.getElementById("imgID");
        if(i<=3){
            i++;
        }else{
            i=1;
        }
        imgID.src="upload/"+i+i+i+".jpg";
    },2000)
