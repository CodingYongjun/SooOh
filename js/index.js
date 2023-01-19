//----------------------------- login box ----------------------------
const login=document.getElementById('login');
const logOut=document.querySelector('.log_out');
const Blogin=document.querySelector('.b_user');
const listBox=document.querySelector('.box');
const loginBox=document.querySelector('.login_box');
const signUp=document.querySelector('.s_user');
const signupBox=document.querySelector('.signup_box');
const signupBtn=document.getElementById('signup');

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

login.addEventListener('click',()=>{
    loginSource();
});

signUp.addEventListener('click',()=>{
    loginBox.style.display='none';
    signupBox.style.display='block';
});

signupBtn.addEventListener('click',()=>{
    loginBox.style.display='block';
    signupBox.style.display='none';
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

    console.log(ad);
    SaveBox.replaceChildren(); //자식 노드를 파라미터로 입력받은 파라미터의 노드로 교체해주는 함수입니다. 그런데, 위 예제와 같이 파라미터로 아무것도 전달되지 않으면, 모든 자식 노드가 삭제됩니다.
    // while(SaveBox.firstChild)  {
    //     SaveBox.removeChild(SaveBox.firstChild);
    // }
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
            console.log(newSave);
            newSave.classList.toggle('up');
        });
    }
    console.log(tt);
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
    //music.play();
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
let ws_index=Math.floor(Math.random()*ListM[0].length);

const nextWs=()=>{
    ws_index=Math.floor(Math.random()*ListM[0].length);
    // ws_index++;
    // if(ws_index>=loadWs.length){ ws_index=0;}
    WsList(ws_index);
}

const WsList=(num)=>{
    wsImg.src=`img/${ListM[0][num].img}.jpeg`;
    wsText.innerText=ListM[0][num].text;
    wsAuthor.innerText=ListM[0][num].author;
    tt=ListM[0][num];
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
    console.log(tt);
});
// -----------------------------wilo box ----------------------------

const wiloBox=document.querySelector('.wilo');
const wiloBtn=document.querySelector('.wilo_btn');
const wiloNext=document.querySelector('.wilo_change');
const wiloImg=document.querySelector('.wilo_change>img');
const wiloText=document.querySelector('.wilo_txt');
const wiloAuthor=document.querySelector('.wilo_author');
let wilo_index=Math.floor(Math.random()*ListM[1].length);

const nextWilo=()=>{
    wilo_index=Math.floor(Math.random()*ListM[1].length);
    // wilo_index++;
    // if(wilo_index>=loadWilo.length){ wilo_index=0;}
    wiloList(wilo_index);
}

const wiloList=(num)=>{
    wiloImg.src=`img/${ListM[1][num].img}.jpeg`;
    wiloText.innerText=ListM[1][num].text;
    wiloAuthor.innerText=ListM[1][num].author;
    tt=ListM[1][num];
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
    console.log(tt);
});

// -----------------------------love box ----------------------------
const loveBox=document.querySelector('.love');
const loveBtn=document.querySelector('.love_btn');
const loveNext=document.querySelector('.love_change');
const loveImg=document.querySelector('.love_change>img');
const loveText=document.querySelector('.love_txt');
const loveAuthor=document.querySelector('.love_author');
let love_index=Math.floor(Math.random()*ListM[2].length);

const nextLove=()=>{
    love_index=Math.floor(Math.random()*ListM[2].length);
    // love_index++;
    // if(love_index>=loadLove.length){ love_index=0;}
    loveList(love_index);
}

const loveList=(num)=>{
    loveImg.src=`img/${ListM[2][num].img}.jpeg`;
    loveText.innerText=ListM[2][num].text;
    loveAuthor.innerText=ListM[2][num].author;
    tt=ListM[2][num];
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
    console.log(tt);
});