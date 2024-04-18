function LinkedinButton() {
  return (
    <>
      <button
        style={{ outline: "none", border: "none" }}
        className="icon-button svg-button"
        onClick={() =>
          window.open(
            "https://www.linkedin.com/in/marcus-o-a28548b6/",
            "_blank"
          )
        }
      >
        <svg
          width="100%"
          height="100%"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M18 22V15C18 13.8954 17.1046 13 16 13C14.8954 13 14 13.8954 14 15V22H10"
            stroke="var(--text)"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M10 22V15C10 11.6863 12.6863 9 16 9C19.3137 9 22 11.6863 22 15V22H18"
            stroke="var(--text)"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <rect
            x="3"
            y="9"
            width="4"
            height="13"
            stroke="var(--text)"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <circle
            cx="5"
            cy="4"
            r="2"
            stroke="var(--text)"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </button>
    </>
  );
}
export default LinkedinButton;