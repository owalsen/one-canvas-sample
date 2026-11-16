# design-system/app (샘플)

one-canvas 샘플 캔버스 중 **앱(사용자 대상)** 화면용 캔버스가 태깅한 컴포넌트만 담은 **최소 Storybook**입니다.
대상 캔버스: `one-canvas/sample/cart-price-change-alert`, `one-canvas/sample/restock-alert`.

## 실행

```bash
cd design-system/app
npm install
npm run storybook          # http://localhost:6007
```

`npm run build-storybook` 은 정적 빌드 후 `COMPONENT-CATALOG.md`와 `ICON-MARKUP.md`를 자동 생성합니다. 타입 검사는 `npm run typecheck`입니다.
포트 6007은 앱 디자인 시스템의 규칙 포트입니다(어드민·파트너는 6008).

## 먼저 읽을 것

1. [`COMPONENT-CATALOG.md`](COMPONENT-CATALOG.md) — 캔버스에 태깅할 수 있는 이름과 **story id** 전체 목록
2. [`ICON-MARKUP.md`](ICON-MARKUP.md) — 캔버스에 넣는 아이콘 인라인 SVG

## 모든 스토리는 휴대폰 프레임 안에 그려집니다

`BottomMenu`, `Bottom`, `InfoConfirmSheet`, `Backdrop`은 화면 하단·전면에 붙는 컴포넌트라 폭 375px 프레임(`.ap-phone`) 기준으로 배치됩니다(`.storybook/preview.tsx`).

## 의도적으로 없는 것

샘플 캔버스가 "디자인 시스템 미보유"로 표시한 항목은 **있는 것처럼 만들지 않았습니다.** 이 항목들을 만났을 때의 대응은 [실습 가이드](../../docs/hands-on-guide.md)를 보세요.

| 항목 | 분류 | 캔버스 |
|---|---|---|
| `PriceChangeAmount` | 신규 필요 | 장바구니 가격 변동 |
| `NoticeBox`의 `CART_PRICE_CHANGED`, `CART_PRICE_INCREASED` variant | variant 값 추가 필요 | 장바구니 가격 변동 |
| `SoldOutOverlay` | 신규 필요 | 재입고 알림 |
| `AgreementToggle` | 공용화 필요 (앱의 마이페이지 전용 컴포넌트) | 두 캔버스 |
| `PastHistoryGoodsItem` | 공용화 필요 (앱의 주문내역 전용 컴포넌트) | 재입고 알림 |

`NoticeBox`는 `CTA` · `UNAVAILABLE_ADDRESS` · `GROUP_DELIVERY` 세 variant만 있습니다.

## 폴더 규칙

`src/components/{카테고리}/{컴포넌트명}/{컴포넌트명}.tsx` 와 같은 폴더의 `{컴포넌트명}.stories.tsx`. 아이콘만 `src/components/icons/` 한 곳에 모아 `Icons/Each` 스토리 하나로 둡니다.
