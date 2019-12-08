
const Directions={
    MOVE_FORWARD:"MOVE_FORWARD",
    TURN_LEFT:"TURN_LEFT",
    TURN_RIGHT:"TURN_RIGHT"
 };
 let MazeGames=[
    {
        RightPath:[
        
        {Direction: Directions.MOVE_FORWARD,left:'42px',path:1},  
        {Direction: Directions.MOVE_FORWARD,left:'84px',path:1},
        {Direction: Directions.MOVE_FORWARD,left:'126px',path:1},
        {Direction: Directions.MOVE_FORWARD,left:'168px',path:1},
        
        {Direction: Directions.TURN_LEFT},
        {Direction: Directions.MOVE_FORWARD,top:'0px',topR:'60px',path:2},
        {Direction: Directions.MOVE_FORWARD,top:'50px',topR:'100px',path:2},
        ],
        InitialActorCoordinates:{Y:"200px",X:"110px"}
    },
    {
        RightPath:[{Direction: Directions.MOVE_FORWARD, Left:"200px"}, 
        {Direction: Directions.TURN_LEFT,Top:"100px"}, 
        {Direction: Directions.MOVE_FORWARD, Left:"275px"}],
        InitialActorCoordinates:{X:"200px",Y:"60px"}
    },
    {
        RightPath:[{Direction: Directions.TURN_LEFT, Top:"100px"}, 
        {Direction: Directions.MOVE_FORWARD, Left:"200px"},
        {Direction: Directions.TURN_LEFT, Top:"45px"}],
        InitialActorCoordinates:{X:"200px",Y:"70px"}
    },
];
 let makeCopy=function(m){
    return { RightPath:m.RightPath.map(m=>m),
     InitialActorCoordinates:m.InitialActorCoordinates};
}
let MazeGamesCopy= MazeGames.map(makeCopy);

function reset(CURRENT_GAME){
 let actorStyle=document.getElementById("GAME-" + CURRENT_GAME).getElementsByClassName("actor")[0].style;
 MazeGames=MazeGamesCopy.map(makeCopy);
 actorStyle.top=MazeGames[CURRENT_GAME].InitialActorCoordinates.Y;
 actorStyle.left=MazeGames[CURRENT_GAME].InitialActorCoordinates.X;
 return MazeGames;
} 

function getMazeBlock(currentGame){
let Blockly=window['Blockly'];
const CURRENT_GAME=currentGame;
document.getElementById("GAME-" + CURRENT_GAME).style.display = 'inline-block';
let actorStyle=document.getElementById("GAME-" + CURRENT_GAME).getElementsByClassName("actor")[0].style;


let move=function (currentMoveMent){    
    if (currentMoveMent.top){
        actorStyle.top= +(MazeGames[CURRENT_GAME].InitialActorCoordinates.Y.replace('px',''))- +(currentMoveMent.topR.replace('px',''))+'px';
    }
    if (currentMoveMent.left){
        actorStyle.left=+(currentMoveMent.left.replace('px',''))+ +(MazeGames[CURRENT_GAME].InitialActorCoordinates.X.replace('px',''))+'px';
    }
    console.log(actorStyle.top);
    console.log(actorStyle.left);
}
Blockly.Blocks[Directions.MOVE_FORWARD] = {
    init: function() {
      this.appendDummyInput()
          .appendField("Алдыға");
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(270);
   this.setTooltip("");
   this.setHelpUrl("");
    },
    Direction:Directions.MOVE_FORWARD
  };
  Blockly.Blocks[Directions.TURN_LEFT] = {
    init: function() {
      this.appendDummyInput()
          .appendField("Солға");
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(270);
   this.setTooltip("");
   this.setHelpUrl("");
    },
    Direction:Directions.TURN_LEFT
  };
  Blockly.Blocks[Directions.TURN_RIGHT] = {
    init: function() {
      this.appendDummyInput()
          .appendField("Оңға");
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(270);
   this.setTooltip("");
   this.setHelpUrl("");
    },
    Direction:Directions.TURN_RIGHT
  };
  function runBlockCode(block) {
    if (!block || ((!block.childBlocks_ || block.childBlocks_.length===0) && !block.parentBlock_))
    {
        return ""; 
    }
    var code='';
    let currentMovement=MazeGames[CURRENT_GAME].RightPath.shift();
    console.log(block);
    if (!currentMovement){
        console.log(currentMovement);
        return "result=false;"
    }
    if (block.Direction===currentMovement.Direction){
        setTimeout(()=>move(currentMovement),1000);
    } 
    else {
        
        console.log(currentMovement);
        code="result=false;";        
    }
    return code;
  };
  Blockly.JavaScript[Directions.MOVE_FORWARD] = runBlockCode;
  Blockly.JavaScript[Directions.TURN_RIGHT] = runBlockCode;
  Blockly.JavaScript[Directions.TURN_LEFT] = runBlockCode;
  return MazeGames;
}

export { getMazeBlock,reset};