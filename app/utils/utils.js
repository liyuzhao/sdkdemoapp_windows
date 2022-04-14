const fs = require("fs-extra");

const { remote } = require("electron");

let configDir = remote.app.getPath("userData");

const easemob = require('../node/index');

const utils = {

	latestFunc(){

		var callback;

		return function(cb){

			callback = cb;

			return function(){

				cb === callback && cb.apply(this, arguments);

			};

		};

	},

	initEmclient(){

		let userInfo = {

				"user":{

					"id":1,

					"os":"PC",

					"appkey":"easemob-demo#easeim",

					"tenantId":9,

					"image":""

				}

			};

		fs.ensureDir(`${configDir}/easemob`, function(err){

			console.log(err);

		});

		fs.ensureDir(`${configDir}/easemob-desktop`, function(err){

			console.log(err);

		});

		// 头像文件夹下创建一个用户文件夹，不同的用户头像存放在不同的文件夹下

		// 创建一个文件夹用来存放头像

		fs.ensureDir(`${configDir}/easemob/easemobAvatar`, function(err){

			console.log(err);

		});

		fs.ensureDir(`${configDir}/easemob/easemobAvatar/user`, function(err){

			console.log(err);

		});

		// 创建一个文件夹用来存放 pasteImage

		fs.ensureDir(`${configDir}/easemob/pasteImage`, function(err){

			console.log(err);

		});

		this.chatConfigs = new easemob.EMChatConfig(`${configDir}/easemob-desktop`, `${configDir}/easemob-desktop`, (userInfo && userInfo.user.appkey), 0);

		this.chatConfigs.setDeleteMessageAsExitGroup(true);



		const emclient = new easemob.EMClient(this.chatConfigs);

        const configs = emclient.getChatConfigs();

        const privateconfigs = configs.privateConfigs();

        privateconfigs.enableDns = false;

        // privateconfigs.chatServer = "47.93.40.123";

        // privateconfigs.chatPort = 6717;

        // privateconfigs.restServer = "https://a1-mp-dev.easemob.com";



        privateconfigs.chatServer = "123.114.60.34"; //10.10.22.248 123.114.60.34

        privateconfigs.chatPort = 17320; // 6717 17320

        privateconfigs.restServer = "https://123.114.60.34:17322"; //https://10.10.22.248:12001 https://123.114.60.34:17322

		return emclient;

	}

};





export default{

	utils

};


