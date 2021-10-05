
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/__qc_index__.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}
require('./assets/scripts/CommonAlert');
require('./assets/scripts/dragonWidget');
require('./assets/scripts/game');

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
//------QC-SOURCE-SPLIT------

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
//------QC-SOURCE-SPLIT------

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
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/dragonWidget.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'c5859qhYjFOL6MoBRk1lIPv', 'dragonWidget');
// scripts/dragonWidget.js

"use strict";

/*
 * @Author: your name
 * @Date: 2021-10-05 16:15:17
 * @LastEditTime: 2021-10-05 16:15:55
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: /vn-games/assets/scripts/dragonWidget.js
 */
var AutoScaleType = cc.Enum({
  WidthAutoScale: 1,
  HeightAutoScale: 2,
  FixedWidth: 3,
  FixedHeight: 4
});
cc.Class({
  "extends": cc.Component,
  editor: {
    menu: "custom/AddAutoScale"
  },
  properties: {
    autoScaleType: {
      "default": AutoScaleType.FixedWidth,
      type: AutoScaleType
    }
  },
  start: function start() {
    //适配宽度模式  (ps 只用于龙骨动画节点，其他节点最好采用cocos自带的widget组件来适配)
    console.log("----------------scale--" + this.node.name + "-----------");
    console.log("scale>>getVisibleSize:", cc.view.getVisibleSize().width, cc.view.getVisibleSize().height);
    console.log("scale>>>getFrameSize", cc.view.getFrameSize().width, cc.view.getFrameSize().height);
    console.log("scale>>canvas>", cc.view.getCanvasSize().width, cc.view.getCanvasSize().height);
    console.log("scale>>getDesignResolutionSize", cc.view.getDesignResolutionSize().width, cc.view.getDesignResolutionSize().height); //当前屏幕的分辨率

    var screenSize = cc.view.getVisibleSize(); //设计的分辨率

    var designResolutionSize = cc.view.getDesignResolutionSize();
    var scale;

    switch (this.autoScaleType) {
      case AutoScaleType.WidthAutoScale:
        scale = screenSize.width / designResolutionSize.width;
        this.node.setScale(scale, 1);
        break;

      case AutoScaleType.HeightAutoScale:
        scale = screenSize.height / designResolutionSize.height;
        this.node.setScale(1, scale);
        break;

      case AutoScaleType.FixedWidth:
        scale = screenSize.width / designResolutionSize.width;
        this.node.setScale(scale);
        break;

      case AutoScaleType.FixedHeight:
        scale = screenSize.height / designResolutionSize.height;
        this.node.setScale(scale);
        break;
    }

    console.log("sceneSclae", scale);
  }
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL2RyYWdvbldpZGdldC5qcyJdLCJuYW1lcyI6WyJBdXRvU2NhbGVUeXBlIiwiY2MiLCJFbnVtIiwiV2lkdGhBdXRvU2NhbGUiLCJIZWlnaHRBdXRvU2NhbGUiLCJGaXhlZFdpZHRoIiwiRml4ZWRIZWlnaHQiLCJDbGFzcyIsIkNvbXBvbmVudCIsImVkaXRvciIsIm1lbnUiLCJwcm9wZXJ0aWVzIiwiYXV0b1NjYWxlVHlwZSIsInR5cGUiLCJzdGFydCIsImNvbnNvbGUiLCJsb2ciLCJub2RlIiwibmFtZSIsInZpZXciLCJnZXRWaXNpYmxlU2l6ZSIsIndpZHRoIiwiaGVpZ2h0IiwiZ2V0RnJhbWVTaXplIiwiZ2V0Q2FudmFzU2l6ZSIsImdldERlc2lnblJlc29sdXRpb25TaXplIiwic2NyZWVuU2l6ZSIsImRlc2lnblJlc29sdXRpb25TaXplIiwic2NhbGUiLCJzZXRTY2FsZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSUEsYUFBYSxHQUFHQyxFQUFFLENBQUNDLElBQUgsQ0FBUTtBQUN4QkMsRUFBQUEsY0FBYyxFQUFFLENBRFE7QUFFeEJDLEVBQUFBLGVBQWUsRUFBRSxDQUZPO0FBR3hCQyxFQUFBQSxVQUFVLEVBQUUsQ0FIWTtBQUl4QkMsRUFBQUEsV0FBVyxFQUFFO0FBSlcsQ0FBUixDQUFwQjtBQU1BTCxFQUFFLENBQUNNLEtBQUgsQ0FBUztBQUNMLGFBQVNOLEVBQUUsQ0FBQ08sU0FEUDtBQUVMQyxFQUFBQSxNQUFNLEVBQUM7QUFDSEMsSUFBQUEsSUFBSSxFQUFDO0FBREYsR0FGRjtBQUtMQyxFQUFBQSxVQUFVLEVBQUU7QUFDUkMsSUFBQUEsYUFBYSxFQUFFO0FBQ1gsaUJBQVNaLGFBQWEsQ0FBQ0ssVUFEWjtBQUVYUSxNQUFBQSxJQUFJLEVBQUViO0FBRks7QUFEUCxHQUxQO0FBWUxjLEVBQUFBLEtBWkssbUJBWUc7QUFDSjtBQUNBQyxJQUFBQSxPQUFPLENBQUNDLEdBQVIsNkJBQXNDLEtBQUtDLElBQUwsQ0FBVUMsSUFBaEQ7QUFDQUgsSUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVksd0JBQVosRUFBcUNmLEVBQUUsQ0FBQ2tCLElBQUgsQ0FBUUMsY0FBUixHQUF5QkMsS0FBOUQsRUFBb0VwQixFQUFFLENBQUNrQixJQUFILENBQVFDLGNBQVIsR0FBeUJFLE1BQTdGO0FBQ0FQLElBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLHNCQUFaLEVBQW1DZixFQUFFLENBQUNrQixJQUFILENBQVFJLFlBQVIsR0FBdUJGLEtBQTFELEVBQWdFcEIsRUFBRSxDQUFDa0IsSUFBSCxDQUFRSSxZQUFSLEdBQXVCRCxNQUF2RjtBQUNBUCxJQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWSxnQkFBWixFQUE2QmYsRUFBRSxDQUFDa0IsSUFBSCxDQUFRSyxhQUFSLEdBQXdCSCxLQUFyRCxFQUEyRHBCLEVBQUUsQ0FBQ2tCLElBQUgsQ0FBUUssYUFBUixHQUF3QkYsTUFBbkY7QUFDQVAsSUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVksZ0NBQVosRUFBNkNmLEVBQUUsQ0FBQ2tCLElBQUgsQ0FBUU0sdUJBQVIsR0FBa0NKLEtBQS9FLEVBQXFGcEIsRUFBRSxDQUFDa0IsSUFBSCxDQUFRTSx1QkFBUixHQUFrQ0gsTUFBdkgsRUFOSSxDQU9KOztBQUNBLFFBQUlJLFVBQVUsR0FBR3pCLEVBQUUsQ0FBQ2tCLElBQUgsQ0FBUUMsY0FBUixFQUFqQixDQVJJLENBU0o7O0FBQ0EsUUFBSU8sb0JBQW9CLEdBQUcxQixFQUFFLENBQUNrQixJQUFILENBQVFNLHVCQUFSLEVBQTNCO0FBQ0EsUUFBSUcsS0FBSjs7QUFDQSxZQUFRLEtBQUtoQixhQUFiO0FBQ0ksV0FBS1osYUFBYSxDQUFDRyxjQUFuQjtBQUNJeUIsUUFBQUEsS0FBSyxHQUFHRixVQUFVLENBQUNMLEtBQVgsR0FBbUJNLG9CQUFvQixDQUFDTixLQUFoRDtBQUNBLGFBQUtKLElBQUwsQ0FBVVksUUFBVixDQUFtQkQsS0FBbkIsRUFBeUIsQ0FBekI7QUFDQTs7QUFDSixXQUFLNUIsYUFBYSxDQUFDSSxlQUFuQjtBQUNJd0IsUUFBQUEsS0FBSyxHQUFHRixVQUFVLENBQUNKLE1BQVgsR0FBb0JLLG9CQUFvQixDQUFDTCxNQUFqRDtBQUNBLGFBQUtMLElBQUwsQ0FBVVksUUFBVixDQUFtQixDQUFuQixFQUFxQkQsS0FBckI7QUFDQTs7QUFDSixXQUFLNUIsYUFBYSxDQUFDSyxVQUFuQjtBQUNJdUIsUUFBQUEsS0FBSyxHQUFHRixVQUFVLENBQUNMLEtBQVgsR0FBbUJNLG9CQUFvQixDQUFDTixLQUFoRDtBQUNBLGFBQUtKLElBQUwsQ0FBVVksUUFBVixDQUFtQkQsS0FBbkI7QUFDQTs7QUFDSixXQUFLNUIsYUFBYSxDQUFDTSxXQUFuQjtBQUNJc0IsUUFBQUEsS0FBSyxHQUFHRixVQUFVLENBQUNKLE1BQVgsR0FBb0JLLG9CQUFvQixDQUFDTCxNQUFqRDtBQUNBLGFBQUtMLElBQUwsQ0FBVVksUUFBVixDQUFtQkQsS0FBbkI7QUFDQTtBQWhCUjs7QUFrQkFiLElBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLFlBQVosRUFBMEJZLEtBQTFCO0FBQ0g7QUEzQ0ksQ0FBVCIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLypcbiAqIEBBdXRob3I6IHlvdXIgbmFtZVxuICogQERhdGU6IDIwMjEtMTAtMDUgMTY6MTU6MTdcbiAqIEBMYXN0RWRpdFRpbWU6IDIwMjEtMTAtMDUgMTY6MTU6NTVcbiAqIEBMYXN0RWRpdG9yczogeW91ciBuYW1lXG4gKiBARGVzY3JpcHRpb246IEluIFVzZXIgU2V0dGluZ3MgRWRpdFxuICogQEZpbGVQYXRoOiAvdm4tZ2FtZXMvYXNzZXRzL3NjcmlwdHMvZHJhZ29uV2lkZ2V0LmpzXG4gKi9cbmxldCBBdXRvU2NhbGVUeXBlID0gY2MuRW51bSh7XG4gICAgV2lkdGhBdXRvU2NhbGU6IDEsXHRcbiAgICBIZWlnaHRBdXRvU2NhbGU6IDIsXG4gICAgRml4ZWRXaWR0aDogMyxcbiAgICBGaXhlZEhlaWdodDogNFxufSk7XG5jYy5DbGFzcyh7XG4gICAgZXh0ZW5kczogY2MuQ29tcG9uZW50LFxuICAgIGVkaXRvcjp7XG4gICAgICAgIG1lbnU6XCJjdXN0b20vQWRkQXV0b1NjYWxlXCJcbiAgICB9LFxuICAgIHByb3BlcnRpZXM6IHtcbiAgICAgICAgYXV0b1NjYWxlVHlwZToge1xuICAgICAgICAgICAgZGVmYXVsdDogQXV0b1NjYWxlVHlwZS5GaXhlZFdpZHRoLFxuICAgICAgICAgICAgdHlwZTogQXV0b1NjYWxlVHlwZSxcbiAgICAgICAgfSxcbiAgICB9LFxuXG4gICAgc3RhcnQoKSB7XG4gICAgICAgIC8v6YCC6YWN5a695bqm5qih5byPICAocHMg5Y+q55So5LqO6b6Z6aqo5Yqo55S76IqC54K577yM5YW25LuW6IqC54K55pyA5aW96YeH55SoY29jb3Poh6rluKbnmoR3aWRnZXTnu4Tku7bmnaXpgILphY0pXG4gICAgICAgIGNvbnNvbGUubG9nKGAtLS0tLS0tLS0tLS0tLS0tc2NhbGUtLSR7dGhpcy5ub2RlLm5hbWV9LS0tLS0tLS0tLS1gKTtcbiAgICAgICAgY29uc29sZS5sb2coXCJzY2FsZT4+Z2V0VmlzaWJsZVNpemU6XCIsY2Mudmlldy5nZXRWaXNpYmxlU2l6ZSgpLndpZHRoLGNjLnZpZXcuZ2V0VmlzaWJsZVNpemUoKS5oZWlnaHQpO1xuICAgICAgICBjb25zb2xlLmxvZyhcInNjYWxlPj4+Z2V0RnJhbWVTaXplXCIsY2Mudmlldy5nZXRGcmFtZVNpemUoKS53aWR0aCxjYy52aWV3LmdldEZyYW1lU2l6ZSgpLmhlaWdodCk7XG4gICAgICAgIGNvbnNvbGUubG9nKFwic2NhbGU+PmNhbnZhcz5cIixjYy52aWV3LmdldENhbnZhc1NpemUoKS53aWR0aCxjYy52aWV3LmdldENhbnZhc1NpemUoKS5oZWlnaHQpO1xuICAgICAgICBjb25zb2xlLmxvZyhcInNjYWxlPj5nZXREZXNpZ25SZXNvbHV0aW9uU2l6ZVwiLGNjLnZpZXcuZ2V0RGVzaWduUmVzb2x1dGlvblNpemUoKS53aWR0aCxjYy52aWV3LmdldERlc2lnblJlc29sdXRpb25TaXplKCkuaGVpZ2h0KTtcbiAgICAgICAgLy/lvZPliY3lsY/luZXnmoTliIbovqjnjodcbiAgICAgICAgbGV0IHNjcmVlblNpemUgPSBjYy52aWV3LmdldFZpc2libGVTaXplKCk7XG4gICAgICAgIC8v6K6+6K6h55qE5YiG6L6o546HXG4gICAgICAgIGxldCBkZXNpZ25SZXNvbHV0aW9uU2l6ZSA9IGNjLnZpZXcuZ2V0RGVzaWduUmVzb2x1dGlvblNpemUoKTtcbiAgICAgICAgbGV0IHNjYWxlO1xuICAgICAgICBzd2l0Y2ggKHRoaXMuYXV0b1NjYWxlVHlwZSkge1xuICAgICAgICAgICAgY2FzZSBBdXRvU2NhbGVUeXBlLldpZHRoQXV0b1NjYWxlOlxuICAgICAgICAgICAgICAgIHNjYWxlID0gc2NyZWVuU2l6ZS53aWR0aCAvIGRlc2lnblJlc29sdXRpb25TaXplLndpZHRoO1xuICAgICAgICAgICAgICAgIHRoaXMubm9kZS5zZXRTY2FsZShzY2FsZSwxKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgQXV0b1NjYWxlVHlwZS5IZWlnaHRBdXRvU2NhbGU6XG4gICAgICAgICAgICAgICAgc2NhbGUgPSBzY3JlZW5TaXplLmhlaWdodCAvIGRlc2lnblJlc29sdXRpb25TaXplLmhlaWdodDtcbiAgICAgICAgICAgICAgICB0aGlzLm5vZGUuc2V0U2NhbGUoMSxzY2FsZSk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIEF1dG9TY2FsZVR5cGUuRml4ZWRXaWR0aDpcbiAgICAgICAgICAgICAgICBzY2FsZSA9IHNjcmVlblNpemUud2lkdGggLyBkZXNpZ25SZXNvbHV0aW9uU2l6ZS53aWR0aDtcbiAgICAgICAgICAgICAgICB0aGlzLm5vZGUuc2V0U2NhbGUoc2NhbGUpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBBdXRvU2NhbGVUeXBlLkZpeGVkSGVpZ2h0OlxuICAgICAgICAgICAgICAgIHNjYWxlID0gc2NyZWVuU2l6ZS5oZWlnaHQgLyBkZXNpZ25SZXNvbHV0aW9uU2l6ZS5oZWlnaHQ7XG4gICAgICAgICAgICAgICAgdGhpcy5ub2RlLnNldFNjYWxlKHNjYWxlKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgICBjb25zb2xlLmxvZyhcInNjZW5lU2NsYWVcIiwgc2NhbGUpO1xuICAgIH0sXG59KTtcbiJdfQ==
//------QC-SOURCE-SPLIT------
