/*
	R3ditor - html_includes.js
	Por mitosan/mscore/misto_quente/mscorehdr
	Help me - please
*/

// Saves
var DIALOG_SELECT_HP = '<font class="titulo">Modify HP</font><br>Current HP: <font id="lbl-exchange-HP">???</font><br>Modify HP to: <input type="number" id="ex-HP-id" class="item-select-mod" min="0" max="200" step="1" placeholder="200">';
var DIALOG_SELECT_IGT = '<font class="titulo">Modify IGT (In-Game Time)</font><br>Current Time: <font id="lbl-exchange-IGT">???</font><br>Modify IGT to: <input type="number" class="item-select-mod" style="width: 100px;" id="ex-IGT-HH" min="0" max="23" step="1" value="" placeholder="Hour (HH)"> : <input type="number" class="item-select-mod" style="width: 100px;" id="ex-IGT-MM" min="0" max="59" step="1" value="" placeholder="Minutes (MM)"> : <input type="number" class="item-select-mod" style="width: 100px;" id="ex-IGT-SS" min="0" max="59" step="1" value="" placeholder="Seconds (SS)">';
var DIALOG_SELECT_ITEM = '<font class="titulo">Modify Item</font><br>Current Item: <font id="lbl-exchange-item">???</font><br>Item: <select id="ex-item-id" class="item-select-mod"><option value="00">(00) Empty Slot</option><option value="01">(01) Combat Knife</option><option value="02">(02) Sigpro SP 2009 handgun</option><option value="03">(03) Beretta M92F handgun, custom S.T.A.R.S edition</option><option value="04">(04) Shotgun Benelli M3S</option><option value="05">(05) Smith & Wesson M629C .44-caliber magnum revolver</option><option value="06">(06) Hk-p Grenade launcher with burst rounds</option><option value="07">(07) Hk-p Grenade launcher with flame rounds</option><option value="08">(08) Hk-p Grenade launcher with acid rounds</option><option value="09">(09) Hk-p Grenade launcher with freeze rounds</option><option value="0a">(0a) M66 Rocket launcher</option><option value="0b">(0b) Gatling gun</option><option value="0c">(0c) Mine thrower</option><option value="0d">(0d) STI Eagle 6.0</option><option value="0e">(0e) M4A1 Assault rifle set to manual mode</option><option value="0f">(0f) M4A1 Assault rifle set to auto mode</option><option value="10">(10) Western Custom M37 lever action shotgun</option><option value="11">(11) Sigpro SP 2009 with enhanced ammo loaded</option><option value="12">(12) Beretta M92F custom with enhanced ammo loaded</option><option value="13">(13) Shotgun Benelli M3S with enhanced ammo loaded</option><option value="14">(14) Mine thrower with enhanced ammo loaded</option><option value="15">(15) Handgun bullets (9x19 parabellum)</option><option value="16">(16) Magnum bullets (.44-caliber)</option><option value="17">(17) Shotgun shells</option><option value="18">(18) Grenade rounds</option><option value="19">(19) Flame rounds</option><option value="1a">(1a) Acid rounds</option><option value="1b">(1b) Freeze rounds</option><option value="1c">(1c) Minethrower rounds</option><option value="1d">(1d) Assault rifle clip (5.56 NATO rounds)</option><option value="1e">(1e) Enhanced handgun bullets</option><option value="1f">(1f) Enhanced shotgun shells</option><option value="20">(20) First aid spray</option><option value="21">(21) Green herb</option><option value="22">(22) Blue herb</option><option value="23">(23) Red herb</option><option value="24">(24) 2x Green herb mix</option><option value="25">(25) Green + blue herb mix</option><option value="26">(26) Green + red herb mix</option><option value="27">(27) 3x Green herb mix</option><option value="28">(28) 2x Green herb + blue herb mix</option><option value="29">(29) Green + Red + Blue herb mix</option><option value="2a">(2a) First aid spray box</option><option value="2b">(2b) Square crank</option><option value="2c">(2c) (BOTU) Red medal</option><option value="2d">(2d) (BOTU) Blue medal</option><option value="2e">(2e) (BOTU) Golden medal</option><option value="2f">(2f) Jill\'s S.T.A.R.S card</option><option value="30">(30) (BOTU) oil can labeled "Giga Oil"</option><option value="31">(31) Battery</option><option value="32">(32) Fire hook</option><option value="33">(33) Power cable</option><option value="34">(34) Fuse</option><option value="35">(35) (BOTU) Broken fire hose</option><option value="36">(36) Oil Additive</option><option value="37">(37) Brad Vickers\' card case</option><option value="38">(38) Brad Vickers\' S.T.A.R.S card</option><option value="39">(39) Machine oil</option><option value="3a">(3a) Mixed oil</option><option value="3b">(3b) (BOTU) steel chain</option><option value="3c">(3c) Wrench</option><option value="3d">(3d) Iron pipe</option><option value="3e">(3e) (BOTU) cylinder</option><option value="3f">(3f) Fire hose</option><option value="40">(40) Tape recorder</option><option value="41">(41) Lighter oil</option><option value="42">(42) Lighter (lid closed, no oil)</option><option value="43">(43) Lighter (lid open, has oil)</option><option value="44">(44) Green gem</option><option value="45">(45) Blue gem</option><option value="46">(46) Amber ball</option><option value="47">(47) Obsidian ball</option><option value="48">(48) Crystal ball</option><option value="49">(49) (BOTU) Remote control without batteries</option><option value="4a">(4a) (BOTU) Remote control with batteries</option><option value="4b">(4b) (BOTU) AA-batteries</option><option value="4c">(4c) Gold gear</option><option value="4d">(4d) Silver gear</option><option value="4e">(4e) Chronos gear</option><option value="4f">(4f) Bronze book</option><option value="50">(50) Bronze compass</option><option value="51">(51) Vaccine medium</option><option value="52">(52) Vaccine base</option><option value="53">(53) (BOTU) Sigpro SP 2009 handgun</option><option value="54">(54) (BOTU) Sigpro SP 2009 handgun</option><option value="55">(55) Vaccine</option><option value="56">(56) (BOTU) Sigpro SP 2009 handgun</option><option value="57">(57) (BOTU) Sigpro SP 2009 handgun</option><option value="58">(58) Medium base</option><option value="59">(59) Eagle parts A</option><option value="5a">(5a) Eagle parts B</option><option value="5b">(5b) M37 parts A</option><option value="5c">(5c) M37 parts B</option><option value="5d">(5d) (BOTU) Sigpro SP 2009 handgun</option><option value="5e">(5e) Chronos chain</option><option value="5f">(5f) Rusted crank</option><option value="60">(60) Card key</option><option value="61">(61) Gun powder A</option><option value="62">(62) Gun powder B</option><option value="63">(63) Gun powder C</option><option value="64">(64) Gun powder AA</option><option value="65">(65) Gun powder BB</option><option value="66">(66) Gun powder AC</option><option value="67">(67) Gun powder BC</option><option value="68">(68) Gun powder CC</option><option value="69">(69) Gun powder AAA</option><option value="6a">(6a) Gun powder AAB</option><option value="6b">(6b) Gun powder BBA</option><option value="6c">(6c) Gun powder BBB</option><option value="6d">(6d) Gun powder CCC</option><option value="6e">(6e) Infinite bullets</option><option value="6f">(6f) Water sample</option><option value="70">(70) System disk</option><option value="71">(71) Dummy key</option><option value="72">(72) Lockpick</option><option value="73">(73) Warehouse (backdoor) key</option><option value="74">(74) Sickroom key (Room 402)</option><option value="75">(75) Emblem (S.T.A.R.S) key</option><option value="76">(76) (BOTU) Keyring with 4 unknown keys</option><option value="77">(77) Clock tower (Bezel) key</option><option value="78">(78) Clock tower (Winder) key</option><option value="79">(79) Chronos key</option><option value="7a">(7a) (BOTU) Sigpro SP 2009 handgun</option><option value="7b">(7b) Park (Main gate) key</option><option value="7c">(7c) Park (Graveyard) key</option><option value="7d">(7d) Park (Rear gate) key</option><option value="7e">(7e) Facility key (No Barcode)</option><option value="7f">(7f) Facility key (With Barcode)</option><option value="80">(80) Boutique key</option><option value="81">(81) Ink ribbon</option><option value="82">(82) Reloading tool</option><option value="83">(83) Game inst. A</option><option value="84">(84) Game inst. B</option><option value="85">(85) (BOTU) Recipient with liquid inside</option></select> Quantity: <input type="number" class="item-select-mod" id="ex-item-quant" min="0" max="255" maxlength="3" minlength="1" placeholder="15"> Attr: <select id="ex-item-attr" class="item-select-mod"><option value="00">None</option><option value="01">Remaining ammo in green</option><option value="02">% remaining in green</option><option value="03">Inf. ammo in green</option><option value="05">Remaining ammo in red</option><option value="06">% remaining in red</option><option value="07">Inf. ammo in red</option><option value="0d">Remaining ammo in blue</option><option value="0e">% remaining in blue</option><option value="0f">Inf. ammo in blue</option><option value="16">Attr. used by M4A1 Assault Rifle</option><option value="17">Attr. found in Nightmare Mod</option><option value="0b">Attr. found in some versions of the game (Try with care!)</option></select>';
var DIALOG_SELECT_ARMA = '<font class="titulo">Modify Weapon (<font id="person-arma">???</font>)</font><br>Current Weapon: <font id="lbl-exchange-arma">???</font><br>New Weapon: <select id="ex-arma-id" class="item-select-mod" style="width: 368px;"><option value="00">No Weapon</option><option value="01">Combat Knife</option><option value="02">Sigpro SP 2009 handgun</option><option value="03">Beretta M92F handgun, custom S.T.A.R.S edition"</option><option value="04">Shotgun Benelli M3S</option><option value="05">Smith & Wesson M629C .44-caliber magnum revolver</option><option value="06">Hk-p Grenade launcher with commmon rounds</option><option value="07">Hk-p Grenade launcher with fire rounds</option><option value="08">Hk-p Grenade launcher with acid rounds</option><option value="09">Hk-p Grenade launcher with freeze rounds</option><option value="0a">M66 Rocket Launcher</option><option value="0b">Gatling Gun</option><option value="0c">Mine Thrower</option><option value="0d">STI Eagle 6.0</option><option value="0e">M4A1 Assault rifle (Auto Mode)</option><option value="0f">M4A1 Assault rifle (Manual Mode)</option><option value="10">Western Custom M37 lever action shotgun</option><option value="11">Sigpro SP 2009 E</option><option value="12">Beretta M92F E</option><option value="13">Shotgun Benelli M3S E</option><option value="14">Mine Thrower E</option></select><br><br><u>IMPORTANT</u>: Using this function only takes effect if the selected weapon <u>is in the character inventory</u> and the selected weapon is <br><u>in the same slot as the previous weapon was</u>.<br><br>(Ideal for changing which weapon Carlos will be using after Jill is infected by Nemesis in Clock Tower)';
var DIALOG_SELECT_ROUPA = '<font class="titulo">Modify Roupa</font><br>Roupa atual: <font id="lbl-exchange-roupas">???</font><br>Modify outfit to: <select id="ex-roupa-id" class="item-select-mod"><option value="00">Roupas Normais</option><option value="01">Roupa de motoqueira</option><option value="02">Uniforme S.T.A.R.S</option><option value="03">Disco inferno</option><option value="04">Policial com minisaia</option><option value="05">Jill cosplay de Regina (Dino Crisis)</option><option value="06">Mini-saia azul com top preto e botas</option><option value="07">Roupa social</option></select>';
var DIALOG_SELECT_PERSON = '<font class="titulo">Modify Player</font><br>Current Player: <font id="lbl-exchange-person">???</font><br>Modify Current Player to: <select id="ex-person-id" class="item-select-mod"><option value="00">Jill com roupa normal</option><option value="01">Jill com roupa normal + sidepack</option><option value="02">Jill com roupa de motoqueira</option><option value="03">Jill com uniforme da S.T.A.R.S</option><option value="04">Jill com roupa "Disco Inferno"</option><option value="05">Jill com roupa de policial com shortinho</option><option value="06">Jill com a roupa da regina (Dino Crisis)</option><option value="07">Jill com a roupa normal</option><option value="08">Carlos</option><option value="09">Mikhail</option><option value="0a">Nicholai</option><option value="0b">Brad Vickers</option><option value="0c">Dario</option><option value="0f">Tofu</option></select>';
var DIALOG_SELECT_POISON = '<font class="titulo">Modify Poison Status</font><br>Status: <font id="lbl-exchange-poison">???</font><br>New Status: <select id="ex-poison-id" class="item-select-mod"><option value="8f">Envenenado</option><option value="00">Normal</option></select>';
var DIALOG_SELECT_EPILOGO = '<font class="titulo">Modify Epilogues</font><br>Epilogues Unlocked: <font id="lbl-exchange-epilogues">???</font><br>Modify Epilogues To: <select id="ex-epilogues-id" class="item-select-mod"><option value="00">Nenhum</option><option value="01">1</option><option value="02">2</option><option value="03">3</option><option value="04">4</option><option value="05">5</option><option value="06">6</option><option value="07">7</option><option value="08">Todos</option></select><br><br><u>IMPORTANT</u>: For this changes make affect, you need to beat the game once.';
var DIALOG_SELECT_SIDEPACK = '<font class="titulo">Modify Sidepack (<font id="person-sidepack">???</font>)</font><br>Status: <font id="lbl-exchange-sidepack">???</font><br>New status: <select id="ex-sidepack-id" class="item-select-mod"><option value="0a">With Sidepack</option><option value="08">Without Sidepack</option></select>';
var DIALOG_SELECT_SAVECOUNT = '<font class="titulo">Modify Saves</font><br>Saves: <font id="lbl-exchange-savecount">???</font><br>Modify number of saves to: <input type="number" id="ex-savecount-id" class="item-select-mod" min="0" max="255" step="1" placeholder="0">';
var DIALOG_SELECT_DIFICULDADE = '<font class="titulo">Modify Dificulty</font><br>Dificulty Selected: <font id="lbl-exchange-dificuldade">???</font><br>Modify dificulty to: <select id="ex-dificuldade-id" class="item-select-mod"><option value="01">F�cil</option><option value="00">Dificil</option></select>';

