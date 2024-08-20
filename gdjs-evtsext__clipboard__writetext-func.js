
if (typeof gdjs.evtsExt__Clipboard__WriteText !== "undefined") {
  gdjs.evtsExt__Clipboard__WriteText.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__Clipboard__WriteText = {};


gdjs.evtsExt__Clipboard__WriteText.userFunc0x95e388 = function GDJSInlineCode(runtimeScene, eventsFunctionContext) {
"use strict";
var electron = runtimeScene.getGame().getRenderer().getElectron();
if (!electron || !electron.clipboard) {
    return;
}
electron.clipboard.writeText(eventsFunctionContext.getArgument("text"));

};
gdjs.evtsExt__Clipboard__WriteText.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


gdjs.evtsExt__Clipboard__WriteText.userFunc0x95e388(runtimeScene, typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined);

}


};

gdjs.evtsExt__Clipboard__WriteText.func = function(runtimeScene, text, parentEventsFunctionContext) {
var eventsFunctionContext = {
  _objectsMap: {
},
  _objectArraysMap: {
},
  _behaviorNamesMap: {
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("Clipboard"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("Clipboard"),
  localVariables: [],
  getObjects: function(objectName) {
    return eventsFunctionContext._objectArraysMap[objectName] || [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName] || behaviorName;
  },
  createObject: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      const object = parentEventsFunctionContext ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
      if (object) {
        objectsList.get(objectsList.firstKey()).push(object);
        eventsFunctionContext._objectArraysMap[objectName].push(object);
      }
      return object;    }
    return null;
  },
  getInstancesCountOnScene: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    let count = 0;
    if (objectsList) {
      for(const objectName in objectsList.items)
        count += parentEventsFunctionContext ?
parentEventsFunctionContext.getInstancesCountOnScene(objectName) :
        runtimeScene.getInstancesCountOnScene(objectName);
    }
    return count;
  },
  getLayer: function(layerName) {
    return runtimeScene.getLayer(layerName);
  },
  getArgument: function(argName) {
if (argName === "text") return text;
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};


gdjs.evtsExt__Clipboard__WriteText.eventsList0(runtimeScene, eventsFunctionContext);

return;
}

gdjs.evtsExt__Clipboard__WriteText.registeredGdjsCallbacks = [];