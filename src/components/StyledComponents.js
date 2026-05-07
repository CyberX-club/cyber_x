import { Button, Paper } from "@mui/material";
import { styled } from "@mui/material/styles";

export const StyledButton = styled(Button)(({ theme }) => ({
  backgroundColor: theme.palette.secondary.main,
  color: theme.palette.background.default,
  border: "2px solid transparent",
  borderRadius: "5px",
  padding: theme.spacing(1.5, 3),
  fontSize: "16px",
  textTransform: "uppercase",
  transition: "all 0.3s ease",
  "&:hover": {
    backgroundColor: theme.palette.background.default,
    color: theme.palette.primary.main,
    borderColor: theme.palette.primary.main,
  },
}));

export const TransparentPaper = styled(Paper)(({ theme }) => ({
  opacity: 0.8,
  padding: theme.spacing(2),
}));
