# 지뢰찾기

### `목적`

- React와 같은 framework, library를 사용하는 이유, 설계 의의를 이해하고 그에 맞게 코드를 작성할 수 있는가
- application state를 알맞게 설계할 수 있는가

### `라이브러리`
- MobX
- styled-components

### `구현`

- 닫혀있는 셀 8x8 출력
- 화면에 지뢰의 갯수 출력
- 다시 시작하기
- 첫 클릭 후 소요된 시간 표시
- 최고 기록 표시
- 순위표 표시

### `Left Click`

- 클릭한 셀이 지뢰인 경우: 지뢰가 표시되고 게임 종료 ⇒ 다시 시작하기 확인을 누르면 새로운 게임이 시작됨
- 클릭한 셀이 지뢰가 아닌 경우: 해당 셀에 인접한 셀 중 지뢰가 있는 만큼의 숫자가 표시됨 ⇒ 숫자가 0인 경우 아무것도 표시하지 않음

### `Right Click`

- 화면에 표시된 남은 지뢰 개수에서 1이 줄어들고 클릭한 셀에 깃발을 표시
- 깃발이 표시된 셀을 다시 오른쪽 클릭하면 깃발이 없어지고 남은 지뢰 개수가 1 늘어남
- 남은 지뢰 개수가 0인 경우 우클릭해도 아무일도 일어나지 않음
