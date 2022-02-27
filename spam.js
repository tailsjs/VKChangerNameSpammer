const {
	token,
	group_id,
	amount,
	chat_id,
	time
} = require("./config.js");
const { VK } = require("vk-io");
let changed = 0;
let vk = new VK(group_id < 1 ? {
	token: token
} : {
	token: token,
	pollingGroupId: group_id
})


if(amount < 1 || isNaN(amount))return console.error('параметр "amount" некорректен.');
if(time < 1 || isNaN(time))return console.error('параметр "time" некорректен.');

setInterval(function() {
	changed += 1;
	vk.api.messages.editChat({
		title: random(1, 2147483647),
		chat_id: chat_id	
	}).catch(function(e){
		console.log(e)
		return console.error('ошибка!')
	}).then(function(){
		changed == 1 ? console.log('понял, начинаю ебашить.') : console.log(`изменено уже ${changed} раз.`)
	});
	
	if(changed == amount){
		console.log('готово.')
		break
	};
}, time*1000);

function random(min, max) {return Math.round(Math.random() * (max - min)) + min}
