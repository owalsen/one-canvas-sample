import { ShowIndex } from '../../display/showIndex/showIndex';

export interface ThumbnailSwiperProps {
  images: { id: string; color: string }[];
}

// 실제 이미지 대신 색 블록을 쓴다(샘플 레포에 이미지 자산을 두지 않기 위함).
export function ThumbnailSwiper({ images }: ThumbnailSwiperProps) {
  return (
    <div style={{ position: 'relative' }}>
      <div className="ap-swiper">
        {images.map((img, i) => (
          <div key={img.id} style={{ background: img.color }}>{i + 1}</div>
        ))}
      </div>
      <div style={{ position: 'absolute', right: 0, bottom: 8 }}>
        <ShowIndex type="GOODS" current={1} total={images.length} />
      </div>
    </div>
  );
}
