/*
	R3ditor - index.js
	Por mitosan/mscore/misto_quente/mscorehdr
	Help me - please
*/
var BETA = false;
var fs = undefined;
var RE3_RUNNING = false;
var APP_PATH = undefined;
var STATUS = "Undefined";
var DOWNLOAD_COMPLETE = true;
var APP_VERSION = "0.2.5 [BETA]";
var EXTERNAL_APP_RUNNING = false;
var ORIGINAL_FILENAME = undefined;
var APP_NAME = "R3ditor V." + APP_VERSION;

window.onload = function(){
	load();
}
function load(){
	localStorage.clear();
	console.info(APP_NAME);
	addLog("log", APP_NAME);
	document.title = APP_NAME;
	$("#app_version").html(APP_VERSION);
	request_render_save = false;
	log_separador();
	try{
		fs = require('fs');
		APP_PATH = process.cwd();
		checkFolders();
		WZ_verifyConfigFile();
	} catch(err){
		console.error(err);
		$("#img-logo").fadeOut({duration: 2200, queue: false});
		addLog('error', 'ERROR: Unable to use "require" or "process"... Wait... This is Chrome or Firefox?');
		addLog('error', 'ERROR: This is not Node-Webkit! ÕwÕ');
		addLog('error', err);
	}
}
function checkFolders(){
	if (fs.existsSync(APP_PATH + "\\Backup") == false){
		fs.mkdirSync(APP_PATH + "\\Backup");
	}
	if (fs.existsSync(APP_PATH + "\\Backup\\SAV") == false){
		fs.mkdirSync(APP_PATH + "\\Backup\\SAV");
	}
	if (fs.existsSync(APP_PATH + "\\Backup\\RDT") == false){
		fs.mkdirSync(APP_PATH + "\\Backup\\RDT");
	}
	if (fs.existsSync(APP_PATH + "\\MSG") == false){
		fs.mkdirSync(APP_PATH + "\\MSG");
	}
	if (fs.existsSync(APP_PATH + "\\Update") == false){
		fs.mkdirSync(APP_PATH + "\\Update");
	}
	if (fs.existsSync(APP_PATH + "\\Assets") == false){
		fs.mkdirSync(APP_PATH + "\\Assets");
	}
	if (fs.existsSync(APP_PATH + "\\Update\\Extract") == true){
		deleteFolderRecursive(APP_PATH + "\\Update\\Extract");
	}
	if (fs.existsSync(APP_PATH + "\\Update\\master.zip") === true){
		fs.unlinkSync(APP_PATH + "\\Update\\master.zip");
	}
	if (fs.existsSync(APP_PATH + "\\App\\check.r3ditor") === true){
		fs.unlinkSync(APP_PATH + "\\App\\check.r3ditor");
	}
}

/// Log
function addLog(type, texto){
	var classe = undefined;
	if (type.toLowerCase() == "log" || type == undefined || type == null){
		classe = "log-text";
	}
	if (type.toLowerCase() == "warn"){
		classe = "log-warn";
	}
	if (type.toLowerCase() == "error"){
		classe = "log-error";
	}
	var logTemplate = '<div class="' + classe + '">' + texto + '</div>';
	$("#log-programa").append(logTemplate);
}

// Notifications Desktop
function showNotify(titulo, texto, tempo){
	if (titulo == ""){
		titulo = "R3ditor - Notification";
	}
	if (texto == "") {
		texto = "Message";
	}
	try{
		var iconPath = process.execPath.replace("nw.exe", "App\\img\\logo.png");
		var NOTIFY = new Notification(titulo, {
			icon: iconPath,
			body: texto,
		});
		setTimeout(NOTIFY.close.bind(NOTIFY), tempo);
	}
	catch(err){
		if (DEBUG == true){
			console.error('(Notification) ERROR: ' + err);
			addLog('error', '(Notification) ERROR: ' + err);
		}
	}
}

