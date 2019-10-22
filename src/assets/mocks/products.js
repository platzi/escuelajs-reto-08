const productsMock = [
  {
    "id":1,
    "name ":"Bread - White, Unsliced",
    "cover":"http://dummyimage.com/183x174.jpg/5fa2dd/ffffff",
    "description":"Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris.\n\nMorbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.",
    "price":"$10.86",
    "tags":"prenda"
  },
  {
    "id":2,
    "name ":"Evaporated Milk - Skim",
    "cover":"http://dummyimage.com/183x109.bmp/5fa2dd/ffffff",
    "description":"Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius.\n\nInteger ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.",
    "price":"$28.89",
    "tags":"mugs"
  },
  {
    "id":3,
    "name ":"Wine - Red, Gamay Noir",
    "cover":"http://dummyimage.com/157x245.bmp/ff4444/ffffff",
    "description":"Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.\n\nProin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.",
    "price":"$36.07",
    "tags":"prenda"
  },
  {
    "id":4,
    "name ":"Baking Soda",
    "cover":"http://dummyimage.com/250x151.jpg/dddddd/000000",
    "description":"Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.",
    "price":"$61.85",
    "tags":"pin"
  },
  {
    "id":5,
    "name ":"Tuna - Canned, Flaked, Light",
    "cover":"http://dummyimage.com/128x157.jpg/5fa2dd/ffffff","description":"Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.",
    "price":"$20.64",
    "tags":"mugs"
  },
  {
    "id":6,
    "name ":"Broom And Brush Rack Black",
    "cover":"http://dummyimage.com/226x236.png/5fa2dd/ffffff",
    "description":"Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.\n\nIn sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.",
    "price":"$57.76",
    "tags":"prenda"
  },
  {
    "id":7,
    "name ":"Butter - Unsalted",
    "cover":"http://dummyimage.com/232x190.bmp/dddddd/000000",
    "description":"In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.\n\nAliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.",
    "price":"$10.88",
    "tags":"pin"
  },
  {
    "id":8,
    "name ":"Wine - Cotes Du Rhone Parallele",
    "cover":"http://dummyimage.com/166x112.bmp/cc0000/ffffff",
    "description":"Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.\n\nPraesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.",
    "price":"$2.06",
    "tags":"prenda"
  },
  {
    "id":9,
    "name ":"Mushroom - Trumpet, Dry",
    "cover":"http://dummyimage.com/130x196.bmp/ff4444/ffffff",
    "description":"Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.\n\nCras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.\n\nQuisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.",
    "price":"$18.21",
    "tags":"prenda"
  },
  {
    "id":10,
    "name ":"Spice - Peppercorn Melange",
    "cover":"http://dummyimage.com/249x114.jpg/5fa2dd/ffffff",
    "description":"Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.\n\nDuis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.",
    "price":"$47.65",
    "tags":"pin"
  }
];

module.exports = productsMock;