// MSG
var DIALOG_MSG_END = 'Final Value: <input type="number" class="item-select-mod" min="1" max="10" step="1" placeholder="00" id="msg-fim-id">';
var DIALOG_MSG_START = 'Text Speed (Min: 1, Max: 10): <input type="number" class="item-select-mod" min="1" max="10" step="1" placeholder="2" id="msg-comeco-id"><br>(Info: The minor the number is, more faster the text will be displayed)';
var DIALOG_MSG_EXECSE = 'SE ID: <input type="text" class="item-select-mod" placeholder="00" id="msg-execse-id">';
var DIALOG_MSG_ADDTEXT = '<textarea placeholder="Write your message here!" id="msg-txt-toTrans" class="msg-txt-edit" style="width: 710px;"></textarea><div style="width:98%;"><center>Text Formatting:</center><div class="menu-separador"></div>@ <font class="msg-legenda-sticky">- Line Break</font><br>| <font class="msg-legenda-sticky">- Pause</font><br>* <font class="msg-legenda-sticky">- Yes / No</font><br>{ <font class="msg-legenda-sticky">- Open Quotes</font><br>} <font class="msg-legenda-sticky">- Close Quotes</font><br>[ ] <font class="msg-legenda-sticky">- Text in green color</font></div>';
var DIALOG_MSG_ADDCHAR = 'Select the Char: <select id="msg-char-id" class="item-select-mod"><option value="ea24">S.</option><option value="ea25">T.</option><option value="ea26">A.</option><option value="ea27">R.</option><option value="ea28">;</option></select>';
var DIALOG_MSG_NAMEITEM = 'Item Hex: <input type="text" class="item-select-mod" placeholder="00" id="msg-lblitem-id">';
var DIALOG_MSG_SHOWCAMERA = 'Camera ID: <input type="text" class="item-select-mod" placeholder="00" id="msg-cam-id">';

