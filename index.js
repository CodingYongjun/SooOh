//----------------------------- login box ----------------------------
const login=document.getElementById('login');
const logOut=document.querySelector('.log_out');
const Blogin=document.querySelector('.b_user');
const listBox=document.querySelector('.box');
const loginBox=document.querySelector('.login_box');
const signUp=document.querySelector('.s_user');
const signupBox=document.querySelector('.signup_box');
const signupBtn=document.getElementById('signup');
const idV=document.getElementById('id2');
const pwV=document.getElementById('pw2');

const loginSource=()=>{
    loginBox.style.display='none';
    listBox.style.display='block';
    prev.style.display='none';
    toggle.style.display='block';
}
const logoutSource=()=>{
    loginBox.style.display='block';
    listBox.style.display='none';
    User.style.right='-204px';
    wsBox.style.display='none';
    wiloBox.style.display='none';
    loveBox.style.display='none';
    prev.style.display='none';
    toggle.style.display='none';
    Save.style.display='none';
}
const bloginSource=()=>{
    toggle.style.display='none';
    loginBox.style.display='none';
    listBox.style.display='block';
    prev.style.display='block';
    toggle.style.display='none';
}

const getSaveInfo = () =>{
	const userInfoJSON = localStorage.getItem('userInfo');
	try{
		return userInfoJSON? JSON.parse(userInfoJSON):[];
	}catch{
		return [];
	}
}

let userInfo = getSaveInfo();
localStorage.setItem("userInfo",JSON.stringify(userInfo));
let loginState=false;
let userIndex;
let userName=document.querySelector('.user_name');

login.addEventListener('click',(e)=>{
    e.preventDefault();
	let memberData=getSaveInfo();
	let idValue=idV.value;
	let pwValue=pwV.value;
	for(let i in memberData){
		if(memberData[i].id==idValue){
			if(memberData[i].pw==pwValue){
				loginState=true;
				userIndex=i;
			}else{
                alert('비밀번호를 확인해 주세요');
            }
		}
        if(memberData[i].id!=idValue){
            if(memberData[i].pw==pwValue){
                alert('아이디를 확인해 주세요');
            }
        }
	}
    if(idValue==""){
        if(pwValue==""){
            alert('아이디와 비밀번호를 입력해 주세요');
        }else{
            alert('아이디를 입력해 주세요');
        } 
    }
    if(pwValue==""){
        if(idValue!=""){
            alert('비밀번호를 입력해 주세요');
        }
    }
	if(loginState){
        loginSource();
		userName.innerText=memberData[userIndex].user
	}else if(idValue!="" && pwValue!=""){
        alert('존재하지 않는 회원 입니다.')
    }
});
signUp.addEventListener('click',()=>{
    loginBox.style.display='none';
    signupBox.style.display='block';
});
signupBtn.addEventListener('click',()=>{
    loginBox.style.display='block';
    signupBox.style.display='none';
    let idD=document.getElementById('id')
    let pwD=document.getElementById('pw')
    let userN=document.getElementById('name')
    let idData=idD.value;
	let pwData=pwD.value;
	let userName=userN.value;
    userInfo.push({
		id:idData,
		pw:pwData,
		user:userName
	})
	localStorage.setItem('userInfo', JSON.stringify(userInfo) );
    idD.value="";
    pwD.value="";
    userN.value="";
});
Blogin.addEventListener('click',()=>{
    bloginSource();
});
logOut.addEventListener('click',()=>{
    logoutSource();
    wsMusic.pause();
    wiloMusic.pause();
    loveMusic.pause();
    music.load();
    loginState=false;
    idV.value="";
    pwV.value="";
});
//------------------------------- user box ---------------------------
const toggle=document.getElementById('userBtn');
const toggleEnd=document.querySelector('.t_end');
const lockerEnd=document.querySelector('.r_end');
const User=document.querySelector('.user_box');
const Locker=document.querySelector('.locker');
const LockerBox=document.querySelector('.user_content');
const prev=document.querySelector('.prev');
const Save=document.querySelector('.save');
const SaveBox=document.querySelector('.img_loker');
let tt;
let ad=[];

const prevIf=()=>{
    if(listBox.style.display=='none'){
        listBox.style.display='block';
    }else{
        loginBox.style.display='block';
        listBox.style.display='none';
        prev.style.display='none';
    }
    if(toggle.style.display=='block'){
        loginBox.style.display='none';
        listBox.style.display='block';
        prev.style.display='none'
    }
}
const prevSource=()=>{
    wsBox.style.display='none';
    wiloBox.style.display='none';
    loveBox.style.display='none';
    Save.style.display='none';
}
prev.addEventListener('click',()=>{
    prevSource();
    music.load();
    wsMusic.pause();
    wiloMusic.pause();
    loveMusic.pause();
    prevIf();
});
toggle.addEventListener('click',()=>{
    User.style.right='0px';
});
toggleEnd.addEventListener('click',()=>{
    User.style.right='-210px';
});
lockerEnd.addEventListener('click',()=>{
    LockerBox.style.bottom='-100vh';
});
Locker.addEventListener('click',()=>{
    LockerBox.style.bottom='0px';
    SaveBox.replaceChildren();
    for(let i=0; i<ad.length; i++){
        let newSave=document.createElement('div');
        let newTxt=document.createElement('p');
        let newAuthor=document.createElement('p');
        let newImg=document.createElement('img');
        let newtxtBox=document.createElement('div');
        newTxt.innerHTML=ad[i].text;
        newImg.src=`img/${ad[i].img}.jpeg`
        newAuthor.innerHTML=ad[i].author;
        newImg.style.filter='brightness(40%)';
        newSave.appendChild(newImg);
        newSave.appendChild(newtxtBox);
        newtxtBox.appendChild(newTxt);
        newtxtBox.appendChild(newAuthor);
        SaveBox.appendChild(newSave);

        newSave.addEventListener('click',()=>{
            newSave.classList.toggle('up');
        });
    }
});
Save.addEventListener('click',()=>{
    ad.push(tt);
});
//------------------------------- music box --------------------------
const music=document.getElementById('play');
const loveMusic=document.getElementById('love');
const wsMusic=document.getElementById('ws');
const wiloMusic=document.getElementById('wilo');
const playBtn=document.getElementById('musicBtn');

