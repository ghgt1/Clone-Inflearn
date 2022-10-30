# 📌 자신이 원하는 사이트 레이아웃 클론

[패스트캠퍼스]메가바이트스쿨에서 진행한 원하는 웹사이트 레이아웃 클론 프로젝트입니다.

## 실제사이트 and 클론사이트

저는 [인프런](https://www.inflearn.com/) 사이트를 클론하였습니다.

데모를 여기서 보실수 있습니다 [Demo](https://gilded-sorbet-e33272.netlify.app/)

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

## 피드백 받고싶은  부분

- 레이아웃을 맞춰주기 위해 대부분의 단위를 px로 부여함. 그것때문인지 약간만 창의 크기를 조절하면 레이아웃이 무너짐.
- 미디어 쿼리는 배제한 상태. 이 상태에서 최소한의 반응형 효과를 얻으려면 rm, rem, %값을 쓰면 해결이 가능한지?
- html구조를 짤때 여려 겹의 container를 부여하는데, 이 container들엔 모두 크기를 부여해야하는지, 맞으면 어떤식으로 부여하는게좋은지?(max width인지 아니면 상속이되는지...)
- container 크기의 상속과 단위값들을 어떻게 부여해야 약간의 반응형 효과를 얻을수있는지 궁금합니다.
- 변수네이밍과 코드 가독성. html과 scss의 구조.
- 1920x1080사이즈의 125%배율(노트북의 옵션)에서 가장 정확하게 보임. 나머지 해상도와 배율에선 부자연스러운 레이아웃. 실무에서는 어떤 해상도에서 개발을 하는지?
