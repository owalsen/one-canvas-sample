# design-system/admin-partner (샘플)

one-canvas 샘플 캔버스(`one-canvas/sample/partner-settlement`)가 태깅한 컴포넌트만 담은 **최소 Storybook**입니다.
실무 디자인 시스템의 축소판이 아니라, 캔버스 → 이슈 → 구현으로 이어지는 흐름을 직접 따라 해 보기 위한 예시입니다.

## 실행

```bash
cd design-system/admin-partner
npm install
npm run storybook      # http://localhost:6008
```

정적 빌드는 `npm run build-storybook`, 타입 검사는 `npm run typecheck`입니다. 포트 6008은 어드민·파트너 디자인 시스템의 규칙 포트입니다(앱은 6007 — [`design-system/app`](../app/design-system-app.md)).

## 컴포넌트와 story id

story id는 `title`(스토리북 사이드바 경로)과 export 이름에서 파생됩니다. 예: `title: 'Inputs/Button'` + `export const Primary` → `inputs-button--primary`.
스토리북에서 여는 주소는 `http://localhost:6008/?path=/story/<story id>` 입니다.

| 컴포넌트 | 파일 | story id |
|---|---|---|
| Button | `src/components/inputs/button/button.tsx` | `inputs-button--primary`, `inputs-button--secondary-gray` |
| Checkbox | `src/components/inputs/checkbox/checkbox.tsx` | `inputs-checkbox--default` |
| DateRangePicker | `src/components/inputs/dateRangePicker/dateRangePicker.tsx` | `inputs-daterangepicker--default` |
| FilterChip | `src/components/inputs/filterChip/filterChip.tsx` | `inputs-filterchip--chip-group` |
| Tag | `src/components/display/tag/tag.tsx` | `display-tag--default`, `display-tag--multiple` |
| Pagination | `src/components/display/pagination/pagination.tsx` | `display-pagination--default` |
| Table | `src/components/display/table/table.tsx` | **스토리 없음** (캔버스도 "스토리 없음"으로 태깅) |
| SubTitle | `src/components/display/subTitle/subTitle.tsx` | `display-subtitle--default` |
| Divider | `src/components/display/divider/divider.tsx` | `display-divider--horizontal` |
| InfoField | `src/components/display/infoField/infoField.tsx` | `display-infofield--default`, `display-infofield--with-helper-text` |
| ProgressBar | `src/components/display/progressBar/progressBar.tsx` | `display-progressbar--in-progress` |
| Card | `src/components/layout/card/card.tsx` | `layout-card--form-card` |
| Modal | `src/components/feedback/modal/modal.tsx` | `feedback-modal--default` |
| Toast | `src/components/feedback/toast/toast.tsx` | `feedback-toast--default` |
| SegmentedTabs | `src/components/navigation/segmentedTabs/segmentedTabs.tsx` | `navigation-segmentedtabs--default` |

## 의도적으로 없는 것

- **TrendSparkline** — 정산 요약 캔버스가 "신규 필요 — design-system에 없음"으로 표시한 컴포넌트입니다. 있는 것처럼 만들지 않았습니다. 이 항목을 만났을 때 어떻게 하는지는 [실습 가이드](../../docs/hands-on-guide.md)의 7단계를 보세요.
- **Table의 스토리 파일** — 캔버스 태깅과 실물이 일치하도록 일부러 두지 않았습니다.

## 폴더 규칙

`src/components/{카테고리}/{컴포넌트명}/{컴포넌트명}.tsx` 와 같은 폴더의 `{컴포넌트명}.stories.tsx`. 캔버스의 태깅(`<!-- component: X | story: Inputs/Button (src/components/inputs/button/button.stories.tsx) -->`)이 이 경로를 그대로 가리킵니다.
