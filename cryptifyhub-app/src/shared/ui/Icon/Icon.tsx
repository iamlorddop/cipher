import { FC } from 'react';
import styles from './Icon.module.css';

interface IconProps {
    /** Стили для иконки */
    cls?: string;
}

export const Icon: FC<IconProps> = ({}) => {
    return <i>s</i>;
};
