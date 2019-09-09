(function(){
    const IdDragging="dragging-id-element";
    var listOfImages=document.getElementById("display-images").getElementsByTagName("img");
    Array.prototype.forEach.call(listOfImages,element => {
        var src=element.getAttribute("src");
        var firstOccurency=src.indexOf("/")>0?src.indexOf("/"):src.indexOf("\\");
        var id=(firstOccurency>0?src.substring(firstOccurency+1):src).replace(".","-");
        element.setAttribute("id",id);
        element.addEventListener('dragstart',drag);
        element.setAttribute("draggable","true");
        function drag(event){
            event.dataTransfer.setData(IdDragging,element.getAttribute("id"))
        }
    });
    document.getElementById("display-images").addEventListener('drop',drop);
    document.getElementById("display-images").addEventListener('dragover',allowDrop);
    document.getElementById("list-right-actions").addEventListener('drop',drop);
    document.getElementById("list-right-actions").addEventListener('dragover',allowDrop);
    document.getElementById("list-wrong-actions").addEventListener('drop',drop);
    document.getElementById("list-wrong-actions").addEventListener('dragover',allowDrop);

    function drop(ev) {
        ev.preventDefault();
        var data = ev.dataTransfer.getData(IdDragging);
        ev.target.appendChild(document.getElementById(data));
        var listOfRightImages=document.getElementById("list-right-actions").getElementsByTagName("img");
        var rightAnswers=0;
        for(var i=0;i<listOfRightImages.length;i++){
          if (listOfRightImages[i].getAttribute("id")[0]==='d')
            rightAnswers++;
        }
        var listOfWrongImages=document.getElementById("list-wrong-actions").getElementsByTagName("img");        
        for(var i=0;i<listOfWrongImages.length;i++){
          if (listOfWrongImages[i].getAttribute("id")[0]==='b')
            rightAnswers++;
        }
        document.getElementById("right-stars").getElementsByTagName("h3")[0].innerHTML=" Дұрыс жауаптар("+rightAnswers+"):";
        var listStars=document.getElementById("right-stars").getElementsByTagName("span");
        for(var i=0;i<listStars.length;i++){
          if (i+1<=rightAnswers)
            listStars[i].style.color='#ffc700';
          else 
          listStars[i].style.color='#ccc';
        }
      }
      function allowDrop(ev) {
        ev.preventDefault();
      }      
})()
