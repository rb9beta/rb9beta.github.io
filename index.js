var query = window.location.href.slice(window.location.href.indexOf('?') + 1).split('&');
for (let i = 0; i < query.length; i++) {
	if (query[i] == "key=123456b420f928b7690d8f3eae31bfadbfeea5f4d39ab10f") {
		window.addEventListener('load', function () {
			var element;
			element = document.getElementById("key");
			if (element) {
				element.outerHTML = "<p> <marquee width=743>[Created 27-11-2022 13:47 BST | This is a beta for the sake of testing " + '""alpha""' + " stuff before committing it to the main page. Yes, the font is different.</marquee> </p><h2> <b>Beta Links :</b> </h2><table border='1'><td class=" + '"box2d"' + "> <a href='tlu'>Tetra Legends Ultimate</a> </td><td class=" + '"box2d"' + "> <a href='t580sc'>Trimps+ v5.8.0</a> </td></table><h2> <b>Congrats to :</b> </h2><p> [no-one]; if you see this, then you were the first one here! (Or second if you count me.) </p><h2> <b>For making it here!</b> </h2><p> [Last Updated 27-11-2022] </p><p style=" + 'text-align:right' + "> There are <u>no</u> keys on this page. Trust me!</a> </p>";
			}
		})
	}
}