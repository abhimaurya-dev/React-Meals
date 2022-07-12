import classes from "./AvailableMeals.module.css";
import MealItem from "./MealItem/MealItem";
import Card from "../UI/Card";
const DUMMY_MEALS = [
  {
    id: "m1",
    name: "Sushi ",
    description: "Finest fish and vegies",
    price: 22.99,
  },
  {
    id: "m2",
    name: "Schnitzel ",
    description: "A germal spec.",
    price: 16.5,
  },
  {
    id: "m3",
    name: "Barbeque ",
    description: "American, Raw, Meat",
    price: 30.99,
  },
  {
    id: "m4",
    name: "Green Bowl ",
    description: "Healthy and green",
    price: 10.99,
  },
];

const AvailableMeals = () => {
  const mealsList = DUMMY_MEALS.map((meal) => (
    <MealItem
      key={meal.id}
      id={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
    />
  ));

  return (
    <section className={classes.meals}>
      <Card>
        <ul>{mealsList}</ul>
      </Card>
    </section>
  );
};

export default AvailableMeals;
