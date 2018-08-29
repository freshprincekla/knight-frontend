const chessRows = ['a','b','c','d','e','f','g','h'] // an array consisting of all the 

let possiblePlaces = chessRows.map((letter)=>{
    //Create the chessboard
    let wrapper = document.getElementById('wrapper')
    for(let i=1; i < 9; i++){
        let squareName = letter + i;
        let div = document.createElement('div')
        div.innerHTML = '<div class="item" id="' + squareName + '">' + squareName + '</div>'
        wrapper.appendChild(div)
    }
})
