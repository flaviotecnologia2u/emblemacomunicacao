var OxOb27c=["SetStyle","length","","GetStyle","GetText",":",";","cssText","sel_font","div_font_detail","sel_fontfamily","cb_decoration_under","cb_decoration_over","cb_decoration_through","cb_style_bold","cb_style_italic","sel_fontTransform","sel_fontsize","inp_fontsize","sel_fontsize_unit","inp_color","inp_color_Preview","outer","div_demo","disabled","selectedIndex","style","value","font","fontFamily","color","backgroundColor","textDecoration","checked","overline","underline","line-through","fontWeight","bold","fontStyle","italic","fontSize","options","textTransform","font-family","overline ","underline ","line-through ","onclick"];function pause(Ox37b){var Ox2f9= new Date();var Ox37c=Ox2f9.getTime()+Ox37b;while(true){Ox2f9= new Date();if(Ox2f9.getTime()>Ox37c){return ;} ;} ;} ;function StyleClass(Oxed){var Ox37e=[];var Ox37f={};if(Oxed){Ox384();} ;this[OxOb27c[0]]=function SetStyle(name,Ox7,Ox381){name=name.toLowerCase();for(var i=0;i<Ox37e[OxOb27c[1]];i++){if(Ox37e[i]==name){break ;} ;} ;Ox37e[i]=name;Ox37f[name]=Ox7?(Ox7+(Ox381||OxOb27c[2])):OxOb27c[2];} ;this[OxOb27c[3]]=function GetStyle(name){name=name.toLowerCase();return Ox37f[name]||OxOb27c[2];} ;this[OxOb27c[4]]=function Ox383(){var Oxed=OxOb27c[2];for(var i=0;i<Ox37e[OxOb27c[1]];i++){var Ox8d=Ox37e[i];var p=Ox37f[Ox8d];if(p){Oxed+=Ox8d+OxOb27c[5]+p+OxOb27c[6];} ;} ;return Oxed;} ;function Ox384(){var arr=Oxed.split(OxOb27c[6]);for(var i=0;i<arr[OxOb27c[1]];i++){var p=arr[i].split(OxOb27c[5]);var Ox8d=p[0].replace(/^\s+/g,OxOb27c[2]).replace(/\s+$/g,OxOb27c[2]).toLowerCase();Ox37e[Ox37e[OxOb27c[1]]]=Ox8d;Ox37f[Ox8d]=p[1];} ;} ;} ;function GetStyle(Ox21,name){return  new StyleClass(Ox21.cssText).GetStyle(name);} ;function SetStyle(Ox21,name,Ox7,Ox385){var Ox386= new StyleClass(Ox21.cssText);Ox386.SetStyle(name,Ox7,Ox385);Ox21[OxOb27c[7]]=Ox386.GetText();} ;function ParseFloatToString(Ox1b){var Ox84=parseFloat(Ox1b);if(isNaN(Ox84)){return OxOb27c[2];} ;return Ox84+OxOb27c[2];} ;var sel_font=Window_GetElement(window,OxOb27c[8],true);var div_font_detail=Window_GetElement(window,OxOb27c[9],true);var sel_fontfamily=Window_GetElement(window,OxOb27c[10],true);var cb_decoration_under=Window_GetElement(window,OxOb27c[11],true);var cb_decoration_over=Window_GetElement(window,OxOb27c[12],true);var cb_decoration_through=Window_GetElement(window,OxOb27c[13],true);var cb_style_bold=Window_GetElement(window,OxOb27c[14],true);var cb_style_italic=Window_GetElement(window,OxOb27c[15],true);var sel_fontTransform=Window_GetElement(window,OxOb27c[16],true);var sel_fontsize=Window_GetElement(window,OxOb27c[17],true);var inp_fontsize=Window_GetElement(window,OxOb27c[18],true);var sel_fontsize_unit=Window_GetElement(window,OxOb27c[19],true);var inp_color=Window_GetElement(window,OxOb27c[20],true);var inp_color_Preview=Window_GetElement(window,OxOb27c[21],true);var outer=Window_GetElement(window,OxOb27c[22],true);var div_demo=Window_GetElement(window,OxOb27c[23],true);UpdateState=function UpdateState_Font(){inp_fontsize[OxOb27c[24]]=sel_fontsize_unit[OxOb27c[24]]=(sel_fontsize[OxOb27c[25]]>0);div_font_detail[OxOb27c[24]]=sel_font[OxOb27c[25]]>0;div_demo[OxOb27c[26]][OxOb27c[7]]=element[OxOb27c[26]][OxOb27c[7]];} ;SyncToView=function SyncToView_Font(){sel_font[OxOb27c[27]]=element[OxOb27c[26]][OxOb27c[28]].toLowerCase()||null;sel_fontfamily[OxOb27c[27]]=element[OxOb27c[26]][OxOb27c[29]];inp_color[OxOb27c[27]]=element[OxOb27c[26]][OxOb27c[30]];inp_color[OxOb27c[26]][OxOb27c[31]]=inp_color[OxOb27c[27]];var Ox4c3=element[OxOb27c[26]][OxOb27c[32]].toLowerCase();cb_decoration_over[OxOb27c[33]]=Ox4c3.indexOf(OxOb27c[34])!=-1;cb_decoration_under[OxOb27c[33]]=Ox4c3.indexOf(OxOb27c[35])!=-1;cb_decoration_through[OxOb27c[33]]=Ox4c3.indexOf(OxOb27c[36])!=-1;cb_style_bold[OxOb27c[33]]=element[OxOb27c[26]][OxOb27c[37]]==OxOb27c[38];cb_style_italic[OxOb27c[33]]=element[OxOb27c[26]][OxOb27c[39]]==OxOb27c[40];sel_fontsize[OxOb27c[27]]=element[OxOb27c[26]][OxOb27c[41]];sel_fontsize_unit[OxOb27c[25]]=0;if(sel_fontsize[OxOb27c[25]]==-1){if(ParseFloatToString(element[OxOb27c[26]].fontSize)){sel_fontsize[OxOb27c[27]]=ParseFloatToString(element[OxOb27c[26]].fontSize);for(var i=0;i<sel_fontsize_unit[OxOb27c[42]][OxOb27c[1]];i++){var Ox2b=sel_fontsize_unit.options(i)[OxOb27c[27]];if(Ox2b&&element[OxOb27c[26]][OxOb27c[41]].indexOf(Ox2b)!=-1){sel_fontsize_unit[OxOb27c[25]]=i;break ;} ;} ;} ;} ;sel_fontTransform[OxOb27c[27]]=element[OxOb27c[26]][OxOb27c[43]];} ;SyncTo=function SyncTo_Font(element){SetStyle(element.style,OxOb27c[28],sel_font.value);if(sel_fontfamily[OxOb27c[27]]){element[OxOb27c[26]][OxOb27c[29]]=sel_fontfamily[OxOb27c[27]];} else {SetStyle(element.style,OxOb27c[44],OxOb27c[2]);} ;try{element[OxOb27c[26]][OxOb27c[30]]=inp_color[OxOb27c[27]]||OxOb27c[2];} catch(x){element[OxOb27c[26]][OxOb27c[30]]=OxOb27c[2];} ;var Ox4c5=cb_decoration_over[OxOb27c[33]];var Ox4c6=cb_decoration_under[OxOb27c[33]];var Ox4c7=cb_decoration_through[OxOb27c[33]];if(!Ox4c5&&!Ox4c6&&!Ox4c7){element[OxOb27c[26]][OxOb27c[32]]=OxOb27c[2];} else {var Oxa=OxOb27c[2];if(Ox4c5){Oxa+=OxOb27c[45];} ;if(Ox4c6){Oxa+=OxOb27c[46];} ;if(Ox4c7){Oxa+=OxOb27c[47];} ;element[OxOb27c[26]][OxOb27c[32]]=Oxa.substr(0,Oxa[OxOb27c[1]]-1);} ;element[OxOb27c[26]][OxOb27c[37]]=cb_style_bold[OxOb27c[33]]?OxOb27c[38]:OxOb27c[2];element[OxOb27c[26]][OxOb27c[39]]=cb_style_italic[OxOb27c[33]]?OxOb27c[40]:OxOb27c[2];element[OxOb27c[26]][OxOb27c[43]]=sel_fontTransform[OxOb27c[27]]||OxOb27c[2];if(sel_fontsize[OxOb27c[25]]>0){element[OxOb27c[26]][OxOb27c[41]]=sel_fontsize[OxOb27c[27]];} else {if(ParseFloatToString(inp_fontsize.value)){element[OxOb27c[26]][OxOb27c[41]]=ParseFloatToString(inp_fontsize.value)+sel_fontsize_unit[OxOb27c[27]];} else {element[OxOb27c[26]][OxOb27c[41]]=OxOb27c[2];} ;} ;} ;inp_color[OxOb27c[48]]=inp_color_Preview[OxOb27c[48]]=function inp_color_onclick(){SelectColor(inp_color,inp_color_Preview);} ;