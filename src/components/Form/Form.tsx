import React from 'react';
import { Field, InjectedFormProps } from 'redux-form';
import { Input } from '../Input/Input';
import { Upload } from '../Upload/Upload';
import { Checkbox } from '../Checkbox/Checkbox';
import { reset as actionReset } from '../../redux/actions/preview';
import i18n from '../../utils/i18n';

import './Form.scss';

interface FormProps extends InjectedFormProps {
    resetPreview: typeof actionReset;
}

export const Form = ({ reset, resetPreview }: FormProps) => {
    const onClick = () => {
        reset();
        resetPreview();
    };

    return (
        <form className="form">
            <div className="form__row">
                <Field
                    name="login"
                    component={Input}
                    type="text"
                    placeholder={i18n('login')}
                />
            </div>
            <div className="form__row">
                <Field
                    name="photo"
                    component={Upload}
                    placeholder={i18n('photo')}
                />
            </div>
            <div className="form__row">
                <Field
                    name="postsCount"
                    component={Input}
                    type="number"
                    max="9999"
                    placeholder={i18n('postsCount')}
                />
            </div>
            <div className="form__row">
                <Field
                    name="followersCount"
                    component={Input}
                    type="number"
                    max="999999999" // 999M
                    placeholder={i18n('followersCount')}
                />
            </div>
            <div className="form__row">
                <Field
                    name="followingCount"
                    component={Input}
                    type="number"
                    max="9999"
                    placeholder={i18n('followingCount')}
                />
            </div>
            <div className="form__row">
                <Field
                    name="name"
                    component={Input}
                    type="text"
                    placeholder={i18n('name')}
                />
            </div>
            <div className="form__row">
                <Field
                    name="business"
                    component={Input}
                    type="text"
                    placeholder={i18n('business')}
                />
            </div>
            <div className="form__row">
                <Field
                    name="bio"
                    component={Input}
                    type="text"
                    placeholder={i18n('bio')}
                />
            </div>
            <div className="form__row">
                <Field
                    name="website"
                    component={Input}
                    type="text"
                    placeholder={i18n('website')}
                />
            </div>
            <div className="form__row">
                <Field
                    name="address"
                    component={Input}
                    type="text"
                    placeholder={i18n('address')}
                />
            </div>
            <div className="form__row">
                <div className="form__checkbox">
                    <Field
                        name="activeStory"
                        component={Checkbox}
                        placeholder={i18n('activeStory')}
                    />
                </div>
                <div className="form__checkbox">
                    <Field
                        name="verifiedAcc"
                        component={Checkbox}
                        placeholder={i18n('verifiedAcc')}
                    />
                </div>
                <div className="form__checkbox">
                    <Field
                        name="showEmail"
                        component={Checkbox}
                        placeholder={i18n('showEmail')}
                    />
                </div>
                <div className="form__checkbox">
                    <Field
                        name="showPhone"
                        component={Checkbox}
                        placeholder={i18n('showPhone')}
                    />
                </div>
            </div>
            <button type="button" onClick={onClick}>
                {i18n('clearValues')}
            </button>
        </form>
    );
};
