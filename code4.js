gdjs.Platformer_32GameCode = {};
gdjs.Platformer_32GameCode.localVariables = [];
gdjs.Platformer_32GameCode.GDPlayer_95952Objects1= [];
gdjs.Platformer_32GameCode.GDPlayer_95952Objects2= [];
gdjs.Platformer_32GameCode.GDPlayer_95951Objects1= [];
gdjs.Platformer_32GameCode.GDPlayer_95951Objects2= [];
gdjs.Platformer_32GameCode.GDfloorObjects1= [];
gdjs.Platformer_32GameCode.GDfloorObjects2= [];
gdjs.Platformer_32GameCode.GDbgObjects1= [];
gdjs.Platformer_32GameCode.GDbgObjects2= [];


gdjs.Platformer_32GameCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "w");
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Player_1"), gdjs.Platformer_32GameCode.GDPlayer_95951Objects1);
{for(var i = 0, len = gdjs.Platformer_32GameCode.GDPlayer_95951Objects1.length ;i < len;++i) {
    gdjs.Platformer_32GameCode.GDPlayer_95951Objects1[i].getBehavior("PlatformerObject").simulateJumpKey();
}
}{gdjs.evtTools.p2p.sendDataToAll("player1_jump", "");
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.p2p.onEvent("player1_jump", false);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Player_1"), gdjs.Platformer_32GameCode.GDPlayer_95951Objects1);
{for(var i = 0, len = gdjs.Platformer_32GameCode.GDPlayer_95951Objects1.length ;i < len;++i) {
    gdjs.Platformer_32GameCode.GDPlayer_95951Objects1[i].getBehavior("PlatformerObject").simulateJumpKey();
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "d");
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Player_1"), gdjs.Platformer_32GameCode.GDPlayer_95951Objects1);
{for(var i = 0, len = gdjs.Platformer_32GameCode.GDPlayer_95951Objects1.length ;i < len;++i) {
    gdjs.Platformer_32GameCode.GDPlayer_95951Objects1[i].getBehavior("PlatformerObject").simulateRightKey();
}
}{gdjs.evtTools.p2p.sendDataToAll("player1_right", "");
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.p2p.onEvent("player1_right", false);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Player_1"), gdjs.Platformer_32GameCode.GDPlayer_95951Objects1);
{for(var i = 0, len = gdjs.Platformer_32GameCode.GDPlayer_95951Objects1.length ;i < len;++i) {
    gdjs.Platformer_32GameCode.GDPlayer_95951Objects1[i].getBehavior("PlatformerObject").simulateRightKey();
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "a");
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Player_1"), gdjs.Platformer_32GameCode.GDPlayer_95951Objects1);
{for(var i = 0, len = gdjs.Platformer_32GameCode.GDPlayer_95951Objects1.length ;i < len;++i) {
    gdjs.Platformer_32GameCode.GDPlayer_95951Objects1[i].getBehavior("PlatformerObject").simulateLeftKey();
}
}{gdjs.evtTools.p2p.sendDataToAll("player1_left", "");
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.p2p.onEvent("player1_left", false);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Player_1"), gdjs.Platformer_32GameCode.GDPlayer_95951Objects1);
{for(var i = 0, len = gdjs.Platformer_32GameCode.GDPlayer_95951Objects1.length ;i < len;++i) {
    gdjs.Platformer_32GameCode.GDPlayer_95951Objects1[i].getBehavior("PlatformerObject").simulateLeftKey();
}
}}

}


{


let isConditionTrue_0 = false;
{
}

}


{


let isConditionTrue_0 = false;
{
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Up");
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Player_2"), gdjs.Platformer_32GameCode.GDPlayer_95952Objects1);
{for(var i = 0, len = gdjs.Platformer_32GameCode.GDPlayer_95952Objects1.length ;i < len;++i) {
    gdjs.Platformer_32GameCode.GDPlayer_95952Objects1[i].getBehavior("PlatformerObject").simulateJumpKey();
}
}{gdjs.evtTools.p2p.sendDataToAll("player2_jump", "");
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.p2p.onEvent("player2_jump", false);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Player_2"), gdjs.Platformer_32GameCode.GDPlayer_95952Objects1);
{for(var i = 0, len = gdjs.Platformer_32GameCode.GDPlayer_95952Objects1.length ;i < len;++i) {
    gdjs.Platformer_32GameCode.GDPlayer_95952Objects1[i].getBehavior("PlatformerObject").simulateJumpKey();
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Right");
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Player_2"), gdjs.Platformer_32GameCode.GDPlayer_95952Objects1);
{for(var i = 0, len = gdjs.Platformer_32GameCode.GDPlayer_95952Objects1.length ;i < len;++i) {
    gdjs.Platformer_32GameCode.GDPlayer_95952Objects1[i].getBehavior("PlatformerObject").simulateRightKey();
}
}{gdjs.evtTools.p2p.sendDataToAll("player2_right", "");
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.p2p.onEvent("player2_right", false);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Player_2"), gdjs.Platformer_32GameCode.GDPlayer_95952Objects1);
{for(var i = 0, len = gdjs.Platformer_32GameCode.GDPlayer_95952Objects1.length ;i < len;++i) {
    gdjs.Platformer_32GameCode.GDPlayer_95952Objects1[i].getBehavior("PlatformerObject").simulateRightKey();
}
}}

}


{


let isConditionTrue_0 = false;
{
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Left");
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Player_2"), gdjs.Platformer_32GameCode.GDPlayer_95952Objects1);
{for(var i = 0, len = gdjs.Platformer_32GameCode.GDPlayer_95952Objects1.length ;i < len;++i) {
    gdjs.Platformer_32GameCode.GDPlayer_95952Objects1[i].getBehavior("PlatformerObject").simulateLeftKey();
}
}{gdjs.evtTools.p2p.sendDataToAll("player2_left", "");
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.p2p.onEvent("player2_left", false);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Player_2"), gdjs.Platformer_32GameCode.GDPlayer_95952Objects1);
{for(var i = 0, len = gdjs.Platformer_32GameCode.GDPlayer_95952Objects1.length ;i < len;++i) {
    gdjs.Platformer_32GameCode.GDPlayer_95952Objects1[i].getBehavior("PlatformerObject").simulateLeftKey();
}
}}

}


{


let isConditionTrue_0 = false;
{
}

}


{


let isConditionTrue_0 = false;
{
}

}


{


let isConditionTrue_0 = false;
{
}

}


{


let isConditionTrue_0 = false;
{
}

}


{


let isConditionTrue_0 = false;
{
}

}


{


let isConditionTrue_0 = false;
{
}

}


{


let isConditionTrue_0 = false;
{
}

}


{


let isConditionTrue_0 = false;
{
}

}


{


let isConditionTrue_0 = false;
{
}

}


{


let isConditionTrue_0 = false;
{
}

}


{


let isConditionTrue_0 = false;
{
}

}


{


let isConditionTrue_0 = false;
{
}

}


{


let isConditionTrue_0 = false;
{
}

}


{


let isConditionTrue_0 = false;
{
}

}


{


let isConditionTrue_0 = false;
{
}

}


};

gdjs.Platformer_32GameCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Platformer_32GameCode.GDPlayer_95952Objects1.length = 0;
gdjs.Platformer_32GameCode.GDPlayer_95952Objects2.length = 0;
gdjs.Platformer_32GameCode.GDPlayer_95951Objects1.length = 0;
gdjs.Platformer_32GameCode.GDPlayer_95951Objects2.length = 0;
gdjs.Platformer_32GameCode.GDfloorObjects1.length = 0;
gdjs.Platformer_32GameCode.GDfloorObjects2.length = 0;
gdjs.Platformer_32GameCode.GDbgObjects1.length = 0;
gdjs.Platformer_32GameCode.GDbgObjects2.length = 0;

gdjs.Platformer_32GameCode.eventsList0(runtimeScene);

return;

}

gdjs['Platformer_32GameCode'] = gdjs.Platformer_32GameCode;
