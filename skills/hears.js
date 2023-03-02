/*


This module demonstrates simple uses of Botkit's `hears` handler functions.

In these examples, Botkit is configured to listen for certain phrases, and then
respond immediately with a single line response.

*/

module.exports = function(controller) {
	var keywords = null;

    controller.hears(['hello', 'hi', 'hey'], ['direct_message,direct_mention'], function(bot, message) {
        bot.reply(message, "Hi there, how can I help you today? ")
    });

    controller.hears(['goodbye', 'bye', 'see you'], ['direct_message,direct_mention'], function(bot, message) {
        bot.reply(message, "Bye bye, have a good day!")
    });

	controller.hears(['gmail search (.*)'],['direct_message,direct_mention'],function(bot,message) {
	  
	  keywords = message.match[1];

	  controller.trigger('search', [keywords]);
	  
	  bot.reply(message, 'Okay, Here are the emails containing "' + keywords + '": \n');
	});


	controller.on('searchResult', function(obj) {
		var url = 'https://mail.google.com/mail/u/0/#search/' + keywords + '/' + obj.id;
		var content = 'Subject: ' + obj.subject + '\nFrom: ' + obj.from + '\nOn: ' + obj.date + '\n' + url;
		bot.say({
   			text: content,
    		channel: 'D9KPQ2NFJ' // a valid slack channel - Ayv
  		});


	});

	controller.on('noResultFound', function(msg) {
		bot.say({
   			text: msg,
    		channel: 'D9KPQ2NFJ' // a valid slack channel - Ayv
  		});
	});
};

// https://mail.google.com/mail/u/0/#search/from%3Aalex/161d89993244f789
// https://mail.google.com/mail/u/0/#search/from%3Aalex/15f347da981a35ac