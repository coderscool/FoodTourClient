import * as React from "react";
import DialogTitle from "@mui/material/DialogTitle";
import Dialog from "@mui/material/Dialog";
import {
  Box,
  Button,
  Card,
  CardMedia,
  Grid,
  List,
  ListItem,
  TextField,
  Typography,
} from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { purple, orange } from "@mui/material/colors";
import axios from "axios";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import ListItemText from "@mui/material/ListItemText";
import Select from "@mui/material/Select";
import Checkbox from "@mui/material/Checkbox";
import { useSelector } from "react-redux";
import { selectUser } from "../../Reducers/userSlice";

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const nations = [
  "Âu", "Hàn", "Nhật", "Trung", "Thái", "Việt"
];
const types = [
  "Mặn", "Ngọt", "Lẩu", "Nướng", "Ăn sáng", "Ăn vặt", "Soup", "Cơm" 
];
const theme = createTheme({
  palette: {
    primary: orange,
    secondary: purple,
  },
});

const DishForm = () => {
  const [dialog, setDialog] = React.useState(false);
  const [dishName, setDishName] = React.useState("");
  const [image, setImage] = React.useState("")
  const [price, setPrice] = React.useState("");
  const [typeName, setTypeName] = React.useState([]);
  const [nationName, setNationName] = React.useState([]);
  const user = useSelector(selectUser)
  console.log(user)

  const handleNationChange = (event) => {
    const {
      target: { value },
    } = event;
    setNationName(typeof value === "string" ? value.split(",") : value);
  };
  const handleTypeChange = (event) => {
    const {
      target: { value },
    } = event;
    setTypeName(typeof value === "string" ? value.split(",") : value);
  };
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };
  const handleDelete = () => {
    //Update
    setDialog(true);
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = {
      id: "3fa85f64-5717-4562-b3fc-2c963f66afa6",
      personId: user.id,
      person: {
        name: user.name,
        address: user.address,
        phone: user.phone
      },
      name: dishName,
      image: image,
      price: {
        cost: price,
        discount: 0,
      },
      rate: {
        point: 0,
      },
      search: {
        nation: nationName,
        category: typeName,
      },
    };
    console.log(data);
    await axios.post('https://localhost:7220/dish', data)
  };
  return (
    <ThemeProvider theme={theme}>
      <Box>
        <Dialog open={true}>
          <DialogTitle style={{ display: "flex", justifyContent: "center" }}>
            Them mon an
          </DialogTitle>
          <Grid>
            <Grid>
              <Card style={{ marginLeft: 35 }} sx={{ maxWidth: 350 }}>
                <CardMedia sx={{ height: 200 }} image={image} />
                <input type="file" onChange={(e) => handleFileChange(e)} />
              </Card>
            </Grid>
            <Grid>
              <List style={{ display: "flex", padding: 5 }}>
                <ListItem style={{ padding: 5 }} disableGutters>
                  <TextField
                    style={{ width: 200 }}
                    id="outlined-basic"
                    label="Mon an"
                    value={dishName}
                    onChange={(e) => setDishName(e.target.value)}
                    variant="outlined"
                  />
                </ListItem>
                <ListItem style={{ padding: 5 }} disableGutters>
                  <TextField
                    style={{ width: 200 }}
                    id="outlined-basic"
                    label="Mon an"
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                    variant="outlined"
                  />
                </ListItem>
              </List>
              <List>
                <FormControl sx={{ m: 1, width: 200 }}>
                  <InputLabel id="demo-multiple-checkbox-label">
                    Loại
                  </InputLabel>
                  <Select
                    labelId="demo-multiple-checkbox-label"
                    id="demo-multiple-checkbox"
                    multiple
                    value={typeName}
                    onChange={handleTypeChange}
                    input={<OutlinedInput label="Loại" />}
                    renderValue={(selected) => selected.join(", ")}
                    MenuProps={MenuProps}
                  >
                    {types.map((name) => (
                      <MenuItem key={name} value={name}>
                        <Checkbox checked={typeName.indexOf(name) > -1} />
                        <ListItemText primary={name} />
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
                <FormControl sx={{ m: 1, width: 200 }}>
                  <InputLabel id="demo-multiple-checkbox-label">
                    Quoc gia
                  </InputLabel>
                  <Select
                    labelId="demo-multiple-checkbox-label"
                    id="demo-multiple-checkbox"
                    multiple
                    value={nationName}
                    onChange={handleNationChange}
                    input={<OutlinedInput label="Quoc gia" />}
                    renderValue={(selected) => selected.join(", ")}
                    MenuProps={MenuProps}
                  >
                    {nations.map((name) => (
                      <MenuItem key={name} value={name}>
                        <Checkbox checked={nationName.indexOf(name) > -1} />
                        <ListItemText primary={name} />
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </List>
            </Grid>
            <Grid style={{ marginLeft: 220, marginBottom: 10 }}>
              <Button variant="outlined" style={{ width: 100 }}>
                Huy
              </Button>
              <Button
                variant="contained"
                style={{ width: 100, marginLeft: 5 }}
                onClick={handleSubmit}
              >
                <Typography style={{ color: "white" }}>Them</Typography>
              </Button>
            </Grid>
          </Grid>
        </Dialog>
      </Box>
    </ThemeProvider>
  );
};

export default DishForm;
