gdjs.Top_32Down_32GameCode = {};
gdjs.Top_32Down_32GameCode.localVariables = [];
gdjs.Top_32Down_32GameCode.GDplayer_95952Objects1= [];
gdjs.Top_32Down_32GameCode.GDplayer_95952Objects2= [];
gdjs.Top_32Down_32GameCode.GDplayer_95952Objects3= [];
gdjs.Top_32Down_32GameCode.GDplayer_95952Objects4= [];
gdjs.Top_32Down_32GameCode.GDplayer_95951Objects1= [];
gdjs.Top_32Down_32GameCode.GDplayer_95951Objects2= [];
gdjs.Top_32Down_32GameCode.GDplayer_95951Objects3= [];
gdjs.Top_32Down_32GameCode.GDplayer_95951Objects4= [];
gdjs.Top_32Down_32GameCode.GDgrassObjects1= [];
gdjs.Top_32Down_32GameCode.GDgrassObjects2= [];
gdjs.Top_32Down_32GameCode.GDgrassObjects3= [];
gdjs.Top_32Down_32GameCode.GDgrassObjects4= [];
gdjs.Top_32Down_32GameCode.GDwallsObjects1= [];
gdjs.Top_32Down_32GameCode.GDwallsObjects2= [];
gdjs.Top_32Down_32GameCode.GDwallsObjects3= [];
gdjs.Top_32Down_32GameCode.GDwallsObjects4= [];
gdjs.Top_32Down_32GameCode.GDfloorObjects1= [];
gdjs.Top_32Down_32GameCode.GDfloorObjects2= [];
gdjs.Top_32Down_32GameCode.GDfloorObjects3= [];
gdjs.Top_32Down_32GameCode.GDfloorObjects4= [];
gdjs.Top_32Down_32GameCode.GDkitchenObjects1= [];
gdjs.Top_32Down_32GameCode.GDkitchenObjects2= [];
gdjs.Top_32Down_32GameCode.GDkitchenObjects3= [];
gdjs.Top_32Down_32GameCode.GDkitchenObjects4= [];
gdjs.Top_32Down_32GameCode.GDfurnitureObjects1= [];
gdjs.Top_32Down_32GameCode.GDfurnitureObjects2= [];
gdjs.Top_32Down_32GameCode.GDfurnitureObjects3= [];
gdjs.Top_32Down_32GameCode.GDfurnitureObjects4= [];
gdjs.Top_32Down_32GameCode.GDwinnerObjects1= [];
gdjs.Top_32Down_32GameCode.GDwinnerObjects2= [];
gdjs.Top_32Down_32GameCode.GDwinnerObjects3= [];
gdjs.Top_32Down_32GameCode.GDwinnerObjects4= [];
gdjs.Top_32Down_32GameCode.GDbulletObjects1= [];
gdjs.Top_32Down_32GameCode.GDbulletObjects2= [];
gdjs.Top_32Down_32GameCode.GDbulletObjects3= [];
gdjs.Top_32Down_32GameCode.GDbulletObjects4= [];


