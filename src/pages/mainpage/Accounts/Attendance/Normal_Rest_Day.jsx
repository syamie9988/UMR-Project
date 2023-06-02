import { Box, useTheme, Breadcrumbs, Link, TextField } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { tokens } from "../../../../components/theme";
import { mockDataAttendance } from "../../../../data/mockData";
import Header from "../../../../components/Header";
import IconButton from "@mui/material/IconButton";
import EditIcon from "@mui/icons-material/Edit";

const Normal_Rest_Day = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const columns = [
    { field: "no", headerName: "NO", headerAlign: "center",
    align: "center", },
    {
      field: "ThumbprintId",
      headerName: "ThumbprintId",
      flex: 1,
      headerAlign: "center",
      align: "center",
      cellClassName: "name-column--cell",
    },
    {
      field: "EmployeeId",
      headerName: "EmployeeId",
      type: "number",
      headerAlign: "center",
      align: "center",
    },
    {
      field: "name",
      headerName: "Name",
      flex: 1,
      headerAlign: "center",
      align: "center",
      
    },
    {
      field: "ND_day",
      headerName: "ND (Day)",
      flex: 1,
      headerAlign: "center",
      align: "center",
    },
    {
      field: "ODD_Hr",
      headerName: "ODD (Hr)",
      flex: 1,
      headerAlign: "center",
      align: "center",
    },
    {
      field: "ND_Ot",
      headerName: "ND OT (Hr)",
      flex: 1,
      headerAlign: "center",
      align: "center",
    },
    {
      field: "RD_Day",
      headerName: "RD (Day)",
      flex: 1,
      headerAlign: "center",
      align: "center",
    },
    {
      field: "RD_Hr",
      headerName: "RD/Hr",
      flex: 1,
      headerAlign: "center",
      align: "center",
    },
    {
      field: "RD_OT",
      headerName: "RD OT (Hr)",
      flex: 1,
      headerAlign: "center",
      align: "center",
    },
    
    {
      field: "edit",
      headerName: "Edit",
      flex: 1,
      headerAlign: "center",
      align: "center",
      renderCell: () => (
        <IconButton color="primary" aria-label="edit">
          <EditIcon />
        </IconButton>
      ),
    },
  ];

  return (
    <Box m="20px">
      <Header title="Accounting" subtitle="Worker Attendance" />
      <Box display="flex" alignItems="center">
        <Breadcrumbs separator=">" aria-label="breadcrumb">
          <Link color="inherit" href="/General">
            General
          </Link>
          <Link color="inherit" href="/daily">
            Daily
          </Link>
          <Link color="textPrimary" href="/Normal_Rest_Day">
            Normal/Rest Day
          </Link>
          
        </Breadcrumbs>
        <TextField
          id="search-bar"
          label="Search"
          variant="outlined"
          size="small"
          sx={{ ml: "auto", width: 200 }}
        />
      </Box>
      <Box
        m="40px 0 0 0"
        height="75vh"
        sx={{
          "& .MuiDataGrid-root": {
            border: "none",
          },
          "& .MuiDataGrid-cell": {
            borderBottom: "none",
          },
          "& .name-column--cell": {
            color: colors.greenAccent[300],
          },
          "& .MuiDataGrid-columnHeaders": {
            backgroundColor: colors.blueAccent[700],
            borderBottom: "none",
          },
          "& .MuiDataGrid-virtualScroller": {
            backgroundColor: colors.primary[400],
          },
          "& .MuiDataGrid-footerContainer": {
            borderTop: "none",
            backgroundColor: colors.blueAccent[700],
          },
          "& .MuiCheckbox-root": {
            color: `${colors.greenAccent[200]} !important`,
          },
        }}
      >
        <DataGrid rows={mockDataAttendance} columns={columns} />
      </Box>
    </Box>
  );
};

export default Normal_Rest_Day;
