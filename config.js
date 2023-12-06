const fs = require('fs-extra')
if (fs.existsSync('config.env')) require('dotenv').config({ path: __dirname+'/config.env' })


//═══════[Required Variables]════\
global.owner = process.env.OWNER_NUMBER || "918250895584"  // Make SURE its Not Be Empty, Else Bot Stoped And Errors,
global.mongodb = process.env.MONGODB_URI || "mongodb+srv://salmanahmad:s4salmanyt@cluster0.szcj2eo.mongodb.net/?retryWrites=true&w=majority"
global.port= process.env.PORT || 5000
global.email = 'ironmanhindigaming@gmail.com'
global.github = 'https://github.com/botskaking/REAL-CYBER-MD/'
global.location = 'INDIA'
global.gurl = 'https://instagram.com/ironmanhindigaming/' // add your username
global.sudo = process.env.SUDO || '918250895584' 
global.devs = '918250895584';
global.website = 'https://github.com/botskaking/REAL-CYBER-MD' //wa.me/+918250895584
global.THUMB_IMAGE = process.env.THUMB_IMAGE || 'https://telegra.ph/file/3c341828d86ee7a89c73f.jpg'
module.exports = {
  sessionName:  process.env.SESSION_ID ||  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGU101JCdWZmZXILLCJKYXRhIjoLaU1pZWRPVXpVUjh6NlLHZZ5oMTZKQTLhS2t QZGLzS LFMTEdxZ1pJMLBIQT@LfSwichVibGLjIjp7InR5cGULOLJCdWZmZXI(LCJKYXRhIjoiMzBtejkyNFdvWGpLTHBvRGZwaGdyVExGUXRLZE53c moxkR@WUzZqa1gwZz@ifX@sInNpZ25lZE1kZW5@aXRSS2V5Ijp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlc(IsImRhdGE 10 LJVR2hRZVBQeUI3CVR JRHVRSVBIYTFSTGtLaHASVEITV1JKcBpsQTJNckc4PSJ9LCJwdWJsawMiOnsidHlwZSI6IkJ1ZmZLciIsImRhdGE 10(J1VWhFVUVHM(8xVXRvLzd iN GLFUMNIMIHSVXA3VzAwdjd4U3pWQ1Z1VlFrPSJ9f5wic2lnbmVkUHJ1S2V5Ijp7ImtleVBhaXIionsicHJpdmF0ZSI6cy]@eXBlIjo1QnVmZmVyIiw iZGF@YSI6InFDNGtRczdaVESKOU1SSK9BVEx3eWpqU2L2aXRVVk1sd3RLNjBRdkhFSGs9In@sInB1YmxpYyI6eyJ0eXBlIjoi0nVmZmVyIiwiZGFOY SI6InZNSB4rVmRib0JRVUMzdkEwODZKZkRyTHFadWFLTkItNnFwUXhWeFVLZ2c9In19LCJzaWduYXR1cmU1Ons LdHlwZSI6IkJ1ZmZlcilsImRhdGE LOLJWONJNzE1NEE3Tk9CRmtrwmVJWEFIaG1FY042dHZOUWc2ZXhSSGFzNGpzN@VKTWVEZO UMOWdWNE9vRL LxT3piaGc0Ym10cXLWZLFjZVhMVUZUC 19oUT@9InBsImtleUlkIjoxfSwtcmVnaXN@cmF0aW9uSWQL0jEzNSWLYWR2U2VjcmV@S2V5IjoteVEzY2p1awpmQTVrK1NXdGpldk5ZdVZsTzg5MkS sdXZQTEFEC01MS1BBUTO LLCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXMLOLtdLCJuZXh0UHJL52V55WO LOJMxLCJmaXJzdFVudXBsb2FkZWROcmVLZ XLJZCI6MzEsImFjY291bnRTeW51Q291bnRlctI6MCw1YWNjb3VudFNLdHRpbmdzIjp7InVuYXJjaGl2ZUNoYXRzIjpmYWxzZX@sImRldmljZUlkIjo QUF2Ymh1V135YmFuMLRuZC11dV80USIsInBob2515WQiOLI5Njk@ZWVLOCO1YmEwLTQ0MTMŁOWY 1YS05MGN KODUYNGVINZY LLCJpZGVudGLOeULKI jp7InR5cGU101]CdWZmZXIiLCJkYXRhIjoicEc@NkJpdzYzdFF0d1VqMwz0DBkWUdhcW53PSJ9LCJyZWdpc3RlcmVkIjpmYWxzZSwiYmFja3VwWG9 rZw4ions idHlwZSI6IkJ1ZmZlciIsImRhdGELOJGWmhteDBNMKVZS2Jid3VjTE5vQXFobEpLQm89In@sInJlZ2LzdHJhdGlvbiI6e30sImFjY291b nQLOns1ZGV@YWlscyI6IkNQZWhwdGtCRUxEV3Y2cidHQWM9ItwtYWNjb3VudFNpZ25hdHVyZUtleSI6IkRTMER2czgxbjFYaXLEL2ZwdEdCb1poeTJ MVGRIakZNNVphWWZMNEtGMM9IiwiYWNjb3VudFNpZ25hdHVyZSI6Img1aGxNYUZWMGg3bUczVm1qK@F4ZGd4eGFXd295UUp JUUFsQ1hHQmt 1bWxuN XYWS1VueVBO0EtVVnhNanNMWF1tUwhTcXZxZWpydzVDbEZja1JsTkFnPTBLLCJkZXZpY2VTaWduYXR1cmUt0LJTaFdIS3ZU1kwZGRmbTQwV@5qQml

4L0xJTEhBOFFZSXdUTVhoQnit5FUxdzMzb@crWUlsanVXemZ5VXh4VDcBQWQ3b@JVbUJwdFF15GpPMW(UL85qQT89In@sImilIjp7ImlkIjoLOTE4M

jUwODk1NTg00jhAcy53aGF0c2FwcC5uZXQifSwic21nbmFsSWRlbnRpdGllcyI6W3staWRlbnRpZmllciI6eyJuYW1lIjo1OTE4MjUwODk1NTg0Ojh

Acy53aGFBc2FwcC5uZXQiLCJkZXZpY2VJZCI6MH@sImlkZW58aWZpZXJLZXkiOns idHlwZSI6IkJ1ZmZlciIsImRhdGELOiJCUTBOQTc3UE5a0VY@c

2cvMzZiUmdhR1ljdGkwM1I0eFRPVidtRlMrQ2hkc1J9fV0sInBsYXRmb3JtIjoiYW5kcm9pZCIsImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTcwMTgzMzUyNHB=",  //PUT Session Id Here, 
  author:  process.env.PACK_AUTHER ||  'Ironbotz',
  packname:  process.env.PACK_NAME || 'Ironbotz',
   
  botname:   process.env.BOT_NAME === undefined ? "⚡ CYBER MD ⚡" : process.env.BOT_NAME,
  ownername: process.env.OWNER_NAME === undefined ? 'IRONMAN' : process.env.OWNER_NAME,  
  auto_read_status :  process.env.AUTO_READ_STATUS === undefined ? false : process.env.AUTO_READ_STATUS,
  autoreaction:  process.env.AUTO_REACTION  === undefined ? false : process.env.AUTO_REACTION ,
  antibadword :  process.env.ANTI_BAD_WORD === undefined ? 'nbwoed' : process.env.ANTI_BAD_WORD,
  alwaysonline:  process.env.ALWAYS_ONLINE === undefined ? false : process.env.ALWAYS_ONLINE,
  antifake : process.env.FAKE_COUNTRY_CODE === undefined ? '92' : process.env.FAKE_COUNTRY_CODE,
  readmessage:  process.env.READ_MESSAGE === undefined ? false : process.env.READ_MESSAGE,
  auto_status_saver: process.env.AUTO_STATUS_SAVER === undefined ? false : process.env.AUTO_STATUS_SAVER,
  HANDLERS:  process.env.PREFIX === undefined ? '>' : process.env.PREFIX,
  warncount : process.env.WARN_COUNT === undefined ? 3 : process.env.WARN_COUNT,
  disablepm:  process.env.DISABLE_PM === undefined ? false : process.env.DISABLE_PM,
  levelupmessage:  process.env.LEVEL_UP_MESSAGE === undefined ? false : process.env.LEVEL_UP_MESSAGE,
  antilink:  process.env.ANTILINK_VALUES === undefined ? 'chat.whatsapp.com' : process.env.ANTILINK_VALUES,
  antilinkaction: process.env.ANTILINK_ACTION === undefined ? 'remove' : process.env.ANTILINK_ACTION,
  BRANCH: 'main', 
  ALIVE_MESSAGE:  process.env.ALIVE_MESSAGE === undefined ? '' : process.env.ALIVE_MESSAGE,
  autobio:  process.env.AUTO_BIO === undefined ? false : process.env.AUTO_BIO,
  OPENAI_API_KEY:  process.env.OPENAI_API_KEY === undefined ? false : process.env.OPENAI_API_KEY,
  heroku:  process.env.heroku === undefined ? false : process.env.heroku,
  HEROKU: {
    HEROKU: process.env.HEROKU ||false,
    API_KEY: process.env.HEROKU_API_KEY === undefined ? '' : process.env.HEROKU_API_KEY,
    APP_NAME: process.env.HEROKU_APP_NAME === undefined ? '' : process.env.HEROKU_APP_NAME
},
  VERSION: process.env.VERSION === undefined ? 'v.0.0.3' : process.env.VERSION,
  LANG: process.env.THEME|| 'GOKU',
  WORKTYPE: process.env.WORKTYPE === undefined ? 'public' : process.env.WORKTYPE
};


let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(`Update'${__filename}'`)
    delete require.cache[file]
	require(file)
})
