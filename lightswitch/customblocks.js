Blockly.Blocks['lightswitch'] = {
    init: function() {
      this.appendDummyInput()
          .appendField(new Blockly.FieldDropdown([["қызыл","R"], ["сары","Y"], ["жасыл","G"], ["бәрі","all"]]), "turn")
          .appendField(new Blockly.FieldDropdown([["қосу","on"], ["сөндіру","off"]]), "switch");
      this.setInputsInline(false);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(330);
   this.setTooltip("");
   this.setHelpUrl("");
    }
  };

  Blockly.JavaScript['lightswitch'] = function(block) {
    var turn = block.getFieldValue('turn');
    var dropdown_switch = block.getFieldValue('switch');
    // TODO: Assemble JavaScript into code variable.
    var code='';
    if (dropdown_switch==="on") {
          switch(turn){
            case "R":
                code = "document.getElementById('switch').style.backgroundColor='red'; "
              break;
              case "Y":
                code = "document.getElementById('switch').style.backgroundColor='yellow'; "
              break;
              case "G":
                code = "document.getElementById('switch').style.backgroundColor='green'; "
              break;
          }
    }
    if (dropdown_switch==="off"){
         code = "document.getElementById('switch').style.backgroundColor='white'; "
        
    }    
    return code;
  };