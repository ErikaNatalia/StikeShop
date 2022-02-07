import btns from './btns.module.css'

const Btns = ({txt}) => {

    return(
        <div>
            <button className={btns.btns}>{txt}</button>
        </div>
    );
}

export {Btns}