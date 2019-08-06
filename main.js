//Entry point

const Electron = require("electron");
const Fs       = require("fs");
const Child    = require("child_proccess");

//Entry class
class UCmd{
    //Setup class
    constructor(Config){
        //Setup config
        this.Config = Config;


        //Setup Electron 



    }

    //Start the actual program
    Start(){}


}

//Create settings
let Config = JSON.parse(fs.readFileSync("./config.json"));

//Create app
const App = new UCmd(Config);

//Start App
App.Start();