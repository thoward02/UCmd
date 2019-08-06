//Libs
const Fs       = require("fs");       //File system
const Electron = require("electron"); //Electron - Gui
const Child    = require("child_proccess");           //Sub Proc

class UCmd{
  //Constructor
  constructor(Config){
    //Settings
    this.Config     = Config;

    //Electron
    this.App        = Electron.app();
    this.MainWindow = null;

  }

  SetupMainWindow(){
    //Setup main window
    this.MainWindow = new Electron.BrowserWindow({
      width:  800,
      height: 600,
      frame:  false
    });


    //Load html File
    this.MainWindow.loadFile();

    //Add close emitter
    this.MainWindow.on("closed", function(){
      //Clear window
      this.MainWindow = null;
    });
  }

  Start(){
    //Setup app
    this.App.on("ready", App.SetupMainWindow);

  }


}

//Config
let Config = JSON.parse(Fs.readFileSync("./config.json"));

//Create and start
let App = new UCmd(Config);
App.Start();
