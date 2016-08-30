var container = document.querySelector('.container');
var button = document.querySelector('button');
var color = document.querySelector('.box-color');
var note = document.querySelector('.box-note');


window.addEventListener('load',function(e){
    
  var noteCount = 1;
  
  button.addEventListener('click',function(e){
    e.preventDefault();
    
    var colorValue = color.value;
    var noteValue = note.value;
    
    var box = document.createElement('div');
    box.className = 'box';
    
    box.textContent = noteCount + '. ' + noteValue;
    box.style.backgroundColor = colorValue;
    
    container.appendChild(box);
    
    noteCount++;
    
  })
})
