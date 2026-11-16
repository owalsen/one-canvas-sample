# 컴포넌트 카탈로그 — design-system/app (샘플)

> ⚠️ **자동 생성 문서다. 직접 수정하지 마라.** 내용이 낡았으면 다시 생성한다.
>
> ```bash
> cd design-system/app && npm run build-storybook   # 빌드 후 이 문서가 자동 재생성된다
> ```

## 이 문서는 무엇인가

`one-canvas/*.html` 통합캔버스의 요소에 `<!-- component: X -->` 주석을 달 때, **X 자리에 쓸 수 있는 이름의 전체 목록**이다.
여기 있는 이름으로 태깅하면 개발 태스크가 실제 컴포넌트를 import해 재사용한다(새로 만들지 않는다).

```html
<!-- component: QuantityStepper(variant=bordered) -->
<div class="stepper">…</div>
```

- **태깅 이름**은 표의 `태깅 이름` 열 값을 그대로 쓴다(실제 export 이름과 같다).
- 표에 없는 요소는 임의로 태깅하지 말고, 화면 디스크립션 하단의 **"디자인 시스템 미보유"** 줄에 없다는 사실만 적는다.
- **story id**는 Storybook 주소에 그대로 쓴다: `http://localhost:6007/?path=/story/<story id>`

## 컴포넌트 (31종 · 스토리 41개)

