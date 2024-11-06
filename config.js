const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="jovincemonthe@gmail.com"
global.location="Yaoundé,Cameroon."


global.mongodb= process.env.MONGODB_URI || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/suhailmd-2.0";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VaLBHxkFnSzBx951T31r";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VaLBHxkFnSzBx951T31r" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/a3f4ac164993a5531574d.jpg" || "https://telegra.ph/file/a3f4ac164993a5531574d.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "© Sukikatech" 


global.devs = "237670978777" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "237670978777";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://telegra.ph/file/a3f4ac164993a5531574d.jpg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,237670978777";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,237670978777";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "237670978777, 237655133165";

global.api_smd = "https://api-smd.onrender.com/" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_00_51_11_06_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTg0LFxuICAgICAgICAxODYsXG4gICAgICAgIDE2MixcbiAgICAgICAgMjIwLFxuICAgICAgICAyMTUsXG4gICAgICAgIDE3MCxcbiAgICAgICAgNzcsXG4gICAgICAgIDYsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMCxcbiAgICAgICAgMTcxLFxuICAgICAgICA0MSxcbiAgICAgICAgMjIsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMjEwLFxuICAgICAgICAzMSxcbiAgICAgICAgMjQ3LFxuICAgICAgICA4OSxcbiAgICAgICAgOTksXG4gICAgICAgIDY1LFxuICAgICAgICA1MixcbiAgICAgICAgMjA3LFxuICAgICAgICA4NSxcbiAgICAgICAgMTU3LFxuICAgICAgICAxNjgsXG4gICAgICAgIDY2LFxuICAgICAgICAxNDMsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMjIyLFxuICAgICAgICAyMDIsXG4gICAgICAgIDE4MixcbiAgICAgICAgODNcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjE3LFxuICAgICAgICAxMjcsXG4gICAgICAgIDM4LFxuICAgICAgICAxNixcbiAgICAgICAgMTUsXG4gICAgICAgIDMxLFxuICAgICAgICAyMjEsXG4gICAgICAgIDgwLFxuICAgICAgICAxMjksXG4gICAgICAgIDIxMyxcbiAgICAgICAgMjQxLFxuICAgICAgICAyNDAsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMjEsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMTk1LFxuICAgICAgICAyMTAsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMTQ0LFxuICAgICAgICAxNDcsXG4gICAgICAgIDEyMixcbiAgICAgICAgMTkyLFxuICAgICAgICA1NixcbiAgICAgICAgMTc2LFxuICAgICAgICAxNjcsXG4gICAgICAgIDQsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMjQyLFxuICAgICAgICAyMjQsXG4gICAgICAgIDI0MixcbiAgICAgICAgMTM3LFxuICAgICAgICA0NlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjI0LFxuICAgICAgICAyMTQsXG4gICAgICAgIDg4LFxuICAgICAgICAxNjcsXG4gICAgICAgIDIxMixcbiAgICAgICAgMTE5LFxuICAgICAgICA5MSxcbiAgICAgICAgMjcsXG4gICAgICAgIDE0MixcbiAgICAgICAgMTk5LFxuICAgICAgICAyMzYsXG4gICAgICAgIDYxLFxuICAgICAgICAxMzEsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMTE0LFxuICAgICAgICAxMjgsXG4gICAgICAgIDIzOCxcbiAgICAgICAgODUsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMCxcbiAgICAgICAgNzQsXG4gICAgICAgIDYsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMjMxLFxuICAgICAgICAyMTAsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMjE5LFxuICAgICAgICAxNzAsXG4gICAgICAgIDExOSxcbiAgICAgICAgMTA5LFxuICAgICAgICAyMTgsXG4gICAgICAgIDgwXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIwLFxuICAgICAgICAxMTUsXG4gICAgICAgIDE5MyxcbiAgICAgICAgOTYsXG4gICAgICAgIDY0LFxuICAgICAgICA4MyxcbiAgICAgICAgNzksXG4gICAgICAgIDY0LFxuICAgICAgICAxMyxcbiAgICAgICAgMTM0LFxuICAgICAgICAxNTUsXG4gICAgICAgIDg3LFxuICAgICAgICAxMjEsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMTQsXG4gICAgICAgIDUwLFxuICAgICAgICAxOTgsXG4gICAgICAgIDY0LFxuICAgICAgICAyMDEsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMTQ1LFxuICAgICAgICAyMTksXG4gICAgICAgIDI1MCxcbiAgICAgICAgNTgsXG4gICAgICAgIDYsXG4gICAgICAgIDI1MCxcbiAgICAgICAgODIsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMTI2LFxuICAgICAgICA4NyxcbiAgICAgICAgMTg0LFxuICAgICAgICA1OVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQ4LFxuICAgICAgICAxMTAsXG4gICAgICAgIDIwMixcbiAgICAgICAgMTg1LFxuICAgICAgICAxNjYsXG4gICAgICAgIDI0MixcbiAgICAgICAgODYsXG4gICAgICAgIDEwLFxuICAgICAgICAyMDUsXG4gICAgICAgIDY3LFxuICAgICAgICA2NixcbiAgICAgICAgNjgsXG4gICAgICAgIDIwLFxuICAgICAgICAyNTQsXG4gICAgICAgIDgsXG4gICAgICAgIDIxNixcbiAgICAgICAgOTMsXG4gICAgICAgIDE1LFxuICAgICAgICAxODAsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMTE3LFxuICAgICAgICAxMjEsXG4gICAgICAgIDMyLFxuICAgICAgICAxNjYsXG4gICAgICAgIDMsXG4gICAgICAgIDE3NSxcbiAgICAgICAgNjMsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMTc3LFxuICAgICAgICAxMzgsXG4gICAgICAgIDQwLFxuICAgICAgICAxMjRcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNTAsXG4gICAgICAgIDI1LFxuICAgICAgICAyMTYsXG4gICAgICAgIDI0NixcbiAgICAgICAgMTEzLFxuICAgICAgICAxMDMsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMjM3LFxuICAgICAgICA0NCxcbiAgICAgICAgMjksXG4gICAgICAgIDEyNixcbiAgICAgICAgMjM0LFxuICAgICAgICAzNCxcbiAgICAgICAgNTMsXG4gICAgICAgIDgyLFxuICAgICAgICAxNDUsXG4gICAgICAgIDEwNCxcbiAgICAgICAgNTQsXG4gICAgICAgIDEzNixcbiAgICAgICAgMTIyLFxuICAgICAgICAxMTMsXG4gICAgICAgIDk0LFxuICAgICAgICA0OSxcbiAgICAgICAgMTgyLFxuICAgICAgICAyNDksXG4gICAgICAgIDIyMSxcbiAgICAgICAgMjIsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMzIsXG4gICAgICAgIDIwNyxcbiAgICAgICAgNDIsXG4gICAgICAgIDc2XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDgwLFxuICAgICAgICAgIDAsXG4gICAgICAgICAgNzYsXG4gICAgICAgICAgMTUsXG4gICAgICAgICAgMTAzLFxuICAgICAgICAgIDgyLFxuICAgICAgICAgIDExOSxcbiAgICAgICAgICAxNyxcbiAgICAgICAgICAyMjgsXG4gICAgICAgICAgMzYsXG4gICAgICAgICAgMjA3LFxuICAgICAgICAgIDgsXG4gICAgICAgICAgMTEsXG4gICAgICAgICAgMTU0LFxuICAgICAgICAgIDEwNSxcbiAgICAgICAgICAxMTksXG4gICAgICAgICAgNjQsXG4gICAgICAgICAgMjQ5LFxuICAgICAgICAgIDExOSxcbiAgICAgICAgICA1NyxcbiAgICAgICAgICAxODAsXG4gICAgICAgICAgMTkyLFxuICAgICAgICAgIDExMyxcbiAgICAgICAgICAyMjUsXG4gICAgICAgICAgNjksXG4gICAgICAgICAgMTgwLFxuICAgICAgICAgIDE1NyxcbiAgICAgICAgICAyMTgsXG4gICAgICAgICAgMjIxLFxuICAgICAgICAgIDE4MSxcbiAgICAgICAgICAxMTcsXG4gICAgICAgICAgMTA1XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE0MyxcbiAgICAgICAgICAxNzYsXG4gICAgICAgICAgMTkwLFxuICAgICAgICAgIDIyOCxcbiAgICAgICAgICAxMixcbiAgICAgICAgICAxODEsXG4gICAgICAgICAgMTI1LFxuICAgICAgICAgIDk0LFxuICAgICAgICAgIDExNixcbiAgICAgICAgICA0MSxcbiAgICAgICAgICAxMCxcbiAgICAgICAgICAxMDYsXG4gICAgICAgICAgMTcsXG4gICAgICAgICAgODksXG4gICAgICAgICAgMjM0LFxuICAgICAgICAgIDE4MixcbiAgICAgICAgICA0MCxcbiAgICAgICAgICAzOCxcbiAgICAgICAgICAyMzMsXG4gICAgICAgICAgMTc5LFxuICAgICAgICAgIDEwMCxcbiAgICAgICAgICAxMzgsXG4gICAgICAgICAgMjAxLFxuICAgICAgICAgIDYwLFxuICAgICAgICAgIDExLFxuICAgICAgICAgIDIzOSxcbiAgICAgICAgICA1LFxuICAgICAgICAgIDIzNCxcbiAgICAgICAgICAzNSxcbiAgICAgICAgICAxOTgsXG4gICAgICAgICAgNjgsXG4gICAgICAgICAgMjBcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNjcsXG4gICAgICAgIDcsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMTQxLFxuICAgICAgICAxNjksXG4gICAgICAgIDIwNyxcbiAgICAgICAgNixcbiAgICAgICAgNTksXG4gICAgICAgIDIyOCxcbiAgICAgICAgMTAxLFxuICAgICAgICAyMDQsXG4gICAgICAgIDE3NixcbiAgICAgICAgMjUxLFxuICAgICAgICA0NSxcbiAgICAgICAgMjQwLFxuICAgICAgICA1MSxcbiAgICAgICAgODQsXG4gICAgICAgIDE0MixcbiAgICAgICAgOTIsXG4gICAgICAgIDI0MixcbiAgICAgICAgMTc0LFxuICAgICAgICAxNjEsXG4gICAgICAgIDMzLFxuICAgICAgICA0NixcbiAgICAgICAgMTQsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMjM3LFxuICAgICAgICAxNzgsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMTAxLFxuICAgICAgICAxMSxcbiAgICAgICAgOTgsXG4gICAgICAgIDc4LFxuICAgICAgICAxNixcbiAgICAgICAgMjgsXG4gICAgICAgIDQ2LFxuICAgICAgICAyMTEsXG4gICAgICAgIDg2LFxuICAgICAgICAyNTEsXG4gICAgICAgIDY3LFxuICAgICAgICA5NixcbiAgICAgICAgMjUsXG4gICAgICAgIDEwOSxcbiAgICAgICAgNjMsXG4gICAgICAgIDI0OSxcbiAgICAgICAgNCxcbiAgICAgICAgODYsXG4gICAgICAgIDExOCxcbiAgICAgICAgOSxcbiAgICAgICAgMTQ2LFxuICAgICAgICAxNTEsXG4gICAgICAgIDg5LFxuICAgICAgICAxMjUsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMjQyLFxuICAgICAgICAxMzUsXG4gICAgICAgIDE2MCxcbiAgICAgICAgNixcbiAgICAgICAgMzYsXG4gICAgICAgIDc4LFxuICAgICAgICAzOSxcbiAgICAgICAgMjIwLFxuICAgICAgICAxMzgsXG4gICAgICAgIDEzM1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMTQxLFxuICBcImFkdlNlY3JldEtleVwiOiBcIlBwWStrQlRjNGpWVjZtRnBSWDR2UXRUMXd0VFZZNzdZYThXN05hMEQxRXM9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMSxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcInZsMUNhOW1tU1M2VjcwMGZ2X1lnMEFcIixcbiAgXCJwaG9uZUlkXCI6IFwiODRlZjgxYTItMDkyYy00MzM1LTljZGItMzc0NTQ2YWU5MmM3XCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE4NyxcbiAgICAgIDQwLFxuICAgICAgMTA0LFxuICAgICAgMjU0LFxuICAgICAgNCxcbiAgICAgIDE2NCxcbiAgICAgIDk3LFxuICAgICAgMzksXG4gICAgICAxMjYsXG4gICAgICAyMjYsXG4gICAgICAxNTEsXG4gICAgICAxNTcsXG4gICAgICAxNTUsXG4gICAgICA4MCxcbiAgICAgIDEyMixcbiAgICAgIDE2NixcbiAgICAgIDE4LFxuICAgICAgMjYsXG4gICAgICAxMzUsXG4gICAgICA2MVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyMTYsXG4gICAgICA0NixcbiAgICAgIDEyMCxcbiAgICAgIDE2MSxcbiAgICAgIDg2LFxuICAgICAgMjI5LFxuICAgICAgMTksXG4gICAgICA0MCxcbiAgICAgIDg0LFxuICAgICAgNDgsXG4gICAgICA0MCxcbiAgICAgIDE5OCxcbiAgICAgIDg2LFxuICAgICAgMjE2LFxuICAgICAgNzMsXG4gICAgICA5LFxuICAgICAgMjIzLFxuICAgICAgMTEwLFxuICAgICAgMTczLFxuICAgICAgMTg4XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIlQzMkFNN1Q2XCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyMzc2NTUxMzMxNjU6NkBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibmFtZVwiOiBcIuyhsOu5iOyKpFwiLFxuICAgIFwibGlkXCI6IFwiMTczMDQ0NzUyNDk4NzU5OjZAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDUHlUaGNNREVQLzZxcmtHR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJxN0QxbCtFaThQZWlzcFdVVEhlcUIyL3VXempyMTNJUmRjY3VQQkQ2eGg4PVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcImowLys2clZUQ2prUXJwQ0VOS3B2SWRRUjJxNWo3Wjdjdmt2TGlRUVAxUTljUlkrOWRPNGFoRlNLN0ltbTFnTkNvb2ZFZFc0SjZoVnAxaUluNFJML0JBPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcImRtTUdtR3h3Q0d2d3Y1dlgxd0Z3VElJa3NpenlQMXpxYTkxTEhDRDdoZDBGS0dXbHM0ajNEbDJwdmNxZEhtT1hLMXBiN0NRdmdqaWJvc0crWnNWTGp3PT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjIzNzY1NTEzMzE2NTo2QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMTcxLFxuICAgICAgICAgIDE3NixcbiAgICAgICAgICAyNDUsXG4gICAgICAgICAgMTUxLFxuICAgICAgICAgIDIyNSxcbiAgICAgICAgICAzNCxcbiAgICAgICAgICAyNDAsXG4gICAgICAgICAgMjQ3LFxuICAgICAgICAgIDE2MixcbiAgICAgICAgICAxNzgsXG4gICAgICAgICAgMTQ5LFxuICAgICAgICAgIDE0OCxcbiAgICAgICAgICA3NixcbiAgICAgICAgICAxMTksXG4gICAgICAgICAgMTcwLFxuICAgICAgICAgIDcsXG4gICAgICAgICAgMTExLFxuICAgICAgICAgIDIzOCxcbiAgICAgICAgICA5MSxcbiAgICAgICAgICA1NixcbiAgICAgICAgICAyMzUsXG4gICAgICAgICAgMjE1LFxuICAgICAgICAgIDExNCxcbiAgICAgICAgICAxNyxcbiAgICAgICAgICAxMTcsXG4gICAgICAgICAgMTk5LFxuICAgICAgICAgIDQ2LFxuICAgICAgICAgIDYwLFxuICAgICAgICAgIDE2LFxuICAgICAgICAgIDI1MCxcbiAgICAgICAgICAxOTgsXG4gICAgICAgICAgMzFcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcInNtYmFcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTczMDg1NDI3NixcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUl0NlwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBSXQ2Lmpzb24iOiAie1wia2V5RGF0YVwiOlwiSXRKUlhTQ0JsODU3NGUxQU5uaU1LK3I3U1IzN1FJanNoQkJlZk1EeWdLMD1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjo5NDU5MDAwMjgsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMTczMDg1NDI3NzQyN1wifSIKfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "조빈스",
  packname: process.env.PACK_NAME || "조빈스🌸",
  botname : process.env.BOT_NAME  || "Sukika",
  ownername:process.env.OWNER_NAME|| "조빈스🌸",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "yepeTQaFk7r9ymusihgXYvdN",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "public",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "0cdb1aed858329b9793413672094ce0d";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",