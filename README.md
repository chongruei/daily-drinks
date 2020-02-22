## Daily-drinks

- order drinks application with response web stie.

#### Requirements

- Node.js
- YARN

```javascript

/* First, Install the needed packages */
yarn

/* Then start both Node and React */
yarn dev

```

## Component Design

```javascript

ProductionList
  ├── ProductList.js
  ├── Product.js

ShoppingCart
  ├── ShoppingCart.js

```

## Data Flow Services (Global State Management)

```javascript

Global State

cart
  ├── total
  ├── products

cart
  ├── actions.js              # action creators which includes
  |                           # addProduct
  |                           # removeProduct
  |                           # changeProductQuantity
  ├── actionTypes.js          # plan variety of action type
  ├── reducer                 # update global state after obtain the new action payload

```
