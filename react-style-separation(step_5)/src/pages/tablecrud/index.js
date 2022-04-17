import React from "react";

import {
    DefaultContainerBox,
    DefaultContainerInnerBox
} from "../../styles/box"

export default function TableCrud() {
    return (
        <>
            <DefaultContainerBox>
            After separating the repeated styles, reuse them efficiently
                <DefaultContainerInnerBox>
                DefaultContainerBox and DefaultContainerInnerBox are available elsewhere.
                This style is very efficient for design patterns.
                </DefaultContainerInnerBox>
            </DefaultContainerBox>
        </>
    )
}