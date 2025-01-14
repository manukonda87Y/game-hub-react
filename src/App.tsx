import { Grid, GridItem } from "@chakra-ui/react";
import "./App.css";
function App() {
  return (
    <>
      <Grid
        templateAreas={{ base: `"nav" "main"`, lg: `"nav nav" "aside main"` }}
      >
        <GridItem area="nav" bg="red">
          nav
        </GridItem>

        <GridItem hideBelow="lg" area="aside" bg="green">
          aside
        </GridItem>

        <GridItem area="main" bg="Yellow">
          main
        </GridItem>
      </Grid>
    </>
  );
}

export default App;
