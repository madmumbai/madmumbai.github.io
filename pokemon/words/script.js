window.onload = function(argument) {

	// var lyric = "i couldn't take it couldn't stand another minute couldn't bear another day without you in it";
	var lyric = "Child Mentor Project for the Foundational Programme, FP MAD classes had begun for this year. team, decided topics, fun worksheets and activities  teach our youngest group of children that is our FP  kids, in both the shelters. It acted as a revision for them before FP classes started. We got on weekly calls with the '11th std' children and explained these worksheets   them thoroughly. In turn, they would act as mentors and teach the FP children and would make sure they complete the day wise worksheets and activities and support them wherever needed. The younger children enjoyed a lot and were able brush up on their knowledge before FP classes actually started. The 11th std children great time being a part of this project! And we loved interacting children and providing a support for them! engage FP volunteers, we organised calls for both the shelters purpose was  break the ice and create bonding between the volunteers of the same vertical and shelter home. We discussed FP components on the call, shared our personal stories that we had with the kids, helped the volunteers become more connected the cause and interacted with one another. Before main call, an entire week was planned  create hype on the Whatsapp group. From MAD bingo meme the picture and much more, the volunteers were all hyped up before the call! Both the calls were a super hit!";
	var words = {};
	var words_attr = [];
	string_handle(lyric);

	var canvas = document.getElementById('c');
	canvas.width = window.innerWidth;
	canvas.height = window.innerHeight;

	if (canvas.getContext) {
		var c = canvas.getContext('2d'),
			w = canvas.width,
			h = canvas.height;

		c.strokeStyle = 'red';
		c.fillStyle = 'white';
		c.lineWidth = 5;

		// constructor
		Word = function(key) {
			this.text = key;
			this.x = Math.random() * w;
			this.y = Math.random() * h;
			this.font = words[key] * 10 + 'px arial'
			this.speed = (words[key]);
		}
		for (key in words) {
			words_attr.push(new Word(key));
		}
		console.log(words_attr.length);

		function animation() {
			for (var i = 0; i < words_attr.length; i++) {
				c.font = words_attr[i].font;
				c.fillText(words_attr[i].text, words_attr[i].x, words_attr[i].y);
				words_attr[i].width = c.measureText(words_attr[i].text).width;
				c.stroke();
			}
			move();
		}

		function move() {
			for (var i = 0; i < words_attr.length; i++) {
				if (words_attr[i].x > w) {
					words_attr[i].x = -words_attr[i].width;
					words_attr[i].y = Math.random()*h;
				}else{
					words_attr[i].x += words_attr[i].speed;
				}
			}
		}

		setInterval(function() {
			c.clearRect(0,0,w,h);
			animation();
		},24);

	}

	function string_handle(str) {
		var split_str = str.split(" ");
		var word_array = [];
		var word_count = [];
		for (var i = 0; i < split_str.length; i++) {
			check = true;
			for (var j = 0; j <= word_array.length; j++) {
				if (split_str[i] == word_array[j]) {
					word_count[j]++;
					check = false;
					break;
				}
			}
			if (check) {
				word_array.push(split_str[i]);
				word_count.push(1);
			}
		}
		for (var i = 0; i < word_array.length; i++) {
			words[word_array[i]] = word_count[i];
		}
		return words;
	}

}