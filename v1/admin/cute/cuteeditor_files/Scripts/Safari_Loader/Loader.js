var OxO990d=["ua","userAgent","isOpera","opera","isSafari","safari","isGecko","gecko","isWinIE","msie","compatMode","document","CSS1Compat","head","script","language","javascript","type","text/javascript","src","id","undefined","Microsoft.XMLHTTP","readyState","onreadystatechange","","length","all","childNodes","nodeType","\x0D\x0A","caller","onchange","oninitialized","command","commandui","commandvalue","returnValue","oncommand","string","_fireEventFunction","event","parentNode","_IsCuteEditor","True","readOnly","_IsRichDropDown","null","value","selectedIndex","nodeName","TR","cells","display","style","nextSibling","innerHTML","\x3Cimg src=\x22","/Images/t-minus.gif\x22\x3E","onclick","CuteEditor_CollapseTreeDropDownItem(this,\x22","\x22)","onmousedown","none","/Images/t-plus.gif\x22\x3E","CuteEditor_ExpandTreeDropDownItem(this,\x22","contains","UNSELECTABLE","on","tabIndex","-1","//TODO: event not found? throw error ?","contentWindow","contentDocument","parentWindow","frames","frameElement","//TODO:frame contentWindow not found?","preventDefault","arguments","parent","top","opener","srcElement","target","//TODO: srcElement not found? throw error ?","fromElement","relatedTarget","toElement","keyCode","clientX","clientY","offsetX","offsetY","button","ctrlKey","altKey","shiftKey","cancelBubble","stopPropagation",";CuteEditor_GetEditor(this).ExecImageCommand(this.getAttribute(\x27Command\x27),this.getAttribute(\x27CommandUI\x27),this.getAttribute(\x27CommandArgument\x27))","this.onmouseout();CuteEditor_GetEditor(this).DropMenu(this.getAttribute(\x27Group\x27),this)","ResourceDir","Theme","/Themes/","/Images/all.png","/Images/blank2020.png","IMG","alt","title","Command","Group","ThemeIndex","width","20px","height","backgroundImage","url(",")","backgroundPosition","0 -","px","onload","className","separator","CuteEditorButton","onmouseover","CuteEditor_ButtonCommandOver(this)","onmouseout","CuteEditor_ButtonCommandOut(this)","CuteEditor_ButtonCommandDown(this)","onmouseup","CuteEditor_ButtonCommandUp(this)","oncontextmenu","ondragstart","ondblclick","_ToolBarID","_CodeViewToolBarID","_FrameID"," CuteEditorFrame"," CuteEditorToolbar","cursor","no-drop","ActiveTab","Edit","Code","View","buttonInitialized","isover","CuteEditorButtonOver","CuteEditorButtonDown","CuteEditorDown","border","solid 1px #0A246A","backgroundColor","#b6bdd2","padding","1px","solid 1px #f5f5f4","inset 1px","IsCommandDisabled","CuteEditorButtonDisabled","IsCommandActive","CuteEditorButtonActive","cmd_fromfullpage","(","href","location",",DanaInfo=",",","+","scriptProperties","GetScriptProperty","/Scripts/Safar_Implementation/CuteEditorImplementation.js?i=1","CuteEditorImplementation","function","GET","\x26getModified=1","status","Failed to load impl time!","Failed to load impl code!","body","InitializeCode","block","contentEditable"," \x3Cbr /\x3E ","designMode","/Scripts/resource.php","?type=license\x26_ver=","Failed to load editor license data.","responseText","0","1","2","3","4","5","6","7","8","9","A","B","C","D","E","F","0000000000000840",";","/",":","//",".","www","?type=serverip\x26_ver=","Failed to load editor license info!","You are using an incorrect license file.","Invalid lcparts count:","Invalid product version.","Invalid license type.","(0) license expired!","(0) only localhost!","(1) host not match!","(2) ip not match!","(3) host not match!","(4) license expired!","License Error : ","CuteEditorInitialize"];var _Browser_TypeInfo=null;function Browser__InitType(){if(_Browser_TypeInfo!=null){return ;} ;var Ox118={};Ox118[OxO990d[0]]=navigator[OxO990d[1]].toLowerCase();Ox118[OxO990d[2]]=(Ox118[OxO990d[0]].indexOf(OxO990d[3])>-1);Ox118[OxO990d[4]]=(Ox118[OxO990d[0]].indexOf(OxO990d[5])>-1);Ox118[OxO990d[6]]=(!Ox118[OxO990d[2]]&&!Ox118[OxO990d[4]]&&Ox118[OxO990d[0]].indexOf(OxO990d[7])>-1);Ox118[OxO990d[8]]=(!Ox118[OxO990d[2]]&&Ox118[OxO990d[0]].indexOf(OxO990d[9])>-1);_Browser_TypeInfo=Ox118;} ;Browser__InitType();function Browser_IsWinIE(){return _Browser_TypeInfo[OxO990d[8]];} ;function Browser_IsGecko(){return _Browser_TypeInfo[OxO990d[6]];} ;function Browser_IsOpera(){return _Browser_TypeInfo[OxO990d[2]];} ;function Browser_IsSafari(){return _Browser_TypeInfo[OxO990d[4]];} ;function Browser_UseIESelection(){return _Browser_TypeInfo[OxO990d[8]];} ;function Browser_IsCSS1Compat(){return window[OxO990d[11]][OxO990d[10]]==OxO990d[12];} ;function include(Ox17f,Ox180){var Ox181=document.getElementsByTagName(OxO990d[13]).item(0);var Ox182=document.getElementById(Ox17f);if(Ox182){Ox181.removeChild(Ox182);} ;var Ox183=document.createElement(OxO990d[14]);Ox183.setAttribute(OxO990d[15],OxO990d[16]);Ox183.setAttribute(OxO990d[17],OxO990d[18]);Ox183.setAttribute(OxO990d[19],Ox180);Ox183.setAttribute(OxO990d[20],Ox17f);Ox181.appendChild(Ox183);} ;function CreateXMLHttpRequest(){try{if( typeof (XMLHttpRequest)!=OxO990d[21]){return  new XMLHttpRequest();} ;if( typeof (ActiveXObject)!=OxO990d[21]){return  new ActiveXObject(OxO990d[22]);} ;} catch(x){return null;} ;} ;function LoadXMLAsync(Ox966,Ox180,Ox126,Ox967){var Ox7b0=CreateXMLHttpRequest();function Ox968(){if(Ox7b0[OxO990d[23]]!=4){return ;} ;Ox7b0[OxO990d[24]]= new Function();var Ox188=Ox7b0;Ox7b0=null;if(Ox126){Ox126(Ox188);} ;} ;Ox7b0[OxO990d[24]]=Ox968;Ox7b0.open(Ox966,Ox180,true);Ox7b0.send(Ox967||OxO990d[25]);} ;function Element_GetAllElements(p){var arr=[];if(Browser_IsWinIE()){for(var i=0;i<p[OxO990d[27]][OxO990d[26]];i++){arr.push(p[OxO990d[27]].item(i));} ;return arr;} ;Ox134(p);function Ox134(Ox132){var Ox135=Ox132[OxO990d[28]];var Ox3d=Ox135[OxO990d[26]];for(var i=0;i<Ox3d;i++){var Ox8d=Ox135.item(i);if(Ox8d[OxO990d[29]]!=1){continue ;} ;arr.push(Ox8d);Ox134(Ox8d);} ;} ;return arr;} ;var __ISDEBUG=false;function Debug_Todo(msg){if(!__ISDEBUG){return ;} ;throw ( new Error(msg+OxO990d[30]+Debug_Todo[OxO990d[31]]));} ;function Window_GetElement(Ox90,Oxaa,Ox131){var Ox132=Ox90[OxO990d[11]].getElementById(Oxaa);if(Ox132){return Ox132;} ;var Ox1f=Ox90[OxO990d[11]].getElementsByName(Oxaa);if(Ox1f[OxO990d[26]]>0){return Ox1f.item(0);} ;return null;} ;function CuteEditor_AddMainMenuItems(Ox54b){} ;function CuteEditor_AddDropMenuItems(Ox54b,Ox552){} ;function CuteEditor_AddTagMenuItems(Ox54b,Ox554){} ;function CuteEditor_AddVerbMenuItems(Ox54b,Ox554){} ;function CuteEditor_OnInitialized(editor){} ;function CuteEditor_OnCommand(editor,Ox558,Ox559,Ox7){} ;function CuteEditor_OnChange(editor){} ;function CuteEditor_FilterCode(editor,Ox15e){return Ox15e;} ;function CuteEditor_FilterHTML(editor,Ox177){return Ox177;} ;function CuteEditor_FireChange(editor){window.CuteEditor_OnChange(editor);CuteEditor_FireEvent(editor,OxO990d[32],null);} ;function CuteEditor_FireInitialized(editor){window.CuteEditor_OnInitialized(editor);CuteEditor_FireEvent(editor,OxO990d[33],null);} ;function CuteEditor_FireCommand(editor,Ox558,Ox559,Ox7){var Ox27=window.CuteEditor_OnCommand(editor,Ox558,Ox559,Ox7);if(Ox27==true){return true;} ;var Ox560={};Ox560[OxO990d[34]]=Ox558;Ox560[OxO990d[35]]=Ox559;Ox560[OxO990d[36]]=Ox7;Ox560[OxO990d[37]]=true;CuteEditor_FireEvent(editor,OxO990d[38],Ox560);if(Ox560[OxO990d[37]]==false){return true;} ;} ;function CuteEditor_FireEvent(editor,Ox562,Ox563){if(Ox563==null){Ox563={};} ;var Ox564=editor.getAttribute(Ox562);if(Ox564){if( typeof (Ox564)==OxO990d[39]){editor[OxO990d[40]]= new Function(OxO990d[41],Ox564);} else {editor[OxO990d[40]]=Ox564;} ;editor._fireEventFunction(Ox563);} ;} ;function CuteEditor_GetEditor(element){for(var Ox3a=element;Ox3a!=null;Ox3a=Ox3a[OxO990d[42]]){if(Ox3a.getAttribute(OxO990d[43])==OxO990d[44]){return Ox3a;} ;} ;return null;} ;function CuteEditor_DropDownCommand(element,Ox96a){var editor=CuteEditor_GetEditor(element);if(editor[OxO990d[45]]){return ;} ;if(element.getAttribute(OxO990d[46])==OxO990d[44]){var Ox2b=element.GetValue();if(Ox2b==OxO990d[47]){Ox2b=OxO990d[25];} ;var Oxed=element.GetText();if(Oxed==OxO990d[47]){Oxed=OxO990d[25];} ;element.SetSelectedIndex(0);editor.ExecCommand(Ox96a,false,Ox2b,Oxed);} else {if(element[OxO990d[48]]){var Ox2b=element[OxO990d[48]];if(Ox2b==OxO990d[47]){Ox2b=OxO990d[25];} ;element[OxO990d[49]]=0;editor.ExecCommand(Ox96a,false,Ox2b,Oxed);} else {element[OxO990d[49]]=0;} ;} ;editor.FocusDocument();} ;function CuteEditor_ExpandTreeDropDownItem(src,Ox638){var Oxcf=null;while(src!=null){if(src[OxO990d[50]]==OxO990d[51]){Oxcf=src;break ;} ;src=src[OxO990d[42]];} ;var Oxd0=Oxcf[OxO990d[52]].item(0);Oxcf[OxO990d[55]][OxO990d[54]][OxO990d[53]]=OxO990d[25];Oxd0[OxO990d[56]]=OxO990d[57]+Ox638+OxO990d[58];Oxcf[OxO990d[59]]= new Function(OxO990d[60]+Ox638+OxO990d[61]);Oxcf[OxO990d[62]]= new Function(OxO990d[60]+Ox638+OxO990d[61]);} ;function CuteEditor_CollapseTreeDropDownItem(src,Ox638){var Oxcf=null;while(src!=null){if(src[OxO990d[50]]==OxO990d[51]){Oxcf=src;break ;} ;src=src[OxO990d[42]];} ;var Oxd0=Oxcf[OxO990d[52]].item(0);Oxcf[OxO990d[55]][OxO990d[54]][OxO990d[53]]=OxO990d[63];Oxd0[OxO990d[56]]=OxO990d[57]+Ox638+OxO990d[64];Oxcf[OxO990d[59]]= new Function(OxO990d[65]+Ox638+OxO990d[61]);Oxcf[OxO990d[62]]= new Function(OxO990d[65]+Ox638+OxO990d[61]);} ;function Element_Contains(element,Ox68){if(!Browser_IsOpera()){if(element[OxO990d[66]]){return element.contains(Ox68);} ;} ;for(;Ox68!=null;Ox68=Ox68[OxO990d[42]]){if(element==Ox68){return true;} ;} ;return false;} ;function Element_SetUnselectable(element){element.setAttribute(OxO990d[67],OxO990d[68]);element.setAttribute(OxO990d[69],OxO990d[70]);var arr=Element_GetAllElements(element);var len=arr[OxO990d[26]];if(!len){return ;} ;for(var i=0;i<len;i++){arr[i].setAttribute(OxO990d[67],OxO990d[68]);arr[i].setAttribute(OxO990d[69],OxO990d[70]);} ;} ;function Event_GetEvent(Ox138){Ox138=Event_FindEvent(Ox138);if(Ox138==null){Debug_Todo(OxO990d[71]);} ;return Ox138;} ;function Frame_GetContentWindow(Ox246){if(Ox246[OxO990d[72]]){return Ox246[OxO990d[72]];} ;if(Ox246[OxO990d[73]]){if(Ox246[OxO990d[73]][OxO990d[74]]){return Ox246[OxO990d[73]][OxO990d[74]];} ;} ;var Ox90;if(Ox246[OxO990d[20]]){Ox90=window[OxO990d[75]][Ox246[OxO990d[20]]];if(Ox90){return Ox90;} ;} ;var len=window[OxO990d[75]][OxO990d[26]];for(var i=0;i<len;i++){Ox90=window[OxO990d[75]][i];if(Ox90[OxO990d[76]]==Ox246){return Ox90;} ;if(Ox90[OxO990d[11]]==Ox246[OxO990d[73]]){return Ox90;} ;} ;Debug_Todo(OxO990d[77]);} ;function Array_IndexOf(arr,Ox13a){for(var i=0;i<arr[OxO990d[26]];i++){if(arr[i]==Ox13a){return i;} ;} ;return -1;} ;function Array_Contains(arr,Ox13a){return Array_IndexOf(arr,Ox13a)!=-1;} ;function Event_FindEvent(Ox138){if(Ox138&&Ox138[OxO990d[78]]){return Ox138;} ;if(Browser_IsGecko()){return Event_FindEvent_FindEventFromCallers();} else {if(window[OxO990d[41]]){return window[OxO990d[41]];} ;return Event_FindEvent_FindEventFromWindows();} ;return null;} ;function Event_FindEvent_FindEventFromCallers(){var Ox75=Event_GetEvent[OxO990d[31]];for(var i=0;i<100;i++){if(!Ox75){break ;} ;var Ox138=Ox75[OxO990d[79]][0];if(Ox138&&Ox138[OxO990d[78]]){return Ox138;} ;Ox75=Ox75[OxO990d[31]];} ;} ;function Event_FindEvent_FindEventFromWindows(){var arr=[];return Ox141(window);function Ox141(Ox90){if(Ox90==null){return null;} ;if(Ox90[OxO990d[41]]){return Ox90[OxO990d[41]];} ;if(Array_Contains(arr,Ox90)){return null;} ;arr.push(Ox90);var Ox142=[];if(Ox90[OxO990d[80]]!=Ox90){Ox142.push(Ox90.parent);} ;if(Ox90[OxO990d[81]]!=Ox90[OxO990d[80]]){Ox142.push(Ox90.top);} ;if(Ox90[OxO990d[82]]){Ox142.push(Ox90.opener);} ;for(var i=0;i<Ox90[OxO990d[75]][OxO990d[26]];i++){Ox142.push(Ox90[OxO990d[75]][i]);} ;for(var i=0;i<Ox142[OxO990d[26]];i++){try{var Ox138=Ox141(Ox142[i]);if(Ox138){return Ox138;} ;} catch(x){} ;} ;return null;} ;} ;function Event_GetSrcElement(Ox138){Ox138=Event_GetEvent(Ox138);if(Ox138[OxO990d[83]]){return Ox138[OxO990d[83]];} ;if(Ox138[OxO990d[84]]){return Ox138[OxO990d[84]];} ;Debug_Todo(OxO990d[85]);return null;} ;function Event_GetFromElement(Ox138){Ox138=Event_GetEvent(Ox138);if(Ox138[OxO990d[86]]){return Ox138[OxO990d[86]];} ;if(Ox138[OxO990d[87]]){return Ox138[OxO990d[87]];} ;return null;} ;function Event_GetToElement(Ox138){Ox138=Event_GetEvent(Ox138);if(Ox138[OxO990d[88]]){return Ox138[OxO990d[88]];} ;if(Ox138[OxO990d[87]]){return Ox138[OxO990d[87]];} ;return null;} ;function Event_GetKeyCode(Ox138){Ox138=Event_GetEvent(Ox138);return Ox138[OxO990d[89]];} ;function Event_GetClientX(Ox138){Ox138=Event_GetEvent(Ox138);return Ox138[OxO990d[90]];} ;function Event_GetClientY(Ox138){Ox138=Event_GetEvent(Ox138);return Ox138[OxO990d[91]];} ;function Event_GetOffsetX(Ox138){Ox138=Event_GetEvent(Ox138);return Ox138[OxO990d[92]];} ;function Event_GetOffsetY(Ox138){Ox138=Event_GetEvent(Ox138);return Ox138[OxO990d[93]];} ;function Event_IsLeftButton(Ox138){Ox138=Event_GetEvent(Ox138);if(Browser_IsWinIE()){return Ox138[OxO990d[94]]==1;} ;if(Browser_IsGecko()){return Ox138[OxO990d[94]]==0;} ;return Ox138[OxO990d[94]]==0;} ;function Event_IsCtrlKey(Ox138){Ox138=Event_GetEvent(Ox138);return Ox138[OxO990d[95]];} ;function Event_IsAltKey(Ox138){Ox138=Event_GetEvent(Ox138);return Ox138[OxO990d[96]];} ;function Event_IsShiftKey(Ox138){Ox138=Event_GetEvent(Ox138);return Ox138[OxO990d[97]];} ;function Event_PreventDefault(Ox138){Ox138=Event_GetEvent(Ox138);Ox138[OxO990d[37]]=false;if(Ox138[OxO990d[78]]){Ox138.preventDefault();} ;} ;function Event_CancelBubble(Ox138){Ox138=Event_GetEvent(Ox138);Ox138[OxO990d[98]]=true;if(Ox138[OxO990d[99]]){Ox138.stopPropagation();} ;return false;} ;function Event_CancelEvent(Ox138){Ox138=Event_GetEvent(Ox138);Event_PreventDefault(Ox138);return Event_CancelBubble(Ox138);} ;function CuteEditor_BasicInitialize(editor){var Ox5c4=Browser_IsOpera();var Ox601= new Function(OxO990d[100]);var Ox96e= new Function(OxO990d[101]);var Ox96f=editor.GetScriptProperty(OxO990d[102]);var Ox970=editor.GetScriptProperty(OxO990d[103]);var Ox971=Ox96f+OxO990d[104]+Ox970+OxO990d[105];var Ox972=Ox96f+OxO990d[106];var images=editor.getElementsByTagName(OxO990d[107]);var len=images[OxO990d[26]];for(var i=0;i<len;i++){var img=images[i];if(img.getAttribute(OxO990d[108])&&!img.getAttribute(OxO990d[109])){img.setAttribute(OxO990d[109],img.getAttribute(OxO990d[108]));} ;var Ox1e=img.getAttribute(OxO990d[110]);var Ox552=img.getAttribute(OxO990d[111]);if(!(Ox1e||Ox552)){continue ;} ;var Ox973=img.getAttribute(OxO990d[112]);if(parseInt(Ox973)>=0){img[OxO990d[54]][OxO990d[113]]=OxO990d[114];img[OxO990d[54]][OxO990d[115]]=OxO990d[114];img[OxO990d[19]]=Ox972;img[OxO990d[54]][OxO990d[116]]=OxO990d[117]+Ox971+OxO990d[118];img[OxO990d[54]][OxO990d[119]]=OxO990d[120]+(Ox973*20)+OxO990d[121];img[OxO990d[54]][OxO990d[53]]=OxO990d[25];} ;if(!Ox1e&&!Ox552){if(Ox5c4){img[OxO990d[122]]=CuteEditor_OperaHandleImageLoaded;} ;continue ;} ;if(img[OxO990d[123]]!=OxO990d[124]){img[OxO990d[123]]=OxO990d[125];img[OxO990d[126]]= new Function(OxO990d[127]);img[OxO990d[128]]= new Function(OxO990d[129]);img[OxO990d[62]]= new Function(OxO990d[130]);img[OxO990d[131]]= new Function(OxO990d[132]);} ;if(!img[OxO990d[133]]){img[OxO990d[133]]=Event_CancelEvent;} ;if(!img[OxO990d[134]]){img[OxO990d[134]]=Event_CancelEvent;} ;if(Ox1e){var Ox75=Ox601;if(img[OxO990d[59]]==null){img[OxO990d[59]]=Ox75;} ;if(img[OxO990d[135]]==null){img[OxO990d[135]]=Ox75;} ;} else {if(Ox552){if(img[OxO990d[59]]==null){img[OxO990d[59]]=Ox96e;} ;} ;} ;} ;var Ox66d=Window_GetElement(window,editor.GetScriptProperty(OxO990d[136]),true);var Ox66e=Window_GetElement(window,editor.GetScriptProperty(OxO990d[137]),true);var Ox66a=Window_GetElement(window,editor.GetScriptProperty(OxO990d[138]),true);Ox66a[OxO990d[123]]+=OxO990d[139];Ox66d[OxO990d[123]]+=OxO990d[140];Ox66e[OxO990d[123]]+=OxO990d[140];Element_SetUnselectable(Ox66d);Element_SetUnselectable(Ox66e);try{editor[OxO990d[54]][OxO990d[141]]=OxO990d[142];} catch(x){} ;var Ox6f7=editor.GetScriptProperty(OxO990d[143]);switch(Ox6f7){case OxO990d[144]:Ox66d[OxO990d[54]][OxO990d[53]]=OxO990d[25];break ;;case OxO990d[145]:Ox66e[OxO990d[54]][OxO990d[53]]=OxO990d[25];break ;;case OxO990d[146]:break ;;} ;} ;function CuteEditor_OperaHandleImageLoaded(){var img=this;if(img[OxO990d[54]][OxO990d[53]]){img[OxO990d[54]][OxO990d[53]]=OxO990d[63];setTimeout(function Ox975(){img[OxO990d[54]][OxO990d[53]]=OxO990d[25];} ,1);} ;} ;function CuteEditor_ButtonOver(element){if(!element[OxO990d[147]]){element[OxO990d[133]]=Event_CancelEvent;element[OxO990d[128]]=CuteEditor_ButtonOut;element[OxO990d[62]]=CuteEditor_ButtonDown;element[OxO990d[131]]=CuteEditor_ButtonUp;Element_SetUnselectable(element);element[OxO990d[147]]=true;} ;element[OxO990d[148]]=true;element[OxO990d[123]]=OxO990d[149];} ;function CuteEditor_ButtonOut(){var element=this;element[OxO990d[123]]=OxO990d[125];element[OxO990d[148]]=false;} ;function CuteEditor_ButtonDown(){if(!Event_IsLeftButton()){return ;} ;var element=this;element[OxO990d[123]]=OxO990d[150];} ;function CuteEditor_ButtonUp(){if(!Event_IsLeftButton()){return ;} ;var element=this;if(element[OxO990d[148]]){element[OxO990d[123]]=OxO990d[149];} else {element[OxO990d[123]]=OxO990d[151];} ;} ;function CuteEditor_ColorPicker_ButtonOver(element){if(!element[OxO990d[147]]){element[OxO990d[133]]=Event_CancelEvent;element[OxO990d[128]]=CuteEditor_ColorPicker_ButtonOut;element[OxO990d[62]]=CuteEditor_ColorPicker_ButtonDown;Element_SetUnselectable(element);element[OxO990d[147]]=true;} ;element[OxO990d[148]]=true;element[OxO990d[54]][OxO990d[152]]=OxO990d[153];element[OxO990d[54]][OxO990d[154]]=OxO990d[155];element[OxO990d[54]][OxO990d[156]]=OxO990d[157];} ;function CuteEditor_ColorPicker_ButtonOut(){var element=this;element[OxO990d[148]]=false;element[OxO990d[54]][OxO990d[152]]=OxO990d[158];element[OxO990d[54]][OxO990d[154]]=OxO990d[25];element[OxO990d[54]][OxO990d[156]]=OxO990d[157];} ;function CuteEditor_ColorPicker_ButtonDown(){var element=this;element[OxO990d[54]][OxO990d[152]]=OxO990d[159];element[OxO990d[54]][OxO990d[154]]=OxO990d[25];element[OxO990d[54]][OxO990d[156]]=OxO990d[157];} ;function CuteEditor_ButtonCommandOver(element){element[OxO990d[148]]=true;if(element[OxO990d[160]]){element[OxO990d[123]]=OxO990d[161];} else {element[OxO990d[123]]=OxO990d[149];} ;} ;function CuteEditor_ButtonCommandOut(element){element[OxO990d[148]]=false;if(element[OxO990d[162]]){element[OxO990d[123]]=OxO990d[163];} else {if(element[OxO990d[160]]){element[OxO990d[123]]=OxO990d[161];} else {if(element[OxO990d[20]]!=OxO990d[164]){element[OxO990d[123]]=OxO990d[125];} ;} ;} ;} ;function CuteEditor_ButtonCommandDown(element){if(!Event_IsLeftButton()){return ;} ;element[OxO990d[123]]=OxO990d[150];} ;function CuteEditor_ButtonCommandUp(element){if(!Event_IsLeftButton()){return ;} ;if(element[OxO990d[160]]){element[OxO990d[123]]=OxO990d[161];return ;} ;if(element[OxO990d[148]]){element[OxO990d[123]]=OxO990d[149];} else {if(element[OxO990d[162]]){element[OxO990d[123]]=OxO990d[163];} else {element[OxO990d[123]]=OxO990d[125];} ;} ;} ;var CuteEditorGlobalFunctions=[CuteEditor_GetEditor,CuteEditor_ButtonOver,CuteEditor_ButtonOut,CuteEditor_ButtonDown,CuteEditor_ButtonUp,CuteEditor_ColorPicker_ButtonOver,CuteEditor_ColorPicker_ButtonOut,CuteEditor_ColorPicker_ButtonDown,CuteEditor_ButtonCommandOver,CuteEditor_ButtonCommandOut,CuteEditor_ButtonCommandDown,CuteEditor_ButtonCommandUp,CuteEditor_DropDownCommand,CuteEditor_ExpandTreeDropDownItem,CuteEditor_CollapseTreeDropDownItem,CuteEditor_OnInitialized,CuteEditor_OnCommand,CuteEditor_OnChange,CuteEditor_AddVerbMenuItems,CuteEditor_AddTagMenuItems,CuteEditor_AddMainMenuItems,CuteEditor_AddDropMenuItems,CuteEditor_FilterCode,CuteEditor_FilterHTML];function SetupCuteEditorGlobalFunctions(){for(var i=0;i<CuteEditorGlobalFunctions[OxO990d[26]];i++){var Ox75=CuteEditorGlobalFunctions[i];var name=Ox75+OxO990d[25];name=name.substr(8,name.indexOf(OxO990d[165])-8).replace(/\s/g,OxO990d[25]);if(!window[name]){window[name]=Ox75;} ;} ;} ;SetupCuteEditorGlobalFunctions();var __danainfo=null;var danaurl=window[OxO990d[167]][OxO990d[166]];var danapos=danaurl.indexOf(OxO990d[168]);if(danapos!=-1){var pluspos1=danaurl.indexOf(OxO990d[169],danapos+10);var pluspos2=danaurl.indexOf(OxO990d[170],danapos+10);if(pluspos1!=-1&&pluspos1<pluspos2){pluspos2=pluspos1;} ;__danainfo=danaurl.substring(danapos,pluspos2)+OxO990d[170];} ;function CuteEditor_GetScriptProperty(name){return this[OxO990d[171]][name];} ;function CuteEditor_SetScriptProperty(name,Ox2b){if(Ox2b==null){this[OxO990d[171]][name]=null;} else {this[OxO990d[171]][name]=String(Ox2b);} ;} ;function CuteEditorInitialize(Ox980,Ox981){var editor=Window_GetElement(window,Ox980,true);editor[OxO990d[171]]=Ox981;editor[OxO990d[172]]=CuteEditor_GetScriptProperty;var Ox66a=Window_GetElement(window,editor.GetScriptProperty(OxO990d[138]),true);var editwin,editdoc;try{editwin=Frame_GetContentWindow(Ox66a);editdoc=editwin[OxO990d[11]];} catch(x){} ;var Ox982=false;var Ox983;var Ox984=false;var Ox985=editor.GetScriptProperty(OxO990d[102])+OxO990d[173];function Ox986(){if( typeof (window[OxO990d[174]])==OxO990d[175]){return ;} ;LoadXMLAsync(OxO990d[176],Ox985+OxO990d[177],Ox987);} ;function Ox987(Ox188){if(Ox188[OxO990d[178]]!=200){alert(OxO990d[179]);return ;} ;CuteEditorInstallScriptCode(Ox188.responseText,OxO990d[174]);if(Ox982){Ox989();} ;} ;function Ox988(Ox188){if(Ox188[OxO990d[178]]!=200){alert(OxO990d[180]);return ;} ;CuteEditorInstallScriptCode(Ox188.responseText,OxO990d[174]);if(Ox982){Ox989();} ;} ;function Ox989(){if(Ox984){return ;} ;Ox984=true;window.CuteEditorImplementation(editor);try{editor[OxO990d[54]][OxO990d[141]]=OxO990d[25];} catch(x){} ;try{editdoc[OxO990d[181]][OxO990d[54]][OxO990d[141]]=OxO990d[25];} catch(x){} ;var Ox98a=editor.GetScriptProperty(OxO990d[182]);if(Ox98a){editor.Eval(Ox98a);} ;} ;function Ox98b(){if(!Element_Contains(window[OxO990d[11]].body,editor)){return ;} ;try{Ox66a=Window_GetElement(window,editor.GetScriptProperty(OxO990d[138]),true);editwin=Frame_GetContentWindow(Ox66a);editdoc=editwin[OxO990d[11]];var Oxbf=editdoc[OxO990d[181]];} catch(x){setTimeout(Ox98b,100);return ;} ;if(!editdoc[OxO990d[181]]){setTimeout(Ox98b,100);return ;} ;if(!Ox982){Ox66a[OxO990d[54]][OxO990d[53]]=OxO990d[183];if(Browser_IsOpera()){editdoc[OxO990d[181]][OxO990d[184]]=true;} else {if(Browser_IsGecko()){editdoc[OxO990d[181]][OxO990d[56]]=OxO990d[185];} ;editdoc[OxO990d[186]]=OxO990d[68];} ;Ox982=true;setTimeout(Ox98b,50);return ;} ;if( typeof (window[OxO990d[174]])==OxO990d[175]){Ox989();} else {try{editdoc[OxO990d[181]][OxO990d[54]][OxO990d[141]]=OxO990d[142];} catch(x){} ;} ;} ;var Ox98c=0;var Ox3a=CuteEditor_Find_DisplayNone(editor);if(Ox3a){function Ox98d(){if(Ox3a[OxO990d[54]][OxO990d[53]]!=OxO990d[63]){window.clearInterval(Ox98c);Ox98c=OxO990d[25];CuteEditorInitialize(Ox980,Ox981);} ;} ;Ox98c=setInterval(Ox98d,1000);return ;} ;function CuteEditor_Find_DisplayNone(element){var Ox9d5;for(var Ox3a=element;Ox3a!=null;Ox3a=Ox3a[OxO990d[42]]){if(Ox3a[OxO990d[54]]&&Ox3a[OxO990d[54]][OxO990d[53]]==OxO990d[63]){Ox9d5=Ox3a;break ;} ;} ;return Ox9d5;} ;function Ox98e(Ox98f){function Ox990(Ox1c9,Ox991,Ox992,Ox103,Ox993,Ox994){var Ox995= new Array(0x1010400,0,0x10000,0x1010404,0x1010004,0x10404,0x4,0x10000,0x400,0x1010400,0x1010404,0x400,0x1000404,0x1010004,0x1000000,0x4,0x404,0x1000400,0x1000400,0x10400,0x10400,0x1010000,0x1010000,0x1000404,0x10004,0x1000004,0x1000004,0x10004,0,0x404,0x10404,0x1000000,0x10000,0x1010404,0x4,0x1010000,0x1010400,0x1000000,0x1000000,0x400,0x1010004,0x10000,0x10400,0x1000004,0x400,0x4,0x1000404,0x10404,0x1010404,0x10004,0x1010000,0x1000404,0x1000004,0x404,0x10404,0x1010400,0x404,0x1000400,0x1000400,0,0x10004,0x10400,0,0x1010004);var Ox996= new Array(-0x7fef7fe0,-0x7fff8000,0x8000,0x108020,0x100000,0x20,-0x7fefffe0,-0x7fff7fe0,-0x7fffffe0,-0x7fef7fe0,-0x7fef8000,-0x80000000,-0x7fff8000,0x100000,0x20,-0x7fefffe0,0x108000,0x100020,-0x7fff7fe0,0,-0x80000000,0x8000,0x108020,-0x7ff00000,0x100020,-0x7fffffe0,0,0x108000,0x8020,-0x7fef8000,-0x7ff00000,0x8020,0,0x108020,-0x7fefffe0,0x100000,-0x7fff7fe0,-0x7ff00000,-0x7fef8000,0x8000,-0x7ff00000,-0x7fff8000,0x20,-0x7fef7fe0,0x108020,0x20,0x8000,-0x80000000,0x8020,-0x7fef8000,0x100000,-0x7fffffe0,0x100020,-0x7fff7fe0,-0x7fffffe0,0x100020,0x108000,0,-0x7fff8000,0x8020,-0x80000000,-0x7fefffe0,-0x7fef7fe0,0x108000);var Ox997= new Array(0x208,0x8020200,0,0x8020008,0x8000200,0,0x20208,0x8000200,0x20008,0x8000008,0x8000008,0x20000,0x8020208,0x20008,0x8020000,0x208,0x8000000,0x8,0x8020200,0x200,0x20200,0x8020000,0x8020008,0x20208,0x8000208,0x20200,0x20000,0x8000208,0x8,0x8020208,0x200,0x8000000,0x8020200,0x8000000,0x20008,0x208,0x20000,0x8020200,0x8000200,0,0x200,0x20008,0x8020208,0x8000200,0x8000008,0x200,0,0x8020008,0x8000208,0x20000,0x8000000,0x8020208,0x8,0x20208,0x20200,0x8000008,0x8020000,0x8000208,0x208,0x8020000,0x20208,0x8,0x8020008,0x20200);var Ox998= new Array(0x802001,0x2081,0x2081,0x80,0x802080,0x800081,0x800001,0x2001,0,0x802000,0x802000,0x802081,0x81,0,0x800080,0x800001,0x1,0x2000,0x800000,0x802001,0x80,0x800000,0x2001,0x2080,0x800081,0x1,0x2080,0x800080,0x2000,0x802080,0x802081,0x81,0x800080,0x800001,0x802000,0x802081,0x81,0,0,0x802000,0x2080,0x800080,0x800081,0x1,0x802001,0x2081,0x2081,0x80,0x802081,0x81,0x1,0x2000,0x800001,0x2001,0x802080,0x800081,0x2001,0x2080,0x800000,0x802001,0x80,0x800000,0x2000,0x802080);var Ox999= new Array(0x100,0x2080100,0x2080000,0x42000100,0x80000,0x100,0x40000000,0x2080000,0x40080100,0x80000,0x2000100,0x40080100,0x42000100,0x42080000,0x80100,0x40000000,0x2000000,0x40080000,0x40080000,0,0x40000100,0x42080100,0x42080100,0x2000100,0x42080000,0x40000100,0,0x42000000,0x2080100,0x2000000,0x42000000,0x80100,0x80000,0x42000100,0x100,0x2000000,0x40000000,0x2080000,0x42000100,0x40080100,0x2000100,0x40000000,0x42080000,0x2080100,0x40080100,0x100,0x2000000,0x42080000,0x42080100,0x80100,0x42000000,0x42080100,0x2080000,0,0x40080000,0x42000000,0x80100,0x2000100,0x40000100,0x80000,0,0x40080000,0x2080100,0x40000100);var Ox99a= new Array(0x20000010,0x20400000,0x4000,0x20404010,0x20400000,0x10,0x20404010,0x400000,0x20004000,0x404010,0x400000,0x20000010,0x400010,0x20004000,0x20000000,0x4010,0,0x400010,0x20004010,0x4000,0x404000,0x20004010,0x10,0x20400010,0x20400010,0,0x404010,0x20404000,0x4010,0x404000,0x20404000,0x20000000,0x20004000,0x10,0x20400010,0x404000,0x20404010,0x400000,0x4010,0x20000010,0x400000,0x20004000,0x20000000,0x4010,0x20000010,0x20404010,0x404000,0x20400000,0x404010,0x20404000,0,0x20400010,0x10,0x4000,0x20400000,0x404010,0x4000,0x400010,0x20004010,0,0x20404000,0x20000000,0x400010,0x20004010);var Ox99b= new Array(0x200000,0x4200002,0x4000802,0,0x800,0x4000802,0x200802,0x4200800,0x4200802,0x200000,0,0x4000002,0x2,0x4000000,0x4200002,0x802,0x4000800,0x200802,0x200002,0x4000800,0x4000002,0x4200000,0x4200800,0x200002,0x4200000,0x800,0x802,0x4200802,0x200800,0x2,0x4000000,0x200800,0x4000000,0x200800,0x200000,0x4000802,0x4000802,0x4200002,0x4200002,0x2,0x200002,0x4000000,0x4000800,0x200000,0x4200800,0x802,0x200802,0x4200800,0x802,0x4000002,0x4200802,0x4200000,0x200800,0,0x2,0x4200802,0,0x200802,0x4200000,0x800,0x4000002,0x4000800,0x800,0x200002);var Ox99c= new Array(0x10001040,0x1000,0x40000,0x10041040,0x10000000,0x10001040,0x40,0x10000000,0x40040,0x10040000,0x10041040,0x41000,0x10041000,0x41040,0x1000,0x40,0x10040000,0x10000040,0x10001000,0x1040,0x41000,0x40040,0x10040040,0x10041000,0x1040,0,0,0x10040040,0x10000040,0x10001000,0x41040,0x40000,0x41040,0x40000,0x10041000,0x1000,0x40,0x10040040,0x1000,0x41040,0x10001000,0x40,0x10000040,0x10040000,0x10040040,0x10000000,0x40000,0x10001040,0,0x10041040,0x40040,0x10000040,0x10040000,0x10001000,0x10001040,0,0x10041040,0x41000,0x41000,0x1040,0x1040,0x40040,0x10000000,0x10041000);var Ox1cc=Ox9aa(Ox1c9);var m=0,i,Ox5a,Oxf6,Ox99d,Ox99e,Ox99f,Ox5b7,Ox948,Ox9a0;var Ox9a1,Ox9a2,Ox9a3,Ox9a4;var Ox9a5,Ox9a6;var len=Ox991[OxO990d[26]];var Ox9a7=0;var Ox9a8=Ox1cc[OxO990d[26]]==32?3:9;if(Ox9a8==3){Ox9a0=Ox992? new Array(0,32,2): new Array(30,-2,-2);} else {Ox9a0=Ox992? new Array(0,32,2,62,30,-2,64,96,2): new Array(94,62,-2,32,64,2,30,-2,-2);} ;var Oxf7=OxO990d[25];var Ox9a9=OxO990d[25];if(Ox103==1){Ox9a1=(Ox993.charCodeAt(m++)<<24)|(Ox993.charCodeAt(m++)<<16)|(Ox993.charCodeAt(m++)<<8)|Ox993.charCodeAt(m++);Ox9a3=(Ox993.charCodeAt(m++)<<24)|(Ox993.charCodeAt(m++)<<16)|(Ox993.charCodeAt(m++)<<8)|Ox993.charCodeAt(m++);m=0;} ;while(m<len){Ox5b7=(Ox991.charCodeAt(m++)<<24)|(Ox991.charCodeAt(m++)<<16)|(Ox991.charCodeAt(m++)<<8)|Ox991.charCodeAt(m++);Ox948=(Ox991.charCodeAt(m++)<<24)|(Ox991.charCodeAt(m++)<<16)|(Ox991.charCodeAt(m++)<<8)|Ox991.charCodeAt(m++);if(Ox103==1){if(Ox992){Ox5b7^=Ox9a1;Ox948^=Ox9a3;} else {Ox9a2=Ox9a1;Ox9a4=Ox9a3;Ox9a1=Ox5b7;Ox9a3=Ox948;} ;} ;Oxf6=((Ox5b7>>>4)^Ox948)&0x0f0f0f0f;Ox948^=Oxf6;Ox5b7^=(Oxf6<<4);Oxf6=((Ox5b7>>>16)^Ox948)&0x0000ffff;Ox948^=Oxf6;Ox5b7^=(Oxf6<<16);Oxf6=((Ox948>>>2)^Ox5b7)&0x33333333;Ox5b7^=Oxf6;Ox948^=(Oxf6<<2);Oxf6=((Ox948>>>8)^Ox5b7)&0x00ff00ff;Ox5b7^=Oxf6;Ox948^=(Oxf6<<8);Oxf6=((Ox5b7>>>1)^Ox948)&0x55555555;Ox948^=Oxf6;Ox5b7^=(Oxf6<<1);Ox5b7=((Ox5b7<<1)|(Ox5b7>>>31));Ox948=((Ox948<<1)|(Ox948>>>31));for(Ox5a=0;Ox5a<Ox9a8;Ox5a+=3){Ox9a5=Ox9a0[Ox5a+1];Ox9a6=Ox9a0[Ox5a+2];for(i=Ox9a0[Ox5a];i!=Ox9a5;i+=Ox9a6){Ox99e=Ox948^Ox1cc[i];Ox99f=((Ox948>>>4)|(Ox948<<28))^Ox1cc[i+1];Oxf6=Ox5b7;Ox5b7=Ox948;Ox948=Oxf6^(Ox996[(Ox99e>>>24)&0x3f]|Ox998[(Ox99e>>>16)&0x3f]|Ox99a[(Ox99e>>>8)&0x3f]|Ox99c[Ox99e&0x3f]|Ox995[(Ox99f>>>24)&0x3f]|Ox997[(Ox99f>>>16)&0x3f]|Ox999[(Ox99f>>>8)&0x3f]|Ox99b[Ox99f&0x3f]);} ;Oxf6=Ox5b7;Ox5b7=Ox948;Ox948=Oxf6;} ;Ox5b7=((Ox5b7>>>1)|(Ox5b7<<31));Ox948=((Ox948>>>1)|(Ox948<<31));Oxf6=((Ox5b7>>>1)^Ox948)&0x55555555;Ox948^=Oxf6;Ox5b7^=(Oxf6<<1);Oxf6=((Ox948>>>8)^Ox5b7)&0x00ff00ff;Ox5b7^=Oxf6;Ox948^=(Oxf6<<8);Oxf6=((Ox948>>>2)^Ox5b7)&0x33333333;Ox5b7^=Oxf6;Ox948^=(Oxf6<<2);Oxf6=((Ox5b7>>>16)^Ox948)&0x0000ffff;Ox948^=Oxf6;Ox5b7^=(Oxf6<<16);Oxf6=((Ox5b7>>>4)^Ox948)&0x0f0f0f0f;Ox948^=Oxf6;Ox5b7^=(Oxf6<<4);if(Ox103==1){if(Ox992){Ox9a1=Ox5b7;Ox9a3=Ox948;} else {Ox5b7^=Ox9a2;Ox948^=Ox9a4;} ;} ;Ox9a9+=String.fromCharCode((Ox5b7>>>24),((Ox5b7>>>16)&0xff),((Ox5b7>>>8)&0xff),(Ox5b7&0xff),(Ox948>>>24),((Ox948>>>16)&0xff),((Ox948>>>8)&0xff),(Ox948&0xff));Ox9a7+=8;if(Ox9a7==512){Oxf7+=Ox9a9;Ox9a9=OxO990d[25];Ox9a7=0;} ;} ;return Oxf7+Ox9a9;} ;function Ox9aa(Ox1c9){var Ox9ab= new Array(0,0x4,0x20000000,0x20000004,0x10000,0x10004,0x20010000,0x20010004,0x200,0x204,0x20000200,0x20000204,0x10200,0x10204,0x20010200,0x20010204);var Ox9ac= new Array(0,0x1,0x100000,0x100001,0x4000000,0x4000001,0x4100000,0x4100001,0x100,0x101,0x100100,0x100101,0x4000100,0x4000101,0x4100100,0x4100101);var Ox9ad= new Array(0,0x8,0x800,0x808,0x1000000,0x1000008,0x1000800,0x1000808,0,0x8,0x800,0x808,0x1000000,0x1000008,0x1000800,0x1000808);var Ox9ae= new Array(0,0x200000,0x8000000,0x8200000,0x2000,0x202000,0x8002000,0x8202000,0x20000,0x220000,0x8020000,0x8220000,0x22000,0x222000,0x8022000,0x8222000);var Ox9af= new Array(0,0x40000,0x10,0x40010,0,0x40000,0x10,0x40010,0x1000,0x41000,0x1010,0x41010,0x1000,0x41000,0x1010,0x41010);var Ox9b0= new Array(0,0x400,0x20,0x420,0,0x400,0x20,0x420,0x2000000,0x2000400,0x2000020,0x2000420,0x2000000,0x2000400,0x2000020,0x2000420);var Ox9b1= new Array(0,0x10000000,0x80000,0x10080000,0x2,0x10000002,0x80002,0x10080002,0,0x10000000,0x80000,0x10080000,0x2,0x10000002,0x80002,0x10080002);var Ox9b2= new Array(0,0x10000,0x800,0x10800,0x20000000,0x20010000,0x20000800,0x20010800,0x20000,0x30000,0x20800,0x30800,0x20020000,0x20030000,0x20020800,0x20030800);var Ox9b3= new Array(0,0x40000,0,0x40000,0x2,0x40002,0x2,0x40002,0x2000000,0x2040000,0x2000000,0x2040000,0x2000002,0x2040002,0x2000002,0x2040002);var Ox9b4= new Array(0,0x10000000,0x8,0x10000008,0,0x10000000,0x8,0x10000008,0x400,0x10000400,0x408,0x10000408,0x400,0x10000400,0x408,0x10000408);var Ox9b5= new Array(0,0x20,0,0x20,0x100000,0x100020,0x100000,0x100020,0x2000,0x2020,0x2000,0x2020,0x102000,0x102020,0x102000,0x102020);var Ox9b6= new Array(0,0x1000000,0x200,0x1000200,0x200000,0x1200000,0x200200,0x1200200,0x4000000,0x5000000,0x4000200,0x5000200,0x4200000,0x5200000,0x4200200,0x5200200);var Ox9b7= new Array(0,0x1000,0x8000000,0x8001000,0x80000,0x81000,0x8080000,0x8081000,0x10,0x1010,0x8000010,0x8001010,0x80010,0x81010,0x8080010,0x8081010);var Ox9b8= new Array(0,0x4,0x100,0x104,0,0x4,0x100,0x104,0x1,0x5,0x101,0x105,0x1,0x5,0x101,0x105);var Ox9a8=Ox1c9[OxO990d[26]]>8?3:1;var Ox1cc= new Array(32*Ox9a8);var Ox9b9= new Array(0,0,1,1,1,1,1,1,0,1,1,1,1,1,1,0);var Ox9ba,Ox9bb,m=0,Ox8d=0,Oxf6;var Ox5b7,Ox948;for(var Ox5a=0;Ox5a<Ox9a8;Ox5a++){Ox5b7=(Ox1c9.charCodeAt(m++)<<24)|(Ox1c9.charCodeAt(m++)<<16)|(Ox1c9.charCodeAt(m++)<<8)|Ox1c9.charCodeAt(m++);Ox948=(Ox1c9.charCodeAt(m++)<<24)|(Ox1c9.charCodeAt(m++)<<16)|(Ox1c9.charCodeAt(m++)<<8)|Ox1c9.charCodeAt(m++);Oxf6=((Ox5b7>>>4)^Ox948)&0x0f0f0f0f;Ox948^=Oxf6;Ox5b7^=(Oxf6<<4);Oxf6=((Ox948>>>-16)^Ox5b7)&0x0000ffff;Ox5b7^=Oxf6;Ox948^=(Oxf6<<-16);Oxf6=((Ox5b7>>>2)^Ox948)&0x33333333;Ox948^=Oxf6;Ox5b7^=(Oxf6<<2);Oxf6=((Ox948>>>-16)^Ox5b7)&0x0000ffff;Ox5b7^=Oxf6;Ox948^=(Oxf6<<-16);Oxf6=((Ox5b7>>>1)^Ox948)&0x55555555;Ox948^=Oxf6;Ox5b7^=(Oxf6<<1);Oxf6=((Ox948>>>8)^Ox5b7)&0x00ff00ff;Ox5b7^=Oxf6;Ox948^=(Oxf6<<8);Oxf6=((Ox5b7>>>1)^Ox948)&0x55555555;Ox948^=Oxf6;Ox5b7^=(Oxf6<<1);Oxf6=(Ox5b7<<8)|((Ox948>>>20)&0x000000f0);Ox5b7=(Ox948<<24)|((Ox948<<8)&0xff0000)|((Ox948>>>8)&0xff00)|((Ox948>>>24)&0xf0);Ox948=Oxf6;for(i=0;i<Ox9b9[OxO990d[26]];i++){if(Ox9b9[i]){Ox5b7=(Ox5b7<<2)|(Ox5b7>>>26);Ox948=(Ox948<<2)|(Ox948>>>26);} else {Ox5b7=(Ox5b7<<1)|(Ox5b7>>>27);Ox948=(Ox948<<1)|(Ox948>>>27);} ;Ox5b7&=-0xf;Ox948&=-0xf;Ox9ba=Ox9ab[Ox5b7>>>28]|Ox9ac[(Ox5b7>>>24)&0xf]|Ox9ad[(Ox5b7>>>20)&0xf]|Ox9ae[(Ox5b7>>>16)&0xf]|Ox9af[(Ox5b7>>>12)&0xf]|Ox9b0[(Ox5b7>>>8)&0xf]|Ox9b1[(Ox5b7>>>4)&0xf];Ox9bb=Ox9b2[Ox948>>>28]|Ox9b3[(Ox948>>>24)&0xf]|Ox9b4[(Ox948>>>20)&0xf]|Ox9b5[(Ox948>>>16)&0xf]|Ox9b6[(Ox948>>>12)&0xf]|Ox9b7[(Ox948>>>8)&0xf]|Ox9b8[(Ox948>>>4)&0xf];Oxf6=((Ox9bb>>>16)^Ox9ba)&0x0000ffff;Ox1cc[Ox8d++]=Ox9ba^Oxf6;Ox1cc[Ox8d++]=Ox9bb^(Oxf6<<16);} ;} ;return Ox1cc;} ;var Ox991=[];for(var i=0;i<Ox98f[OxO990d[26]];i++){Ox991.push(String.fromCharCode(Ox98f[i]));} ;Ox991=Ox991.join(OxO990d[25]);var Ox9bc=[0x46,0x35,0x32,0x42,0x31,0x38,0x36,0x46];var Ox1c9=[];for(var i=0;i<Ox9bc[OxO990d[26]];i++){Ox1c9.push(String.fromCharCode(Ox9bc[i]));} ;Ox1c9=Ox1c9.join(OxO990d[25]);var Ox993=Ox1c9;return Ox990(Ox1c9,Ox991,0,1,Ox993);} ;var Ox9bd;var Ox9be;var Ox9bf;var Ox9c0;function Ox9c1(Ox9c2){var Ox188=CreateXMLHttpRequest();var Ox9c3=Ox9d2;if(!Ox9bd){Ox188.open(OxO990d[176],editor.GetScriptProperty(OxO990d[102])+OxO990d[187]+OxO990d[188]+ new Date().getTime(),false);Ox188.send(OxO990d[25]);if(Ox188[OxO990d[178]]!=200){return Ox9c3(1000,OxO990d[189]);} ;Ox9bd=Ox188[OxO990d[190]].toUpperCase();} ;if(!Ox9be){Ox9be={};var Ox9c4=[OxO990d[191],OxO990d[192],OxO990d[193],OxO990d[194],OxO990d[195],OxO990d[196],OxO990d[197],OxO990d[198],OxO990d[199],OxO990d[200],OxO990d[201],OxO990d[202],OxO990d[203],OxO990d[204],OxO990d[205],OxO990d[206]];for(var i=0;i<Ox9c4[OxO990d[26]];i++){Ox9be[Ox9c4[i]]=i;} ;} ;try{if(!Ox9bf){if(Ox9bd.substring(0,16)!=OxO990d[207]){return Ox9c3(1001);} ;var Ox9c5=[];for(var i=0;i<Ox9bd[OxO990d[26]];i+=2){Ox9c5.push(Ox9be[Ox9bd.charAt(i)]*16+Ox9be[Ox9bd.charAt(i+1)]);} ;Ox9c5.splice(0,8);Ox9c5.splice(0,123);var Ox9c6=Ox9c5[0]+Ox9c5[1]*256;Ox9c5.splice(0,4);var Ox9c7=Ox9c5.slice(0,Ox9c6);var Ox9c8=Ox98e(Ox9c7);Ox9c8=Ox9c8.replace(/^\xEF\xBB\xBF/,OxO990d[25]).replace(/[\x00-\x08]*$/,OxO990d[25]);Ox9bf=Ox9c8.split(OxO990d[208]);} ;if(Ox9bf[OxO990d[26]]!=10){return Ox9c3(1002,Ox9bf.length);} ;var Ox9c9=Ox9bf[9].split(OxO990d[209]);var Ox9ca= new Date(parseFloat(Ox9c9[2]),parseFloat(Ox9c9[1])-1,parseFloat(Ox9c9[0]));var Ox9cb=Ox9ca.getTime();if((Ox9bf[5]<<2)!=1200685124){return Ox9c3(1003,Ox9bf[5]);} ;var Ox9cc=window[OxO990d[167]][OxO990d[166]].split(OxO990d[211])[1].split(OxO990d[209])[0].split(OxO990d[210])[0].toLowerCase();var Ox9cd=false;if(Ox9cc==String.fromCharCode(108,111,99,97,108,104,111,115,116)){Ox9cd=true;} ;if(Ox9cc==String.fromCharCode(49,50,55,46,48,46,48,46,49)){Ox9cd=true;} ;function Ox9ce(Ox9cf){var Oxe=Ox9cf.split(OxO990d[212]);if(Oxe[0]==OxO990d[213]){Oxe.splice(0,1);} ;return Oxe.join(OxO990d[212]);} ;Ox9cc=Ox9ce(Ox9cc);var Ox9d0=Ox9bf[7].toLowerCase();var Ox9d1=Ox9bf[8];switch(parseInt(Ox9bf[6])){case 0:if(Ox9cb< new Date().getTime()){return Ox9c3(20000,Ox9ca);} ;if(Ox9cd){break ;} ;return Ox9c3(20001,Ox9cc);;case 1:if(Ox9cd){break ;} ;if(Ox9d0!=Ox9cc&&Ox9d0.indexOf(Ox9cc)==-1){return Ox9c3(20010,Ox9cc,Ox9d0);} ;break ;;case 2:if(Ox9cd){break ;} ;if(!Ox9c0){Ox188.open(OxO990d[176],editor.GetScriptProperty(OxO990d[102])+OxO990d[187]+OxO990d[214]+ new Date().getTime(),false);Ox188.send(OxO990d[25]);if(Ox188[OxO990d[178]]!=200){return Ox9c3(1000,OxO990d[215]);} ;Ox9c0=Ox188[OxO990d[190]];} ;if(Ox9d1!=Ox9c0&&Ox9d1.indexOf(Ox9c0)==-1){return Ox9c3(20020,Ox9c0,Ox9d1);} ;break ;;case 3:if(Ox9cd){break ;} ;if(Ox9d0.indexOf(Ox9cc)==-1){return Ox9c3(20030,Ox9cc,Ox9d0);} ;break ;;case 4:if(Ox9cb< new Date().getTime()){return Ox9c3(20040,Ox9ca);} ;break ;;case 5:break ;;default:return Ox9c3(1004,parseInt(Ox9bf[6]));;} ;} catch(x){return Ox9c3(1000,x.message);} ;return Ox9c2();} ;function Ox9d2(Ox9d3,Ox616){var msg=OxO990d[25];switch(Ox9d3){case 1000:msg=Ox616;break ;;case 1001:msg=OxO990d[216];break ;;case 1002:msg=OxO990d[217]+Ox616;break ;;case 1003:msg=OxO990d[218];break ;;case 1004:msg=OxO990d[219];break ;;case 20000:msg=OxO990d[220];break ;;case 20001:msg=OxO990d[221];break ;;case 20010:msg=OxO990d[222];break ;;case 20020:msg=OxO990d[223];break ;;case 20030:msg=OxO990d[224];break ;;case 20040:msg=OxO990d[225];break ;;} ;try{return alert(OxO990d[226]+msg);} catch(x){} ;} ;CuteEditor_BasicInitialize(editor);Ox986();Ox9c1(Ox98b);} ;function CuteEditorInstallScriptCode(Ox8c0,Ox8c1){eval(Ox8c0);window[Ox8c1]=eval(Ox8c1);} ;window[OxO990d[227]]=CuteEditorInitialize;