const appName = "美团买菜";
launchApp(appName);
sleep(10);

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

const hasText = (text) => {
	return textStartsWith(text).exists() // 是否存在指定文本
}

const start = () => {
	// 是否有结算按钮
	if (hasText("结算")) 
    {
		// 点击结算
		clickSettle()
		sleep(10)
		start()
	} 
    else if (hasText('当前不在可下单时段') || hasText('很抱歉')) 
    {
		clickKnow()
		sleep(10)
		start()
	} 
    else if (hasText('立即支付')) 
    {
		clickPay()
		sleep(10)
		start()
        toast('抢到了')
	} 
	else if (hasText('放弃机会')) 
    {
		clickGiveup()
		sleep(10)
		start()
	} 
    else 
    {
        sleep(10)
		start()
	}
}

start()