// src/components/icons/iconData.json 에서 ICON-MARKUP.md(캔버스에 붙여 넣는 인라인 SVG 마크업)를 생성한다.
import { readFileSync, writeFileSync } from 'node:fs';

const data = JSON.parse(readFileSync(new URL('../src/components/icons/iconData.json', import.meta.url), 'utf8'));

const blocks = Object.entries(data).map(([name, [viewBox, d]]) => {
  const size = viewBox === '0 0 48 48' ? 48 : 24;
  return `### ${name}

\`\`\`html
<!-- component: ${name} -->
<svg width="${size}" height="${size}" viewBox="${viewBox}" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="${d}"/></svg>
\`\`\`
`;
});

const md = `# 아이콘 마크업 — design-system/app (샘플)

> ⚠️ **자동 생성 문서다. 직접 수정하지 마라.** \`cd design-system/app && npm run icons:markup\`

통합캔버스 HTML에서 아이콘을 그릴 때 붙여 넣는 인라인 SVG다. 컴포넌트 이름 주석을 함께 두면 개발 시점에 같은 이름의 아이콘 컴포넌트(\`src/components/icons/icons.tsx\`)를 import해 쓴다.

- 색은 \`currentColor\`로 두었으므로 주변 \`color\`를 따른다. 실제 컴포넌트의 기본 색은 \`icons.tsx\`에 있다.
- Storybook에서는 \`Icons/Each\` 아래에서 확인한다.

${blocks.join('\n')}`;

writeFileSync(new URL('../ICON-MARKUP.md', import.meta.url), md);
console.log(`ICON-MARKUP.md 생성: 아이콘 ${blocks.length}개`);
