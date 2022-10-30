# 📌 자신이 원하는 사이트 레이아웃 클론

패스트캠퍼스에서 진행한 원하는 웹사이트 레이아웃 클론 프로젝트입니다.

동료와 멘토로부터 코드리뷰를 받아 리팩토링(v0.2)을 진행하였습니다.

## 실제사이트 and 클론사이트

저는 [인프런](https://www.inflearn.com/) 사이트를 클론하였습니다.

데모를 여기서 보실수 있습니다 [Demo](https://jyroh-inflearn-clone.netlify.app)

## 설치법

```shell
$ git clone {주소복사}
$ npm install
$ npm init -y
$ npm i -D parcel-bundler
$ npm run dev
```

## 기간

- 2022/09/30 ~ 2022/10/14
- 리팩토링: 2022/10/30 ~ 2022/10/31

## 사용 기술 스택

- Programming <img src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=HTML5&logoColor=white"> <img src="https://img.shields.io/badge/SCSS-CC6699?style=for-the-badge&logo=SASS&logoColor=white"> <img src="https://img.shields.io/badge/JAVASCRIPT-F7DF1E?style=for-the-badge&logo=JAVASCRIPT&logoColor=white">

- Deploy <img src="https://img.shields.io/badge/NETLIFY-00C7B7?style=for-the-badge&logo=NETLIFY&logoColor=white">

## 어려웠던 부분

- 컨테이너와 각 항목들의 크기부여. min-width를 줘야하는지, max-width를 줘야하는지, auto로 주면되는지....
- 세로 스와이퍼 구현할때, loop를 돌면서 자연스럽게 되지않고 끊기는게 눈에 보임(근데 원본도 그런것을 확인).
- 반응형 고려를 전혀 못함.
- 강좌들 pagination button을 구현할때 컨테이너의 밖에 걸치게 하고싶은데, 이러면 계속 이미지가 가려지고 잘림.

## 리팩토링 진행

- CSS의 가상 선택자를 SCSS의 부모선택자를 이용한것으로 수정
- 주석을 전혀 안달았어서 코드리뷰시에 동료들이 매우 불편했음. 모든 파일에 주석 추가
- 강좌들 hover시에 클릭 안되는 현상 수정
- js최적화 진행. for문대신 forEach로, var대신 const로
- JS naming convention 수정
- v0.2 release
