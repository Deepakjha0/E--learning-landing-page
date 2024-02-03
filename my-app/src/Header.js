function Header() {
  return (
    <>
     <header>
        <div className="right_menu">
        <div>
            <p className="topBarName"> EDYODA <br/> <span>Stories</span> </p>
        </div>
        <div>
            <p className="MiddleNav">Explore Categories
                <span>
                    <img className="Image" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAAGCAYAAAD37n+BAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAHhJREFUeNpiYGBguAPE/f///2fAh0FqgPguiBEDxC+BeDUQM2NRyAyVewlWCxW0B+L7QHwAiHmRFPNCxUBy9mAxJElVIL4MxBeBWB6KL0LFVOHq0KwXAuJDQHwPikFsIWQ1jFCFcMDIyMgGpFZAuRFA+V/I8gABBgD8EGd4shdx5wAAAABJRU5ErkJggg==" alt="Logo"/>
                </span>
            </p>
        </div>
        </div>
        <div className="left_Menu">
        <div className="subMidLevel">
            <p>EdYoda is a learning and knowledge  <br/>  sharing platform for techies</p>
        </div>
        <div>
            <button className="bttn">Go To Main Website</button>
        </div>
        </div>
     </header>
    </>
  );
}
export default Header;
