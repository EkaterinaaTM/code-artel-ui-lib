import { IVariantList, ITheme } from "../../interfaces";
import * as Color from "color";

let baseStyle: any = {
  display: "inline-block",
  border: "none",
  background: "none",
  font: "inherit",
  cursor: "pointer",
  outline: "none",
  fontWeight: 500,
  fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif'
};

export const ButtonVariant = (theme: ITheme): IVariantList => {
  baseStyle = {
    ...baseStyle,
    borderRadius: theme.space && theme.space[2],
    boxShadow: theme.boxShadow && theme.boxShadow[1],
    transition: theme.transition && theme.transition[0]
  };

  return {
    default: {
      ...baseStyle,
      color: theme.colors && theme.colors["black"],
      boxShadow: "none",
      // backgroundColor: theme.colors && Color(theme.colors['white']).darken(0.08).hex(),

      ":hover": {
        backgroundColor:
          theme.colors &&
          Color(theme.colors["white"])
            .darken(0.16)
            .hex()
      },
      ":active": {
        backgroundColor:
          theme.colors &&
          Color(theme.colors["white"])
            .darken(0.24)
            .hex(),
        boxShadow: theme.boxShadow && theme.boxShadow[4]
      },
      ":disabled": {
        backgroundColor:
          theme.colors &&
          Color(theme.colors["white"])
            .darken(0.32)
            .hex(),
        cursor: "default",
        color: theme.colors && theme.colors["black"]
      },
      ":focus": {
        boxShadow: theme.boxShadow && theme.boxShadow[5]
      },
      ":visited": {},
      ".active": {
        backgroundColor:
          theme.colors &&
          Color(theme.colors["white"])
            .darken(0.24)
            .hex(),
        boxShadow: theme.boxShadow && theme.boxShadow[4]
      }
    },
    primary: {
      ...baseStyle,
      color: theme.colors && theme.colors["black"],
      backgroundColor:
        theme.colors &&
        Color(theme.colors["white"])
          .darken(0.08)
          .hex(),

      ":hover": {
        backgroundColor:
          theme.colors &&
          Color(theme.colors["white"])
            .darken(0.16)
            .hex()
      },
      ":active": {
        backgroundColor:
          theme.colors &&
          Color(theme.colors["white"])
            .darken(0.24)
            .hex(),
        boxShadow: theme.boxShadow && theme.boxShadow[4]
      },
      ":disabled": {
        backgroundColor:
          theme.colors &&
          Color(theme.colors["white"])
            .darken(0.32)
            .hex(),
        cursor: "default",
        color: theme.colors && theme.colors["black"]
      },
      ":focus": {
        boxShadow: theme.boxShadow && theme.boxShadow[5]
      },
      ":visited": {},
      ".active": {
        backgroundColor:
          theme.colors &&
          Color(theme.colors["white"])
            .darken(0.24)
            .hex(),
        boxShadow: theme.boxShadow && theme.boxShadow[4]
      }
    },
    secondary: {
      ...baseStyle,
      backgroundColor: theme.colors && theme.colors["blue"],
      color: theme.colors && theme.colors["white"],
      ":hover": {
        backgroundColor:
          theme.colors &&
          Color(theme.colors["blue"])
            .darken(0.16)
            .hex()
      },
      ":active": {
        backgroundColor:
          theme.colors &&
          Color(theme.colors["blue"])
            .darken(0.24)
            .hex(),
        boxShadow: theme.boxShadow && theme.boxShadow[4]
      },
      ":disabled": {
        backgroundColor:
          theme.colors &&
          Color(theme.colors["blue"])
            .darken(0.32)
            .hex(),
        cursor: "default",
        color: theme.colors && theme.colors["white"]
      },
      ":focus": {
        boxShadow: theme.boxShadow && theme.boxShadow[5]
      },
      ":visited": {},
      ".active": {
        backgroundColor:
          theme.colors &&
          Color(theme.colors["blue"])
            .darken(0.24)
            .hex(),
        boxShadow: theme.boxShadow && theme.boxShadow[4]
      }
    },
    error: {
      ...baseStyle,
      backgroundColor: theme.colors && theme.colors["red"],
      color: theme.colors && theme.colors["white"],
      ":hover": {
        backgroundColor:
          theme.colors &&
          Color(theme.colors["red"])
            .darken(0.16)
            .hex()
      },
      ":active": {
        backgroundColor:
          theme.colors &&
          Color(theme.colors["red"])
            .darken(0.24)
            .hex(),
        boxShadow: theme.boxShadow && theme.boxShadow[4]
      },
      ":disabled": {
        backgroundColor:
          theme.colors &&
          Color(theme.colors["red"])
            .darken(0.32)
            .hex(),
        cursor: "default",
        color: theme.colors && theme.colors["white"]
      },
      ":focus": {
        boxShadow: theme.boxShadow && theme.boxShadow[5]
      },
      ":visited": {},
      ".active": {
        backgroundColor:
          theme.colors &&
          Color(theme.colors["red"])
            .darken(0.24)
            .hex(),
        boxShadow: theme.boxShadow && theme.boxShadow[4]
      }
    }
  };
};

export default ButtonVariant;
