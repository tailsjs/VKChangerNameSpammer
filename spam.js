const config = require("./config.js");
const { VK } = require("vk-io");
let vk;
if(config.group_id < 1){
	vk = new VK({
		token: config.token
	})
}else{
	vk = new VK({
		token: config.token,
		pollingGroupId: config.group_id
	})
};
if(config.amount < 1 || isNaN(config.amount))return console.error('параметр "amount" некорректен.');
if(config.time < 1 || isNaN(config.time))return console.error('параметр "time" некорректен.');
if(config.group_id > 1){
	vk.api.messages.editChat({
		title: random(1, 2147483647),
    		chat_id: config.chat_id	
	}).catch(function(){
		return console.error('хуйня.')
	}).then(function(){
		console.log('понял, начинаю ебашить.')
	})
};
let changed = 0;
setInterval(function() {
	changed += 1;
	vk.api.messages.editChat({
		title: random(1, 2147483647),
		chat_id: config.chat_id	
	}).catch(function(){
		return console.error('хуйня.')
	}).then(function(){
		console.log(`изменено уже ${changed} раз.`)
	});
	
	if(changed == config.amount){
		console.log('готово.')
		break
	};
}, config.time*1000);

function random(min, max) {return Math.round(Math.random() * (max - min)) + min}
