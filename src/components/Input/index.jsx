import { Inputs, Label } from "./style"
import React from "react"

export const Input = React.forwardRef(({ children, ...props }, ref) => {
    return (
        <>
            <Label>{children}</Label>
            <Inputs ref={ref} {...props} />
        </>
    )
})

