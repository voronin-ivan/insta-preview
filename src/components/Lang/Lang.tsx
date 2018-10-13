import React from 'react';
import { LangState } from '../../models/lang';
import { change } from '../../redux/actions/lang';

export interface LangProps {
    lang: LangState,
    changeLang: typeof change
}

const RU = 'ru';
const ENG = 'eng';

export const Lang = ({ lang, changeLang }: LangProps) => (
    <div>
        <div>
            <span>Current lang:</span>
            <span>{lang}</span>
        </div>
        <div>
            <button onClick={changeLang.bind(this, RU)}>{RU}</button>
            <button onClick={changeLang.bind(this, ENG)}>{ENG}</button>
        </div>
    </div>
);
