Blockly.Blocks.fly_left= {
  init: function() { 
  this.appendValueInput("NAME")
      .setCheck(null)
      .appendField(new Blockly.FieldImage("../../media/make/Logo_Mixly.png", 20, 20, "*"))
      .appendField(Blockly.MIXLY_fly_left_1)
      .appendField(new Blockly.FieldNumber(0, 0, 3, 0.1), "NAME")
      .appendField(Blockly.MIXLY_fly_left_2);
  this.setPreviousStatement(true, null);
  this.setNextStatement(true, null);
  this.setColour(90);
  this.setTooltip("");
  this.setHelpUrl("");
  }
};