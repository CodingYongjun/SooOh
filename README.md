# SooOh 감성글귀😇 어플📱 프로젝트
<br>
<div align="center">
  <img src="https://user-images.githubusercontent.com/108567709/223370199-b3f3ce7f-56ab-4c98-bb30-31833249e493.jpg" width="30%" height="30%" >
</div>

## 프로젝트 소개
<p>
  바쁘게 살아가는 사회 속에서 힘들고 지칠때 위로해줄 사람이 있으면 좋겠다는 생각에 다양한 글귀들로 '수고했어 오늘도' 라고 힘이 되어주면 좋을거 같아 줄여서 SooOh 라는 앱 형식의 프로젝트를 기획하게 되었습니다.
</p>

## 기술스택
<div align="center">
  <h3>📝SKill📖</h3>
  <img src="https://img.shields.io/badge/HTML5-E34F26?style=flat-square&logo=HTML5&logoColor=white" width="15%" height="50" />
  <img src="https://img.shields.io/badge/CSS3-1572B6?style=flat-square&logo=CSS3&logoColor=white" width="15%" height="50" />
  <img src="https://img.shields.io/badge/Javascript-F7DF1E?style=flat-square&logo=Javascript&logoColor=white" width="15%" height="50" />
</div>
<br>
<div align="center">
  <h3 align="center">🎮Tools🎮</h3>
  <img src="https://img.shields.io/badge/Visual%20Studio%20Code-007ACC?style=flat-square&logo=Visual%20Studio%20Code&logoColor=white" />
</div>

## 구현기능

<ol>
  <li>
    <h3>회원가입</h3>
    <br>
    <div align="center">
      <img src="https://user-images.githubusercontent.com/108567709/223369430-09ebf8a7-af40-4adf-94ae-fc02a9fcd963.jpg" width="30%" height="30%">
      <img src="https://user-images.githubusercontent.com/108567709/223369435-46904b6f-2bf9-4d77-ac4c-90e0e8631ae3.jpg" width="30%" height="30%">
    </div>
    <br>
    <ul>
      <li>  위에 보시는 것 처럼 회원가입과 비회원 로그인으로 나누어져 져있으며 회원가입을 누른 뒤 ID/PW/NAME 을 입력하면 각각의 입력된 값이 localstorage에 배열로 저장이 됩니다.</li>
      <li>  로그인 창에서 ID/PW 값이  localstorage 배열값에 존재하지 않으면 alert로 경고창이 띄어집니다.</li>
    </ul>
  </li>
  <li>
    <h3>User Box</h3>
    <br>
    <div align="center">
      <img src="https://user-images.githubusercontent.com/108567709/223369441-3f57b4d4-73d1-44af-a4e7-b2018d2893ac.jpg" width="30%" height="30%">
      <img src="https://user-images.githubusercontent.com/108567709/223369445-246624dc-6d42-43c7-a498-6519a6912b24.jpg" width="30%" height="30%">
    </div>
    <br>
    <ul>
      <li>  글귀는 명언 , 위로 , 사랑 3가지의 타이틀로 나누어져 있으며 클릭시 해당 타이틀의 글귀들이 나오며 분위기에 맞게 음악이 바뀝니다.</li>
      <li>  user의 공간으로 마음에 드는 글귀를 담은 보관함과 로그아웃 기능이 있으며 회원가입시 입력한 NAME 값이 회원의 닉네임으로 표시가 됩니다.</li>
    </ul>
  </li>
  <li>
    <h3>마음에 드는 글귀저장</h3>
    <br>
    <div align="center">
      <img src="https://user-images.githubusercontent.com/108567709/223369449-ebdeeda1-7b82-412c-a69c-486304c2c578.jpg" width="30%" height="30%">
      <img src="https://user-images.githubusercontent.com/108567709/223369453-b6e3dc4e-5897-4b65-b026-597e6e59bf5f.jpg" width="30%" height="30%">
      <img src="https://user-images.githubusercontent.com/108567709/223369457-9070106b-668b-43ac-9d1f-4358e9cfb9e5.jpg" width="30%" height="30%">
    </div>
    <br>
    <ul>
      <li>  글귀의 src , text , author 값이 담긴 배열을 js 파일로 따로 만들어준뒤 각각의 타이틀의 맞게 배열의 순번으로 불러와 보여준다.</li>
      <li>  마음에 드는 글귀가 있다면 보이는 버튼을 클릭하여 보관함의 정보를 넘겨준다 이때 createElement 이벤트를 통해 비어있는 element를 만들어준뒤 각각의 element의 배열 값을 넣어주어 현재 보이는 값을 보관함에 element를 만들어 줍니다.</li>
      <li>보관함의 저장된 글귀를 클릭시 확대되며 다시한번 클릭하면 원상 복귀 됩니다.</li>
    </ul>
  </li>
  <li>
    <h3>비회원 로그인</h3>
    <br>
    <div align="center">
      <img src="https://user-images.githubusercontent.com/108567709/223369460-8493737a-69cc-4e1b-bcad-89d25be2abc0.jpg" width="30%" height="30%">
    </div>
    <br>
    <ul>
      <li>비회원 로그인시에는 user박스가 비활성화 되며 타이틀 선택 화면에서도 prev 버튼이 활성화 됩니다.</li>
    </ul>
  </li>
 </ol>
