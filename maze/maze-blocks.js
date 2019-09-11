const CURRENT_GAME=window['CURRENT_GAME'];
let Directions={
   MOVE_FORWARD:"MOVE_FORWARD",
   TURN_LEFT:"TURN_LEFT",
   TURN_RIGHT:"TURN_RIGHT"
};
let actorStyle=document.getElementById("GAME-" + window.CURRENT_GAME).getElementsByClassName("actor")[0].style;
let MazeGames=[
    {
        RightPath:[{Direction: Directions.MOVE_FORWARD, Left:"305px"}, 
        {Direction: Directions.TURN_LEFT,Top:"109px"}],
        InitialActorCoordinates:{X:"200px",Y:"70px"}
    },
    {
        RightPath:[{Direction: Directions.MOVE_FORWARD, Left:"95px"}, 
        {Direction: Directions.TURN_LEFT,Top:"149px"}, 
        {Direction: Directions.MOVE_FORWARD, Left:"305px"}],
        InitialActorCoordinates:{X:"200px",Y:"60px"}
    },
    {
        RightPath:[{Direction: Directions.TURN_LEFT, Top:"75px"}, 
        {Direction: Directions.MOVE_FORWARD, Left:"105px"}
        {Direction: Directions.TURN_LEFT, Top:"85px"}],
        InitialActorCoordinates:{X:"200px",Y:"70px"}
    },
];
let makeCopy=function(m){
       return { RightPath:m.RightPath.map(m=>m),
        InitialActorCoordinates:m.InitialActorCoordinates};
}
let MazeGamesCopy= MazeGames.map(makeCopy);

function reset(){
    MazeGames=MazeGamesCopy.map(makeCopy);
    actorStyle.top=MazeGames[CURRENT_GAME].InitialActorCoordinates.Y;
    actorStyle.left=MazeGames[CURRENT_GAME].InitialActorCoordinates.X;
}
let move=function (currentMoveMent){    
    if (currentMoveMent.Top){
        actorStyle.top=currentMoveMent.Top;
    }
    else if (currentMoveMent.Left){
        actorStyle.left=currentMoveMent.Left;
    }
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
    var code='';
    console.log(CURRENT_GAME);
    console.log(MazeGames[CURRENT_GAME]);
    let currentMovement=MazeGames[CURRENT_GAME].RightPath.shift();
    if (block.Direction===currentMovement.Direction){
        move(currentMovement);
    } 
    else {
        code="result=false;";        
    }
    return code;
  };
  Blockly.JavaScript[Directions.MOVE_FORWARD] = runBlockCode;
  Blockly.JavaScript[Directions.TURN_RIGHT] = runBlockCode;
  Blockly.JavaScript[Directions.TURN_LEFT] = runBlockCode;