function R3DITOR_RUN_RE3(mode){
	if (EXEC_BIO3_original === undefined || EXEC_BIO3_original === "" || GAME_PATH === "" || GAME_PATH === undefined){
		addLog('error', 'ERROR - The game path is not defined!');
		console.error("ERROR - The game path is not defined!");
	} else {
		try{
			R3DITOR_RUNGAME(0);
			if (WZ_showWizard === true){
				$("#WZ_BTN_2").css({"display": "none"});
				document.title = APP_NAME + " - TESTING Resident Evil 3 / Biohazard 3...";
			} else {
				RE3_RUNNING = true;
				document.title = APP_NAME + " - RUNNING Resident Evil 3 / Biohazard 3...";
			}
			if (mode === 0){
				process.chdir(GAME_PATH);
			} else {
				process.chdir(APP_PATH + "\\Assets");
			}
			runExternalSoftware(EXEC_BIO3_original);
		}catch(err){
			if (WZ_showWizard === true){
				$("#WZ_BTN_2").css({"display": "inline"});
			}
			console.error("ERROR - Something went wrong! - " + err);
			addLog('error', 'ERROR - Something went wrong! - ' + err);
		}
	}
}

function R3DITOR_RUN_MERCE(mode){
	if (EXEC_BIO3_MERCE === undefined || EXEC_BIO3_MERCE === "" || GAME_PATH === "" || GAME_PATH === undefined){
		addLog('error', 'ERROR - The game path is not defined!');
		console.error("ERROR - The game path is not defined!");
	} else {
		try{
			R3DITOR_RUNGAME(0);
			RE3_RUNNING = true;
			if (mode === 0){
				process.chdir(GAME_PATH);
			} else {
				process.chdir(APP_PATH + "\\Assets");
			}
			document.title = APP_NAME + " - RUNNING Mercenaries...";
			runExternalSoftware(EXEC_BIO3_MERCE);
		}catch(err){
			if (WZ_showWizard === true){
				$("#WZ_BTN_2").css({"display": "inline"});
			}
			console.error("ERROR - Something went wrong! - " + err);
			addLog('error', 'ERROR - Something went wrong! - ' + err);
		}
	}
}

// Remover pastas recursivamente
function deleteFolderRecursive(path){
	runExternalSoftware("cmd", ["/C", "rd", "/s", "/q", path]);
};

/// Obter nome do arquivo
function getFileName(file){
	var fileName = file.toLowerCase();
	var removePath = fileName.split(/(\\|\/)/g).pop();
	var filterA = removePath.replace(".rdt", "");
	var filterB = filterA.replace(".txt", "");
	var filterC = filterB.replace(".msg", "");
	var filterD = filterC.replace(".sav", "");
	var filterE = filterD.replace(".exe", "");
	var filterF = filterE.replace(".ini", "");
	var filterG = filterF.replace(".r3ditor", "");
	return filterG;
}

/// Obter Dia, Data e Hora
function currentTime(){
	var t = new Date;
	var d = t.getDate();
	var h = t.getHours();
	var s = t.getSeconds();
	var y = t.getFullYear();
	var mi = t.getMinutes();
	var m = t.getMonth() + 1;
	if (d.toString().length < 2){
		d = "0" + t.getDate();
	}
	if (m.toString().length < 2){
		m = "0" + parseInt(t.getMonth() + 1);
	}
	if (h.toString().length < 2){
		h = "0" + t.getHours(); 
	}
	if (mi.toString().length < 2){
		mi = "0" + t.getMinutes(); 
	}
	if (s.toString().length < 2){
		s = "0" + t.getSeconds();
	}
	return d + "-" + m + "-" + y + "_" + h + "." + mi + "." + s;
}

/// IndexOf com multiplas ocorr?cias
function getAllIndexes(arr, val){
    var indexes = [], i = -1;
    while ((i = arr.indexOf(val, i+1)) != -1){
        indexes.push(i);
    }
    return indexes;
}

/// Formata valores hex para leitura interna
function solveHEX(hex){
	var res = hex.replace(new RegExp(" ", 'g'), "");
	var fin = res.toLowerCase();
	return fin;
}

/// Function  WIP
function WIP(){
	addLog('warn', "Sorry buddy... #WIP");
	scrollLog();
}

