var accordians = document.getElementsByClassName("accordian");

for(var i = 0;1<accordians.length;i++){
    accordians[i].onclick = function(){
    this.classList.toggle('is-open')
      var content = this.nextElementSibling;
      
      if (content.style.maxHeight) {
        content.style.maxHeight = null;
          
      } else{
        content.style.maxHeight = content.scrollHeight + "px";
      }
    }
}