// foreach

let clickUpgrades = [
  {
    name: 'pickaxe',
    price: 100,
    quantity: 0,
    multiplier: 5
  },
  {
    name: 'stick',
    price: 1,
    quantity: 0,
    multiplier: 1
  },
];

let automaticUpgrades = [
  {
    name: 'bruh',
    price: 300,
    quantity: 0,
    multiplier: 5
  },
  {
    name: 'sauce',
    price: 500,
    quantity: 0,
    multiplier: 10
  }

];

let chickClick = 100;
let power = 1
let autoUpgradePower = 0


function getChicks() {
  chickClick += power
  console.log(chickClick)
  // chickClick += buyClickUpgrade('pickaxe'  )
  update()
}

function getUpgradeChiks() {
  chickClick += autoUpgradePower
}



function update(purchasedUpgrade) {
  console.log("Pass", purchasedUpgrade)
  // @ts-ignore
  let chickElm = document.getElementById('chickenNug').innerText = chickClick
  // @ts-ignore

  if (purchasedUpgrade) {
    // @ts-ignore
    document.getElementById("power").innerText = power
    // @ts-ignore
    document.getElementById(`${purchasedUpgrade.name}-strength`).innerText = purchasedUpgrade.multiplier * purchasedUpgrade.quantity
    // document.getElementById(`${purchasedUpgrade?.name}-strength`).innerText = purchasedUpgrade.multiplier * purchasedUpgrade.quantity
    // @ts-ignore
    document.getElementById(`${purchasedUpgrade?.name}-price`).innerText = purchasedUpgrade.price
    // document.getElementById(`${purchasedUpgrade?.name}-price`).innerText = purchasedUpgrade.price
    // @ts-ignore
    document.getElementById(`${purchasedUpgrade.name}-quantity`).innerText = purchasedUpgrade.quantity
    // document.getElementById(`${purchasedUpgrade.name}-quantity`).innerText = purchasedUpgrade.quantity
  }
  // @ts-ignore
  document.getElementById("autoNug").innerText = autoUpgradePower
}

// for upgrades have 2 functions. 1) combine chickClick and multiplier 2) subtract upgrade price from chickClick 

function buyClickUpgrade(clickUpgradeName) {
  // let clickUpgradeAdd =
  let purchasedUpgrade = clickUpgrades.find(c => c.name == clickUpgradeName)
  // first do an if statement to check if we have enough chickClick 
  // @ts-ignore
  if (purchasedUpgrade.price < chickClick) {
    console.log("Test");
    // @ts-ignore
    chickClick -= purchasedUpgrade.price

    // purchasedUpgrade.multiplier++
    purchasedUpgrade.quantity++
    if (purchasedUpgrade.name == "pickaxe") {
      purchasedUpgrade.price += 10
    } else {
      purchasedUpgrade.price *= 10
    }
    // @ts-ignore
    power += (purchasedUpgrade.multiplier * purchasedUpgrade.quantity)
  }
  // 
  update(purchasedUpgrade);
}



// function buyAutomaticUpgrades() {
//   automaticUpgrades.find(a => {
//     if (a.price < chickClick) {
//       chickClick -= a.price
//       return
//     } if (chickClick += a.multiplier) {
//       a.multiplier = chickClick * power
//     }
//     a.quantity++
//     a.price *= 10
//   })
//   console.log("auto", automaticUpgrades);
//   // @ts-ignore
//   document.getElementById(buyAutomaticUpgrades).innerText = a.multiplier
// }




// function buyAutomaticUpgrades() {
//   automaticUpgrades.find(a => {
//     if (a.price < chickClick) {
//       chickClick -= a.price
//     } a.price += 10
//     a.quantity++
//     chickClick += a.multiplier


//   })
//   setInterval(autoUpgrade, 3000)
//   autoUpgrade()
//   update()
// }
// // // setInterval(buyAutomaticUpgrades, 3000)

// function autoUpgrade() {
//   automaticUpgrades.forEach(a => {
//     chickClick += a.multiplier

//     // @ts-ignore
//     autoUpgradePower += (a.multiplier * a.quantity)
//     // @ts-ignore
//     document.getElementById(`${a.multiplier}-strength`).innerText = a.multiplier
//     // @ts-ignore
//     document.getElementById(`${a.quantity}-quantity`).innerText = a.quantity
//     // @ts-ignore
//     document.getElementById("autoPower") = autoUpgradePower
//     autoUpgradePower += (a.multiplier * a.quantity)
//     // @ts-ignore
//     document.getElementById("autoUpgrade") = autoUpgradePower
//     document.getElementById("power").innerText = power
//   })
//   update()

//   // buyAutomaticUpgrades()
// }



function buyAutomaticUpgrades() {
  automaticUpgrades.find(a => {
    if (a.price < chickClick)
      chickClick -= a.price
    automaticUpgrades.find(a => {
      chickClick += a.multiplier * a.quantity
      a.quantity++
      if (a.name == "sauce") {
        a.price += 1
      } else {
        a.price += 1
      }
    })
    console.log("price", buyAutomaticUpgrades);

    autoUpgradePower += (a.multiplier * a.quantity)
    // autoUpgrade()
    document.getElementById(`${a.name}-quantity`).innerText = a.quantity
    document.getElementById(`${a.name}-quantity`).innerText = a.quantity
    document.getElementById(`${a.name}-price`).innerText = a.price
    document.getElementById(`${a.name}-price`).innerText = a.price
    document.getElementById(`${a.name}-strength`).innerText = a.multiplier * a.quantity
    document.getElementById(`${a.name}-strength`).innerText = a.multiplier * a.quantity
    setInterval(buyAutomaticUpgrades, 3000)
    update()
  })
}



function autoUpgrade() {
  // automaticUpgrades.find(a => {
  //   chickClick += a.multiplier + a.quantity
  //   a.quantity++
  //   if (a.name == "sauce") {
  //     a.price += 1
  //   } else {
  //     a.price += 1
  //   }
  // })
  update()
}







