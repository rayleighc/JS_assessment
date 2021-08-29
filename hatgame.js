const prompt = require('prompt-sync')({sigint: true});
const clear_screen = require("clear-screen");

const hat = '^';
const hole = 'O';
const fieldCharacter = '░';
const pathCharacter = '*';
const rowNum = 10; //can change the size of field in y direction
const colNum = 10; //can change the size of field in x direction

class Field {

    constructor() {
this._field = Array(rowNum).fill().map(() =>Array (colNum));
this._locationX = 0;
this._locationY = 0;
this._hatLocation = []; //create empty array to store hat location Y and X


    }

    get fieldtype (){
        return this._field;
    }

    generateField(percentage){

        for(let y = 0; y < rowNum; y++) {
            for(let x = 0; x < colNum; x++){
                const prob = Math.random();
                this._field[y][x] = prob > percentage ? fieldCharacter : hole;
            }
        }

        //set hatLocation as object
        const hatLocation = {
            x: Math.floor(Math.random() * colNum),
            y: Math.floor(Math.random() * rowNum)
        };

      

//make sure hat is not at starting location
        while(hatLocation.x == 0 && hatLocation.y ==0) {
            hatLocation.x = Math.floor(Math.random() * colNum);
            hatLocation.y = Math.floor(Math.random() * rowNum);

        }
        this._field[hatLocation.y][hatLocation.x] = hat;
        this._field[0][0] = pathCharacter; //set "home" position before game starts
        this._hatLocation.push(hatLocation.y);
        this._hatLocation.push(hatLocation.x);
    }

    runGame() {
        let playing = true;
        console.log("Start game");
        //print the field
        this.print();
        //console.log(this._field);
        //console.log(this._hatLocation); 
        this.askQuestion();
    }

    print() {
        const displayString = this._field.map(row => {
            return row.join('');
        }).join('\n');
        console.log(displayString);
    }

    
 askQuestion() {
        //const direction = prompt("which way  ").toUpperCase();

  //set charLocation as object
  let charLocation = {
    x: 0, //1 means move right
    y: 0  //1 means move down
};

let displayString;

//CRTL + C to stop terminal operation
Loop1: //label loop
while (this._field[this._hatLocation[0]][this._hatLocation[1]] != this._field[charLocation.y][charLocation.x])
{

    const direction = prompt("which way  ").toUpperCase();
    

        switch (direction) {
            

/*---------User move Character "Right"--------------------------*/
                case "R" :

                    charLocation.x = charLocation.x + 1;

                    if (charLocation.x == colNum){ //if Character goes out of field boundary
                        console.log("Invalid move!");
                        charLocation.x = charLocation.x - 1;
                       break; //break out of switch, not Loop1 (while loop)
                    } else
                
                    if (this._field[charLocation.y][charLocation.x] == hole){
                        clear_screen();
                        console.log("GAME OVER");
                        break Loop1; //break out specific loop
                    } else

                    if (this._field[charLocation.y][charLocation.x] == hat) {
                        clear_screen();
                        console.log("YOU WIN!");
                        break Loop1; //break out specific loop
                    } 
                    else {
                        this._field[charLocation.y][charLocation.x - 1] = fieldCharacter;
                        this._field[charLocation.y][charLocation.x] = pathCharacter;
                        
                    }
                    
                    displayString = this._field.map(row => {
                        return row.join('');
                    }).join('\n');
                    console.log(displayString);
                    
                  break;

/*---------User move Character "Left"--------------------------*/
                  case "L" :

                    
                    charLocation.x = charLocation.x - 1;

                    if (charLocation.x < 0) { //if Character goes out of field boundary
                        console.log("Invalid move!");
                        charLocation.x = charLocation.x + 1;
                        break; //break out of switch, not Loop1 (while loop)
                    } else
                
                    if (this._field[charLocation.y][charLocation.x] == hole){
                        
                        clear_screen();
                        console.log("GAME OVER");
                        break Loop1; //break out specific loop
                    } else
                    if (this._field[charLocation.y][charLocation.x] == hat) {
                        
                        clear_screen();
                        console.log("YOU WIN!");
                        break Loop1; //break out specific loop
                    } else {
                        this._field[charLocation.y][charLocation.x + 1] = fieldCharacter;
                        this._field[charLocation.y][charLocation.x] = pathCharacter;
                        
                    }
                    
                    displayString = this._field.map(row => {
                        return row.join('');
                    }).join('\n');
                    console.log(displayString);
                    
                  break;
                
/*---------User move Character "Down"--------------------------*/

                case "D" :

                    charLocation.y = charLocation.y + 1;

                    if (charLocation.y == rowNum){ //if Character goes out of field boundary
                        console.log("Invalid move!");
                        charLocation.y = charLocation.y - 1;
                        break; //break out of switch, not Loop1 (while loop)
                    } else


                
                    if (this._field[charLocation.y][charLocation.x] == hole){
                        
                        clear_screen();
                        console.log("GAME OVER");
                        break Loop1; //break out specific loop
                    } else
                    if (this._field[charLocation.y][charLocation.x] == hat) {
                        
                        clear_screen();
                        console.log("YOU WIN!");
                        break Loop1; //break out specific loop
                    } else {
                        this._field[charLocation.y - 1][charLocation.x] = fieldCharacter;
                        this._field[charLocation.y][charLocation.x] = pathCharacter;
                        
                    }
                    
                    displayString = this._field.map(row => {
                        return row.join('');
                    }).join('\n');
                    console.log(displayString);
                    
                  break;

 /*---------User move Character "Up"--------------------------*/

                case "U" :

                    charLocation.y = charLocation.y - 1;

                    if (charLocation.y < 0){ //if Character goes out of field boundary
                        console.log("Invalid move!");
                        charLocation.y = charLocation.y + 1;
                        break; //break out of switch, not Loop1 (while loop)
                    } else

                
                    if (this._field[charLocation.y][charLocation.x] == hole){
                        
                        clear_screen();
                        console.log("GAME OVER");
                        break Loop1; //break out specific loop
                    } else
                    if (this._field[charLocation.y][charLocation.x] == hat) {
                        
                        clear_screen();
                        console.log("YOU WIN!");
                        break Loop1; //break out specific loop
                    } else {
                        this._field[charLocation.y + 1][charLocation.x] = fieldCharacter;
                        this._field[charLocation.y][charLocation.x] = pathCharacter;
                        
                    }
                    
                    displayString = this._field.map(row => {
                        return row.join('');
                    }).join('\n');
                    console.log(displayString);
                    
                  break;

     /*---------No value for default--------------------------*/
                 default: // do nothing;
                 break;
            
              }

            }

console.log("Please restart game and try again");



        }
    }



//create an instance of Field class object
const myField = new Field();
//console.log(myField.fieldtype);
myField.generateField(0.3); // lower value will give less holes in the field
myField.runGame();