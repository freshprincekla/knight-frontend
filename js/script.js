const chessRows = ['a','b','c','d','e','f','g','h'];// an array consisting of all the rows
let wrapper = document.getElementById('wrapper');
let possiblePlaces = chessRows.map((letter)=>{
    //Create the chessboard
    let row = document.createElement('tr');
    for(let i=1; i < 9; i++){
        let squareName = letter + i;
        let div = document.createElement('td');
        div.innerHTML = '<div class="item" id="' + squareName + '">' + squareName + '</div>';
        row.appendChild(div);
    }
    wrapper.appendChild(row);
});

document.addEventListener('click', function (event) {
    if ( event.target.classList.contains('item') ) {
        let squareName = event.toElement.id;
        let start = document.getElementById('start');
        if(!start.innerText){
            start.innerText = squareName;
        } else {
            let end = document.getElementById('end');
            end.innerText = squareName;
        }
        
    }
}, false);



