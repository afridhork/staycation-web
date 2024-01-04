export interface button extends classButton{
   children: string|JSX.Element|JSX.Element[]|React.ReactNode;
   type: typeButton,
	onClick?: fnButton | void,
	href?: string,
	target?: string,
	className?: string
}

interface classButton{
	isPrimary?: boolean,
	isLight?: boolean,
	isExternal?: boolean,
	isDisabled?: boolean,
	isLoading?: boolean,
	isSmall?: boolean,
	isLarge?: boolean,
	isBlock?: boolean,
	hasShadow?: boolean,
}

type typeButton = 'button' | 'link'
type fnButton = () => void
