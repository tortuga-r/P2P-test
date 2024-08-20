gdjs.LobbyCode = {};
gdjs.LobbyCode.localVariables = [];
gdjs.LobbyCode.GDjoinObjects1= [];
gdjs.LobbyCode.GDjoinObjects2= [];
gdjs.LobbyCode.GDcreateObjects1= [];
gdjs.LobbyCode.GDcreateObjects2= [];
gdjs.LobbyCode.GDChannelObjects1= [];
gdjs.LobbyCode.GDChannelObjects2= [];


gdjs.LobbyCode.mapOfGDgdjs_9546LobbyCode_9546GDjoinObjects1Objects = Hashtable.newFrom({"join": gdjs.LobbyCode.GDjoinObjects1});
gdjs.LobbyCode.mapOfGDgdjs_9546LobbyCode_9546GDcreateObjects1Objects = Hashtable.newFrom({"create": gdjs.LobbyCode.GDcreateObjects1});
gdjs.LobbyCode.mapOfGDgdjs_9546LobbyCode_9546GDChannelObjects1Objects = Hashtable.newFrom({"Channel": gdjs.LobbyCode.GDChannelObjects1});
gdjs.LobbyCode.eventsList0 = function(runtimeScene) {

{



}


{



}


{

gdjs.copyArray(runtimeScene.getObjects("join"), gdjs.LobbyCode.GDjoinObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.LobbyCode.mapOfGDgdjs_9546LobbyCode_9546GDjoinObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Join", false);
}}

}


{



}


{

gdjs.copyArray(runtimeScene.getObjects("create"), gdjs.LobbyCode.GDcreateObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.LobbyCode.mapOfGDgdjs_9546LobbyCode_9546GDcreateObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Create", false);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Channel"), gdjs.LobbyCode.GDChannelObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.LobbyCode.mapOfGDgdjs_9546LobbyCode_9546GDChannelObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(8806900);
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.window.openURL("https://www.youtube.com/channel/UCsZ4Ue8c94YLJDbGRafCI5Q", runtimeScene);
}}

}


};

gdjs.LobbyCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.LobbyCode.GDjoinObjects1.length = 0;
gdjs.LobbyCode.GDjoinObjects2.length = 0;
gdjs.LobbyCode.GDcreateObjects1.length = 0;
gdjs.LobbyCode.GDcreateObjects2.length = 0;
gdjs.LobbyCode.GDChannelObjects1.length = 0;
gdjs.LobbyCode.GDChannelObjects2.length = 0;

gdjs.LobbyCode.eventsList0(runtimeScene);

return;

}

gdjs['LobbyCode'] = gdjs.LobbyCode;
