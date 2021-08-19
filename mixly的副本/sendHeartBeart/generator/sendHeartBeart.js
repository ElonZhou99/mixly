Blockly.Arduino.begin = function() {
  var value_delay = Blockly.Arduino.valueToCode(this, 'delay', Blockly.Arduino.ORDER_ATOMIC);
  var number_NAME = this.getFieldValue('NAME');
  Blockly.Arduino.definitions_['include_'+'test'] = '#include "myMAVLINK.h"';
  Blockly.Arduino.definitions_['var_declare_'+'NAME'] = 'myMAVLINK drone;';
  Blockly.Arduino.setups_['NAME'] = 'Serial.begin(57600);\n'
	    			 +'drone.sendHeartBeat();\n'
             			 +'delay('+number_NAME+');\n';

};