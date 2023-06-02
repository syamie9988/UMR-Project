import { Box, useTheme, Typography, TextField, InputAdornment, MenuItem, FormControl, Select } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { tokens } from "../../../../components/theme";
import { mockDataWorker } from "../../../../data/mockData";
import IconButton from "@mui/material/IconButton";
import EditIcon from "@mui/icons-material/Edit";
import SearchIcon from "@mui/icons-material/Search";
import React, { useState } from "react";
import { Link } from 'react-router-dom';

const Addition = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const columns = [
    {
      field: "WorkerId",
      headerName: "Worker ID",
      flex: 1,
      headerAlign: "center",
      align: "center",
    },
    {
      field: "Meal_Allowance",
      headerName: "Meal Allowance",
      headerAlign: "center",
      flex: 1,
      align: "center",
    },
    {
      field: "Increment_Allowance",
      headerName: "Increment Allowance",
      flex: 1,
      headerAlign: "center",
      align: "center",
    },
    {
      field: "Supervisor_Leader_Allowance",
      headerName: "Supervisor/Leader Allowance",
      flex: 1,
      headerAlign: "center",
      align: "center",
    },
    {
      field: "Attendance_Allowance",
      headerName: "Attendance Allowance",
      flex: 1,
      headerAlign: "center",
      align: "center",
    },
    {
        field: "Performance_Allowance",
        headerName: "Performance Allowance",
        flex: 1,
        headerAlign: "center",
        align: "center",
      },
      {
        field: "Rest_Day_Allowance",
        headerName: "Rest Day Allowance",
        flex: 1,
        headerAlign: "center",
        align: "center",
      },
      {
        field: "Sales_Commission",
        headerName: "Sales Commission",
        flex: 1,
        headerAlign: "center",
        align: "center",
      },
      {
        field: "Night_Shift_Day",
        headerName: "Night Shift/Day",
        flex: 1,
        headerAlign: "center",
        align: "center",
      },
      {
        field: "Levy",
        headerName: "Levy",
        flex: 1,
        headerAlign: "center",
        align: "center",
      },
      
    {
      field: "edit",
      headerName: "Edit",
      headerAlign: "center",
      align: "center",
      renderCell: () => (
        <IconButton color="primary" aria-label="edit">
          <EditIcon />
        </IconButton>
      ),
    },
  ];

  const [dropdownValue, setDropdownValue] = useState("");

  const handleDropdownChange = (event) => {
    setDropdownValue(event.target.value);
  };

  return (
    <Box m="15px">
      <Box
        display="flex"
        alignItems="center"
        justifyContent="space-between"
        sx={{ mb: "20px" }}
      >
{/* change base on db */}
<Box>
  <Typography variant="h6" sx={{ fontFamily: 'Tahoma', fontSize: '20px' , fontWeight: 'bold' }}>Jon Snow</Typography> 
  <Typography variant="h6" sx={{ fontFamily: 'Arial', fontSize: '15px', fontStyle : 'italic' }}>12345</Typography>
</Box>



<Box display="flex" alignItems="center">
  <FormControl variant="outlined" size="small" sx={{ ml: 1 }}>
    <Select
      value={dropdownValue}
      onChange={handleDropdownChange}
      displayEmpty
      inputProps={{ "aria-label": "Select" }}
      sx={{ minWidth: 120 }} 
    >
      <MenuItem value="option1">
        <Link to="/Rest_Day" style={{ textDecoration: 'none', color: 'inherit' }}>
          <Box display="flex" alignItems="center" px={1} py={0.2}>
            <Typography variant="body2">Normal Day/Rest Day/Public Holiday</Typography>
          </Box>
        </Link>
      </MenuItem>
      
      <MenuItem value="option2">
        <Link to="/Late_Leave" style={{ textDecoration: 'none', color: 'inherit' }}>
          <Box display="flex" alignItems="center" px={1} py={0.2}>
            <Typography variant="body2">Lateness/Pay Leave</Typography>
          </Box>
        </Link>
      </MenuItem>

      <MenuItem value="">
        <Link to="/Addition" style={{ textDecoration: 'none', color: 'inherit' }}>
          <Box display="flex" alignItems="center" px={1} py={0.2}>
            <Typography variant="body2">Addition</Typography>
          </Box>
        </Link>
      </MenuItem>

      <MenuItem value="option4">
        <Link to="/Deduction" style={{ textDecoration: 'none', color: 'inherit' }}>
          <Box display="flex" alignItems="center" px={1} py={0.2}>
            <Typography variant="body2">Deduction</Typography>
          </Box>
        </Link>
      </MenuItem>
    </Select>
  </FormControl>

  <TextField
    id="search-bar"
    label="Search"
    variant="outlined"
    size="small"
    sx={{ width: 300}}
    InputProps={{
      startAdornment: (
        <InputAdornment position="start">
          <SearchIcon />
        </InputAdornment>
      ),
    }}
  />
</Box>



      </Box>
      <Box
        m="40px 0 0 0"
        height="72vh"
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
        <DataGrid rows={mockDataWorker} columns={columns} />
      </Box>
    </Box>
  );
};

export default Addition;
