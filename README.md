# Ayv

To run Ayv, you need:
1. Node.js & npm installed.
2. A Google account with Gmail enabled.
3. Ngrok.

How to setup gmail API in Node.js:
1. Use https://console.developers.google.com/flows/enableapi?apiid=gmail to create a project in the Google Developers Console and automatically turn on the API. 
- Click Continue, then Go to credentials.
- On the Add credentials to your project page, click the Cancel button.
- At the top of the page, select the OAuth consent screen tab. Select an Email address, enter a Product name if not already set, and click the Save button.
- Select the Credentials tab, click the Create credentials button and select OAuth client ID.
- Select the application type Other, enter the name "Gmail API Quickstart", and click the Create button.
- Click OK to dismiss the resulting dialog.
- Click the file_download (Download JSON) button to the right of the client ID.
- Move this file to ../gmail directory in the project directory and rename it client_secret.json.

2. Run the following commands to install the libraries using npm:
$ npm install googleapis@27 --save

How to setup Ngrok:
1. install Homebrew: $ /usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"
2. $ brew cask install ngrok

How to run Ayv:
1. Clone the project.
2. Run the following commands to install the libraries using npm: $ npm install
3. Select a free port (f.e: 3000) and run ngrok: $ ngrok http 3000
4. Go to api.slack.com

3. Run the code using the following command: $ npm start
- The first time you run the sample, it will prompt you to authorize access:
- Browse to the provided URL in your web browser.
- If you are not already logged into your Google account, you will be prompted to log in. If you are logged into multiple Google accounts, you will be asked to select one account to use for the authorization.
- Click the Accept button.
- Copy the code you're given, paste it into the command-line prompt, and press Enter.
