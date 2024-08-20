gdjs.CreateCode = {};
gdjs.CreateCode.localVariables = [];
gdjs.CreateCode.GDcopyObjects1= [];
gdjs.CreateCode.GDcopyObjects2= [];
gdjs.CreateCode.GDbgObjects1= [];
gdjs.CreateCode.GDbgObjects2= [];
gdjs.CreateCode.GDconnectObjects1= [];
gdjs.CreateCode.GDconnectObjects2= [];
gdjs.CreateCode.GDID_9595textObjects1= [];
gdjs.CreateCode.GDID_9595textObjects2= [];
gdjs.CreateCode.GDinfo1Objects1= [];
gdjs.CreateCode.GDinfo1Objects2= [];
gdjs.CreateCode.GDerrorObjects1= [];
gdjs.CreateCode.GDerrorObjects2= [];


gdjs.CreateCode.mapOfGDgdjs_9546CreateCode_9546GDconnectObjects1Objects = Hashtable.newFrom({"connect": gdjs.CreateCode.GDconnectObjects1});
gdjs.CreateCode.mapOfGDgdjs_9546CreateCode_9546GDcopyObjects1Objects = Hashtable.newFrom({"copy": gdjs.CreateCode.GDcopyObjects1});
gdjs.CreateCode.eventsList0 = function(runtimeScene) {

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

gdjs.copyArray(runtimeScene.getObjects("connect"), gdjs.CreateCode.GDconnectObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.CreateCode.mapOfGDgdjs_9546CreateCode_9546GDconnectObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}
if (isConditionTrue_0) {
{gdjs.evtTools.p2p.sendDataToAll("connected", "");
}{gdjs.evtTools.p2p.connect(/* Error during generation, function not found: String */ "");
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
gdjs.copyArray(runtimeScene.getObjects("ID_text"), gdjs.CreateCode.GDID_9595textObjects1);
{for(var i = 0, len = gdjs.CreateCode.GDID_9595textObjects1.length ;i < len;++i) {
    gdjs.CreateCode.GDID_9595textObjects1[i].setString("connecting...");
}
}}

}


{



}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.p2p.onError();
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("error"), gdjs.CreateCode.GDerrorObjects1);
{for(var i = 0, len = gdjs.CreateCode.GDerrorObjects1.length ;i < len;++i) {
    gdjs.CreateCode.GDerrorObjects1[i].setString(gdjs.evtTools.p2p.getLastError());
}
}}

}


{



}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("error"), gdjs.CreateCode.GDerrorObjects1);
{for(var i = 0, len = gdjs.CreateCode.GDerrorObjects1.length ;i < len;++i) {
    gdjs.CreateCode.GDerrorObjects1[i].setX(gdjs.evtTools.window.getGameResolutionWidth(runtimeScene) / 2 - (gdjs.CreateCode.GDerrorObjects1[i].getWidth()) / 2);
}
}}

}


{



}


{

gdjs.copyArray(runtimeScene.getObjects("copy"), gdjs.CreateCode.GDcopyObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.CreateCode.mapOfGDgdjs_9546CreateCode_9546GDcopyObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}
if (isConditionTrue_0) {
{gdjs.evtsExt__Clipboard__WriteText.func(runtimeScene, gdjs.evtTools.p2p.getCurrentId(), (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}}

}


{



}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("ID_text"), gdjs.CreateCode.GDID_9595textObjects1);
{for(var i = 0, len = gdjs.CreateCode.GDID_9595textObjects1.length ;i < len;++i) {
    gdjs.CreateCode.GDID_9595textObjects1[i].setString(gdjs.evtTools.p2p.getCurrentId());
}
}}

}


{



}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("ID_text"), gdjs.CreateCode.GDID_9595textObjects1);
{for(var i = 0, len = gdjs.CreateCode.GDID_9595textObjects1.length ;i < len;++i) {
    gdjs.CreateCode.GDID_9595textObjects1[i].setX(gdjs.evtTools.window.getGameResolutionWidth(runtimeScene) / 2 - (gdjs.CreateCode.GDID_9595textObjects1[i].getWidth()) / 2);
}
}}

}


};

gdjs.CreateCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.CreateCode.GDcopyObjects1.length = 0;
gdjs.CreateCode.GDcopyObjects2.length = 0;
gdjs.CreateCode.GDbgObjects1.length = 0;
gdjs.CreateCode.GDbgObjects2.length = 0;
gdjs.CreateCode.GDconnectObjects1.length = 0;
gdjs.CreateCode.GDconnectObjects2.length = 0;
gdjs.CreateCode.GDID_9595textObjects1.length = 0;
gdjs.CreateCode.GDID_9595textObjects2.length = 0;
gdjs.CreateCode.GDinfo1Objects1.length = 0;
gdjs.CreateCode.GDinfo1Objects2.length = 0;
gdjs.CreateCode.GDerrorObjects1.length = 0;
gdjs.CreateCode.GDerrorObjects2.length = 0;

gdjs.CreateCode.eventsList0(runtimeScene);

return;

}

gdjs['CreateCode'] = gdjs.CreateCode;
