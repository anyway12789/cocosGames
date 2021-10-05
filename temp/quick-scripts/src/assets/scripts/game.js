"use strict";
cc._RF.push(module, '62c24b/vo9DwbcpICTujdiW', 'game');
// scripts/game.js

"use strict";

/*
 * @Author: your name
 * @Date: 2021-10-04 17:11:20
 * @LastEditTime: 2021-10-04 18:37:47
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /vn-games/assets/scripts/CommonAlert.js
 */
cc.Class({
  "extends": cc.Component,
  properties: {
    // 弹窗预制资源
    alertPrefab: {
      "default": null,
      type: cc.Prefab
    }
  },
  // 初始化弹窗数据
  init: function init() {},
  // 打开弹窗
  showAlert: function showAlert() {
    console.log("show Alert");
    var commonAlert = cc.instantiate(this.alertPrefab).getComponent("CommonAlert");
    commonAlert.title = "提示1";
    commonAlert.text = "文字1";
    this.node.addChild(commonAlert.node);
    commonAlert.show();
  },
  // LIFE-CYCLE CALLBACKS:
  onLoad: function onLoad() {},
  start: function start() {} // update (dt) {},

});

cc._RF.pop();