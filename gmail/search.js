var google = require('googleapis');


module.exports = function(auth, controller) {

  	controller.on('search', function(keywords) {

		var gmail = google.gmail('v1');

//gmail.users.messages.list({ auth:oauthClient, userId: 'me' },{ qs: { q: 'whatever query' } }...

		gmail.users.messages.list({
		    auth: auth,
		    userId: 'me'
		 }, { qs: { q: keywords } 
		},function(err, response) {
		      if (err) {
		        console.log('The API returned an error: ' + err);
		        return;
		      }
		      if (response.resultSizeEstimate !== 0) {

		      
			      var messages = response.messages;
			      
			      if (messages.length == 0) {
			        console.log('No messages found.');
			      } else {
				      for (var i = 0; i < messages.length; i++) { 	
				      	
				      	gmail.users.messages.get({
				      		auth: auth,
						    userId: 'me',
						    id: messages[i].id
						 }, function(err, resp) {
						      if (err) {
						        console.log('The API returned an error: ' + err);
						        return;
						      }
						      var obj ={
						      	id: resp.id
						      };
						      
						      var headers = resp.payload.headers;
						      for (var t = 0; t < headers.length; t++) {
						      	if(headers[t].name === 'Subject') {
						      		obj.subject = headers[t].value;
						      	}
						      	if(headers[t].name === 'Date') {
						      		obj.date = headers[t].value;
						      	}
						      	if(headers[t].name === 'From') {
						      		obj.from = headers[t].value;
						      	}

						 	  }

						      controller.trigger('searchResult', [obj]);

				
						 });

				      }

		      	}
		  	 } else {
		  	 	var text = 'There is no email found in your gmail account!';
		  	 	controller.trigger('noResultFound', [text]);
		  	 }

		 });


    });



}


// Date
// Tue, 27 Feb 2018 10:49:58 -0800
// From
// Alex Tyagulsky - Readdle co-founder <rdsupport@readdle.com>
// To
// elahe.paikari@gmail.com
// Message-ID
// <A7ABEB00-СC96-4BE6-8421-4FB4A3C9BDED@SparkHistory>
// Subject
// I hope you’ll love Spark
// X-Readdle-No-Push
// 1
// X-Readdle-Message-ID
// A7ABEB00-СC96-4BE6-8421-4FB4A3C9BDED@SparkHistory
// MIME-Version
// 1.0
// Content-Type
// multipart/alternative; boundary="5a95a85c_6b8b4567_1307"

		//     for (var t = 0; t < resp.payload.parts.length; t++) {
					//     console.log(resp.payload.parts[t])
					//     console.log(resp.payload.parts[t])
					// }
					    // console.log(resp.payload.headers[1].value)
					    // console.log(resp.payload.body)
					    // console.log(resp.payload.parts[1])


// { id: '162135c222085896',
//   threadId: '162135c222085896',
//   labelIds: [ 'UNREAD', 'CATEGORY_SOCIAL', 'INBOX' ],
//   snippet: 'Tweets making headlines @TheEllenShow&#39;s Tweet was featured in HuffPost Celebrities Call To &#39;Boycott Bermuda&#39; For Repeal Of Marriage Equality &quot;I guess I&#39;m canceling my trip,&quot;',
//   historyId: '7308138',
//   internalDate: '1520743227000',
//   payload: 
//    { partId: '',
//      mimeType: 'multipart/alternative',
//      filename: '',
//      headers: 
//       [ [Object],
//         [Object],
//         [Object],
//         [Object],
//         [Object],
//         [Object],
//         [Object],
//         [Object],
//         [Object],
//         [Object],
//         [Object],
//         [Object],
//         [Object],
//         [Object],
//         [Object],
//         [Object],
//         [Object],
//         [Object],
//         [Object],
//         [Object],
//         [Object],
//         [Object],
//         [Object] ],
//      body: { size: 0 },
//      parts: [ [Object], [Object] ] },
//   sizeEstimate: 32382 }





		 //    gmail.users.labels.list({
		 //      auth: auth,
		 //      userId: 'me',
		 //    }, function(err, response) {
		 //      if (err) {
		 //        console.log('The API returned an error: ' + err);
		 //        return;
		 //      }
		 //      var labels = response.labels;
		 //      if (labels.length == 0) {
		 //        console.log('No labels found.');
		 //      } else {
	  //             console.log('Labels:');
			//       for (var i = 0; i < labels.length; i++) {
			//         var label = labels[i];
			//         console.log('- %s', label.name);
			//       }
		 //      }
		 // });


      // console.log('Labels:');
      // for (var i = 0; i < labels.length; i++) {
      //   var label = labels[i];
      //   console.log('- %s', label.name);
      // }











