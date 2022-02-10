import navBtn from './menuBtn.module.css'

const MenuBtn = (props) =>{
    const {onToggle} = props;
    return(
        <div>
            <button onClick={() => onToggle()} className={navBtn.btnContainer}>
            <svg viewBox="0 0 100 80" className={navBtn.svgNav}>
                    <rect width="100" height="13" />
                    <rect y="30" width="78" height="13" />
                    <rect y="60" width="50" height="13" />
                </svg>
            </button>
        </div>
    );
}

export {MenuBtn}