// RDT
var RDT_EDIT_MAP = '<option value="a4">Uptown Map</option><option value="a9">Police Station Map</option><option value="a5">Downtown Map</option><option value="a6">Clock Tower Map</option><option value="aa">Hospital Map</option><option value="a7">Park Map</option><option value="a8">Dead Factory Map</option>';
var RDT_EDIT_ITEM = '<option value="00">(00) Empty Slot</option><option value="01">(01) Combat Knife</option><option value="02">(02) Sigpro SP 2009 handgun</option><option value="03">(03) Beretta M92F handgun, custom S.T.A.R.S edition</option><option value="04">(04) Shotgun Benelli M3S</option><option value="05">(05) Smith & Wesson M629C .44-caliber magnum revolver</option><option value="06">(06) Hk-p Grenade launcher with burst rounds</option><option value="07">(07) Hk-p Grenade launcher with flame rounds</option><option value="08">(08) Hk-p Grenade launcher with acid rounds</option><option value="09">(09) Hk-p Grenade launcher with freeze rounds</option><option value="0a">(0a) M66 Rocket launcher</option><option value="0b">(0b) Gatling gun</option><option value="0c">(0c) Mine thrower</option><option value="0d">(0d) STI Eagle 6.0</option><option value="0e">(0e) M4A1 Assault rifle set to manual mode</option><option value="0f">(0f) M4A1 Assault rifle set to auto mode</option><option value="10">(10) Western Custom M37 lever action shotgun</option><option value="11">(11) Sigpro SP 2009 with enhanced ammo loaded</option><option value="12">(12) Beretta M92F custom with enhanced ammo loaded</option><option value="13">(13) Shotgun Benelli M3S with enhanced ammo loaded</option><option value="14">(14) Mine thrower with enhanced ammo loaded</option><option value="15">(15) Handgun bullets (9x19 parabellum)</option><option value="16">(16) Magnum bullets (.44-caliber)</option><option value="17">(17) Shotgun shells</option><option value="18">(18) Grenade rounds</option><option value="19">(19) Flame rounds</option><option value="1a">(1a) Acid rounds</option><option value="1b">(1b) Freeze rounds</option><option value="1c">(1c) Minethrower rounds</option><option value="1d">(1d) Assault rifle clip (5.56 NATO rounds)</option><option value="1e">(1e) Enhanced handgun bullets</option><option value="1f">(1f) Enhanced shotgun shells</option><option value="20">(20) First aid spray</option><option value="21">(21) Green herb</option><option value="22">(22) Blue herb</option><option value="23">(23) Red herb</option><option value="24">(24) 2x Green herb mix</option><option value="25">(25) Green + blue herb mix</option><option value="26">(26) Green + red herb mix</option><option value="27">(27) 3x Green herb mix</option><option value="28">(28) 2x Green herb + blue herb mix</option><option value="29">(29) Green + Red + Blue herb mix</option><option value="2a">(2a) First aid spray box</option><option value="2b">(2b) Square crank</option><option value="2c">(2c) (BOTU) Red medal</option><option value="2d">(2d) (BOTU) Blue medal</option><option value="2e">(2e) (BOTU) Golden medal</option><option value="2f">(2f) Jill\'s S.T.A.R.S card</option><option value="30">(30) (BOTU) oil can labeled "Giga Oil"</option><option value="31">(31) Battery</option><option value="32">(32) Fire hook</option><option value="33">(33) Power cable</option><option value="34">(34) Fuse</option><option value="35">(35) (BOTU) Broken fire hose</option><option value="36">(36) Oil Additive</option><option value="37">(37) Brad Vickers\' card case</option><option value="38">(38) Brad Vickers\' S.T.A.R.S card</option><option value="39">(39) Machine oil</option><option value="3a">(3a) Mixed oil</option><option value="3b">(3b) (BOTU) steel chain</option><option value="3c">(3c) Wrench</option><option value="3d">(3d) Iron pipe</option><option value="3e">(3e) (BOTU) cylinder</option><option value="3f">(3f) Fire hose</option><option value="40">(40) Tape recorder</option><option value="41">(41) Lighter oil</option><option value="42">(42) Lighter (lid closed, no oil)</option><option value="43">(43) Lighter (lid open, has oil)</option><option value="44">(44) Green gem</option><option value="45">(45) Blue gem</option><option value="46">(46) Amber ball</option><option value="47">(47) Obsidian ball</option><option value="48">(48) Crystal ball</option><option value="49">(49) (BOTU) Remote control without batteries</option><option value="4a">(4a) (BOTU) Remote control with batteries</option><option value="4b">(4b) (BOTU) AA-batteries</option><option value="4c">(4c) Gold gear</option><option value="4d">(4d) Silver gear</option><option value="4e">(4e) Chronos gear</option><option value="4f">(4f) Bronze book</option><option value="50">(50) Bronze compass</option><option value="51">(51) Vaccine medium</option><option value="52">(52) Vaccine base</option><option value="53">(53) (BOTU) Sigpro SP 2009 handgun</option><option value="54">(54) (BOTU) Sigpro SP 2009 handgun</option><option value="55">(55) Vaccine</option><option value="56">(56) (BOTU) Sigpro SP 2009 handgun</option><option value="57">(57) (BOTU) Sigpro SP 2009 handgun</option><option value="58">(58) Medium base</option><option value="59">(59) Eagle parts A</option><option value="5a">(5a) Eagle parts B</option><option value="5b">(5b) M37 parts A</option><option value="5c">(5c) M37 parts B</option><option value="5d">(5d) (BOTU) Sigpro SP 2009 handgun</option><option value="5e">(5e) Chronos chain</option><option value="5f">(5f) Rusted crank</option><option value="60">(60) Card key</option><option value="61">(61) Gun powder A</option><option value="62">(62) Gun powder B</option><option value="63">(63) Gun powder C</option><option value="64">(64) Gun powder AA</option><option value="65">(65) Gun powder BB</option><option value="66">(66) Gun powder AC</option><option value="67">(67) Gun powder BC</option><option value="68">(68) Gun powder CC</option><option value="69">(69) Gun powder AAA</option><option value="6a">(6a) Gun powder AAB</option><option value="6b">(6b) Gun powder BBA</option><option value="6c">(6c) Gun powder BBB</option><option value="6d">(6d) Gun powder CCC</option><option value="6e">(6e) Infinite bullets</option><option value="6f">(6f) Water sample</option><option value="70">(70) System disk</option><option value="71">(71) Dummy key</option><option value="72">(72) Lockpick</option><option value="73">(73) Warehouse (backdoor) key</option><option value="74">(74) Sickroom key (Room 402)</option><option value="75">(75) Emblem (S.T.A.R.S) key</option><option value="76">(76) (BOTU) Keyring with 4 unknown keys</option><option value="77">(77) Clock tower (Bezel) key</option><option value="78">(78) Clock tower (Winder) key</option><option value="79">(79) Chronos key</option><option value="7a">(7a) (BOTU) Sigpro SP 2009 handgun</option><option value="7b">(7b) Park (Main gate) key</option><option value="7c">(7c) Park (Graveyard) key</option><option value="7d">(7d) Park (Rear gate) key</option><option value="7e">(7e) Facility key (No Barcode)</option><option value="7f">(7f) Facility key (With Barcode)</option><option value="80">(80) Boutique key</option><option value="81">(81) Ink ribbon</option><option value="82">(82) Reloading tool</option><option value="83">(83) Game inst. A</option><option value="84">(84) Game inst. B</option><option value="85">(85) (BOTU) Recipient with liquid inside</option>';
var RDT_EDIT_FILE = '<option value="86">(86) Dario\'s Memo</option><option value="87">(87) Mercenary\'s Diary</option><option value="88">(88) Business Fax</option><option value="89">(89) Marvin\'s Report</option><option value="8a">(8a) David\'s Memo</option><option value="8b">(8b) City Guide</option><option value="8c">(8c) Reporter\'s Memo</option><option value="8d">(8d) Operation Instruction</option><option value="8e">(8e) Mercenary\'s Pocketbook</option><option value="8f">(8f) Art Picture Postercard</option><option value="90">(90) Supervisor\'s Report</option><option value="91">(91) Written Order To The Supervisors</option><option value="92">(92) Director\'s Diary</option><option value="93">(93) Manager\'s Diary</option><option value="94">(94) Security Manual</option><option value="95">(95) Mechanic\'s Memo</option><option value="96">(96) Fax From Kendo</option><option value="97">(97) Manager\'s Report</option><option value="98">(98) Medical Instruction Manual</option><option value="99">(99) Fax From H. Q.</option><option value="9a">(9a) Incinerator Manual</option><option value="9b">(9b) Photo A</option><option value="9c">(9c) Photo B</option><option value="9d">(9d) Photo C</option><option value="9f">(9f) Photo D</option><option value="9e">(9e) Photo E</option><option value="a0">(a0) Clock Tower Poster Card</option><option value="a2">(a2) Classified Photo File</option>';