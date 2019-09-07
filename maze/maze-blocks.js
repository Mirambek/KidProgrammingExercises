let Directions={
   MOVE_FORWARD:"MOVE_FORWARD",
   TURN_LEFT:"TURN_LEFT",
   TURN_RIGHT:"TURN_RIGHT"
};
let actorStyle=document.getElementById("actor").style;

let RightPath=[{Direction: Directions.MOVE_FORWARD, Left:"305px"}, {Direction: Directions.TURN_LEFT,Top:"109px"}];
let RightPathCopy= [];
for(let i=0;i<RightPath.length;i++){
    RightPathCopy.push(RightPath[i]);
}
function reset(){
    alert(1);
    RightPath=RightPathCopy.map(m=>m);
    actorStyle.top="200px";
    actorStyle.left= "70px";
}
let move=function (currentMoveMent){
    alert(2);
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
          .appendField("Алдыға");
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
          .appendField("Алдыға");
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
    let currentMovement=RightPath.shift();
    if (block.Direction===currentMovement.Direction){
        move(currentMovement);
    } 
    else {
        reset();
    }
    return code;
  };
  Blockly.JavaScript[Directions.MOVE_FORWARD] = runBlockCode;
  Blockly.JavaScript[Directions.TURN_RIGHT] = runBlockCode;
  Blockly.JavaScript[Directions.TURN_LEFT] = runBlockCode;