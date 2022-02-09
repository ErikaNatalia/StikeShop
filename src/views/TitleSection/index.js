import titleStyle from './titleSection.module.css'
// import imagee from '../../media/toUse.jpg'

const TitleSections = ({sectionTitle} /* {imageeSection} */) => {

    return(
        <div className={titleStyle.titleSections}>
            {/* <img className={titleStyle.imageeStyle} src={imageeSection} alt="Section" /> */}
            {/* <img className={titleStyle.imageeStyle} src={imagee} alt="Section" /> */}
            <h1 className={titleStyle.h1Sections}>{sectionTitle}</h1>
            <div className={titleStyle.sectionLayout}></div>
        </div>
    );
}

export {TitleSections}