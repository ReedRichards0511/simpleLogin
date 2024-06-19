import { Button } from "@mui/material";
import { FC } from "react";

interface ButtonComponentProps {
    text: string;
    handleClick?: () => void;
    type?: "submit" | "button" | "reset";
}

export const ButtonComponent: FC<ButtonComponentProps> = ({ handleClick, text, type = "button" }) => {



    return (
        <Button
            type={type}
            fullWidth
            variant="contained"
            onClick={handleClick ?? (() => { })}
            sx={{ mt: 3, mb: 2 }}
        >
            {text}
        </Button>
    )
}