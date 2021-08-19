Blockly.Arduino.setmode = function() {
  var value_modes = Blockly.Arduino.valueToCode(this, 'modes', Blockly.Arduino.ORDER_ATOMIC);
  var dropdown_mode = this.getFieldValue('mode');
  var code = 'drone.setMode('+dropdown_mode+'); \ndelay(2000);\n';
  return code;
};