const chessColumns = ['a','b','c','d','e','f','g','h'];// an array consisting of all the rows
let wrapper = document.getElementById('wrapper');

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
        let start = document.getElementById('start');
        let end = document.getElementById('end');
        if(!start.innerText){
            start.innerText = squareName;
            document.getElementById(squareName).classList.add("red");
        } else if(!end.innerText) {
            end.innerText = squareName;
            document.getElementById(squareName).classList.add("red");
        }
    }
}, false);

let getPath = document.getElementById('getPath');
getPath.addEventListener('click', async function(event){
    let start = document.getElementById('start').innerText;
    let end = document.getElementById('end').innerText;
    if(start && end){
        const res = await fetch(`http://127.0.0.1:5000/apiv1/shortestpath?start=${start}&end=${end}`);
        let json = await res.json();
        json = json['path']
        console.dir(json)
        let result = document.getElementById('path')
        Object.keys(json).map(square => {
            let div = document.createElement('div');
            div.innerHTML = '<div>'+ square + ': ' + json[square] + '</div></br>';
            result.appendChild(div);
        });
    }else {
        alert('asdfasdf')
    }
})

