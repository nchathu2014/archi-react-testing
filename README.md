# Testing Library for ReactJS

## RENDERING A COMPONENT

React Testing Library, in contrast to Jest, is one of the testing libraries to test React components. Another popular one in this category is Enzyme as mentioned earlier. We will see in the next sections how to use React Testing Library for testing React components.

```
import { render } from '@testing-library/react';
render(<App/>)
```

## SEARCH VARIENTS

There are 3 search varients in react test library.
For any element that isn't there yet but will be there eventually, use findBy over getBy or queryBy. If you assert for a missing element, use queryBy. Otherwise default to getBy.
1- getBy*
2- queryBy*
3- findBy\*

Search Types: We can selecting elements by using various search types
1-Using Text => getByText()
2-Using Role => getByRole()
3-Using test-id => data-testid => getByTestId()

## FIRE EVENT

We can have

- import {fireEvent} from @testing-library/react
- import userEvent from @testing-library/user-event

fireEvent.change()
userEvent.type()
userEvent.keyDown()

userEvent is an extenstion of fireEvent. userEvent have a simplified API and more methods to interact.

## Resources:

- https://www.robinwieruch.de/react-testing-library/
