import { downloadCv } from "../Util";


function CvButton() {
  return (
    <button 
    className="icon-button"
    onClick={downloadCv}
    >
        <span className="material-symbols-outlined">demography</span>
    </button>
  );
}

export default CvButton;

