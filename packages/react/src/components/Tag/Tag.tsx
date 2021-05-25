import React from 'react';
import classNames from 'classnames';
import { TagProps } from './types';
import { Icon } from '../Icon';

export const Tag = React.forwardRef<HTMLSpanElement, TagProps>(({
	dismissible,
	baseName = 'nds-tag',
	closeIconClass = `${baseName}__close`,
	iconClass = `${baseName}__icon`,
	children,
	color,
	onDismiss,
	className,
	icon,
	...props
}: TagProps) => {
	const BaseIcon = React.useMemo(() => {
		if (!icon) return null;
		const baseProps = {
			className: iconClass,
		};
		const iconProps = (typeof icon === 'string')
			? { ...baseProps, variant: icon, size: 12 }
			: { ...baseProps, icon };
		return <Icon {...iconProps} />;
	}, [icon, iconClass]);

	const classes = classNames(
		className,
		baseName,
		{
			[`${baseName}--${color}`]: color !== undefined,
		},
	);

	return (
		<span className={classes} {...props}>
			{BaseIcon}
			{children}
			{ dismissible && (
				<Icon
					variant="close"
					size={12}
					className={closeIconClass}
					tooltipProps={{ placement: 'left' }}
					onClick={onDismiss}
				>
					Close
				</Icon>
			) }
		</span>
	);
});
