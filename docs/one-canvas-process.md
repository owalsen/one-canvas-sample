# one-canvas 업무 프로세스

기획에서 개발까지 one-canvas가 어떻게 흘러가는지 도식으로 정리한 문서입니다. GitHub에서 Mermaid가 바로 렌더링됩니다.
각 도식의 근거는 [`one-canvas-rule.md`](../one-canvas/one-canvas-rule.md), [`agile-issue-rule.md`](../agile-issue/agile-issue-rule.md)와 레포 README입니다.

## 1. 전체 흐름

기획자가 통합캔버스 초안을 쓰면, 디자이너가 one-tool에서 보고 코멘트하며 AI와 함께 검수·수정합니다. 확정된 캔버스는 디자인 시스템과 애자일 이슈로 이어져 개발로 갑니다.

```mermaid
flowchart LR
    A["기획자<br/>통합캔버스 초안 작성<br/>(대기획 / 소기획)"] --> B["통합캔버스<br/>canvas-*.html"]
    B --> C["one-tool<br/>열람 + 블록별 코멘트"]
    C --> D["디자이너<br/>AI와 대화하며 검수·수정"]
    D -->|수정 반영| B
    B --> E["디자인 시스템<br/>(Storybook 컴포넌트)"]
    B --> F["agile-issue<br/>에픽 · 스토리 · 태스크"]
    E --> G["개발<br/>프론트 / 백엔드 / 앱"]
    F --> G

    classDef doc fill:#e8f5ee,stroke:#168a5c,color:#0f3d2b
    classDef person fill:#eef2ff,stroke:#4f46e5,color:#1e1b4b
    classDef tool fill:#fff7ed,stroke:#ea580c,color:#7c2d12
    class B,E,F doc
    class A,D,G person
    class C tool
```

## 2. 담당별 단계 (시퀀스)

기획 단계에서 화면의 디자인 요소를 **디자인 시스템과 대조**하는 것이 갈림길입니다. 모든 요소가 이미 있으면 그대로 태깅하고, 신규 디자인이 있으면 그것을 **컴포넌트로 정의할지, 컴포넌트까지 올리지 않을지**에 따라 처리가 달라집니다.

```mermaid
sequenceDiagram
    autonumber
    actor P as 기획자
    participant CV as 통합캔버스
    participant DS as 디자인 시스템
    participant T as one-tool
    actor D as 디자이너
    participant AI as AI 에이전트
    participant IS as agile-issue
    actor DEV as 개발자

    P->>CV: 요구사항을 에픽·유저스토리로 분류해 초안 작성
    P->>DS: 화면 요소가 디자인 시스템에 있는지 대조 (카탈로그 · Storybook)

    alt A. 모든 요소가 디자인 시스템에 있음
        P->>CV: 요소마다 컴포넌트와 story id 태깅
        P->>CV: 디자인 시스템 미보유 줄은 "없음 + 사용 컴포넌트 목록"
    else B. 신규 디자인 요소가 있음
        P->>CV: 없는 요소는 태깅하지 않고 미보유 줄에 사실만 기록 (분류 1개 선택)
        alt B-1. 컴포넌트로 신규 정의 (공용 대상)
            Note over CV,DS: 분류 = 신규 필요 / variant 값 추가 필요 / 공용화 필요
            Note over DS: 컴포넌트 신설 · variant 추가 · 공용 승격은 이슈 범위 밖<br/>별도 작업으로 디자인 시스템에 반영
            Note over IS: 신규 필요는 해당 화면 영역을 보류<br/>나머지 둘은 화면 영역을 정상 구현
        else B-2. 컴포넌트까지 올리지 않음 (해당 화면 전용)
            Note over CV,DS: 분류 = 참조 전용 (page-local)
            Note over DS: 공용 태깅 대상 아님 · 디자인 시스템 반영 없음
            Note over IS: 기존 page-local 컴포넌트를 그대로 쓰는 화면 영역을 정상 구현
        end
    end

    D->>T: 캔버스 열람 (읽기 모드)
    D->>T: 블록 선택 후 코멘트 작성
    D->>AI: 코멘트 내용을 바탕으로 수정 요청
    AI->>CV: 캔버스 수정
    D->>T: 코멘트 해결 처리
    CV->>IS: 확정된 캔버스를 근거로 에픽·스토리 생성
    DEV->>T: 이슈 모드로 스토리·수락 기준·태스크 확인
    DEV->>CV: 화면 앵커로 배치·카피·컴포넌트 태깅 확인
    DEV->>DS: 태깅된 story id로 컴포넌트 확인 후 import
    DEV->>DEV: 디자인 시스템 컴포넌트로 구현
```

### 경우별 정리

| 경우 | 캔버스에 적는 것 | 디자인 시스템 | 화면 영역 구현 |
|---|---|---|---|
| **A. 모두 포함** | 컴포넌트 이름 + story id 태깅, 미보유 줄은 "없음" | 변경 없음 | 정상 |
| **B-1. 신규 정의 · 신규 필요** | 태깅하지 않고 `신규 필요: 이름` 기록 | 컴포넌트 신설은 별도 작업 | **보류하고 질문** |
| **B-1. 신규 정의 · variant 값 추가 필요** | `variant 값 추가 필요: 컴포넌트(값)` 기록 | 값 이름만 추가(신규 컴포넌트 아님) | 정상 (컴포넌트가 이미 있음) |
| **B-1. 신규 정의 · 공용화 필요** | `공용화 필요 — 위치 / 컴포넌트` 기록 | 다른 화면 전용 컴포넌트를 공용으로 승격 | 정상 (현재 위치의 컴포넌트를 재사용하는 전제) |
| **B-2. 컴포넌트까지 올리지 않음** | `참조 전용(page-local): 이름` 기록 | 변경 없음 | 정상 |

