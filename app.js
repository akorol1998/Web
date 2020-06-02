const request = require("request");
const fs = require('fs');

const TelegramBot = require('node-telegram-bot-api');

const token = '1091657547:AAEqqtljxqfq-ypKLg1U3havdvaq49TpMic';
const API_TOKEN = "69ad29f01561788b85caadba73eacbb4";

const bot = new TelegramBot(token, {polling: true});

bot.onText(/curse/, (msg, match) => {

  const chatId = msg.chat.id;
  
  bot.sendMessage(chatId, "Which currency you are interested in?",
{
	reply_markup:{
		inline_keyboard:[[
			{
				text: "EUR",
				callback_data: "EUR"
			},
			{
				text: "USD",
				callback_data: "USD"
			},
			{
				text: "BTC",
				callback_data: "BTC"
			}
		]]
	}
});


});

bot.on('callback_query',(query)=>{
	const id = query.message.chat.id;

	request('https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=5', function(error, response, body){
		console.log(response);
		const data = JSON.parse(body);
		const result = data.filter((item)=>item.ccy === query.data)[0];
		const flags = {
			'EUR': '🇪🇺',
			'USD': "🇺🇸",
			'UAH': "🇺🇦",
			'BTC':	"₿"
		}
		let md = `
		*${flags[result.ccy]}${result.ccy} 💱 ${flags[result.base_ccy]}${result.base_ccy}*
		BUY: __${result.buy}__
		SALE: __${result.sale}__`
		bot.sendMessage(id, md, {parse_mode:"Markdown"});
	});

})

bot.onText(/\/(movie)(.*)/, (msg, match)=>{
	const chatId = msg.chat.id;
	const cmd = match[1];
	const arg = match[2];
	if (arg.length === 0)
	{
		bot.sendMessage(chatId, "You command should look like this: /movie <name_of_the_movie>");
	}else{
		request(`https://api.themoviedb.org/3/search/movie?api_key=${API_TOKEN}&language=en-US&query=${arg}&page=1&include_adult=false`, function(error, response, body){
			const res = JSON.parse(body);
			const poster_path = "https://image.tmdb.org/t/p/w400/";
			let movie = res.results[0];
			request(`https://api.themoviedb.org/3/movie/${movie.id}?api_key=${API_TOKEN}&language=en-US`, function(error, response, body){
				const res = JSON.parse(body);
				console.log(res.genres);
				let genres = "";
				for(g of res.genres){
					genres += ` ${g.name}`;
				}
				let info = `*Title: ${movie.title}*
				Release: __${res.release_date}__
				Ratting:__${res.vote_average}__
				Overview:__${res.overview}__
				Genres:__${genres}__`;
				bot.sendPhoto(chatId, poster_path+movie.poster_path).then(()=>{
					bot.sendMessage(chatId, info, {parse_mode:"Markdown"});
				}).catch(reason=>{console.log(reason)});
				
			});
		});
	};
})