
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/CommonAlert.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL0NvbW1vbkFsZXJ0LmpzIl0sIm5hbWVzIjpbImNjIiwiQ2xhc3MiLCJDb21wb25lbnQiLCJwcm9wZXJ0aWVzIiwidGl0bGUiLCJ0ZXh0IiwiaW5pdCIsInNob3ciLCJjb25zb2xlIiwibG9nIiwiaGlkZSIsIm9uQ2FuY2VsIiwiY2FsbGJhY2siLCJvblllcyIsInN0YXJ0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQUEsRUFBRSxDQUFDQyxLQUFILENBQVM7QUFDTCxhQUFTRCxFQUFFLENBQUNFLFNBRFA7QUFHTEMsRUFBQUEsVUFBVSxFQUFFO0FBQ1JDLElBQUFBLEtBQUssRUFBRSxJQURDO0FBRVJDLElBQUFBLElBQUksRUFBRTtBQUZFLEdBSFA7QUFRTDtBQUNBQyxFQUFBQSxJQVRLLGtCQVNFLENBQUUsQ0FUSjtBQVdMO0FBQ0FDLEVBQUFBLElBWkssa0JBWUU7QUFDSEMsSUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVksTUFBWjtBQUNILEdBZEk7QUFnQkw7QUFDQUMsRUFBQUEsSUFqQkssa0JBaUJFLENBQUUsQ0FqQko7QUFtQkw7QUFDQUMsRUFBQUEsUUFwQkssb0JBb0JJQyxRQXBCSixFQW9CYztBQUNmLFNBQUtGLElBQUw7QUFDQUYsSUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVksY0FBWjs7QUFDQSxRQUFHLE9BQU9HLFFBQVAsS0FBb0IsVUFBdkIsRUFBa0M7QUFDOUJBLE1BQUFBLFFBQVE7QUFDWDtBQUNKLEdBMUJJO0FBNEJMO0FBQ0FDLEVBQUFBLEtBN0JLLGlCQTZCQ0QsUUE3QkQsRUE2Qlc7QUFDWixTQUFLRixJQUFMO0FBQ0FGLElBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLFdBQVo7O0FBQ0EsUUFBRyxPQUFPRyxRQUFQLEtBQW9CLFVBQXZCLEVBQWtDO0FBQzlCQSxNQUFBQSxRQUFRO0FBQ1g7QUFDSixHQW5DSTtBQXFDTDtBQUVBO0FBRUFFLEVBQUFBLEtBekNLLG1CQXlDSSxDQUVSLENBM0NJLENBNkNMOztBQTdDSyxDQUFUIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvKlxuICogQEF1dGhvcjogeW91ciBuYW1lXG4gKiBARGF0ZTogMjAyMS0xMC0wNCAxNzoxMToyMFxuICogQExhc3RFZGl0VGltZTogMjAyMS0xMC0wNCAxODo0Mjo1NlxuICogQExhc3RFZGl0b3JzOiBQbGVhc2Ugc2V0IExhc3RFZGl0b3JzXG4gKiBARGVzY3JpcHRpb246IEluIFVzZXIgU2V0dGluZ3MgRWRpdFxuICogQEZpbGVQYXRoOiAvdm4tZ2FtZXMvYXNzZXRzL3NjcmlwdHMvQ29tbW9uQWxlcnQuanNcbiAqL1xuXG5jYy5DbGFzcyh7XG4gICAgZXh0ZW5kczogY2MuQ29tcG9uZW50LFxuXG4gICAgcHJvcGVydGllczoge1xuICAgICAgICB0aXRsZTogXCLmj5DnpLpcIixcbiAgICAgICAgdGV4dDogXCLnoa7lrprlvIDlp4vmuLjmiI/lkJcxMe+8n1wiLFxuICAgIH0sXG5cbiAgICAvLyDliJ3lp4vljJblvLnnqpfmlbDmja5cbiAgICBpbml0KCkge30sXG5cbiAgICAvLyDmmL7npLrlvLnnqpdcbiAgICBzaG93KCkge1xuICAgICAgICBjb25zb2xlLmxvZyhcInNob3dcIik7XG4gICAgfSxcblxuICAgIC8vIOmakOiXj+W8ueeql1xuICAgIGhpZGUoKSB7fSxcblxuICAgIC8vIGNhbmNlbOWbnuiwg1xuICAgIG9uQ2FuY2VsKGNhbGxiYWNrKSB7XG4gICAgICAgIHRoaXMuaGlkZSgpO1xuICAgICAgICBjb25zb2xlLmxvZygnY2FsY2VsIGNsaWNrJyk7XG4gICAgICAgIGlmKHR5cGVvZiBjYWxsYmFjayA9PT0gJ2Z1bmN0aW9uJyl7XG4gICAgICAgICAgICBjYWxsYmFjaygpO1xuICAgICAgICB9XG4gICAgfSxcblxuICAgIC8vIHllc+Wbnuiwg1xuICAgIG9uWWVzKGNhbGxiYWNrKSB7XG4gICAgICAgIHRoaXMuaGlkZSgpO1xuICAgICAgICBjb25zb2xlLmxvZygneWVzIGNsaWNrJyk7XG4gICAgICAgIGlmKHR5cGVvZiBjYWxsYmFjayA9PT0gJ2Z1bmN0aW9uJyl7XG4gICAgICAgICAgICBjYWxsYmFjaygpO1xuICAgICAgICB9XG4gICAgfSxcblxuICAgIC8vIExJRkUtQ1lDTEUgQ0FMTEJBQ0tTOlxuXG4gICAgLy8gb25Mb2FkICgpIHt9LFxuXG4gICAgc3RhcnQgKCkge1xuXG4gICAgfSxcblxuICAgIC8vIHVwZGF0ZSAoZHQpIHt9LFxufSk7XG4iXX0=