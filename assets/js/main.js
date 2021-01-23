particlesJS.load("particles-js","./../../assets/particles.json",function(){}),$("#footerCopyright").text(`Copyright & Design © Cliff Su ${(new Date).getFullYear()}`),i18next.init({lng:"en",resources:{en:{translation:{nav:{language:"EN"},intro:{intro:"Hi, I'm Cliff Su. I'm a software developer and student living in Taiwan. My interests are Frontend, Backend and Android App. Looking for internship!"},project:{title:"Projects",memoryCardGame:"Memory Card Game",funKaohsiung:"Fun Kaohsiung",facebookAnonymousPost:"Facebook Anonymous Post System",mobilePayment:"Mobile Payment Easy PAY!",trafficWeb2017:"2017 Kaohsiung Traffic Education Website",trafficWeb2018_1:"2018 Kaohsiung Traffic Education Website - 1",trafficWeb2018_2:"2018 Kaohsiung Traffic Education Website - 2",earthquakeCome:"Earthquake Notify System"},award:{title:"Awards",windowsPhoneChallenge:"Microsoft Windows Phone Develop Challenge",microsoftCommunityChampion:"Microsoft Community Champion",molSkills39:"Skill Evaluation Center of Workforce Development Agency, Taiwan 47th National Skills Competition - IT Network and Systems Administration",trafficWeb:"Education Bureau, Kaohsiung City Government Traffic Safety Education Website",cpmahWeb:"Chinese Professional Management Association of Hsinchu Charity / Technology / Humanities Creative Competition - Web",cpmahApp:"Chinese Professional Management Association of Hsinchu Charity / Technology / Humanities Creative Competition - App",cyutApp:"Chaoyang University of Technology Information Application Competition",wantedChatbot:"Facebook x Wanted Taiwan Facebook Messenger Chatbot Competition",ecpayWeb:"ECPAY Information Creative Payment Application Competition",ncutIot:"Online Achievement Exhibition of the Ministry of Education Smart Innovation Cross-domain Talent Cultivation Alliance Program and Software and Hardware Creation Competition",firstPlace:"First Place Award",thirdPlace:"Third Place Award",sixPlace:"6th Place Award",superAward:"First Place Award",meritAward:"Merit Award",honorableMention:"Honorable Mention",judgesAward:"Judges Award",accepted:"Accepted",link:"Link"}}},ch:{translation:{nav:{language:"CH"},intro:{intro:"嗨! 我是冠伍 Cliff 目前是高雄科技大學資訊工程系的學生，國中時便開始自學程式，對於網站的前後端與 App 開發有高度的興趣，除了獲得數不少國內外程式設計競賽的獎項之外，也有自己開發過產品並上架到 Microsoft Store 的經驗，我有豐富的課外學習經驗與精神，日後也透過特殊選才的方式進入高雄科技大學就讀。"},project:{title:"作品集",memoryCardGame:"記憶卡牌配對遊戲",funKaohsiung:"Fun 高雄",facebookAnonymousPost:"Facebook 匿名發文系統",mobilePayment:"行動支付 輕鬆 PAY!",trafficWeb2017:"2017 高雄市交通安全教育資源網",trafficWeb2018_1:"2018 高雄市交通安全教育資源網 - 1",trafficWeb2018_2:"2018 高雄市交通安全教育資源網 - 2",earthquakeCome:"震！來了 Facebook 地震資訊"},award:{title:"獲獎",windowsPhoneChallenge:"微軟 Windows Phone 開發活力挑戰賽",microsoftCommunityChampion:"微軟 社群之星爭霸賽",molSkills39:"勞動部 第 47 屆全國技能競賽南區分區技能競賽 - 資訊與網路技術",trafficWeb:"高雄市政府教育局 交通安全教育資源網站競賽",cpmahWeb:"新竹市企業經理協進會 2017 年全國慈善/科技/人文創作比賽 - 網頁",cpmahApp:"新竹市企業經理協進會 2017 年全國慈善/科技/人文創作比賽 - App",cyutApp:"朝陽科技大學 朝資盃資訊應用競賽",wantedChatbot:"Facebook x Wanted Taiwan Facebook Messenger 聊天機器人競賽",ecpayWeb:"綠界科技 ECPAY 大專院校資訊創新應用暨金流服務競賽",ncutIot:"教育部智慧創新跨域人才培育聯盟計畫線上成果展暨軟硬體創作競賽",firstPlace:"第一名",thirdPlace:"第三名",sixPlace:"第六名",superAward:"特優",meritAward:"優等",honorableMention:"佳作",judgesAward:"入圍獎",accepted:"入取",link:"連結"}}}}},(e,a)=>{jqueryI18next.init(i18next,$),$(".navbar-nav").localize(),$(".intro").localize(),$(".project").localize(),$(".award").localize(),$("#i18n-ch").click(e=>{i18next.changeLanguage("ch"),$(".navbar-nav").localize(),$(".intro").localize(),$(".project").localize(),$(".award").localize()}),$("#i18n-en").click(e=>{i18next.changeLanguage("en"),$(".navbar-nav").localize(),$(".intro").localize(),$(".project").localize(),$(".award").localize()})});