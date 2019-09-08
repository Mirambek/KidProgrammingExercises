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
    let result=true;
    try {
        if (code) {
            eval(code);
            if (!result){
                alert('Алманы таппадым! Қайтадан бастаңыз!');
            }
        } else if (MazeGames[window.CURRENT_GAME].RightPath.length === 0) {
            alert('Бәрекелді! Бәрі дұрыс!');
        } else {
            alert('Толығымен тапсырманы орындаңыз!');
        }
        // reset();
    } catch (e) {
        alert(e);
    }
}