gdjs.Top_32Down_32GameCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Up");
if (isConditionTrue_0) {
{gdjs.evtTools.p2p.sendDataToAll("up", "");
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.p2p.onEvent("up", false);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("player_2"), gdjs.Top_32Down_32GameCode.GDplayer_95952Objects2);
{for(var i = 0, len = gdjs.Top_32Down_32GameCode.GDplayer_95952Objects2.length ;i < len;++i) {
    gdjs.Top_32Down_32GameCode.GDplayer_95952Objects2[i].getBehavior("TopDownMovement").simulateUpKey();
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Down");
if (isConditionTrue_0) {
{gdjs.evtTools.p2p.sendDataToAll("down", "");
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.p2p.onEvent("down", false);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("player_2"), gdjs.Top_32Down_32GameCode.GDplayer_95952Objects2);
{for(var i = 0, len = gdjs.Top_32Down_32GameCode.GDplayer_95952Objects2.length ;i < len;++i) {
    gdjs.Top_32Down_32GameCode.GDplayer_95952Objects2[i].getBehavior("TopDownMovement").simulateDownKey();
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Right");
if (isConditionTrue_0) {
{gdjs.evtTools.p2p.sendDataToAll("right", "");
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.p2p.onEvent("right", false);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("player_2"), gdjs.Top_32Down_32GameCode.GDplayer_95952Objects2);
{for(var i = 0, len = gdjs.Top_32Down_32GameCode.GDplayer_95952Objects2.length ;i < len;++i) {
    gdjs.Top_32Down_32GameCode.GDplayer_95952Objects2[i].getBehavior("TopDownMovement").simulateRightKey();
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Left");
if (isConditionTrue_0) {
{gdjs.evtTools.p2p.sendDataToAll("left", "");
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.p2p.onEvent("left", false);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("player_2"), gdjs.Top_32Down_32GameCode.GDplayer_95952Objects2);
{for(var i = 0, len = gdjs.Top_32Down_32GameCode.GDplayer_95952Objects2.length ;i < len;++i) {
    gdjs.Top_32Down_32GameCode.GDplayer_95952Objects2[i].getBehavior("TopDownMovement").simulateLeftKey();
}
}}

}


{



}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "w");
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("player_1"), gdjs.Top_32Down_32GameCode.GDplayer_95951Objects2);
{for(var i = 0, len = gdjs.Top_32Down_32GameCode.GDplayer_95951Objects2.length ;i < len;++i) {
    gdjs.Top_32Down_32GameCode.GDplayer_95951Objects2[i].getBehavior("TopDownMovement").simulateUpKey();
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "s");
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("player_1"), gdjs.Top_32Down_32GameCode.GDplayer_95951Objects2);
{for(var i = 0, len = gdjs.Top_32Down_32GameCode.GDplayer_95951Objects2.length ;i < len;++i) {
    gdjs.Top_32Down_32GameCode.GDplayer_95951Objects2[i].getBehavior("TopDownMovement").simulateDownKey();
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "d");
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("player_1"), gdjs.Top_32Down_32GameCode.GDplayer_95951Objects2);
{for(var i = 0, len = gdjs.Top_32Down_32GameCode.GDplayer_95951Objects2.length ;i < len;++i) {
    gdjs.Top_32Down_32GameCode.GDplayer_95951Objects2[i].getBehavior("TopDownMovement").simulateRightKey();
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "a");
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("player_1"), gdjs.Top_32Down_32GameCode.GDplayer_95951Objects2);
{for(var i = 0, len = gdjs.Top_32Down_32GameCode.GDplayer_95951Objects2.length ;i < len;++i) {
    gdjs.Top_32Down_32GameCode.GDplayer_95951Objects2[i].getBehavior("TopDownMovement").simulateLeftKey();
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "w");
if (isConditionTrue_0) {
{gdjs.evtTools.p2p.sendDataToAll("w", "");
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.p2p.onEvent("w", false);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("player_1"), gdjs.Top_32Down_32GameCode.GDplayer_95951Objects2);
{for(var i = 0, len = gdjs.Top_32Down_32GameCode.GDplayer_95951Objects2.length ;i < len;++i) {
    gdjs.Top_32Down_32GameCode.GDplayer_95951Objects2[i].getBehavior("TopDownMovement").simulateUpKey();
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "s");
if (isConditionTrue_0) {
{gdjs.evtTools.p2p.sendDataToAll("s", "");
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.p2p.onEvent("s", false);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("player_1"), gdjs.Top_32Down_32GameCode.GDplayer_95951Objects2);
{for(var i = 0, len = gdjs.Top_32Down_32GameCode.GDplayer_95951Objects2.length ;i < len;++i) {
    gdjs.Top_32Down_32GameCode.GDplayer_95951Objects2[i].getBehavior("TopDownMovement").simulateDownKey();
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "d");
if (isConditionTrue_0) {
{gdjs.evtTools.p2p.sendDataToAll("d", "");
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.p2p.onEvent("d", false);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("player_1"), gdjs.Top_32Down_32GameCode.GDplayer_95951Objects2);
{for(var i = 0, len = gdjs.Top_32Down_32GameCode.GDplayer_95951Objects2.length ;i < len;++i) {
    gdjs.Top_32Down_32GameCode.GDplayer_95951Objects2[i].getBehavior("TopDownMovement").simulateRightKey();
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "a");
if (isConditionTrue_0) {
{gdjs.evtTools.p2p.sendDataToAll("a", "");
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.p2p.onEvent("a", false);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("player_1"), gdjs.Top_32Down_32GameCode.GDplayer_95951Objects2);
{for(var i = 0, len = gdjs.Top_32Down_32GameCode.GDplayer_95951Objects2.length ;i < len;++i) {
    gdjs.Top_32Down_32GameCode.GDplayer_95951Objects2[i].getBehavior("TopDownMovement").simulateLeftKey();
}
}}

}


{



}


};gdjs.Top_32Down_32GameCode.mapOfGDgdjs_9546Top_959532Down_959532GameCode_9546GDwallsObjects2ObjectsGDgdjs_9546Top_959532Down_959532GameCode_9546GDkitchenObjects2ObjectsGDgdjs_9546Top_959532Down_959532GameCode_9546GDfurnitureObjects2Objects = Hashtable.newFrom({"walls": gdjs.Top_32Down_32GameCode.GDwallsObjects2, "kitchen": gdjs.Top_32Down_32GameCode.GDkitchenObjects2, "furniture": gdjs.Top_32Down_32GameCode.GDfurnitureObjects2});
gdjs.Top_32Down_32GameCode.mapOfGDgdjs_9546Top_959532Down_959532GameCode_9546GDwallsObjects2ObjectsGDgdjs_9546Top_959532Down_959532GameCode_9546GDkitchenObjects2ObjectsGDgdjs_9546Top_959532Down_959532GameCode_9546GDfurnitureObjects2Objects = Hashtable.newFrom({"walls": gdjs.Top_32Down_32GameCode.GDwallsObjects2, "kitchen": gdjs.Top_32Down_32GameCode.GDkitchenObjects2, "furniture": gdjs.Top_32Down_32GameCode.GDfurnitureObjects2});
gdjs.Top_32Down_32GameCode.mapOfGDgdjs_9546Top_959532Down_959532GameCode_9546GDbulletObjects2Objects = Hashtable.newFrom({"bullet": gdjs.Top_32Down_32GameCode.GDbulletObjects2});
gdjs.Top_32Down_32GameCode.eventsList1 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(9869748);
}
if (isConditionTrue_0) {
/* Reuse gdjs.Top_32Down_32GameCode.GDplayer_95952Objects2 */
gdjs.Top_32Down_32GameCode.GDbulletObjects2.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.Top_32Down_32GameCode.mapOfGDgdjs_9546Top_959532Down_959532GameCode_9546GDbulletObjects2Objects, (( gdjs.Top_32Down_32GameCode.GDplayer_95952Objects2.length === 0 ) ? 0 :gdjs.Top_32Down_32GameCode.GDplayer_95952Objects2[0].getPointX("shoot")), (( gdjs.Top_32Down_32GameCode.GDplayer_95952Objects2.length === 0 ) ? 0 :gdjs.Top_32Down_32GameCode.GDplayer_95952Objects2[0].getPointY("shoot")), "");
}{for(var i = 0, len = gdjs.Top_32Down_32GameCode.GDbulletObjects2.length ;i < len;++i) {
    gdjs.Top_32Down_32GameCode.GDbulletObjects2[i].setAngle((( gdjs.Top_32Down_32GameCode.GDplayer_95952Objects2.length === 0 ) ? 0 :gdjs.Top_32Down_32GameCode.GDplayer_95952Objects2[0].getAngle()));
}
}{for(var i = 0, len = gdjs.Top_32Down_32GameCode.GDbulletObjects2.length ;i < len;++i) {
    gdjs.Top_32Down_32GameCode.GDbulletObjects2[i].addPolarForce((( gdjs.Top_32Down_32GameCode.GDplayer_95952Objects2.length === 0 ) ? 0 :gdjs.Top_32Down_32GameCode.GDplayer_95952Objects2[0].getAngle()), 200, 1);
}
}}

}


};gdjs.Top_32Down_32GameCode.mapOfGDgdjs_9546Top_959532Down_959532GameCode_9546GDbulletObjects2Objects = Hashtable.newFrom({"bullet": gdjs.Top_32Down_32GameCode.GDbulletObjects2});
gdjs.Top_32Down_32GameCode.eventsList2 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(9871404);
}
if (isConditionTrue_0) {
/* Reuse gdjs.Top_32Down_32GameCode.GDplayer_95952Objects2 */
gdjs.Top_32Down_32GameCode.GDbulletObjects2.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.Top_32Down_32GameCode.mapOfGDgdjs_9546Top_959532Down_959532GameCode_9546GDbulletObjects2Objects, (( gdjs.Top_32Down_32GameCode.GDplayer_95952Objects2.length === 0 ) ? 0 :gdjs.Top_32Down_32GameCode.GDplayer_95952Objects2[0].getPointX("shoot")), (( gdjs.Top_32Down_32GameCode.GDplayer_95952Objects2.length === 0 ) ? 0 :gdjs.Top_32Down_32GameCode.GDplayer_95952Objects2[0].getPointY("shoot")), "");
}{for(var i = 0, len = gdjs.Top_32Down_32GameCode.GDbulletObjects2.length ;i < len;++i) {
    gdjs.Top_32Down_32GameCode.GDbulletObjects2[i].setAngle((( gdjs.Top_32Down_32GameCode.GDplayer_95952Objects2.length === 0 ) ? 0 :gdjs.Top_32Down_32GameCode.GDplayer_95952Objects2[0].getAngle()));
}
}{for(var i = 0, len = gdjs.Top_32Down_32GameCode.GDbulletObjects2.length ;i < len;++i) {
    gdjs.Top_32Down_32GameCode.GDbulletObjects2[i].addPolarForce((( gdjs.Top_32Down_32GameCode.GDplayer_95952Objects2.length === 0 ) ? 0 :gdjs.Top_32Down_32GameCode.GDplayer_95952Objects2[0].getAngle()), 200, 1);
}
}}

}


};gdjs.Top_32Down_32GameCode.mapOfGDgdjs_9546Top_959532Down_959532GameCode_9546GDbulletObjects2Objects = Hashtable.newFrom({"bullet": gdjs.Top_32Down_32GameCode.GDbulletObjects2});
gdjs.Top_32Down_32GameCode.eventsList3 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(9873420);
}
if (isConditionTrue_0) {
/* Reuse gdjs.Top_32Down_32GameCode.GDplayer_95951Objects2 */
gdjs.Top_32Down_32GameCode.GDbulletObjects2.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.Top_32Down_32GameCode.mapOfGDgdjs_9546Top_959532Down_959532GameCode_9546GDbulletObjects2Objects, (( gdjs.Top_32Down_32GameCode.GDplayer_95951Objects2.length === 0 ) ? 0 :gdjs.Top_32Down_32GameCode.GDplayer_95951Objects2[0].getPointX("shoot")), (( gdjs.Top_32Down_32GameCode.GDplayer_95951Objects2.length === 0 ) ? 0 :gdjs.Top_32Down_32GameCode.GDplayer_95951Objects2[0].getPointY("shoot")), "");
}{for(var i = 0, len = gdjs.Top_32Down_32GameCode.GDbulletObjects2.length ;i < len;++i) {
    gdjs.Top_32Down_32GameCode.GDbulletObjects2[i].setAngle((( gdjs.Top_32Down_32GameCode.GDplayer_95951Objects2.length === 0 ) ? 0 :gdjs.Top_32Down_32GameCode.GDplayer_95951Objects2[0].getAngle()));
}
}{for(var i = 0, len = gdjs.Top_32Down_32GameCode.GDbulletObjects2.length ;i < len;++i) {
    gdjs.Top_32Down_32GameCode.GDbulletObjects2[i].addPolarForce((( gdjs.Top_32Down_32GameCode.GDplayer_95951Objects2.length === 0 ) ? 0 :gdjs.Top_32Down_32GameCode.GDplayer_95951Objects2[0].getAngle()), 200, 1);
}
}}

}


};gdjs.Top_32Down_32GameCode.mapOfGDgdjs_9546Top_959532Down_959532GameCode_9546GDbulletObjects3Objects = Hashtable.newFrom({"bullet": gdjs.Top_32Down_32GameCode.GDbulletObjects3});
gdjs.Top_32Down_32GameCode.eventsList4 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(9875148);
}
if (isConditionTrue_0) {
gdjs.copyArray(gdjs.Top_32Down_32GameCode.GDplayer_95951Objects2, gdjs.Top_32Down_32GameCode.GDplayer_95951Objects3);

gdjs.Top_32Down_32GameCode.GDbulletObjects3.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.Top_32Down_32GameCode.mapOfGDgdjs_9546Top_959532Down_959532GameCode_9546GDbulletObjects3Objects, (( gdjs.Top_32Down_32GameCode.GDplayer_95951Objects3.length === 0 ) ? 0 :gdjs.Top_32Down_32GameCode.GDplayer_95951Objects3[0].getPointX("shoot")), (( gdjs.Top_32Down_32GameCode.GDplayer_95951Objects3.length === 0 ) ? 0 :gdjs.Top_32Down_32GameCode.GDplayer_95951Objects3[0].getPointY("shoot")), "");
}{for(var i = 0, len = gdjs.Top_32Down_32GameCode.GDbulletObjects3.length ;i < len;++i) {
    gdjs.Top_32Down_32GameCode.GDbulletObjects3[i].setAngle((( gdjs.Top_32Down_32GameCode.GDplayer_95951Objects3.length === 0 ) ? 0 :gdjs.Top_32Down_32GameCode.GDplayer_95951Objects3[0].getAngle()));
}
}{for(var i = 0, len = gdjs.Top_32Down_32GameCode.GDbulletObjects3.length ;i < len;++i) {
    gdjs.Top_32Down_32GameCode.GDbulletObjects3[i].addPolarForce((( gdjs.Top_32Down_32GameCode.GDplayer_95951Objects3.length === 0 ) ? 0 :gdjs.Top_32Down_32GameCode.GDplayer_95951Objects3[0].getAngle()), 200, 1);
}
}}

}


