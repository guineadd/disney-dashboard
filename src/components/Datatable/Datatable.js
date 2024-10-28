import theme from "../../shared/theme";

const styles = {
  dataGrid: {
    fontSize: "1.5rem",
    border: "none",
    "& .MuiDataGrid-columnHeader": {
      backgroundColor: theme.palette.dataGrid.headerBg,
      color: theme.palette.dataGrid.headerText,
      "&:hover": {
        backgroundColor: theme.palette.dataGrid.headerHoverBg,
        color: theme.palette.dataGrid.headerHoverText,
      },
      "&:focus": {
        outline: "none",
        border: "none",
      },
    },
    "& .MuiDataGrid-columnHeaderTitle": {
      fontWeight: "bold",
    },
    "& .MuiDataGrid-cell": {
      backgroundColor: theme.palette.dataGrid.cellBg,
      color: theme.palette.dataGrid.cellText,
      "&:focus, &:focus-visible": {
        outline: "none",
      },
    },
    "& .centered-cell": {
      textAlign: "center",
    },
    "& .MuiDataGrid-row": {
      backgroundColor: theme.palette.dataGrid.rowBg,
      "&:hover": {
        backgroundColor: theme.palette.dataGrid.rowHoverBg,
        cursor: "pointer",
      },
      "&.Mui-selected": {
        backgroundColor: theme.palette.dataGrid.selectedRowBg,
        color: theme.palette.dataGrid.selectedRowText,
        "&:hover": {
          backgroundColor: theme.palette.dataGrid.selectedRowBg,
        },
      },
    },
    "& button:focus": {
      outline: "none",
      border: "none",
    },
    "& .MuiDataGrid-footerContainer": {
      backgroundColor: theme.palette.dataGrid.headerBg,
      color: theme.palette.dataGrid.headerText,
      "& .MuiTablePagination-root": {
        color: theme.palette.dataGrid.rowText,
      },
      "& .MuiTablePagination-select": {
        backgroundColor: theme.palette.dataGrid.rowBg,
        color: theme.palette.dataGrid.rowText,
      },
      "& .MuiTablePagination-displayedRows, & .MuiTablePagination-selectLabel": {
        color: theme.palette.dataGrid.headerText,
      },
      "& .MuiIconButton-root": {
        color: theme.palette.text.primary,
        "&:hover": {
          color: theme.palette.text.primary,
          backgroundColor: theme.palette.primary.dark,
        },
      },
      "& .Mui-disabled": {
        color: theme.palette.action.disabled,
        cursor: "not-allowed",
      },
    },
    "& .MuiDataGrid-filler": {
      backgroundColor: theme.palette.dataGrid.emptyRowsBg,
    },
    "& .MuiDataGrid-scrollbarFiller": {
      backgroundColor: theme.palette.dataGrid.headerBg,
    },
  },
  input: {
    marginBottom: "1rem",
    padding: "0.5rem",
    width: "50%",
    borderRadius: 10,
    backgroundColor: theme.palette.text.primary,
    color: theme.palette.background.default,
    border: `4px solid ${theme.palette.secondary.dark}`,
    fontSize: "1.5rem",
    fontFamily: "inherit",
  },
};

export default styles;
