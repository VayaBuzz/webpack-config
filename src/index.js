import './styles/index.scss';

const elvenShildRecipe = {
  leatherStrips: 2,
  ironIngot: 1,
  refinedMoonstone: 4,
};

const elvenGauntletsRecipe = {
  ...elvenShildRecipe,
  leather: 1,
  refinedMoonstone: 5,
};

console.log(elvenShildRecipe);

console.log(elvenGauntletsRecipe);
