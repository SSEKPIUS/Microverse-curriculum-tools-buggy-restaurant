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

function displayMenu(menu) {
  console.log("Appetizers:");
  for (let i = 0; i < menu.appetizers.length; i++) {
    console.log(`${i+1}. ${menu.appetizers[i]}`);
  }
  console.log("Entrees:");
  for (let i = 0; i < menu.entrees.length; i++) {
    console.log(`${i+1}. ${menu.entrees[i]}`);
  }
  console.log("Desserts:");
  for (let i = 0; i < menu.desserts.length; i++) {
    console.log(`${i+1}. ${menu.desserts[i]}`);
  }
}

displayMenu(menu);
