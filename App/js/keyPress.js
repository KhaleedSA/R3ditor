/*
	R3ditor - keyPress.js
	Por mitosan/mscore/misto_quente/mscorehdr
	I'm still kicking!
*/
function R3_START_KEYPRESS(){
	window.onkeyup = function(key){
		if (RE3_LIVE_keyPress_enable === true){
			// Keys
			if (MEM_JS_requreSucess === true){
				// R = to go title
				if (key.keyCode === 82){
					RE3_LIVE_gotoTitleScreen();
				}
			}
		}
		// (F5) Run RE3 (Mod)
		if (key.keyCode === 116){
			checkCanPlay(1, 1);
		}
		// (F6) Run MERCE (Mod)
		if (key.keyCode === 117){
			checkCanPlay(1, 0);
		}
		// (F7) Run RE3
		if (key.keyCode === 118){
			checkCanPlay(0, 1);
		}
		// (F8) Run MERCE
		if (key.keyCode === 119){
			checkCanPlay(0, 0);
		}
	}
}