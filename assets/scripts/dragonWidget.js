/*
 * @Author: your name
 * @Date: 2021-10-05 16:15:17
 * @LastEditTime: 2021-10-05 16:15:55
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: /vn-games/assets/scripts/dragonWidget.js
 */
let AutoScaleType = cc.Enum({
    WidthAutoScale: 1,	
    HeightAutoScale: 2,
    FixedWidth: 3,
    FixedHeight: 4
});
cc.Class({
    extends: cc.Component,
    editor:{
        menu:"custom/AddAutoScale"
    },
    properties: {
        autoScaleType: {
            default: AutoScaleType.FixedWidth,
            type: AutoScaleType,
        },
    },

    start() {
        //适配宽度模式  (ps 只用于龙骨动画节点，其他节点最好采用cocos自带的widget组件来适配)
        console.log(`----------------scale--${this.node.name}-----------`);
        console.log("scale>>getVisibleSize:",cc.view.getVisibleSize().width,cc.view.getVisibleSize().height);
        console.log("scale>>>getFrameSize",cc.view.getFrameSize().width,cc.view.getFrameSize().height);
        console.log("scale>>canvas>",cc.view.getCanvasSize().width,cc.view.getCanvasSize().height);
        console.log("scale>>getDesignResolutionSize",cc.view.getDesignResolutionSize().width,cc.view.getDesignResolutionSize().height);
        //当前屏幕的分辨率
        let screenSize = cc.view.getVisibleSize();
        //设计的分辨率
        let designResolutionSize = cc.view.getDesignResolutionSize();
        let scale;
        switch (this.autoScaleType) {
            case AutoScaleType.WidthAutoScale:
                scale = screenSize.width / designResolutionSize.width;
                this.node.setScale(scale,1);
                break;
            case AutoScaleType.HeightAutoScale:
                scale = screenSize.height / designResolutionSize.height;
                this.node.setScale(1,scale);
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
    },
});
