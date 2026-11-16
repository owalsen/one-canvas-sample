import type { Preview } from '@storybook/react';
import '../src/styles/tokens.css';
import '../src/styles/components.css';

// 앱 컴포넌트는 모바일 화면 안에서 쓰이므로, 모든 스토리를 휴대폰 폭의 프레임 안에 그린다.
// BottomMenu·Bottom·InfoConfirmSheet처럼 화면 하단에 붙는 컴포넌트가 이 프레임 기준으로 배치된다.
const preview: Preview = {
  parameters: { layout: 'centered' },
  decorators: [
    (Story) => (
      <div className="ap-phone">
        <Story />
      </div>
    ),
  ],
};

export default preview;
