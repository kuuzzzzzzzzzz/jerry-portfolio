const sideChaseFrames = [
  '/assets/frames/side-chase-1.png',
  '/assets/frames/side-chase-2.png',
  '/assets/frames/side-chase-3.png',
  '/assets/frames/side-chase-4.png',
];

export default function GrassCharacters() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-x-0 bottom-[6%] z-[9] h-36 overflow-hidden sm:h-44 lg:h-56"
    >
      <div className="grass-side-chase absolute bottom-0 h-32 w-[18rem] sm:h-40 sm:w-[23rem] lg:h-52 lg:w-[31rem]">
        {sideChaseFrames.map((frame, index) => (
          <img
            alt={index === 0 ? 'Side-view chase animation on the grass' : ''}
            className={`side-chase-frame side-chase-frame-${index + 1} absolute inset-0 h-full w-full select-none object-contain`}
            draggable={false}
            key={frame}
            src={frame}
          />
        ))}
      </div>
    </div>
  );
}
