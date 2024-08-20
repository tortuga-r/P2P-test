gdjs.JoinCode = {};
gdjs.JoinCode.localVariables = [];
gdjs.JoinCode.GDpasteObjects1= [];
gdjs.JoinCode.GDpasteObjects2= [];
gdjs.JoinCode.GDbgObjects1= [];
gdjs.JoinCode.GDbgObjects2= [];
gdjs.JoinCode.GDconnectObjects1= [];
gdjs.JoinCode.GDconnectObjects2= [];
gdjs.JoinCode.GDID_9595entry_9595textObjects1= [];
gdjs.JoinCode.GDID_9595entry_9595textObjects2= [];
gdjs.JoinCode.GDinfo2Objects1= [];
gdjs.JoinCode.GDinfo2Objects2= [];
gdjs.JoinCode.GDID_9595entryObjects1= [];
gdjs.JoinCode.GDID_9595entryObjects2= [];
gdjs.JoinCode.GDerrorObjects1= [];
gdjs.JoinCode.GDerrorObjects2= [];


gdjs.JoinCode.mapOfGDgdjs_9546JoinCode_9546GDconnectObjects1Objects = Hashtable.newFrom({"connect": gdjs.JoinCode.GDconnectObjects1});
gdjs.JoinCode.mapOfGDgdjs_9546JoinCode_9546GDpasteObjects1Objects = Hashtable.newFrom({"paste": gdjs.JoinCode.GDpasteObjects1});
gdjs.JoinCode.eventsList0 = function(runtimeScene) {

{



}


{



}


{



}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
{gdjs.evtTools.p2p.useDefaultBrokerServer();
}}

}


{



}


{



}


{



}


{



}


{



}


{



}


{

gdjs.copyArray(runtimeScene.getObjects("connect"), gdjs.JoinCode.GDconnectObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.JoinCode.mapOfGDgdjs_9546JoinCode_9546GDconnectObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("ID_entry"), gdjs.JoinCode.GDID_9595entryObjects1);
{gdjs.evtTools.p2p.sendDataToAll("connected", "");
}{gdjs.evtTools.p2p.connect((( gdjs.JoinCode.GDID_9595entryObjects1.length === 0 ) ? "" :gdjs.JoinCode.GDID_9595entryObjects1[0].getString()));
}}

}


{



}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.p2p.onEvent("connected", true);
if (isConditionTrue_0) {
{gdjs.evtTools.p2p.sendDataToAll("connected", "");
}{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Platformer Game", false);
}}

}


{



}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = !(gdjs.evtTools.p2p.isReady());
if (isConditionTrue_0) {
{/* Unknown object - skipped. */}}

}


{



}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.p2p.onError();
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("error"), gdjs.JoinCode.GDerrorObjects1);
{for(var i = 0, len = gdjs.JoinCode.GDerrorObjects1.length ;i < len;++i) {
    gdjs.JoinCode.GDerrorObjects1[i].setString(gdjs.evtTools.p2p.getLastError());
}
}}

}


{



}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("error"), gdjs.JoinCode.GDerrorObjects1);
{for(var i = 0, len = gdjs.JoinCode.GDerrorObjects1.length ;i < len;++i) {
    gdjs.JoinCode.GDerrorObjects1[i].setX(gdjs.evtTools.window.getGameResolutionWidth(runtimeScene) / 2 - (gdjs.JoinCode.GDerrorObjects1[i].getWidth()) / 2);
}
}}

}


{



}


{

gdjs.copyArray(runtimeScene.getObjects("paste"), gdjs.JoinCode.GDpasteObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.JoinCode.mapOfGDgdjs_9546JoinCode_9546GDpasteObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("ID_entry"), gdjs.JoinCode.GDID_9595entryObjects1);
{for(var i = 0, len = gdjs.JoinCode.GDID_9595entryObjects1.length ;i < len;++i) {
    gdjs.JoinCode.GDID_9595entryObjects1[i].setString(gdjs.evtsExt__Clipboard__ReadText.func(runtimeScene, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)));
}
}}

}


{



}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("ID_entry"), gdjs.JoinCode.GDID_9595entryObjects1);
gdjs.copyArray(runtimeScene.getObjects("ID_entry_text"), gdjs.JoinCode.GDID_9595entry_9595textObjects1);
{for(var i = 0, len = gdjs.JoinCode.GDID_9595entry_9595textObjects1.length ;i < len;++i) {
    gdjs.JoinCode.GDID_9595entry_9595textObjects1[i].setString((( gdjs.JoinCode.GDID_9595entryObjects1.length === 0 ) ? "" :gdjs.JoinCode.GDID_9595entryObjects1[0].getString()));
}
}}

}


{



}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("ID_entry_text"), gdjs.JoinCode.GDID_9595entry_9595textObjects1);
{for(var i = 0, len = gdjs.JoinCode.GDID_9595entry_9595textObjects1.length ;i < len;++i) {
    gdjs.JoinCode.GDID_9595entry_9595textObjects1[i].setX(gdjs.evtTools.window.getGameResolutionWidth(runtimeScene) / 2 - (gdjs.JoinCode.GDID_9595entry_9595textObjects1[i].getWidth()) / 2);
}
}}

}


};

gdjs.JoinCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.JoinCode.GDpasteObjects1.length = 0;
gdjs.JoinCode.GDpasteObjects2.length = 0;
gdjs.JoinCode.GDbgObjects1.length = 0;
gdjs.JoinCode.GDbgObjects2.length = 0;
gdjs.JoinCode.GDconnectObjects1.length = 0;
gdjs.JoinCode.GDconnectObjects2.length = 0;
gdjs.JoinCode.GDID_9595entry_9595textObjects1.length = 0;
gdjs.JoinCode.GDID_9595entry_9595textObjects2.length = 0;
gdjs.JoinCode.GDinfo2Objects1.length = 0;
gdjs.JoinCode.GDinfo2Objects2.length = 0;
gdjs.JoinCode.GDID_9595entryObjects1.length = 0;
gdjs.JoinCode.GDID_9595entryObjects2.length = 0;
gdjs.JoinCode.GDerrorObjects1.length = 0;
gdjs.JoinCode.GDerrorObjects2.length = 0;

gdjs.JoinCode.eventsList0(runtimeScene);

return;

}

gdjs['JoinCode'] = gdjs.JoinCode;
