var OxO8ac9=["value","idSource","length","checked","linebreaks","\x0D\x0A","ig","\x3Cbr /\x3E","\x0D","\x0A"];var editor=Window_GetDialogArguments(window);function cancel(){Window_CloseDialog(window);} ;function insertContent(){var Ox190=document.getElementById(OxO8ac9[1])[OxO8ac9[0]];if(Ox190&&Ox190[OxO8ac9[2]]>0){if(document.getElementById(OxO8ac9[4])[OxO8ac9[3]]){Ox190=Ox190.replace(( new RegExp(OxO8ac9[5],OxO8ac9[6])),OxO8ac9[7]);Ox190=Ox190.replace(( new RegExp(OxO8ac9[8],OxO8ac9[6])),OxO8ac9[7]);Ox190=Ox190.replace(( new RegExp(OxO8ac9[9],OxO8ac9[6])),OxO8ac9[7]);} ;editor.PasteHTML(Ox190);Window_CloseDialog(window);} ;} ;