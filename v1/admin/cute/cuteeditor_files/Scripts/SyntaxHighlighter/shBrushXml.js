var OxO29d7=["Xml","Brushes","sh","CssClass","dp-xml","Style",".dp-xml .cdata { color: #ff1493; }",".dp-xml .tag, .dp-xml .tag-name { color: #069; font-weight: bold; }",".dp-xml .attribute { color: red; }",".dp-xml .attribute-value { color: blue; }","prototype","Aliases","xml","xhtml","xslt","html","ProcessRegexList","length","(\x26lt;|\x3C)\x5C!\x5C[[\x5Cw\x5Cs]*?\x5C[(.|\x5Cs)*?\x5C]\x5C](\x26gt;|\x3E)","gm","cdata","(\x26lt;|\x3C)!--\x5Cs*.*?\x5Cs*--(\x26gt;|\x3E)","comments","([:\x5Cw-.]+)\x5Cs*=\x5Cs*(\x22.*?\x22|\x27.*?\x27|\x5Cw+)*|(\x5Cw+)","attribute","index","attribute-value","(\x26lt;|\x3C)/*\x5C?*(?!\x5C!)|/*\x5C?*(\x26gt;|\x3E)","tag","(?:\x26lt;|\x3C)/*\x5C?*\x5Cs*([:\x5Cw-.]+)","tag-name"];dp[OxO29d7[2]][OxO29d7[1]][OxO29d7[0]]=function (){this[OxO29d7[3]]=OxO29d7[4];this[OxO29d7[5]]=OxO29d7[6]+OxO29d7[7]+OxO29d7[8]+OxO29d7[9];} ;dp[OxO29d7[2]][OxO29d7[1]][OxO29d7[0]][OxO29d7[10]]= new dp[OxO29d7[2]].Highlighter();dp[OxO29d7[2]][OxO29d7[1]][OxO29d7[0]][OxO29d7[11]]=[OxO29d7[12],OxO29d7[13],OxO29d7[14],OxO29d7[15],OxO29d7[13]];dp[OxO29d7[2]][OxO29d7[1]][OxO29d7[0]][OxO29d7[10]][OxO29d7[16]]=function (){function Oxad0(Oxad1,Ox7){Oxad1[Oxad1[OxO29d7[17]]]=Ox7;} ;var Oxe8=0;var Ox839=null;var Oxad2=null;this.GetMatches( new RegExp(OxO29d7[18],OxO29d7[19]),OxO29d7[20]);this.GetMatches( new RegExp(OxO29d7[21],OxO29d7[19]),OxO29d7[22]);Oxad2= new RegExp(OxO29d7[23],OxO29d7[19]);while((Ox839=Oxad2.exec(this.code))!=null){if(Ox839[1]==null){continue ;} ;Oxad0(this.matches, new dp[OxO29d7[2]].Match(Ox839[1],Ox839.index,OxO29d7[24]));if(Ox839[2]!=undefined){Oxad0(this.matches, new dp[OxO29d7[2]].Match(Ox839[2],Ox839[OxO29d7[25]]+Ox839[0].indexOf(Ox839[2]),OxO29d7[26]));} ;} ;this.GetMatches( new RegExp(OxO29d7[27],OxO29d7[19]),OxO29d7[28]);Oxad2= new RegExp(OxO29d7[29],OxO29d7[19]);while((Ox839=Oxad2.exec(this.code))!=null){Oxad0(this.matches, new dp[OxO29d7[2]].Match(Ox839[1],Ox839[OxO29d7[25]]+Ox839[0].indexOf(Ox839[1]),OxO29d7[30]));} ;} ;