Blockly.Arduino.land = function() {
  var value_NAME = Blockly.Arduino.valueToCode(this, 'NAME', Blockly.Arduino.ORDER_ATOMIC);
  var code = 'drone.setMode(9);\n'
	    + 'delay(1000);\n';
  return code;
};