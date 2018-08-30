const chessColumns = ['a','b','c','d','e','f','g','h'];// an array consisting of all the rows
let wrapper = document.getElementById('wrapper');
let getPath = document.getElementById('getPath');
let clearButton = document.getElementById('clearButton');
let start = document.getElementById('start');
let end = document.getElementById('end');

for(let i=1; i < 9; i++){
    let row = document.createElement('tr');
    chessColumns.map(letter => {
        let squareName = letter + i;
        let div = document.createElement('td');
        div.innerHTML = '<div class="item" id="' + squareName + '">' + squareName + '</div>';
        row.appendChild(div);
    });
    wrapper.appendChild(row);
}

document.addEventListener('click', event => {
    //Attached an event listener to the document element and listen for the required click
    if ( event.target.classList.contains('item') ) {
        let squareName = event.toElement.id;
        if(!start.innerText){
            start.innerText = squareName;
            document.getElementById(squareName).classList.add('red');
            document.getElementById(squareName).setAttribute('style', 'background: #ff0000a3;');
        } else if(!end.innerText) {
            end.innerText = squareName;
            document.getElementById(squareName).setAttribute('style', 'background: #ff0000a3;');
        }
    }
}, false);

getPath.addEventListener('click', async function(event){
    let startValue = start.innerText;
    let endValue = end.innerText;
    if(startValue && endValue){
        const res = await fetch(`https://knight-shortest.herokuapp.com/apiv1/shortestpath?start=${startValue}&end=${endValue}`);
        let json = await res.json();
        json = json['path']
        let result = document.getElementById('path')
        result.innerHTML = '';
        Object.keys(json).map(square => {
            let div = document.createElement('div');
            div.innerHTML = `<div>Step ${square}:  ${json[square]}</div></br>`;
            if(square != 1){
                document.getElementById(json[square]).setAttribute('style', 'background: yellow;');;
            }
            result.appendChild(div);
        });
        document.getElementById(end.innerText).setAttribute('style', 'background: #ff0000a3;');;
    }else {
        alert('You have not selected the start and stop square.')
    }
})

clearButton.addEventListener('click', event =>{
    location.reload();
});


// document.addEventListener('touchstart', event => {
//     //this was created as a temporary solution to handle touch events on a phone
//     if ( event.target.classList.contains('item') ) {
//         let squareName = event.toElement.id;
//         if(!start.innerText){
//             start.innerText = squareName;
//             document.getElementById(squareName).classList.add("red");
//         } else if(!end.innerText) {
//             end.innerText = squareName;
//             document.getElementById(squareName).classList.add("red");
//         }
//     }
// }, false);