export default function Button({ children }) {
  return (
    <button
      className={`
        bg-[#FC004E]
        text-white
        font-urbanist font-bold
        rounded-[10px] text-xl
        border-2 border-transparent hover:border-cyan-400
        shadow-[2px_2px_10px_0_#00E7F9]
        transition-all duration-200
        focus:outline-none
        flex items-center gap-2
        w-full sm:w-[313px] h-[40px]
        mx-auto
        justify-center cursor-pointer
      `}
      style={{ padding: 0 }}
    >
      <span>{children}</span>
      <svg
        className="inline-block"
        width="8"
        height="14"
        viewBox="0 0 8 14"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <path d="M7.19238 6.26465C7.60266 6.67918 7.60225 7.33287 7.19141 7.74707L2.29102 12.6875L2.21094 12.7607C1.79676 13.1024 1.19607 13.078 0.808594 12.6875C0.607462 12.4847 0.50002 12.2157 0.5 11.9512L0.5 11.7451L0.538086 11.707C0.543678 11.6826 0.54827 11.6578 0.555664 11.6338L0.591797 11.5352C0.644656 11.4108 0.722378 11.2983 0.819336 11.2041L0.818359 11.2041L4.97949 7L0.818359 2.7959L0.819336 2.79492C0.408805 2.3804 0.4084 1.72679 0.819336 1.3125C1.23271 0.895833 1.88939 0.895784 2.30273 1.3125L2.30273 1.31348L7.19238 6.26465Z" fill="white" stroke="white" />
      </svg>
    </button>
  );
}
