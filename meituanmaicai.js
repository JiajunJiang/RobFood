const appName = "美团买菜";
launchApp(appName);
sleep(500);

auto.waitFor()
// 点击结算
const clickSettle = () => {
	className("android.view.View").depth(22).findOne().parent().click()
}
// 点击我知道了
const clickKnow = () => {
	className("android.view.View").depth(16).findOne().parent().click()
}
//点击放弃机会
const clickGiveup= () => {
	className("android.widget.TextView").text("放弃机会").findOne().parent().parent().click()
}
// 点击立刻支付
const clickPay = () => {
	className("android.widget.TextView").text("立即支付").findOne().parent().click()
}
//拥堵繁忙
const clickBusy = () => {
	className("android.view.View").depth(15).findOne().parent().click()
}
//约满
const clickFull = () => {
	className("android.widget.TextView").text("我知道了").findOne().parent().click()       
}

const hasText = (text) => {
	return textStartsWith(text).exists() // 是否存在指定文本
}

const start = () => {
	console.show()
	if (hasText('立即支付'))
	{
		console.log('立即支付')
		clickPay()
		sleep(50)
		start()
		console.log('抢到了')
	} 
	else if (hasText('放弃机会')) 
	{
		console.log('放弃机会')
		clickGiveup()
		sleep(50)
		start()
	} 
	else if (hasText('前方拥堵')) 
	{
		console.log('前方拥堵')
		clickBusy()
		sleep(50)
		start()
	} 
	else if (hasText('当前不在可下单时段') || hasText('很抱歉')) 
	{
		console.log('当前不在可下单时段')
		clickKnow()
		sleep(50)
		start()

	} 
	else if (hasText('配送运力已约满') ) 
	{
		console.log('已约满')
		clickFull()
		sleep(50)
		start()
	} 
	else if (hasText('返回购物车') ) 
	{
		console.log('返回购物车')
		clickBusy()
		sleep(50)
		swipe(500,800,500,300,1000)
		start()
	} 
	else if (hasText('订单已约满') ) 
	{
		console.log('已约满')
		clickFull()
		sleep(50)
		start()
	} 
	else if (hasText("结算"))
	{
		console.log("结算")
		clickSettle()
		sleep(50)
		start()
	} 
	else 
	{
		sleep(50)
		start()
	}
}

start()