var easemobNode;

if(process.platform == "win32"){
	easemobNode = require("./../easemob/easemobWin.node");
}
else if(process.platform == "linux") {
    easemobNode = require("./../easemob/easemobLinux.node");
} else {
    easemobNode = require("./../easemob/easemobMac.node");
}
module.exports = easemobNode;
