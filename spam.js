// VKChangerNameSpammer
const cnfg = require("./config.js")
const { VK } = require("vk-io")
let vk;
if(cnfg.group_id < 1){
vk = new VK({
	token: cnfg.token
})
}
if(cnfg.group_id > 1){
vk = new VK({
	token: cnfg.token,
	pollingGroupId: cnfg.group_id
})
}
const lodash = require("lodash")
let count = cnfg.count
let toCount = cnfg.toCount
let chatId = cnfg.chatId
let time = cnfg.time
let numba = 0
// Проверка
if(count < 1)return console.error(`Число кол-ва названий ушло в минус!`)
if(isNaN(count))return console.error(`Неккоректное число!`)
if(toCount < 1)return console.error(`Число названий ушло в минус!`)
if(isNaN(toCount) || !toCount)return console.error(`Неккоректное число!`)
if(chatId < 1)return console.error(`ChatID ушёл в минус! Вы там не скатывайте его, ладно?:3`)
if(isNaN(chatId))return console.error(`Неккоректное число!`)
if(time < 0)return console.error(`Число времени ушло в минус!`)
if(isNaN(time))return console.error(`Неккоректное число!`)
	if(cnfg.group_id > 1){
	try{
		vk.api.messages.editChat({
	title: "ТЕСТ",
    chat_id: chatId	
	})
	}catch(e){
		console.error(`Выдайте группе админа в беседе!`)
	}
	}
var timerId = setInterval(function() {
	vk.api.messages.editChat({
	title: lodash.random(1,toCount),
    chat_id: chatId	
	})
	numba += 1
	console.log(`Название чата изменено.\nУже изменено ${numba} р.`)
	if(numba == count){
		clearInterval(timerId);
		console.log(`Закончил`)
	}
}, time);
return console.log(`Начал спамить`)