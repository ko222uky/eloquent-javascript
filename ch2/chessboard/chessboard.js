// board parameters
width = 8;
height = 8;
white = ' ';
black = '#';

// build the board
for (i = 0; i < height; i++) {
    if (i % 2 === 0) {
        console.log((black + white).repeat(width/2));    
    }
    else {
        console.log((white + black).repeat(width/2));
    }
}