export default function CarouselNextArrow(props: any) {
  const { className, style, onClick } = props;

  return (
    <div>
      <div
        className={className}
        style={{
          ...style,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          width: "40px",
          height: "40px",
          backgroundColor: "white",
          borderRadius: "20px",
          boxShadow: "0px 0px 5px 0px rgba(0,0,0,0.3)",
          cursor: "pointer",
          zIndex: 40,
        }}
        onClick={onClick}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          className="w-6 h-6  text-orange-600 z-50"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75"
          />
        </svg>
      </div>
    </div>
  );
}
