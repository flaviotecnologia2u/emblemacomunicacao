var OxO84f6=["inp_src","btnbrowse","AlternateText","inp_id","longDesc","Align","optNotSet","optLeft","optRight","optTexttop","optAbsMiddle","optBaseline","optAbsBottom","optBottom","optMiddle","optTop","Border","bordercolor","bordercolor_Preview","inp_width","imgLock","inp_height","constrain_prop","HSpace","VSpace","outer","img_demo","onclick","src","width","height","value","cssText","style","","src_cetemp","id","vspace","hspace","border","borderColor"," ","backgroundColor","align","alt","ValidNumber","ValidID","longdesc","checked","../Images/locked.gif","../Images/1x1.gif","length"];var inp_src=Window_GetElement(window,OxO84f6[0],true);var btnbrowse=Window_GetElement(window,OxO84f6[1],true);var AlternateText=Window_GetElement(window,OxO84f6[2],true);var inp_id=Window_GetElement(window,OxO84f6[3],true);var longDesc=Window_GetElement(window,OxO84f6[4],true);var Align=Window_GetElement(window,OxO84f6[5],true);var optNotSet=Window_GetElement(window,OxO84f6[6],true);var optLeft=Window_GetElement(window,OxO84f6[7],true);var optRight=Window_GetElement(window,OxO84f6[8],true);var optTexttop=Window_GetElement(window,OxO84f6[9],true);var optAbsMiddle=Window_GetElement(window,OxO84f6[10],true);var optBaseline=Window_GetElement(window,OxO84f6[11],true);var optAbsBottom=Window_GetElement(window,OxO84f6[12],true);var optBottom=Window_GetElement(window,OxO84f6[13],true);var optMiddle=Window_GetElement(window,OxO84f6[14],true);var optTop=Window_GetElement(window,OxO84f6[15],true);var Border=Window_GetElement(window,OxO84f6[16],true);var bordercolor=Window_GetElement(window,OxO84f6[17],true);var bordercolor_Preview=Window_GetElement(window,OxO84f6[18],true);var inp_width=Window_GetElement(window,OxO84f6[19],true);var imgLock=Window_GetElement(window,OxO84f6[20],true);var inp_height=Window_GetElement(window,OxO84f6[21],true);var constrain_prop=Window_GetElement(window,OxO84f6[22],true);var HSpace=Window_GetElement(window,OxO84f6[23],true);var VSpace=Window_GetElement(window,OxO84f6[24],true);var outer=Window_GetElement(window,OxO84f6[25],true);var img_demo=Window_GetElement(window,OxO84f6[26],true);btnbrowse[OxO84f6[27]]=function btnbrowse_onclick(){function Ox25b(Ox27){if(Ox27){function Actualsize(){var Ox2e4= new Image();Ox2e4[OxO84f6[28]]=Ox27;if(Ox2e4[OxO84f6[29]]>0&&Ox2e4[OxO84f6[30]]>0){inp_width[OxO84f6[31]]=Ox2e4[OxO84f6[29]];inp_height[OxO84f6[31]]=Ox2e4[OxO84f6[30]];FireUIChanged();} else {setTimeout(Actualsize,400);} ;} ;inp_src[OxO84f6[31]]=Ox27;setTimeout(Actualsize,400);} ;} ;editor.SetNextDialogWindow(window);if(Browser_IsSafari()){editor.ShowSelectImageDialog(Ox25b,inp_src.value,inp_src);} else {editor.ShowSelectImageDialog(Ox25b,inp_src.value);} ;} ;UpdateState=function UpdateState_Image(){img_demo[OxO84f6[33]][OxO84f6[32]]=element[OxO84f6[33]][OxO84f6[32]];if(Browser_IsWinIE()){img_demo.mergeAttributes(element);} ;if(element[OxO84f6[28]]){img_demo[OxO84f6[28]]=element[OxO84f6[28]];} else {img_demo.removeAttribute(OxO84f6[28]);} ;} ;SyncToView=function SyncToView_Image(){var src;src=element.getAttribute(OxO84f6[28])+OxO84f6[34];if(element.getAttribute(OxO84f6[35])){src=element.getAttribute(OxO84f6[35])+OxO84f6[34];} ;inp_src[OxO84f6[31]]=src;inp_width[OxO84f6[31]]=element[OxO84f6[29]];inp_height[OxO84f6[31]]=element[OxO84f6[30]];inp_id[OxO84f6[31]]=element[OxO84f6[36]];if(element[OxO84f6[37]]<=0){VSpace[OxO84f6[31]]=OxO84f6[34];} else {VSpace[OxO84f6[31]]=element[OxO84f6[37]];} ;if(element[OxO84f6[38]]<=0){HSpace[OxO84f6[31]]=OxO84f6[34];} else {HSpace[OxO84f6[31]]=element[OxO84f6[38]];} ;Border[OxO84f6[31]]=element[OxO84f6[39]];if(Browser_IsWinIE()){bordercolor[OxO84f6[31]]=element[OxO84f6[33]][OxO84f6[40]];} else {var arr=revertColor(element[OxO84f6[33]].borderColor).split(OxO84f6[41]);bordercolor[OxO84f6[31]]=arr[0];} ;bordercolor[OxO84f6[33]][OxO84f6[42]]=bordercolor[OxO84f6[31]]||OxO84f6[34];bordercolor[OxO84f6[33]][OxO84f6[42]]=bordercolor[OxO84f6[31]];bordercolor_Preview[OxO84f6[33]][OxO84f6[42]]=bordercolor[OxO84f6[31]];Align[OxO84f6[31]]=element[OxO84f6[43]];AlternateText[OxO84f6[31]]=element[OxO84f6[44]];longDesc[OxO84f6[31]]=element[OxO84f6[4]];} ;SyncTo=function SyncTo_Image(element){element[OxO84f6[28]]=inp_src[OxO84f6[31]];element.setAttribute(OxO84f6[35],inp_src.value);element[OxO84f6[39]]=Border[OxO84f6[31]];element[OxO84f6[38]]=HSpace[OxO84f6[31]];element[OxO84f6[37]]=VSpace[OxO84f6[31]];try{element[OxO84f6[29]]=inp_width[OxO84f6[31]];element[OxO84f6[30]]=inp_height[OxO84f6[31]];} catch(er){alert(CE_GetStr(OxO84f6[45]));return false;} ;if(element[OxO84f6[33]][OxO84f6[29]]||element[OxO84f6[33]][OxO84f6[30]]){try{element[OxO84f6[33]][OxO84f6[29]]=inp_width[OxO84f6[31]];element[OxO84f6[33]][OxO84f6[30]]=inp_height[OxO84f6[31]];} catch(er){alert(CE_GetStr(OxO84f6[45]));return false;} ;} ;var Ox276=/[^a-z\d]/i;if(Ox276.test(inp_id.value)){alert(CE_GetStr(OxO84f6[46]));return ;} ;element[OxO84f6[36]]=inp_id[OxO84f6[31]];element[OxO84f6[43]]=Align[OxO84f6[31]];element[OxO84f6[44]]=AlternateText[OxO84f6[31]];element[OxO84f6[4]]=longDesc[OxO84f6[31]];element[OxO84f6[33]][OxO84f6[40]]=bordercolor[OxO84f6[31]];if(element[OxO84f6[47]]==OxO84f6[34]||element[OxO84f6[47]]==null){element.removeAttribute(OxO84f6[47]);} ;if(element[OxO84f6[4]]==OxO84f6[34]||element[OxO84f6[4]]==null){element.removeAttribute(OxO84f6[4]);} ;if(element[OxO84f6[29]]==0){element.removeAttribute(OxO84f6[29]);} ;if(element[OxO84f6[30]]==0){element.removeAttribute(OxO84f6[30]);} ;if(element[OxO84f6[38]]==OxO84f6[34]){element.removeAttribute(OxO84f6[38]);} ;if(element[OxO84f6[37]]==OxO84f6[34]){element.removeAttribute(OxO84f6[37]);} ;if(element[OxO84f6[36]]==OxO84f6[34]){element.removeAttribute(OxO84f6[36]);} ;if(element[OxO84f6[43]]==OxO84f6[34]){element.removeAttribute(OxO84f6[43]);} ;if(element[OxO84f6[39]]==OxO84f6[34]){element.removeAttribute(OxO84f6[39]);} ;} ;function toggleConstrains(){if(constrain_prop[OxO84f6[48]]){imgLock[OxO84f6[28]]=OxO84f6[49];checkConstrains(OxO84f6[29]);} else {imgLock[OxO84f6[28]]=OxO84f6[50];} ;} ;var checkingConstrains=false;function checkConstrains(Ox2fd){if(checkingConstrains){return ;} ;checkingConstrains=true;try{var Ox84,Ox237;if(constrain_prop[OxO84f6[48]]){var Ox2e4= new Image();Ox2e4[OxO84f6[28]]=inp_src[OxO84f6[31]];var Ox2fe=Ox2e4[OxO84f6[29]];var Ox2ff=Ox2e4[OxO84f6[30]];if((Ox2fe>0)&&(Ox2ff>0)){var Ox33=inp_width[OxO84f6[31]];var Ox261=inp_height[OxO84f6[31]];if(Ox2fd==OxO84f6[29]){if(Ox33[OxO84f6[51]]==0||isNaN(Ox33)){inp_width[OxO84f6[31]]=OxO84f6[34];inp_height[OxO84f6[31]]=OxO84f6[34];} else {Ox261=parseInt(Ox33*Ox2ff/Ox2fe);inp_height[OxO84f6[31]]=Ox261;} ;} ;if(Ox2fd==OxO84f6[30]){if(Ox261[OxO84f6[51]]==0||isNaN(Ox261)){inp_width[OxO84f6[31]]=OxO84f6[34];inp_height[OxO84f6[31]]=OxO84f6[34];} else {Ox33=parseInt(Ox261*Ox2fe/Ox2ff);inp_width[OxO84f6[31]]=Ox33;} ;} ;} ;} ;} finally{checkingConstrains=false;} ;} ;bordercolor[OxO84f6[27]]=bordercolor_Preview[OxO84f6[27]]=function bordercolor_onclick(){SelectColor(bordercolor,bordercolor_Preview);} ;