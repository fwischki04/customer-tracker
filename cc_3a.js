let customers = [
  {
    name: "Jared Leto",
    email: "jared.ledo@email.com",
    purchases: ["Statute", "Speaker"] },
  {
    name: "Aubrey Grahm",
    email: "aubreygrahm@email.com",
    purchases: ["Playing cards"]},
  {
    name: "Chris Brown",
    email: "chris.brown@email.com",
    purchases: ["Jacket", "Watch"]}];

customers.push({
    name: "John Cena",
    email: "youcantseeme@gmail.com",
    purchases: ["Wrist band"],})

customers.shift();

customers[0].email = "drizzydrake@gmail.come";

customers[1].purchases.push("Iphone");

customers.forEach((customer) => {
  console.log(`Name: ${customer.name}, Email: ${customer.email}, Total Purchases: ${customer.purchases.length}`);});
