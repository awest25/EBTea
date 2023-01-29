import React, { useState, useEffect } from "react";
import { Box, Grid } from "@mui/material";
import ModeEditOutlineIcon from '@mui/icons-material/ModeEditOutline';
import "../styles/MealDetails.css";
import { red } from '@mui/material/colors';
import { Button, TextField } from '@material-ui/core';

function MealDetails(props) {
  const dates = ["01-22-2023-0", "01-23-2023-1", "01-24-2023-2", "01-25-2023-3", "01-26-2023-4", "01-27-2023-5", "01-28-2023-6"];
  const mealData = {
    "01-22-2023-0": {
      "breakfast": {
        "ingr": "Eggo waffles, syrup",
        "meal-name": "Waffles"
      },
      "dinner": {
        "ingr": "whole wheat spaghetti, red sauce, parmesean",
        "meal-name": "Spaghetti"
      },
      "lunch": {
        "ingr": "whole wheat bread, mozzarella, tomatoes, basil, balsamic",
        "meal-name": "Caprese Sandwich"
      }
    },
    "01-23-2023-1": {
      "breakfast": {
        "ingr": "FUCK ME Eggo waffles, syrup",
        "meal-name": "Waffles"
      },
      "dinner": {
        "ingr": "whole wheat spaghetti, red sauce, parmesean",
        "meal-name": "Spaghetti"
      },
      "lunch": {
        "ingr": "whole wheat bread, mozzarella, tomatoes, basil, balsamic",
        "meal-name": "Caprese Sandwich"
      }
    },
    "01-24-2023-2": {
      "breakfast": {
        "ingr": "Eggo waffles, syrup",
        "meal-name": "Waffles"
      },
      "dinner": {
        "ingr": "whole wheat spaghetti, red sauce, parmesean",
        "meal-name": "Spaghetti"
      },
      "lunch": {
        "ingr": "whole wheat bread, mozzarella, tomatoes, basil, balsamic",
        "meal-name": "Caprese Sandwich"
      }
    },
    "01-25-2023-3": {
      "breakfast": {
        "ingr": "Eggo waffles, syrup",
        "meal-name": "Waffles"
      },
      "dinner": {
        "ingr": "whole wheat spaghetti, red sauce, parmesean",
        "meal-name": "Spaghetti"
      },
      "lunch": {
        "ingr": "whole wheat bread, mozzarella, tomatoes, basil, balsamic",
        "meal-name": "Caprese Sandwich"
      }
    },
    "01-26-2023-4": {
      "breakfast": {
        "ingr": "Eggo waffles, syrup",
        "meal-name": "Waffles"
      },
      "dinner": {
        "ingr": "whole wheat spaghetti, red sauce, parmesean",
        "meal-name": "Spaghetti"
      },
      "lunch": {
        "ingr": "whole wheat bread, mozzarella, tomatoes, basil, balsamic",
        "meal-name": "Caprese Sandwich"
      }
    },
    "01-27-2023-5": {
      "breakfast": {
        "ingr": "Eggo waffles, syrup",
        "meal-name": "Waffles"
      },
      "dinner": {
        "ingr": "whole wheat spaghetti, red sauce, parmesean",
        "meal-name": "Spaghetti"
      },
      "lunch": {
        "ingr": "whole wheat bread, mozzarella, tomatoes, basil, balsamic",
        "meal-name": "Caprese Sandwich"
      }
    },
    "01-28-2023-6": {
      "breakfast": {
        "ingr": "Eggo waffles, syrup",
        "meal-name": "Waffles"
      },
      "dinner": {
        "ingr": "whole wheat spaghetti, red sauce, parmesean",
        "meal-name": "Spaghetti"
      },
      "lunch": {
        "ingr": "whole wheat bread, mozzarella, tomatoes, basil, balsamic",
        "meal-name": "Caprese Sandwich"
      }
    }
  };
  const [inputValue, setInputValue] = useState('');
  const [groceryTotal, setGroceryTotal] = useState(location?.state?.data.cost != null ? location?.state?.data.cost : 0);

  const handleSubmit = (event) => {
    event.preventDefault();
    setGroceryTotal(inputValue);

    let currentMealName = "";
    let currentIngr = [];
    if (location?.state?.data != null){
      currentMealName = location?.state?.data.meal_name;
      currentIngr = location?.state?.data.ingr;
    }
    var updates = {};
    let data = {
      "meal_name": currentMealName,
      "ingr": currentMealName,
      "cost": groceryTotal
    }
    updates["/data/" + week[i]] = data;
    console.log(data);
    update(ref(db), updates).catch((err) => {
      console.log(err)
    });
  }
  return (
    // <Box sx={{border:1}}>
    <Grid className="Overall-Box" direction="row" spacing={10} sx={{ flexGrow: 1, borderColor: red }}>
      <Grid container className="Text-Icon" xs={4}>
        <Grid item className="Text-Only" xs={10} spacing={2}>
          <h1 className="style">Meal Details</h1>
          <h2>Breakfast</h2>
          <p>{mealData[dates[props.selectedDate]].breakfast.ingr}</p>
          <h2>Lunch</h2>
          <p>{mealData[dates[props.selectedDate]].lunch.ingr}</p>
          <h2>Dinner</h2>
          <p>{mealData[dates[props.selectedDate]].dinner.ingr}</p>
          <TextField label="Money Spent" margin="normal" fullWidth onChange={(event) => setInputValue(event.target.value)} />
          <Button label="Submit" variant="contained" color="primary" onClick={(event) => handleSubmit(event)}>Submit</Button>
        </Grid>
        <Grid item className="Button-Outline" xs={2}>
          <ModeEditOutlineIcon variant="outlined" onClick={() => window.location.href = "/set-meal-plan"}></ModeEditOutlineIcon>
        </Grid>
      </Grid>
      <Grid container className="School" xs={8}></Grid>
    </Grid>
    // </Box>
  );
}

export default MealDetails;