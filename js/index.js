// al clicar o swipear en #touch
$(function() {
	$("#touch").click(function() {
		$("#touch").addClass("closed");
		$("#landpage").addClass("touched");
	});

	$("#touch").on("swipe",function(){
		$("#touch").addClass("closed");
  		$("#landpage").addClass("touched");
	});
});


$(function() {
	$("#closewait").click(function() {
		$("#wait").addClass("closed");
	});
});







// al :hover en #closer
$(function() {
	$("#closer").hover(function() {
		$("#landpage").addClass("active");
	});
});

// al clicar en #closer
$(function() {
	$("#closer").click(function() {
		//
		$("#closer").addClass("closed");
		$("#landpage").addClass("closed");

		$(".typed").typed({
			// the strings
			strings: ["Welcome", "Bienvenido", "Benvingut", "Benvido", "Ongi", "Welkom", "i mirëpritur", "Willkommen", "ترحيب", "ողջույն", "xoş", "স্বাগত", "Сардэчна запрашаем", "dobrodošli", "добре дошъл", "ಸ್ವಾಗತ", "vítejte", "Takulandirani", "歡迎", "ඔබ සාදරයෙන් පිළිගනිමු", "환영", "Byenveni", "dobrodošli", "velkommen", "Vitajte", "teretulnud", "tervetuloa", "bienvenu", "Croeso", "კეთილიm", "Καλώς", "ήλθατε", "આપનું સ્વાગત છે", "Barka da", "ברוכים הבאים", "स्वागत", "Zoo siab txais tos", "Üdvözöljük", "selamat datang", "Fáilte", "Velkomin", "benvenuto", "ようこそ", "សូមស្វាគមន៍", "Қош келдіңіздер", "ຍິນດີຕ້ອນຮັບ", "Laipni lūdzam", "Sveiki", "Добредојдовте", "സ്വാഗതം", "Tonga soa", "Merħba", "Nau", "आपले स्वागत आहे", "тавтай морилно уу", "स्वागत", "خوش آمدید", "mile widziany", "bem-vindo", "ਸੁਆਗਤ ਹੈ", "bun venit", "добро", "пожаловать", "добродошао", "Karibu", "Välkommen", "Wilujeng", "maligayang pagdating", "ยินดีต้อนรับ", "வரவேற்கிறோம்", "Хуш омадед", "స్వాగతం", "Hoşgeldiniz", "Ласкаво просимо", "میں خوش آمدید", "Xush kelibsiz", "Chào mừng", "באַגריסונג", "kaabo", "Welcome", "Bonvenon", "እንኳን ደህና መጡ", "abbrazzu", "wolkom", "саламдашуу", "hookipa ana", "bixêrhatin", "wëllkomm", "faafeiloaiga", "fàilte", "kugashira", "ڀلي ڪري آيا", "ښه راغلاست", "ukwamkela"],
			// typing speed
			typeSpeed: 100,
			// time before typing starts
			startDelay: 20,
			// backspacing speed
			backSpeed: 20,
			// time before backspacing
			backDelay: 2000,
			// loop
			loop: true,
			// false = infinite
			loopCount: false,
			// show cursor
			showCursor: true,
			// character for cursor
			cursorChar: "|",
		});
	});
});




$(function() {
	$("#eng").hover(function() {
		$("#map").toggleClass("eng");
	});
});

$(function() {
	$("#esp").hover(function() {
		$("#map").toggleClass("esp");
	});
});


$(function() {	
	$("#cat").hover(function() {
		$("#map").toggleClass("cat");
	});
});





$(window).bind("load", function(){
	$("#wait").addClass("closed");
});