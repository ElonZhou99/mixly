Blockly.Blocks.begin= {
  init: function() { 
  this.appendValueInput("delay")
      .setCheck(null)
      .appendField(new Blockly.FieldImage("../../media/make/Logo_Mixly.png", 20, 20, "*"))
      .appendField(Blockly.MIXLY_begin_1)
      .appendField(new Blockly.FieldNumber(0, 1000, 3000, 1), "NAME")
      .appendField("ms");
  this.setPreviousStatement(true, null);
  this.setNextStatement(true, null);
  this.setColour(90);
  this.setTooltip("");
  this.setHelpUrl("");
  }
};