# 아이콘 마크업 — design-system/app (샘플)

> ⚠️ **자동 생성 문서다. 직접 수정하지 마라.** `cd design-system/app && npm run icons:markup`

통합캔버스 HTML에서 아이콘을 그릴 때 붙여 넣는 인라인 SVG다. 컴포넌트 이름 주석을 함께 두면 개발 시점에 같은 이름의 아이콘 컴포넌트(`src/components/icons/icons.tsx`)를 import해 쓴다.

- 색은 `currentColor`로 두었으므로 주변 `color`를 따른다. 실제 컴포넌트의 기본 색은 `icons.tsx`에 있다.
- Storybook에서는 `Icons/Each` 아래에서 확인한다.

### BackSVG

```html
<!-- component: BackSVG -->
<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M15 5l-7 7 7 7"/></svg>
```

### RedLineInfoIconSVG

```html
<!-- component: RedLineInfoIconSVG -->
<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 8v5M12 16.5v.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
```

### BlueLineInfoIconSVG

```html
<!-- component: BlueLineInfoIconSVG -->
<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 11v6M12 7.5v.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
```

### DropdownArrowSVG

```html
<!-- component: DropdownArrowSVG -->
<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M6 9l6 6 6-6"/></svg>
```

### BellIconSVG

```html
<!-- component: BellIconSVG -->
<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M6 17V11a6 6 0 1112 0v6l2 2H4l2-2zM10 21h4"/></svg>
```

### SmallChevronRightSVG

```html
<!-- component: SmallChevronRightSVG -->
<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M9 6l6 6-6 6"/></svg>
```

### ShoppingCartIconSVG

```html
<!-- component: ShoppingCartIconSVG -->
<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M3 4h2l2.4 11h10l2-8H6M9 20h.01M17 20h.01"/></svg>
```

### SettingIconSVG

```html
<!-- component: SettingIconSVG -->
<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M4 7h10M18 7h2M4 17h2M10 17h10M16 5v4M8 15v4"/></svg>
```

### NoDataSVG

```html
<!-- component: NoDataSVG -->
<svg width="48" height="48" viewBox="0 0 48 48" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M8 14h32v24H8zM8 14l6-8h20l6 8M18 26h12"/></svg>
```

### GreyCloseIconSVG

```html
<!-- component: GreyCloseIconSVG -->
<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M6 6l12 12M18 6L6 18"/></svg>
```