const musicIf=()=>{
    if(loveBox.style.display=='block'){
        loveMusic.play();
    }else if(wsBox.style.display=='block'){
        wsMusic.play();
    }else if(wiloBox.style.display=='block'){
        wiloMusic.play();
    }else{
        music.play();
    }
}
const musicStart=()=>{
    playBtn.innerHTML='pause';
    musicIf();
    playBtn.style.backgroundImage= "url(img/music.png)";
}
const musicStop=()=>{
    playBtn.innerHTML='play_arrow';
    music.pause();
    wsMusic.pause();
    wiloMusic.pause();
    loveMusic.pause();
    playBtn.style.backgroundImage= "url(img/pause.png)";
}
playBtn.addEventListener('click',()=>{
    let getText=playBtn.innerHTML;
    if(getText=='pause'){
        musicStop();
    }else{
        musicStart();
    }
});
// --------------------------------- ws box ---------------------
const wsBox=document.querySelector('.ws');
const wsBtn=document.querySelector('.ws_btn');
const wsNext=document.querySelector('.ws_change');
const wsImg=document.querySelector('.ws_change>img');
const wsText=document.querySelector('.ws_txt');
const wsAuthor=document.querySelector('.ws_author');

let indexList = [];
for(let i in ListM[0]){
	indexList.push(i);
}
let randomIndex=new Set();
while(indexList.length>randomIndex.size){
	randomIndex.add( Math.floor(Math.random()*indexList.length) );
}
randomIndex=[...randomIndex];
let content_index=0;

const nextWs=()=>{    
    content_index++;
	content_index=content_index%indexList.length;
    wsImg.src=`img/${ListM[0][randomIndex[content_index]].img}.jpeg`;
    wsText.innerText=ListM[0][randomIndex[content_index]].text;
    wsAuthor.innerText=ListM[0][randomIndex[content_index]].author;
    tt=ListM[0][randomIndex[content_index]];
}
wsNext.addEventListener('click',()=>{
    nextWs();
});
wsBtn.addEventListener('click',()=>{
    nextWs();
    listBox.style.display='none';
    prev.style.display='block';
    wsBox.style.display='block';
    wsMusic.load();
    music.pause();
    if(toggle.style.display=='block'){
        Save.style.display='block';
    }
});
// -----------------------------wilo box ----------------------------
const wiloBox=document.querySelector('.wilo');
const wiloBtn=document.querySelector('.wilo_btn');
const wiloNext=document.querySelector('.wilo_change');
const wiloImg=document.querySelector('.wilo_change>img');
const wiloText=document.querySelector('.wilo_txt');
const wiloAuthor=document.querySelector('.wilo_author');

const nextWilo=()=>{
    content_index++;
	content_index=content_index%indexList.length;
	
    wiloImg.src=`img/${ListM[1][randomIndex[content_index]].img}.jpeg`;
    wiloText.innerText=ListM[1][randomIndex[content_index]].text;
    wiloAuthor.innerText=ListM[1][randomIndex[content_index]].author;
    tt=ListM[1][randomIndex[content_index]];
}
wiloNext.addEventListener('click',()=>{
    nextWilo();
});
wiloBtn.addEventListener('click',()=>{
    nextWilo();
    listBox.style.display='none';
    prev.style.display='block';
    wiloBox.style.display='block';
    wiloMusic.load();
    music.pause();
    if(toggle.style.display=='block'){
        Save.style.display='block';
    }
});
// -----------------------------love box ----------------------------
const loveBox=document.querySelector('.love');
const loveBtn=document.querySelector('.love_btn');
const loveNext=document.querySelector('.love_change');
const loveImg=document.querySelector('.love_change>img');
const loveText=document.querySelector('.love_txt');
const loveAuthor=document.querySelector('.love_author');

const nextLove=()=>{
    content_index++;
	content_index=content_index%indexList.length;
    loveImg.src=`img/${ListM[2][randomIndex[content_index]].img}.jpeg`;
    loveText.innerText=ListM[2][randomIndex[content_index]].text;
    loveAuthor.innerText=ListM[2][randomIndex[content_index]].author;
    tt=ListM[2][randomIndex[content_index]];
}
loveNext.addEventListener('click',()=>{
    nextLove();
});
loveBtn.addEventListener('click',()=>{
    nextLove();
    listBox.style.display='none';
    prev.style.display='block';
    loveBox.style.display='block';
    loveMusic.load();
    music.pause();
    if(toggle.style.display=='block'){
        Save.style.display='block';
    }
});