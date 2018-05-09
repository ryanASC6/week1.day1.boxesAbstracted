const number_of_boxes_in_row = 10;
const number_of_boxes_in_column = 10;

let box_width, box_height;

function setup(){
    createCanvas(600,600);
    box_height = height/number_of_boxes_in_column;
    box_width = width/number_of_boxes_in_row;
}

function draw(){
    for(let i = 0; i < number_of_boxes_in_row ; i++){
        const x = i*box_width;
        for(let j = 0;j < number_of_boxes_in_column; j++){
            const y = j*box_height;
            drawBox(x,y);
        }
    }
}

/**
 * Create color fill according to position of box and
 * total number of boxes.
 * @param {Number} i position of box in row
 * @param {Number} y y-coordinate for box in column
 */
const customFill = function(i,y){
    const j = y/box_height;
    fill(255/number_of_boxes_in_row * (i+1), 100, 255/number_of_boxes_in_column * (j+1) );
}


// Bonus - mouse clicks change box color
// NOTE: there are other ways of implementing this!
let mouseClicks = [];
function mousePressed(){
    mouseClicks.push([mouseX,mouseY]);
}

const drawBox = function(x,y){
    let foundClicks = mouseClicks.filter(mouseClickCord=>{
        const mX = mouseClickCord[0];
        const mY = mouseClickCord[1];
        
        // mouseclick was within box
        return mX > x && mX < x + box_width && mY > y && mY < y + box_height;
    });

    // if one mouse click found, make red
    if(foundClicks.length === 1){
        fill("red");
    }else{
        // if two mouse clicks found, remove both
        // and let normal color stay
        if(foundClicks.length === 2){
            foundClicks.forEach(mouseClick=>{
                mouseClicks.splice(mouseClicks.indexOf(mouseClick),1);
            });
        }
        customFill(x/box_width, y);
    }

    rect(x,y,box_width,box_height);
}
