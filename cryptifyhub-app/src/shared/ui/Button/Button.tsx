import { CSSProperties, FC, ReactNode } from 'react';
import styles from './Button.module.css';
import clsx from 'clsx';
import { Icon } from '../Icon';

export interface ButtonSharedProps {
    /** Текст внутри кнопки */
    value: ReactNode;
    /** Дополнительные инлайновые стили */
    style?: CSSProperties;
    /** Дополнительные классы */
    cls?: string;
    /** Класс для иконочного шрифта */
    iconCls?: string;
    /** Остальные параметры для кнопки */
    props?: React.ButtonHTMLAttributes<HTMLButtonElement>;
}

interface ButtonProps extends ButtonSharedProps {}

export const Button: FC<ButtonProps> = ({ value, cls, iconCls, props }) => {
    const buttonCls = clsx(cls, styles.button);

    const buttonBody = (
        <>
            {value}
            {iconCls && <Icon cls={iconCls} />}
        </>
    );

    return (
        <button className={buttonCls} {...props}>
            {buttonBody}
        </button>
    );
};
