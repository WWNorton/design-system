import {
	useEffect,
	useLayoutEffect,
	useRef, useState,
} from 'react';
import isEqual from 'react-fast-compare';
import {
	createPopper,
	Instance,
	Options,
	PopperCoreProps,
} from '../types/popper';

export interface UsePopperProps extends Partial<Options>, PopperCoreProps {
	/** The contents of the popper. */
	children?: React.ReactNode;
}

/** A hook to create a [Popper.js](https://popper.js.org) instance. */
export const usePopper = ({
	reference,
	popper,
	children,
	placement = 'auto',
	modifiers,
	strategy = 'absolute',
	onFirstUpdate,
}: UsePopperProps): Instance | null => {
	const [instance, setInstance] = useState<Instance | null>(null);
	const options = useRef<Options>({
		placement,
		modifiers: modifiers || [],
		strategy,
		onFirstUpdate,
	});

	// create the popper instance
	useLayoutEffect(() => {
		let popperInstance: Instance;

		if (reference && popper) {
			popperInstance = createPopper(reference, popper, options.current);
			setInstance(popperInstance);
		}

		return (): void => {
			if (popperInstance) {
				popperInstance.destroy();
				setInstance(null);
			}
		};
	}, [reference, popper]);

	// update options when they change
	useEffect(() => {
		const newOptions = {
			placement,
			modifiers: modifiers || [],
			strategy,
			onFirstUpdate,
		};
		if (!isEqual(newOptions, options.current)) {
			options.current = newOptions;
		}
		if (instance) instance.setOptions(options.current);
	}, [placement, modifiers, strategy, onFirstUpdate, instance]);

	// update the instance when children change to ensure the popper resizes
	useEffect(() => {
		if (instance) instance.update();
	}, [instance, children]);

	return instance;
};
