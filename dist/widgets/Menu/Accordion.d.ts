import React from "react";
import { LinkStatus, PushedProps } from "./types";
interface Props extends PushedProps {
    label: string;
    status?: LinkStatus;
    icon: React.ReactElement;
    initialOpenState?: boolean;
    className?: string;
}
declare const Accordion: React.FC<Props>;
export default Accordion;
