import { CSSProperties, FC } from "react";
import styles from "./Button.module.css";

export interface ButtonSharedProps {
	/** Дополнительные инлайновые стили */
	style?: CSSProperties;
	/** Дополнительные классы */
	cls?: string;
	/** Класс для иконочного шрифта */
	iconCls?: string;
	/** Остальные параметры для кнопки */
	props?: React.ButtonHTMLAttributes<HTMLButtonElement>;
}

interface ButtonProps extends ButtonSharedProps {

}

export const Button: FC<ButtonProps> = ({props}) => {
  return <button>button</button>;
};