| 태깅 이름 | story id | 스토리북 경로 | 소스 |
|---|---|---|---|
| `AmountSummaryBox` | `display-amountsummarybox--accent` | Display/AmountSummaryBox / Accent | `src/components/display/amountSummaryBox/amountSummaryBox.tsx` |
| `AmountSummaryBox` | `display-amountsummarybox--default` | Display/AmountSummaryBox / Default | `src/components/display/amountSummaryBox/amountSummaryBox.tsx` |
| `Backdrop` | `components-backdrop--default` | Components/Backdrop / Default | `src/components/common/backdrop/backdrop.tsx` |
| `BackSVG` | `icons-each--back-svg` | Icons/Each / Back Svg | `src/components/icons/icons.tsx` |
| `Badge` | `display-badge--on-sale` | Display/Badge / On Sale | `src/components/display/badge/badge.tsx` |
| `Badge` | `display-badge--sale-closed` | Display/Badge / Sale Closed | `src/components/display/badge/badge.tsx` |
| `BellIconSVG` | `icons-each--bell-icon-svg` | Icons/Each / Bell Icon Svg | `src/components/icons/icons.tsx` |
| `BlueLineInfoIconSVG` | `icons-each--blue-line-info-icon-svg` | Icons/Each / Blue Line Info Icon Svg | `src/components/icons/icons.tsx` |
| `Bottom` | `components-bottom--single-button` | Components/Bottom / Single Button | `src/components/common/bottom/bottom.tsx` |
| `BottomMenu` | `components-bottommenu--style-seller` | Components/BottomMenu / Style Seller | `src/components/common/bottomMenu/bottomMenu.tsx` |
| `Button` | `inputs-button--default` | Inputs/Button / Default | `src/components/inputs/button/button.tsx` |
| `Button` | `inputs-button--grey-out-line` | Inputs/Button / Grey Out Line | `src/components/inputs/button/button.tsx` |
| `Button` | `inputs-button--white-with-line` | Inputs/Button / White With Line | `src/components/inputs/button/button.tsx` |
| `CheckboxInput` | `inputs-checkboxinput--checked` | Inputs/CheckboxInput / Checked | `src/components/inputs/checkboxInput/checkboxInput.tsx` |
| `CheckboxInput` | `inputs-checkboxinput--default` | Inputs/CheckboxInput / Default | `src/components/inputs/checkboxInput/checkboxInput.tsx` |
| `DropdownArrowSVG` | `icons-each--dropdown-arrow-svg` | Icons/Each / Dropdown Arrow Svg | `src/components/icons/icons.tsx` |
| `EmptyState` | `components-emptystate--icon-and-text` | Components/EmptyState / Icon And Text | `src/components/common/emptyState/emptyState.tsx` |
| `GreyCloseIconSVG` | `icons-each--grey-close-icon-svg` | Icons/Each / Grey Close Icon Svg | `src/components/icons/icons.tsx` |
| `Header` | `components-header--back-and-title` | Components/Header / Back And Title | `src/components/common/header/header.tsx` |
| `InfoConfirmSheet` | `components-infoconfirmsheet--stretch` | Components/InfoConfirmSheet / Stretch | `src/components/common/infoConfirmSheet/infoConfirmSheet.tsx` |
| `ListText` | `display-listtext--default` | Display/ListText / Default | `src/components/display/listText/listText.tsx` |
| `NoDataSVG` | `icons-each--no-data-svg` | Icons/Each / No Data Svg | `src/components/icons/icons.tsx` |
| `NoticeBox` | `components-noticebox--cta` | Components/NoticeBox / Cta | `src/components/common/noticeBox/noticeBox.tsx` |
| `NoticeBox` | `components-noticebox--group-delivery` | Components/NoticeBox / Group Delivery | `src/components/common/noticeBox/noticeBox.tsx` |
| `NoticeBox` | `components-noticebox--unavailable-address` | Components/NoticeBox / Unavailable Address | `src/components/common/noticeBox/noticeBox.tsx` |
| `OptionSelectBox` | `inputs-optionselectbox--default` | Inputs/OptionSelectBox / Default | `src/components/inputs/optionSelectBox/optionSelectBox.tsx` |
| `QuantityStepper` | `inputs-quantitystepper--bordered` | Inputs/QuantityStepper / Bordered | `src/components/inputs/quantityStepper/quantityStepper.tsx` |
| `RedLineInfoIconSVG` | `icons-each--red-line-info-icon-svg` | Icons/Each / Red Line Info Icon Svg | `src/components/icons/icons.tsx` |
| `RemovableChip` | `inputs-removablechip--filled` | Inputs/RemovableChip / Filled | `src/components/inputs/removableChip/removableChip.tsx` |
| `SectionTitle` | `display-sectiontitle--default` | Display/SectionTitle / Default | `src/components/display/sectionTitle/sectionTitle.tsx` |
| `SettingIconSVG` | `icons-each--setting-icon-svg` | Icons/Each / Setting Icon Svg | `src/components/icons/icons.tsx` |
| `ShoppingCartIconSVG` | `icons-each--shopping-cart-icon-svg` | Icons/Each / Shopping Cart Icon Svg | `src/components/icons/icons.tsx` |
| `ShowIndex` | `display-showindex--goods` | Display/ShowIndex / Goods | `src/components/display/showIndex/showIndex.tsx` |
| `SmallChevronRightSVG` | `icons-each--small-chevron-right-svg` | Icons/Each / Small Chevron Right Svg | `src/components/icons/icons.tsx` |
| `Switch` | `inputs-switch--off` | Inputs/Switch / Off | `src/components/inputs/switch/switch.tsx` |
| `Switch` | `inputs-switch--on` | Inputs/Switch / On | `src/components/inputs/switch/switch.tsx` |
| `ThinDivider` | `display-thindivider--default` | Display/ThinDivider / Default | `src/components/display/thinDivider/thinDivider.tsx` |
| `ThumbnailSwiper` | `components-thumbnailswiper--multiple-images` | Components/ThumbnailSwiper / Multiple Images | `src/components/common/thumbnailSwiper/thumbnailSwiper.tsx` |
| `Toast` | `components-toast--default` | Components/Toast / Default | `src/components/common/toast/toast.tsx` |
| `Toast` | `components-toast--push-agreed` | Components/Toast / Push Agreed | `src/components/common/toast/toast.tsx` |
| `Toast` | `components-toast--push-revoked` | Components/Toast / Push Revoked | `src/components/common/toast/toast.tsx` |
