Blockly.Blocks.land= {
  init: function() { 
  this.appendValueInput("NAME")
      .setCheck(null)
      .appendField(new Blockly.FieldImage("../../media/make/Logo_Mixly.png", 20, 20, "*"))
      .appendField(Blockly.MIXLY_land_1);
  this.setPreviousStatement(true, null);
  this.setNextStatement(true, null);
  this.setColour(90);
  this.setTooltip("");
  this.setHelpUrl("");
  }
};