function runExternalSoftware(exe, args){
	EXTERNAL_APP_RUNNING = true;
	const { spawn } = require('child_process');
	if (args === undefined || args === null){
		args = [''];
	}
	const ls = spawn(exe, args);
	ls.stdout.on('data', (data) => {
		addLog('log', "External App: " + data.replace(new RegExp('\n', 'g'), '<br>'));
		scrollLog();
	});
	ls.stderr.on('data', (data) => {
		addLog('log', "External App: " + data.replace(new RegExp('\n', 'g'), '<br>'));
		scrollDownLog();
	});
	ls.on('close', (code) => {
		EXTERNAL_APP_RUNNING = false;
		if (WZ_showWizard === true && WZ_lastMenu === 3){
			$("#WZ_BTN_2").css({"display": "inline"});
		}
		if (RE3_RUNNING === true){
			RE3_RUNNING = false;
			R3DITOR_RUNGAME(1);
		}
		document.title = APP_NAME;
		process.chdir(TEMP_APP_PATH);
		if (exe !== "cmd"){
			if (exe === EXEC_BIO3_original || exe === EXEC_BIO3_MERCE){
				addLog('log', 'Resident Evil 3 / Mercenaries - The application was finished with exit code ' + code + '.');
			} else {
				addLog('log', 'External App - The application was finished with exit code ' + code + '.');
			}
			scrollLog();
			return code;
		}
	});
}

/// Download Files
function R3DITOR_downloadFile(url, nomedoarquivo){
	if (fs.existsSync(nomedoarquivo) === true){
		fs.unlinkSync(nomedoarquivo);
	}
	DOWNLOAD_COMPLETE = false;
	const http = require('https');
	const file = fs.createWriteStream(nomedoarquivo);
	const request = http.get(url, function(response){
		response.pipe(file);
		file.on('finish', function(){
			DOWNLOAD_COMPLETE = true;
			if (nomedoarquivo !== APP_PATH + "\\App\\check.r3ditor"){
		  		addLog('log', 'INFO - Download Complete! - ' + nomedoarquivo);
		  		scrollLog();
			}
    	});
	});
}

/*

	Triggers

*/

/// Wizard
function triggerLoadWZ(){
	$("#loadWZForm").trigger('click');
}

function setLoadWIZARDFile(){
	var cFile = document.getElementById('loadWZForm').files[0]
	if (cFile.path === null || cFile.path === undefined || cFile.path === ""){
		if (BETA == true){
			addLog("log", "Wizard - Load Canceled!");
		}
	} else {
		BIO3_original = undefined;
		WZ_LOADRE3(cFile.path);
		document.getElementById('loadWZForm').value = "";
	}
}

/// Save
function triggerLoadSAVE(){
	$("#loadSaveForm").trigger('click');
}

function setLoadSaveFile(){
	var cFile = document.getElementById('loadSaveForm').files[0]
	if (cFile.path === null || cFile.path === undefined || cFile.path === ""){
		if (BETA == true){
			addLog("log", "Save - Load Canceled!");
		}
	} else {
		SAVE_arquivoBruto = undefined;
		CARREGAR_SAVE(cFile.path);
		document.getElementById('loadSaveForm').value = "";
	}
}

/// MSG
function triggerLoadMSG(){
	$("#loadMSGForm").trigger('click');
}

function setLoadMSGFile(){
	var cFile = document.getElementById('loadMSGForm').files[0]
	if (cFile.path === null || cFile.path === undefined || cFile.path === ""){
		if (BETA == true){
			addLog("log", "MSG - Load Canceled!");
		}
	} else {
		MSG_arquivoBruto = undefined;
		MSG_CARREGAR_ARQUIVO(cFile.path);
		document.getElementById('loadMSGForm').value = "";
	}
}

/// RDT
function triggerLoadRDT(){
	$("#loadRDTForm").trigger('click');
}

function setLoadRDTFile(){
	var cFile = document.getElementById('loadRDTForm').files[0]
	if (cFile.path === null || cFile.path === undefined || cFile.path === ""){
		if (BETA == true){
			addLog("log", "RDT - Load Canceled!");
		}
	} else {
		RDT_arquivoBruto = undefined;
		RDT_CARREGAR_ARQUIVO(cFile.path);
		document.getElementById('loadRDTForm').value = "";
	}
}