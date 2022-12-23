test('displayMenu should display the correct number of appetizers', () => {
  const menu = {
    appetizers: [
      "Fried Calamari",
      "Bruschetta",
      "Caprese Salad"
    ],
    entrees: [
      "Lasagna",
      "Eggplant Parmesan",
      "Chicken Marsala"
    ],
    desserts: [
      "Tiramisu",
      "Cheesecake",
      "Cannoli"
    ]
  };
  const output = jest.fn();
  displayMenu(menu, output);
  expect(output.mock.calls[0][0]).toBe("Appetizers:");
  expect(output.mock.calls[1][0]).toMatch(/^\d+\. /);
  expect(output.mock.calls[2][0]).toMatch(/^\d+\. /);
  expect(output.mock.calls[3][0]).toMatch(/^\d+\. /);
});

test('displayMenu should display the correct number of entrees', () => {
  const menu = {
    appetizers: [
      "Fried Calamari",
      "Bruschetta",
      "Caprese Salad"
    ],
    entrees: [
      "Lasagna",
      "Eggplant Parmesan",
      "Chicken Marsala"
    ],
    desserts: [
      "Tiramisu",
      "Cheesecake",
      "Cannoli"
    ]
  };
  const output = jest.fn();
  displayMenu(menu, output);
  expect(output.mock.calls[4][0]).toBe("Entrees:");
  expect(output.mock.calls[5][0]).toMatch(/^\d+\. /);
  expect(output.mock.calls[6][0]).toMatch(/^\d+\. /);
  expect(output.mock.calls[7][0]).toMatch(/^\d+\. /);
});

test('displayMenu should display the correct number of desserts', () => {
  const menu = {
    appetizers: [
      "Fried Calamari",
      "Bruschetta",
      "Caprese Salad"
    ],
    entrees: [
      "Lasagna",
      "Eggplant Parmesan",
      "Chicken Marsala"
    ],
    desserts: [
      "Tiramisu",
      "Cheesecake",
      "Cannoli"
    ]
  };
  const output = jest.fn();
  displayMenu(menu, output);
  expect(output.mock.calls[8][0]).toBe("Desserts:");
  expect(output.mock.calls[9][0]).toMatch(/^\d+\. /);
  expect(output.mock.calls[10][0]).toMatch(/^\d+\. /);
  expect(output.mock.calls[11][0]).toMatch(/^\d+\. /);
});
