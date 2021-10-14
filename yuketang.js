// ==UserScript==
// @name         雨课堂自动看课
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  雨课堂自动看课
// @author       db117
// @match        https://*.yuketang.cn/pro/lms/*/video/*
// ==/UserScript==



(function () {
    'use strict';
    console.log("雨课堂");

    let interval = setInterval(main, 10000);
    let lasttime = Date.parse(new Date());

    function main() {


        let herf = window.location.href;
        if (herf.indexOf("video") < 0) {
            console.log("不知道跑哪去了，结束定时任务")
            clearInterval(interval);
        }
        let lastIndex = herf.lastIndexOf("/");

        let nextNum = parseInt(herf.substring(lastIndex + 1, herf.length)) + 1;
        console.log('下一课：' + nextNum);

        herf = herf.substring(0, lastIndex + 1) + nextNum;
        console.log('下一课url：' + herf);

        if (document.getElementsByClassName('finish').length > 0) {
            console.log("视频已经结束，进行下一个");
            window.location.href = herf;

        } else {
            let video = document.querySelector('video');
            if (video == null) {
                console.log("当前页没有视频,进行下一个")
                window.location.href = herf;
            }

            let playBtn = document.getElementsByClassName('pause_show');
            if (playBtn.length > 0) {
                console.log("没有结束，还在暂停，点击开始")
                document.getElementsByClassName('xt_video_bit_play_btn')[0].click();
            }

            console.log("继续监测视频是否结束");
            let curtime = Date.parse(new Date());
            if (curtime - 600 * 1000 > lasttime) {
                lasttime = curtime;
                console.log("超过10分钟，直接下一个")
                window.location.href = herf;
            }

        }


    }

    function speed() {
        const video = document.querySelector("video");
        video.playbackRate = 2.0;
        //         var speed = document.querySelector(".xt_video_player_common_list");
        //         var speedChild = speed.firstChild;
        //         speedChild.click();
        //         console.log("Robot-开启2.0倍速");
    }

})();