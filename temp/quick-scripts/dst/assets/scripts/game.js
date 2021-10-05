
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/game.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
                    }
                    if (nodeEnv) {
                        __define(__module.exports, __require, __module);
                    }
                    else {
                        __quick_compile_project__.registerModuleFunc(__filename, function () {
                            __define(__module.exports, __require, __module);
                        });
                    }
                })();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL2dhbWUuanMiXSwibmFtZXMiOlsiY2MiLCJDbGFzcyIsIkNvbXBvbmVudCIsInByb3BlcnRpZXMiLCJhbGVydFByZWZhYiIsInR5cGUiLCJQcmVmYWIiLCJpbml0Iiwic2hvd0FsZXJ0IiwiY29uc29sZSIsImxvZyIsImNvbW1vbkFsZXJ0IiwiaW5zdGFudGlhdGUiLCJnZXRDb21wb25lbnQiLCJ0aXRsZSIsInRleHQiLCJub2RlIiwiYWRkQ2hpbGQiLCJzaG93Iiwib25Mb2FkIiwic3RhcnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBQSxFQUFFLENBQUNDLEtBQUgsQ0FBUztBQUNMLGFBQVNELEVBQUUsQ0FBQ0UsU0FEUDtBQUdMQyxFQUFBQSxVQUFVLEVBQUU7QUFFUjtBQUNBQyxJQUFBQSxXQUFXLEVBQUU7QUFDVCxpQkFBUyxJQURBO0FBRVRDLE1BQUFBLElBQUksRUFBRUwsRUFBRSxDQUFDTTtBQUZBO0FBSEwsR0FIUDtBQWFMO0FBQ0FDLEVBQUFBLElBZEssa0JBY0UsQ0FBRSxDQWRKO0FBZ0JMO0FBQ0FDLEVBQUFBLFNBakJLLHVCQWlCTztBQUNSQyxJQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWSxZQUFaO0FBQ0EsUUFBSUMsV0FBVyxHQUFHWCxFQUFFLENBQUNZLFdBQUgsQ0FBZSxLQUFLUixXQUFwQixFQUFpQ1MsWUFBakMsQ0FBOEMsYUFBOUMsQ0FBbEI7QUFDQUYsSUFBQUEsV0FBVyxDQUFDRyxLQUFaLEdBQW9CLEtBQXBCO0FBQ0FILElBQUFBLFdBQVcsQ0FBQ0ksSUFBWixHQUFtQixLQUFuQjtBQUNBLFNBQUtDLElBQUwsQ0FBVUMsUUFBVixDQUFtQk4sV0FBVyxDQUFDSyxJQUEvQjtBQUNBTCxJQUFBQSxXQUFXLENBQUNPLElBQVo7QUFDSCxHQXhCSTtBQTBCTDtBQUVBQyxFQUFBQSxNQTVCSyxvQkE0QkssQ0FFVCxDQTlCSTtBQWdDTEMsRUFBQUEsS0FoQ0ssbUJBZ0NJLENBRVIsQ0FsQ0ksQ0FvQ0w7O0FBcENLLENBQVQiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8qXG4gKiBAQXV0aG9yOiB5b3VyIG5hbWVcbiAqIEBEYXRlOiAyMDIxLTEwLTA0IDE3OjExOjIwXG4gKiBATGFzdEVkaXRUaW1lOiAyMDIxLTEwLTA0IDE4OjM3OjQ3XG4gKiBATGFzdEVkaXRvcnM6IFBsZWFzZSBzZXQgTGFzdEVkaXRvcnNcbiAqIEBEZXNjcmlwdGlvbjogSW4gVXNlciBTZXR0aW5ncyBFZGl0XG4gKiBARmlsZVBhdGg6IC92bi1nYW1lcy9hc3NldHMvc2NyaXB0cy9Db21tb25BbGVydC5qc1xuICovXG5cbmNjLkNsYXNzKHtcbiAgICBleHRlbmRzOiBjYy5Db21wb25lbnQsXG5cbiAgICBwcm9wZXJ0aWVzOiB7XG5cbiAgICAgICAgLy8g5by556qX6aKE5Yi26LWE5rqQXG4gICAgICAgIGFsZXJ0UHJlZmFiOiB7XG4gICAgICAgICAgICBkZWZhdWx0OiBudWxsLFxuICAgICAgICAgICAgdHlwZTogY2MuUHJlZmFiXG4gICAgICAgIH0sXG4gICAgICAgIFxuICAgIH0sXG5cbiAgICAvLyDliJ3lp4vljJblvLnnqpfmlbDmja5cbiAgICBpbml0KCkge30sXG5cbiAgICAvLyDmiZPlvIDlvLnnqpdcbiAgICBzaG93QWxlcnQoKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwic2hvdyBBbGVydFwiKTtcbiAgICAgICAgbGV0IGNvbW1vbkFsZXJ0ID0gY2MuaW5zdGFudGlhdGUodGhpcy5hbGVydFByZWZhYikuZ2V0Q29tcG9uZW50KFwiQ29tbW9uQWxlcnRcIik7XG4gICAgICAgIGNvbW1vbkFsZXJ0LnRpdGxlID0gXCLmj5DnpLoxXCI7XG4gICAgICAgIGNvbW1vbkFsZXJ0LnRleHQgPSBcIuaWh+WtlzFcIjtcbiAgICAgICAgdGhpcy5ub2RlLmFkZENoaWxkKGNvbW1vbkFsZXJ0Lm5vZGUpO1xuICAgICAgICBjb21tb25BbGVydC5zaG93KCk7XG4gICAgfSxcblxuICAgIC8vIExJRkUtQ1lDTEUgQ0FMTEJBQ0tTOlxuXG4gICAgb25Mb2FkICgpIHtcblxuICAgIH0sXG5cbiAgICBzdGFydCAoKSB7XG5cbiAgICB9LFxuXG4gICAgLy8gdXBkYXRlIChkdCkge30sXG59KTtcbiJdfQ==