import root from "./root";
import contained from "./contained";
import outlined from "./outlined";
import buttonText from "./text";
import { OverridesStyleRules } from "@mui/material/styles/overrides";
import { ButtonClasses, ButtonProps, Theme } from "@mui/material";

const button: {
	defaultProps: Partial<ButtonProps>;
	styleOverrides: Partial<OverridesStyleRules<keyof ButtonClasses, "MuiButton", Omit<Theme, "components">>>;
} = {
	defaultProps: {
		disableRipple: false
	},
	styleOverrides: {
		root,
		contained: { ...contained.base },
		containedSizeSmall: { ...contained.small },
		containedSizeLarge: { ...contained.large },
		containedPrimary: { ...contained.primary },
		containedSecondary: { ...contained.secondary },
		outlined: { ...outlined.base },
		outlinedSizeSmall: { ...outlined.small },
		outlinedSizeLarge: { ...outlined.large },
		outlinedPrimary: { ...outlined.primary },
		outlinedSecondary: { ...outlined.secondary },
		text: { ...buttonText.base },
		textSizeSmall: { ...buttonText.small },
		textSizeLarge: { ...buttonText.large },
		textPrimary: { ...buttonText.primary },
		textSecondary: { ...buttonText.secondary }
	}
};

export default button;
