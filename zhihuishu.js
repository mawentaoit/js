

function downvoice(){
	var voiceObj = document.getElementsByClassName("volumeIcon")[0];

	voiceObj.click();
}

function nextPage(){
	var nextObj = document.getElementById("nextBtn");
	var videoObj = document.getElementById("vjs_mediaplayer_html5_api");
	videoObj.onended  = function(){
		console.log("播放结束");
		setTimeout(function(){
			nextObj.click();
		},5000)
	}
}

function speedChange(){
	var speedObj = document.getElementsByClassName("speedTab15")[0];
	speedObj.click();
}

function quesClose(){
	if(document.getElementsByClassName("popbtn_cancel")[0]){
		var quesObj = document.getElementsByClassName("popbtn_cancel")[0];
		quesObj.click();
	}
	
}
//执行事件
function initbutton(){
	var buttonObj = document.createElement("input");
	buttonObj.style.position = "fixed";
	buttonObj.value = "开始执行脚本";
	buttonObj.type = "button";
	buttonObj.style.background = "pink";
	buttonObj.style.left = "100px";
	buttonObj.style.top = "100px";
	buttonObj.style.height = "30px";
	buttonObj.style.width = "100px"
	buttonObj.id = "myButton";
	document.body.appendChild(buttonObj);
}

initbutton();
document.getElementById("myButton").onclick = function(){
	speedChange();
	downvoice();
};
nextPage();
setInterval(function(){
quesClose();
},500);




