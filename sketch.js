const number_of_boxes_in_row = 10;

let box_width, box_height;

function setup(){
    createCanvas(600,600);
    box_height = height;
    box_width = ___;
    // TASK #1 - set the box_width as the width of the canvas
    // divided by the number of boxes in a row.
}

function draw(){
    // TASK #2 - loop through each box in the row by
    // replacing the blank with the correct number/variable
    for(let i = 0; i < ___ ; i++){
        const y = ___;
        // TASK #3 - replace the blank with the y-coordinate for 
        // current box
        // HINT: it will always be the same

        const x = ___;
        // TASK #4 - replace the blank with the x-coordinate for 
        // current box
        // HINT: this changes with each box in the row
        // depending on it's place. Think about how the box_width
        // plays a role in this.

        // TASK #5 - At the top of the document change the 
        // number_of_boxes_in_row variable to another
        // number (like 20 or 50). The boxes should still take up
        // the whole width of the canvas. If you see something
        // different, check over what you've done!

        // TASK #6 - In the setup function, change the width of the 
        // canvas to something else (like 1000). The boxes should 
        // still take up the whole width of the canvas. If you see 
        // something different, check over what you've done!

        // TASK #7 - At the stop of this script, create a const 
        // variable "number_of_boxes_in_column" and set it to 10

        // TASK #8 - Create another for loop under this task that
        // loops through each box in the column, using "j" as the 
        // iterator.
        // HINT: the code will look very similar to the first "for"
        // loop. 
        // NOTE: this is a nested "for" loop, a loop within
        // a loop! Loop-ception?

        // create 2nd loop here!

        // TASK #9 - comment out the "const y" from earlier
        
        // TASK #10 - In the setup function, change the value of 
        // "box_height" to the height of the canvas divided by the
        // number of boxes in a column.

        // TASK #11 - Within the second "for" loop, create a
        // "const y" as the y-coordinate for the current box
        // HINT: this changes with each box in the column depending
        // on it's place. Think about how the box_height plays a
        // role with this.

        // TASK #12 - cut and paste the code for drawing the box into the 2nd "for" loop

        // Drawing box
        customFill(i);
        rect(x,y,box_width,box_height);

        // TASK #13 - At the top of the document change the 
        // number_of_boxes_in_column variable to another
        // number (like 20 or 50). The boxes should still take up
        // the whole height of the canvas. If you see something
        // different, check over what you've done!

        // TASK #14 - In the setup function, change the height of the 
        // canvas to something else (like 1000). The boxes should 
        // still take up the whole height of the canvas. If you see 
        // something different, check over what you've done!
    }
}

/**
 * Create grayscale color fill according to position of box and
 * total number of boxes.
 * @param {Number} i position of box in row
 * @param {Number} j position of box in column
 */
const customFill = function(i){
    let fill_constant;
    if (number_of_boxes_in_column){
        fill_constant = 255/number_of_boxes_in_row/number_of_boxes_in_column;        
    }else{
        fill_constant = 255/number_of_boxes_in_row;
    }
    const fill_num = fill_constant * i;
    fill(fill_num);
}
