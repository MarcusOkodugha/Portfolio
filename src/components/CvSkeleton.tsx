import "../styles/CvSkeleton.css";
function CvSkeleton() {
  return (
    <>
    <div className="cv-skeleton">
      <div className="title">
        <div className="box" style={{width:"60%", height:"100%"}}></div>
        <div className="box circle" style={{height:"100%", aspectRatio:"1/1"}}></div>
      </div>
      <div className="row">
        <div className="left-col">
          <div className="box" style={{width:"100%", height:"50%"}}></div>
          <div className="box" style={{width:"100%", height:"100%"}}></div>
        </div>
        <div className="right-col">
            <div className="text" style={{width:"50%"}}></div>
            <div className="box" style={{width:"100%", height:"50%"}}></div>
            <div className="text" style={{width:"50%"}}></div>
            <div className="box" style={{width:"100%", height:"7rem"}}></div>
            <div className="text" style={{width:"70%"}}></div>
            <div className="box" style={{width:"100%", height:"7rem"}}></div>            
            <div className="text" style={{width:"50%"}}></div>
            <div className="box" style={{width:"100%", height:"7rem"}}></div>
        </div>
      </div>
    </div>
    </>
  );
}

export default CvSkeleton;
