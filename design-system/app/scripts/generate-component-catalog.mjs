// storybook-static/index.json(빌드 결과)에서 COMPONENT-CATALOG.md를 생성한다.
// 사용: npm run build-storybook (빌드 후 자동 실행) 또는 빌드 뒤 npm run catalog
import { readFileSync, writeFileSync } from 'node:fs';

const index = JSON.parse(readFileSync(new URL('../storybook-static/index.json', import.meta.url), 'utf8'));
const stories = Object.values(index.entries).filter((e) => e.type === 'story');

// 캔버스 태깅 이름 = 컴포넌트 export 이름. 아이콘은 스토리 이름(BackSvg)을 export 이름(BackSVG)으로 되돌린다.
const tagName = (s) =>
  s.title === 'Icons/Each' ? s.name.replace(/\s+/g, '').replace(/Svg$/, 'SVG') : s.title.split('/').pop();

const rows = stories
  .map((s) => ({
    tag: tagName(s),
    id: s.id,
    path: `${s.title} / ${s.name}`,
    src: 'src/' + s.importPath.replace(/^.*?src\//, '').replace('.stories.tsx', '.tsx'),
  }))
  .sort((a, b) => a.tag.localeCompare(b.tag) || a.id.localeCompare(b.id));

const lines = rows.map((r) => `| \`${r.tag}\` | \`${r.id}\` | ${r.path} | \`${r.src}\` |`);

const md = `# 컴포넌트 카탈로그 — design-system/app (샘플)

> ⚠️ **자동 생성 문서다. 직접 수정하지 마라.** 내용이 낡았으면 다시 생성한다.
>
> \`\`\`bash
> cd design-system/app && npm run build-storybook   # 빌드 후 이 문서가 자동 재생성된다
> \`\`\`

## 이 문서는 무엇인가

\`one-canvas/*.html\` 통합캔버스의 요소에 \`<!-- component: X -->\` 주석을 달 때, **X 자리에 쓸 수 있는 이름의 전체 목록**이다.
여기 있는 이름으로 태깅하면 개발 태스크가 실제 컴포넌트를 import해 재사용한다(새로 만들지 않는다).

\`\`\`html
<!-- component: QuantityStepper(variant=bordered) -->
<div class="stepper">…</div>
\`\`\`

- **태깅 이름**은 표의 \`태깅 이름\` 열 값을 그대로 쓴다(실제 export 이름과 같다).
- 표에 없는 요소는 임의로 태깅하지 말고, 화면 디스크립션 하단의 **"디자인 시스템 미보유"** 줄에 없다는 사실만 적는다.
- **story id**는 Storybook 주소에 그대로 쓴다: \`http://localhost:6007/?path=/story/<story id>\`

## 컴포넌트 (${new Set(rows.map((r) => r.tag)).size}종 · 스토리 ${rows.length}개)

| 태깅 이름 | story id | 스토리북 경로 | 소스 |
|---|---|---|---|
${lines.join('\n')}
`;

writeFileSync(new URL('../COMPONENT-CATALOG.md', import.meta.url), md);
console.log(`COMPONENT-CATALOG.md 생성: 스토리 ${rows.length}개`);
