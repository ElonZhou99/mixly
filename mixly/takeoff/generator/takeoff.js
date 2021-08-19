Blockly.Arduino.takeoff = function() {
  var value_NAME = Blockly.Arduino.valueToCode(this, 'NAME', Blockly.Arduino.ORDER_ATOMIC);
  var number_NAME = this.getFieldValue('NAME');
  var code = 'drone.mav_override_rc(1500, 1500, 1600, 1500);\n'
             + 'delay('+number_NAME*1000+');\n'
	    +'drone.mav_override_rc(1500, 1500, 1600, 1500);\n'
	    + 'delay(1000);\n';
  return code;
};