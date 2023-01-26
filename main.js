const slideshow = document.querySelector(".slideshow");
// const fs = require("fs");
// fs.readdir("./Best of the Best/", function (err, files) {
//   //handling error
//   if (err) {
//     return console.log("Unable to scan directory");
//   }
//   files.forEach(function (file) {
//     console.log(file);
//   });
// });

const imageFileNamesArr = [
  "01054c6905f0eadde477c3d0984ecc165c5b4160d1.jpg",
  "01058c96860b43a8008487192eedb643519c281ae2.jpg",
  "01085f4c4e082ec55b8cb41b767df19f75fc3efcd5.jpg",
  "010df8699db9963807ae8940cb6408ad2321532a05.jpg",
  "0113403394376b02ebb09431dbbf620edb3ffed30d.jpg",
  "011bd3e94104b44a100a1d1710c81800074219f2e8.jpg",
  "011f4a80da1f0a38b6bc35f5bf4f89576df2cf071c.jpg",
  "012262f6460b89ae9ae34152698953effd36584377.jpg",
  "0126626f076bfc222aee33c3cb98190ffccad2a47e.jpg",
  "012d656a73ac5d9914c73067c846094197d88f71c7.jpg",
  "012e9d653bdaeec10de33dad585747b117d6ecfba0.jpg",
  "012f7aba37fedb4dc6b4ea1a1cf1db1641062d5512.jpg",
  "01311a153dcc9e50ece6fae65b95f3510173c2722b.jpg",
  "0133a8e0d04e7a5c848966960d78f63f6b51a7958b.jpg",
  "013548118f23eed48d98266ad4e06d0c29f810a243.jpg",
  "0138dcd2f2218d202bee8d36e77ef71acde4476d72.jpg",
  "0139c41b0c5577a6faaa95eed3f3f6e13f5d509dfd.jpg",
  "013a93252da2fd504867ebe6e85737515cfc3f99e2.jpg",
  "013afbc5ad41cb8a206a8cef1a51100c2caaab03d8.jpg",
  "013b788e761fc7938f467a9fbc1b875855ccf9ce58.jpg",
  "0143ddd04bf0a0a17aa068b058729fa5d2703c9625.jpg",
  "01509fa693f80eb3e7b722c307679a33240873b3e2.jpg",
  "01540ca8d44a288cb28c44d701bebbe5a4bf1a510c.jpg",
  "0154c968d56873e96623c57a0b72a1e2e76dc97317.jpg",
  "0155bdfc6c0d4975354a089e5cec9936d7f8633b81.jpg",
  "015f84a11ae8e46e03affd3eafbbf603b8bdab5e29.jpg",
  "01600481b0f601069fca45c1403a99854b29b926ea.jpg",
  "01782147da1db94862b8ea9d3353b97ee84b204929.jpg",
  "017e6203f1555e45f57b9dc0d6e997f9d57683d0f0.jpg",
  "0181d284d50d7bf46f676b8cee0dc68f4f1f05cadd.jpg",
  "018c151eec0f07898fcdd5631105d042e2446b6158.jpg",
  "018de606da92d9fd6d9e5a674952ca7711be740cec.jpg",
  "018eea127e2d723ca900b3c55519e60b8ac8e7eca5.jpg",
  "01926c8aa1bd694ff064dd458c132169c69675a797.jpg",
  "01968d190a1ad9a45c36efa2454de1d26607f9642e.jpg",
  "0198734b8a18f943197cd95d2c5c9e66e2ac995792.jpg",
  "01a0e4f7ad5f805ea30118693df6f0e4d16c00da91.jpg",
  "01a276365123b368770185aeeaf62729abd63ea137.jpg",
  "01a307e078189010d60319c6786c9a86384b0fc50f.jpg",
  "01a61a8ec6b8fd7e0fd6177214969f5c39733baba7.jpg",
  "01a6615a4b2d22356e1ac2120875bfeb163e0ef248.jpg",
  "01a86f51e5bce6779aa35f1b5da0de2504dcace034.jpg",
  "01b45457d65ccb38ff314310c9c25891da8d37e0e4.jpg",
  "01b5317a3fd2818a93a5e89e697998476f0fb8335c.jpg",
  "01b5d8cb267a61030cd3da0fa315c5c66838813414.jpg",
  "01b85566cea384f1d28466c93c5622369702e81cea.jpg",
  "01ba30df2f2f6e9eeaa691036c664ccbf77dacb8ef.jpg",
  "01bded6c9f9a1a3262d8e0542caec60468d0f9fbd0.jpg",
  "01bf555b0416b846f040b6ae6464e3bde9e1813f07.jpg",
  "01c3c3170707edd8eae513be50d13d3dce762d89e7.jpg",
  "01c689079be0f17c38211e6b7b71078c6c659be936.jpg",
  "01d4dc845f22cbf395e46682b1cbe71b4714d90755.jpg",
  "01d8e9a1f8c2c3b6824bdc11537064e13bebb006d4.jpg",
  "01da4e1ba7bb4c8eda95fa4ad1b7d944214cb11757.jpg",
  "01dc5dfc64da2b09724897d12336293bbdf57f25f8.jpg",
  "01dd5ddca96ecd410ce6e26aee4544283c2266e129.jpg",
  "01dded9c55fcc0c0b43ac063fc2ca7dc20d2efd93b.jpg",
  "01de055c26c50b8e6460cd908560198fd7b035197b.jpg",
  "01e6c0eb2ca76dee1486aa8e057822307e733da15a.jpg",
  "01f1baa5c8f340bcbfa92408113c02543556325c9a.jpg",
  "01f48cfa8c93009167084ef010ace60b3069af5e86.jpg",
  "01f71550357d7eef8dee8caf77279d071739796b54.jpg",
  "01f911c7d79e1c9cb1d0d49fc4ea6c6b05ea8d35f5.jpg",
  "01fbda9cabb5c43e9830c1deac65fc7eee6b75f46f.jpg",
  "01fc4b118a0916caf8c48e36a2435359fec7213133.jpg",
  "01fcad91d5ed2f1cdd4639124eb6cc161aa092df6c.jpg",
];

slideshow.addEventListener("click", function () {
  slideshow.src = `./Best of the Best/Landscape/${
    imageFileNamesArr[Math.round(Math.random() * imageFileNamesArr.length)]
  }`;
});
