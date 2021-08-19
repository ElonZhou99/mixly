Blockly.Blocks.setmode= {
  init: function() { 
  this.appendValueInput("modes")
      .setCheck(null)
      .appendField(new Blockly.FieldImage("../../media/make/Logo_Mixly.png", 20, 20, "*"))
      .appendField(Blockly.MIXLY_setmode_1)
      .appendField(new Blockly.FieldDropdown([[Blockly.MIXLY_setmode_2,"5"],[Blockly.MIXLY_setmode_3,"2"],[Blockly.MIXLY_setmode_4,"0"]]), "mode");
  this.setPreviousStatement(true, null);
  this.setNextStatement(true, null);
  this.setColour(90);
  this.setTooltip("");
  this.setHelpUrl("");
  }
};