지켜야 할 원칙은 아래와 같습니다.

- 캔버스는 **사실만 보고한다.** 미보유 줄에 "디자인 시스템에 편입하자"는 권유를 섞지 않습니다. 편입 여부는 캔버스가 아니라 별도로 판단합니다.
- 디자인 시스템에 없는 컴포넌트를 **있는 것처럼 태깅하지 않습니다.**
- 애자일 이슈는 디자인 시스템 쪽 작업(컴포넌트 신설·variant 추가·공용화)을 **태스크로 만들지 않습니다.**
- 화면 영역까지 보류하는 것은 `신규 필요` 한 가지뿐입니다. 나머지 분류는 화면의 수락 기준·태스크·테스트를 정상적으로 둡니다.

## 3. 캔버스 작성 시 판단 규칙 (지어내지 않고 질문한다)

캔버스는 뒤따르는 이슈의 단일 출처입니다. 근거가 없는 항목은 채우지 않고 질문합니다.

```mermaid
flowchart TD
    S["요구사항 수신<br/>(회의록, 티켓, 채팅 등)"] --> C1["에픽과 유저스토리로 분류"]
    C1 --> Q{"항목을 채울 근거가<br/>문서에 있는가?"}
    Q -->|있다| W["스스로 판단해 작성<br/>(판단이 갈리면 근거를 함께 적는다)"]
    Q -->|없다| ASK["작성을 멈추고 질문<br/>무엇이 왜 막혔는지 + 답에 따른 차이"]
    ASK --> R{"답이 왔는가?"}
    R -->|왔다| W
    R -->|아직| KEEP["지어내지 않고 문서에 남긴다<br/>(전제 명시 / 열린 질문)"]
    W --> N["나머지 항목 계속 작성"]
    KEEP --> N

    style ASK fill:#fff7ed,stroke:#ea580c
    style KEEP fill:#fff7ed,stroke:#ea580c
```

질문 없이 하면 안 되는 대표 행동은 아래와 같습니다.

- 빈칸을 그럴듯한 문장으로 채우기
- `TBD`만 적고 넘어가기
- 디자인 시스템에 없는 컴포넌트를 있는 것처럼 태깅하기

## 4. 개발 착수 절차 (화면이 있는 스토리)

문서 하나만 읽고 착수하지 않습니다. 같은 화면에 대한 정보가 문서마다 나뉘어 있기 때문입니다.

```mermaid
flowchart TD
    A["1. 스토리 index.md<br/>기능 정책 · AC · 태스크 · 열린 질문"] --> B["2. 에픽 index.md 「참조 자료」<br/>화면 번호로 앵커 찾기"]
    B --> C["3. 캔버스 화면 열기<br/>캔버스파일#앵커<br/>배치 · 카피 · 컴포넌트 태깅 확인"]
    C --> D["4. 디자인 시스템에서<br/>컴포넌트 import (새로 만들지 않음)"]
    D --> E{"디자인 시스템<br/>미보유 항목인가?"}
    E -->|"신규 필요"| H["해당 화면 영역 보류 후 질문"]
    E -->|"그 외 분류"| I["정상 구현"]
    E -->|아니오| I

    style H fill:#fff7ed,stroke:#ea580c
```

화면 없는 스토리(B유형)는 2~4를 건너뛰고, 에픽의 「흐름도」가 처리 순서와 분기의 단일 출처가 됩니다.

## 5. 변경이 생기면

수정은 아래 순서로 전파됩니다. 캔버스가 항상 최신이어야 하는 이유입니다.

```mermaid
flowchart LR
    X["변경 발생"] --> A["영향 범위 파악"]
    A --> B["디자인 시스템 반영"]
    B --> C["이슈 수정"]
    C --> D["개발 수정"]
```

## 6. 문서 간 연결 관계

```mermaid
flowchart TB
    subgraph L1["1단계 - one-canvas (기획 건 단위)"]
        CV["one-canvas/&lt;기획-건&gt;/canvas-*.html"]
    end
    subgraph L2["2단계 - agile-issue (도메인 단위)"]
        DM["&lt;도메인&gt;/index.md<br/>도메인 정책"]
        EP["epic-*/index.md<br/>캔버스: 경로"]
        ST["story-*/index.md<br/>AC · 태스크 · 테스트"]
        DM --> EP --> ST
    end
    DS["design-system<br/>컴포넌트 실물"]

    CV -. "에픽의 '캔버스:' 줄이 연결" .-> EP
    CV -. "story id 태깅" .-> DS
    ST -. "[ui: 화면N] 태그" .-> CV
```

1단계는 기획 건(폴더) 단위, 2단계는 도메인 단위로 묶이며, 둘을 잇는 것은 폴더가 아니라 에픽의 `캔버스:` 줄입니다.
