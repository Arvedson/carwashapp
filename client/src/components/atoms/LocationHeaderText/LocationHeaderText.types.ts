import { TextAtomProps } from "../Text/Text.types";

export interface LocationHeaderTextProps extends Omit<TextAtomProps, 'variant'> {
  /**
   * Text content for the location header
   */
  children: React.ReactNode;
}