{


let isConditionTrue_0 = false;
{
}

}


};gdjs.Top_32Down_32GameCode.mapOfGDgdjs_9546Top_959532Down_959532GameCode_9546GDbulletObjects2Objects = Hashtable.newFrom({"bullet": gdjs.Top_32Down_32GameCode.GDbulletObjects2});
gdjs.Top_32Down_32GameCode.mapOfGDgdjs_9546Top_959532Down_959532GameCode_9546GDwallsObjects2ObjectsGDgdjs_9546Top_959532Down_959532GameCode_9546GDkitchenObjects2ObjectsGDgdjs_9546Top_959532Down_959532GameCode_9546GDfurnitureObjects2Objects = Hashtable.newFrom({"walls": gdjs.Top_32Down_32GameCode.GDwallsObjects2, "kitchen": gdjs.Top_32Down_32GameCode.GDkitchenObjects2, "furniture": gdjs.Top_32Down_32GameCode.GDfurnitureObjects2});
gdjs.Top_32Down_32GameCode.mapOfGDgdjs_9546Top_959532Down_959532GameCode_9546GDbulletObjects2Objects = Hashtable.newFrom({"bullet": gdjs.Top_32Down_32GameCode.GDbulletObjects2});
gdjs.Top_32Down_32GameCode.mapOfGDgdjs_9546Top_959532Down_959532GameCode_9546GDplayer_959595951Objects2Objects = Hashtable.newFrom({"player_1": gdjs.Top_32Down_32GameCode.GDplayer_95951Objects2});
gdjs.Top_32Down_32GameCode.mapOfGDgdjs_9546Top_959532Down_959532GameCode_9546GDbulletObjects2Objects = Hashtable.newFrom({"bullet": gdjs.Top_32Down_32GameCode.GDbulletObjects2});
gdjs.Top_32Down_32GameCode.mapOfGDgdjs_9546Top_959532Down_959532GameCode_9546GDplayer_959595952Objects2Objects = Hashtable.newFrom({"player_2": gdjs.Top_32Down_32GameCode.GDplayer_95952Objects2});
gdjs.Top_32Down_32GameCode.eventsList5 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("furniture"), gdjs.Top_32Down_32GameCode.GDfurnitureObjects2);
gdjs.copyArray(runtimeScene.getObjects("kitchen"), gdjs.Top_32Down_32GameCode.GDkitchenObjects2);
gdjs.copyArray(runtimeScene.getObjects("player_1"), gdjs.Top_32Down_32GameCode.GDplayer_95951Objects2);
gdjs.copyArray(runtimeScene.getObjects("player_2"), gdjs.Top_32Down_32GameCode.GDplayer_95952Objects2);
gdjs.copyArray(runtimeScene.getObjects("walls"), gdjs.Top_32Down_32GameCode.GDwallsObjects2);
{for(var i = 0, len = gdjs.Top_32Down_32GameCode.GDplayer_95951Objects2.length ;i < len;++i) {
    gdjs.Top_32Down_32GameCode.GDplayer_95951Objects2[i].separateFromObjectsList(gdjs.Top_32Down_32GameCode.mapOfGDgdjs_9546Top_959532Down_959532GameCode_9546GDwallsObjects2ObjectsGDgdjs_9546Top_959532Down_959532GameCode_9546GDkitchenObjects2ObjectsGDgdjs_9546Top_959532Down_959532GameCode_9546GDfurnitureObjects2Objects, false);
}
}{for(var i = 0, len = gdjs.Top_32Down_32GameCode.GDplayer_95952Objects2.length ;i < len;++i) {
    gdjs.Top_32Down_32GameCode.GDplayer_95952Objects2[i].separateFromObjectsList(gdjs.Top_32Down_32GameCode.mapOfGDgdjs_9546Top_959532Down_959532GameCode_9546GDwallsObjects2ObjectsGDgdjs_9546Top_959532Down_959532GameCode_9546GDkitchenObjects2ObjectsGDgdjs_9546Top_959532Down_959532GameCode_9546GDfurnitureObjects2Objects, false);
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "RShift");
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("player_2"), gdjs.Top_32Down_32GameCode.GDplayer_95952Objects2);
{for(var i = 0, len = gdjs.Top_32Down_32GameCode.GDplayer_95952Objects2.length ;i < len;++i) {
    gdjs.Top_32Down_32GameCode.GDplayer_95952Objects2[i].setAnimation(1);
}
}{gdjs.evtTools.p2p.sendDataToAll("p2shoot", "");
}
{ //Subevents
gdjs.Top_32Down_32GameCode.eventsList1(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.p2p.onEvent("p2shoot", false);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("player_2"), gdjs.Top_32Down_32GameCode.GDplayer_95952Objects2);
{for(var i = 0, len = gdjs.Top_32Down_32GameCode.GDplayer_95952Objects2.length ;i < len;++i) {
    gdjs.Top_32Down_32GameCode.GDplayer_95952Objects2[i].setAnimation(1);
}
}
{ //Subevents
gdjs.Top_32Down_32GameCode.eventsList2(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "LShift");
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("player_1"), gdjs.Top_32Down_32GameCode.GDplayer_95951Objects2);
{for(var i = 0, len = gdjs.Top_32Down_32GameCode.GDplayer_95951Objects2.length ;i < len;++i) {
    gdjs.Top_32Down_32GameCode.GDplayer_95951Objects2[i].setAnimation(1);
}
}{gdjs.evtTools.p2p.sendDataToAll("p1shoot", "");
}
{ //Subevents
gdjs.Top_32Down_32GameCode.eventsList3(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.p2p.onEvent("p1shoot", false);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("player_1"), gdjs.Top_32Down_32GameCode.GDplayer_95951Objects2);
{for(var i = 0, len = gdjs.Top_32Down_32GameCode.GDplayer_95951Objects2.length ;i < len;++i) {
    gdjs.Top_32Down_32GameCode.GDplayer_95951Objects2[i].setAnimation(1);
}
}
{ //Subevents
gdjs.Top_32Down_32GameCode.eventsList4(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("bullet"), gdjs.Top_32Down_32GameCode.GDbulletObjects2);
{for(var i = 0, len = gdjs.Top_32Down_32GameCode.GDbulletObjects2.length ;i < len;++i) {
    gdjs.Top_32Down_32GameCode.GDbulletObjects2[i].setZOrder(10000);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("bullet"), gdjs.Top_32Down_32GameCode.GDbulletObjects2);
gdjs.copyArray(runtimeScene.getObjects("furniture"), gdjs.Top_32Down_32GameCode.GDfurnitureObjects2);
gdjs.copyArray(runtimeScene.getObjects("kitchen"), gdjs.Top_32Down_32GameCode.GDkitchenObjects2);
gdjs.copyArray(runtimeScene.getObjects("walls"), gdjs.Top_32Down_32GameCode.GDwallsObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Top_32Down_32GameCode.mapOfGDgdjs_9546Top_959532Down_959532GameCode_9546GDbulletObjects2Objects, gdjs.Top_32Down_32GameCode.mapOfGDgdjs_9546Top_959532Down_959532GameCode_9546GDwallsObjects2ObjectsGDgdjs_9546Top_959532Down_959532GameCode_9546GDkitchenObjects2ObjectsGDgdjs_9546Top_959532Down_959532GameCode_9546GDfurnitureObjects2Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
/* Reuse gdjs.Top_32Down_32GameCode.GDbulletObjects2 */
{for(var i = 0, len = gdjs.Top_32Down_32GameCode.GDbulletObjects2.length ;i < len;++i) {
    gdjs.Top_32Down_32GameCode.GDbulletObjects2[i].deleteFromScene(runtimeScene);
}
}}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("winner"), gdjs.Top_32Down_32GameCode.GDwinnerObjects2);
{for(var i = 0, len = gdjs.Top_32Down_32GameCode.GDwinnerObjects2.length ;i < len;++i) {
    gdjs.Top_32Down_32GameCode.GDwinnerObjects2[i].setX(gdjs.evtTools.window.getGameResolutionWidth(runtimeScene) / 2 - (gdjs.Top_32Down_32GameCode.GDwinnerObjects2[i].getWidth()) / 2);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("bullet"), gdjs.Top_32Down_32GameCode.GDbulletObjects2);
gdjs.copyArray(runtimeScene.getObjects("player_1"), gdjs.Top_32Down_32GameCode.GDplayer_95951Objects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Top_32Down_32GameCode.mapOfGDgdjs_9546Top_959532Down_959532GameCode_9546GDbulletObjects2Objects, gdjs.Top_32Down_32GameCode.mapOfGDgdjs_9546Top_959532Down_959532GameCode_9546GDplayer_959595951Objects2Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(9878196);
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.Top_32Down_32GameCode.GDbulletObjects2 */
/* Reuse gdjs.Top_32Down_32GameCode.GDplayer_95951Objects2 */
gdjs.copyArray(runtimeScene.getObjects("winner"), gdjs.Top_32Down_32GameCode.GDwinnerObjects2);
{gdjs.evtTools.p2p.sendDataToAll("p1dead", "");
}{for(var i = 0, len = gdjs.Top_32Down_32GameCode.GDbulletObjects2.length ;i < len;++i) {
    gdjs.Top_32Down_32GameCode.GDbulletObjects2[i].deleteFromScene(runtimeScene);
}
}{for(var i = 0, len = gdjs.Top_32Down_32GameCode.GDplayer_95951Objects2.length ;i < len;++i) {
    gdjs.Top_32Down_32GameCode.GDplayer_95951Objects2[i].deleteFromScene(runtimeScene);
}
}{for(var i = 0, len = gdjs.Top_32Down_32GameCode.GDwinnerObjects2.length ;i < len;++i) {
    gdjs.Top_32Down_32GameCode.GDwinnerObjects2[i].setString("Player 1 won");
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.p2p.onEvent("p1dead", false);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("player_1"), gdjs.Top_32Down_32GameCode.GDplayer_95951Objects2);
gdjs.copyArray(runtimeScene.getObjects("winner"), gdjs.Top_32Down_32GameCode.GDwinnerObjects2);
{for(var i = 0, len = gdjs.Top_32Down_32GameCode.GDplayer_95951Objects2.length ;i < len;++i) {
    gdjs.Top_32Down_32GameCode.GDplayer_95951Objects2[i].deleteFromScene(runtimeScene);
}
}{for(var i = 0, len = gdjs.Top_32Down_32GameCode.GDwinnerObjects2.length ;i < len;++i) {
    gdjs.Top_32Down_32GameCode.GDwinnerObjects2[i].setString("Player 1 won");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("bullet"), gdjs.Top_32Down_32GameCode.GDbulletObjects2);
gdjs.copyArray(runtimeScene.getObjects("player_2"), gdjs.Top_32Down_32GameCode.GDplayer_95952Objects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Top_32Down_32GameCode.mapOfGDgdjs_9546Top_959532Down_959532GameCode_9546GDbulletObjects2Objects, gdjs.Top_32Down_32GameCode.mapOfGDgdjs_9546Top_959532Down_959532GameCode_9546GDplayer_959595952Objects2Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(9880100);
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.Top_32Down_32GameCode.GDbulletObjects2 */
/* Reuse gdjs.Top_32Down_32GameCode.GDplayer_95952Objects2 */
gdjs.copyArray(runtimeScene.getObjects("winner"), gdjs.Top_32Down_32GameCode.GDwinnerObjects2);
{gdjs.evtTools.p2p.sendDataToAll("p2dead", "");
}{for(var i = 0, len = gdjs.Top_32Down_32GameCode.GDbulletObjects2.length ;i < len;++i) {
    gdjs.Top_32Down_32GameCode.GDbulletObjects2[i].deleteFromScene(runtimeScene);
}
}{for(var i = 0, len = gdjs.Top_32Down_32GameCode.GDwinnerObjects2.length ;i < len;++i) {
    gdjs.Top_32Down_32GameCode.GDwinnerObjects2[i].setString("Player 2 won");
}
}{for(var i = 0, len = gdjs.Top_32Down_32GameCode.GDplayer_95952Objects2.length ;i < len;++i) {
    gdjs.Top_32Down_32GameCode.GDplayer_95952Objects2[i].deleteFromScene(runtimeScene);
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.p2p.onEvent("p2dead", false);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("player_1"), gdjs.Top_32Down_32GameCode.GDplayer_95951Objects1);
gdjs.copyArray(runtimeScene.getObjects("winner"), gdjs.Top_32Down_32GameCode.GDwinnerObjects1);
{for(var i = 0, len = gdjs.Top_32Down_32GameCode.GDplayer_95951Objects1.length ;i < len;++i) {
    gdjs.Top_32Down_32GameCode.GDplayer_95951Objects1[i].deleteFromScene(runtimeScene);
}
}{for(var i = 0, len = gdjs.Top_32Down_32GameCode.GDwinnerObjects1.length ;i < len;++i) {
    gdjs.Top_32Down_32GameCode.GDwinnerObjects1[i].setString("Player 1 won");
}
}}

}


};gdjs.Top_32Down_32GameCode.eventsList6 = function(runtimeScene) {

{


gdjs.Top_32Down_32GameCode.eventsList0(runtimeScene);
}


{


gdjs.Top_32Down_32GameCode.eventsList5(runtimeScene);
}


};

gdjs.Top_32Down_32GameCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Top_32Down_32GameCode.GDplayer_95952Objects1.length = 0;
gdjs.Top_32Down_32GameCode.GDplayer_95952Objects2.length = 0;
gdjs.Top_32Down_32GameCode.GDplayer_95952Objects3.length = 0;
gdjs.Top_32Down_32GameCode.GDplayer_95952Objects4.length = 0;
gdjs.Top_32Down_32GameCode.GDplayer_95951Objects1.length = 0;
gdjs.Top_32Down_32GameCode.GDplayer_95951Objects2.length = 0;
gdjs.Top_32Down_32GameCode.GDplayer_95951Objects3.length = 0;
gdjs.Top_32Down_32GameCode.GDplayer_95951Objects4.length = 0;
gdjs.Top_32Down_32GameCode.GDgrassObjects1.length = 0;
gdjs.Top_32Down_32GameCode.GDgrassObjects2.length = 0;
gdjs.Top_32Down_32GameCode.GDgrassObjects3.length = 0;
gdjs.Top_32Down_32GameCode.GDgrassObjects4.length = 0;
gdjs.Top_32Down_32GameCode.GDwallsObjects1.length = 0;
gdjs.Top_32Down_32GameCode.GDwallsObjects2.length = 0;
gdjs.Top_32Down_32GameCode.GDwallsObjects3.length = 0;
gdjs.Top_32Down_32GameCode.GDwallsObjects4.length = 0;
gdjs.Top_32Down_32GameCode.GDfloorObjects1.length = 0;
gdjs.Top_32Down_32GameCode.GDfloorObjects2.length = 0;
gdjs.Top_32Down_32GameCode.GDfloorObjects3.length = 0;
gdjs.Top_32Down_32GameCode.GDfloorObjects4.length = 0;
gdjs.Top_32Down_32GameCode.GDkitchenObjects1.length = 0;
gdjs.Top_32Down_32GameCode.GDkitchenObjects2.length = 0;
gdjs.Top_32Down_32GameCode.GDkitchenObjects3.length = 0;
gdjs.Top_32Down_32GameCode.GDkitchenObjects4.length = 0;
gdjs.Top_32Down_32GameCode.GDfurnitureObjects1.length = 0;
gdjs.Top_32Down_32GameCode.GDfurnitureObjects2.length = 0;
gdjs.Top_32Down_32GameCode.GDfurnitureObjects3.length = 0;
gdjs.Top_32Down_32GameCode.GDfurnitureObjects4.length = 0;
gdjs.Top_32Down_32GameCode.GDwinnerObjects1.length = 0;
gdjs.Top_32Down_32GameCode.GDwinnerObjects2.length = 0;
gdjs.Top_32Down_32GameCode.GDwinnerObjects3.length = 0;
gdjs.Top_32Down_32GameCode.GDwinnerObjects4.length = 0;
gdjs.Top_32Down_32GameCode.GDbulletObjects1.length = 0;
gdjs.Top_32Down_32GameCode.GDbulletObjects2.length = 0;
gdjs.Top_32Down_32GameCode.GDbulletObjects3.length = 0;
gdjs.Top_32Down_32GameCode.GDbulletObjects4.length = 0;

gdjs.Top_32Down_32GameCode.eventsList6(runtimeScene);

return;

}

gdjs['Top_32Down_32GameCode'] = gdjs.Top_32Down_32GameCode;
