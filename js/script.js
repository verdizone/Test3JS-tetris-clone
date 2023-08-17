document.addEventListener('DOMContentLoaded', ()=>{
    const width = 10
    const grid = document.querySelector('.grid')
    const scoreDisplay = document.querySelector('#score')
    const startBtn = document.querySelector('#start-button')
    let squares = Array.from(document.querySelectorAll('.grid div'))
    console.log(squares)

//Los Tetrominos

    const lTetromino = [
       [1,width+1,width*2+1,2],
       [width,width+1,width+1,width*2+2],
       [1,width+1,width*2+1,width*2],
       [width,width*2,width*2+1,width*2+2]
    ]

    const zTetromino = [
        [width*2,width+1,width*2+1,width+2],
        [0,width,width+1,width*2+1],
        [width*2,width+1,width*2+1,width+2],
        [0,width,width+1,width*2+1]
     ]

    const tTetromino = [
        [width,1,width+1,width+2],
        [1,width+1,width*2+1,width+2],
        [width+2,width+1,width*2+1,width+2],
        [width+2,1,width+1,width*2+1]
    ]
    const oTetromino = [
        [0, 1, width, width+1],
        [0, 1, width, width+1],
        [0, 1, width, width+1],
        [0, 1, width, width+1]
    ]
    const iTetromino = [
        [width, width+1, width+2, width+3],
        [1, width+1, width*2+1, width*3+1],
        [width, width+1, width+2, width+3],
        [1, width+1, width*2+1, width*3+1]
    ]
    const theTetrominoes = [lTetromino,zTetromino,tTetromino,oTetromino,iTetromino]
    let currentPosition = 4
    let current = theTetrominoes[1][0];

    //console.log(current)

    function draw(){
        current.forEach(index=>{
            squares[currentPosition + index].classList.add('tetromino')
        });
    }
    draw()
})