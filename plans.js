const p = document.getElementById("card");



  document.querySelector('#add').addEventListener('click', function() {
    document.getElementById('add').style.display='none';
    document.getElementById('name').style.display='block';


    document.getElementById('name').lastChild.addEventListener('keypress', function(e) {
      if (e.keyCode === 13 ) {
        const inf = p.cloneNode(true);
        inf.style.display='flex';
        inf.firstChild.innerHTML=document.getElementById('name').lastChild.value;
         main.appendChild(inf);
        
  

         inf.childNodes[2].firstChild.addEventListener('keypress', function(e) {
          if (e.keyCode === 13 && inf.childNodes[2].firstChild.value!= '') {
            const inp = inf.childNodes[2].firstChild.value;
            const newDiv = document.createElement("div");
            newDiv.className = "draggable";
            newDiv.innerHTML = inp;
            newDiv.draggable = true;
            inf.childNodes[2].appendChild(newDiv);
            inf.childNodes[2].firstChild.value= '';
    
            newDiv.addEventListener('dragstart', function() {
              dragelem = this;
             });
  
            




          }
        });

        inf.childNodes[2].addEventListener('drop', function(event) {
          this.appendChild(dragelem);
         });

        inf.childNodes[2].addEventListener('dragover', function(event) {
          event.preventDefault();
           });

        document.getElementById('name').lastChild.value='';

      }

      
      
    });
  });
 

  