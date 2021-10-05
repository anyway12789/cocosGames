"use strict";
cc._RF.push(module, '7ed7b1NSwVMaJ/tuJik1PMt', 'CommonAlert');
// scripts/CommonAlert.js

"use strict";

/*
 * @Author: your name
 * @Date: 2021-10-04 17:11:20
 * @LastEditTime: 2021-10-04 18:42:56
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /vn-games/assets/scripts/CommonAlert.js
 */
cc.Class({
  "extends": cc.Component,
  properties: {
    title: "提示",
    text: "确定开始游戏吗11？"
  },
  // 初始化弹窗数据
  init: function init() {},
  // 显示弹窗
  show: function show() {
    console.log("show");
  },
  // 隐藏弹窗
  hide: function hide() {},
  // cancel回调
  onCancel: function onCancel(callback) {
    this.hide();
    console.log('calcel click');

    if (typeof callback === 'function') {
      callback();
    }
  },
  // yes回调
  onYes: function onYes(callback) {
    this.hide();
    console.log('yes click');

    if (typeof callback === 'function') {
      callback();
    }
  },
  // LIFE-CYCLE CALLBACKS:
  // onLoad () {},
  start: function start() {} // update (dt) {},

});

cc._RF.pop();