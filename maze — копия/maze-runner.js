var workspace = Blockly.inject('blocklyDiv',
{
    toolbox: document.getElementById('toolbox')
});

function runCode() {
window.LoopTrap = 1000;
Blockly.JavaScript.INFINITE_LOOP_TRAP =
    'if (--window.LoopTrap == 0) throw "Infinite loop.";\n';
var code = Blockly.JavaScript.workspaceToCode(workspace);
Blockly.JavaScript.INFINITE_LOOP_TRAP = null;
try {
    if (RightPath.length===0){
        
    }
    // eval(code);
} catch (e) {
    alert(e);
}
}
