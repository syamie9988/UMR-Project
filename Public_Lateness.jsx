import { Box, useTheme, Typography, TextField, InputAdornment, MenuItem, FormControl, Select } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { tokens } from "../../../../components/theme";
import { mockDataAttendance } from "../../../../data/mockData";
import IconButton from "@mui/material/IconButton";
import EditIcon from "@mui/icons-material/Edit";
import SearchIcon from "@mui/icons-material/Search";
import React, { useState } from "react";
import { Link } from 'react-router-dom';

const Public_Lateness = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const columns = [
    
    {
      field: "PH_Day",
      headerName: "PH (Day)",
      flex: 1,
      headerAlign: "center",
      align: "center",
    },
    {
      field: "PH_hr",
      headerName: "PH/Hr (Hr)",
      flex: 1,
      headerAlign: "center",
      align: "center",
    },
    {
      field: "PH_OT",
      headerName: "PH OT (Hr)",
      flex: 1,
      headerAlign: "center",
      align: "center",
    },
    {
      field: "PH_W/W",
      headerName: "PH W/W (Day)",
      flex: 1,
      headerAlign: "center",
      align: "center",
    },
    {
      field: "ND_Min",
      headerName: "ND (MIN)",
      flex: 1,
      headerAlign: "center",
      align: "center",
    },
    {
      field: "RD_OT_Min",
      headerName: "RD OT (MIN)",
      flex: 1,
      headerAlign: "center",
      align: "center",
    },
    {
      field: "RD_MIN",
      headerName: "RD (MIN)",
      flex: 1,
      headerAlign: "center",
      align: "center",
    },
    {
        field: "PH_MIN",
        headerName: "PH (MIN)",
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
      sx={{ minWidth: 120 }} // Set the desired minimum width
    >
      <MenuItem value="option1">
        <Link to="/daily" style={{ textDecoration: 'none', color: 'inherit' }}>
          <Box display="flex" alignItems="center" px={1} py={0.2}>
            <Typography variant="body2">Daily</Typography>
          </Box>
        </Link>
      </MenuItem>
      
      <MenuItem value="option2">
        <Link to="/Normal_Rest_Day" style={{ textDecoration: 'none', color: 'inherit' }}>
          <Box display="flex" alignItems="center" px={1} py={0.2}>
            <Typography variant="body2">Normal Day/Rest Day</Typography>
          </Box>
        </Link>
      </MenuItem>

      <MenuItem value="">
        <Link to="/Public_Lateness" style={{ textDecoration: 'none', color: 'inherit' }}>
          <Box display="flex" alignItems="center" px={1} py={0.2}>
            <Typography variant="body2">Public Day/Lateness</Typography>
          </Box>
        </Link>
      </MenuItem>

      <MenuItem value="option4">
        <Link to="/Additional" style={{ textDecoration: 'none', color: 'inherit' }}>
          <Box display="flex" alignItems="center" px={1} py={0.2}>
            <Typography variant="body2">Additional</Typography>
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
    sx={{ width: 300 }}
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
        <DataGrid rows={mockDataAttendance} columns={columns} />
      </Box>
    </Box>
  );
};

export default Public_Lateness;
