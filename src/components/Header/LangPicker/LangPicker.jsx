import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import './LangPicker.css';

const LangPicker = (props) => {
    const [open, setOpen] = useState(false);
    const { t, i18n } = useTranslation();
    const { lang } = props;

    const changeLanguage = lng => {
        i18n.changeLanguage(lng);
        toggle();
    };

    const toggle = () => {
        setOpen(!open);
    }

    const openIcon = open ? 'icon-angle-up' : 'icon-angle-down';

    return (
        <div className='nav-lang-block' onClick={toggle}>
            <span className='nav-lang-title'>{t("currentLang")}</span>

            <i className={`nav-lang-title nav-lang-button ${openIcon}`}></i>

            <div variant={`${open}`} className='nav-lang-popup' >
                {
                    lang.map(item => <span key={item.lang} onClick={() => changeLanguage(item.lang)}>{item.name}</span>)
                }
            </div>
        </div>
    );
}

export default LangPicker;

