const productMock = [
  {
    "id": "da2e399f-20d7-44ff-8bd2-8f80d7b880e7",
    "title": "Fausto 5.0",
    "year": 1993,
    "cover": "http://dummyimage.com/207x247.png/cc0000/ffffff",
    "description": "Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.\n\nDuis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.\n\nIn sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.",
    "duration": 2048,
    "contentRating": "NC-17",
    "source": "http://baidu.com/cursus/urna/ut/tellus.jsp",
    "tags": [
      "Sci-Fi",
      "Sci-Fi",
      "Documentary",
      "Drama|Horror"
    ]
  },
  {
    "id": "3a8111d4-9482-423e-b0eb-02c1a9493384",
    "title": "End of America, The",
    "year": 2009,
    "cover": "http://dummyimage.com/204x124.bmp/ff4444/ffffff",
    "description": "Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.",
    "duration": 2051,
    "contentRating": "PG",
    "source": "https://dell.com/id/nulla/ultrices/aliquet.aspx",
    "tags": [
      "Crime|Drama|Thriller",
      "Drama|Musical"
    ]
  },
  {
    "id": "f3b879de-47df-4834-ac5b-4f7db5aa45d2",
    "title": "Race to Witch Mountain",
    "year": 1984,
    "cover": "http://dummyimage.com/197x235.bmp/cc0000/ffffff",
    "description": "Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus.",
    "duration": 1999,
    "contentRating": "G",
    "source": "http://nih.gov/nulla/tellus.xml",
    "tags": [
      "Comedy|Drama",
      "Crime|Thriller"
    ]
  },
  {
    "id": "1ed1f5dd-0c2d-44b6-ba0c-6b28e41b3ae2",
    "title": "Fried Green Tomatoes",
    "year": 2011,
    "cover": "http://dummyimage.com/217x171.jpg/dddddd/000000",
    "description": "Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.",
    "duration": 1899,
    "contentRating": "PG",
    "source": "https://washington.edu/quam/pede/lobortis/ligula/sit/amet/eleifend.png",
    "tags": [
      "Drama|Western"
    ]
  },
  {
    "id": "2853d428-bc61-4e32-9f81-43cd6f019de8",
    "title": "Kevin Hart: Let Me Explain",
    "year": 2000,
    "cover": "http://dummyimage.com/196x196.bmp/5fa2dd/ffffff",
    "description": "Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.",
    "duration": 1949,
    "contentRating": "PG",
    "source": "http://buzzfeed.com/congue.xml",
    "tags": [
      "Crime|Thriller",
      "Comedy",
      "Horror|Mystery|Thriller",
      "Adventure",
      "Comedy|Horror"
    ]
  },
  {
    "id": "32b7b946-87c6-412d-8d5e-4e54e9f04363",
    "title": "Do Fish Do It? (Fickende Fische)",
    "year": 1999,
    "cover": "http://dummyimage.com/250x230.bmp/ff4444/ffffff",
    "description": "Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.",
    "duration": 1929,
    "contentRating": "PG-13",
    "source": "http://artisteer.com/morbi/porttitor/lorem/id.json",
    "tags": [
      "Comedy|Horror",
      "Action|Adventure",
      "Crime|Mystery|Romance|Thriller"
    ]
  },
  {
    "id": "5bee16b6-853c-4cf0-b0b5-ba62efc9b1e2",
    "title": "Children Shouldn't Play with Dead Things",
    "year": 2006,
    "cover": "http://dummyimage.com/219x111.jpg/cc0000/ffffff",
    "description": "Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.",
    "duration": 2033,
    "contentRating": "PG",
    "source": "https://sfgate.com/suspendisse.jpg",
    "tags": [
      "Action|Thriller"
    ]
  },
  {
    "id": "a8df3615-4dfb-403f-96c9-6976a1624976",
    "title": "Short Film About John Bolton, A",
    "year": 1995,
    "cover": "http://dummyimage.com/206x222.png/dddddd/000000",
    "description": "In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.\n\nNulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.\n\nCras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.",
    "duration": 1901,
    "contentRating": "NC-17",
    "source": "http://independent.co.uk/nec/nisi/vulputate.xml",
    "tags": [
      "Drama|Thriller",
      "Drama",
      "Action|Crime|Drama|Thriller",
      "Action|Adventure|Sci-Fi|Thriller"
    ]
  },
  {
    "id": "4aa25c11-865a-45d1-bc38-f7aa6188f78b",
    "title": "Trojan War",
    "year": 1999,
    "cover": "http://dummyimage.com/184x134.jpg/ff4444/ffffff",
    "description": "In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.\n\nMaecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.",
    "duration": 2027,
    "contentRating": "G",
    "source": "http://scribd.com/turpis/enim/blandit.js",
    "tags": [
      "Drama",
      "Comedy|Drama|Romance",
      "Drama|Mystery|Thriller"
    ]
  },
  {
    "id": "40b5706d-4693-487b-b533-46da43221108",
    "title": "The Incident",
    "year": 1996,
    "cover": "http://dummyimage.com/134x191.jpg/5fa2dd/ffffff",
    "description": "Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.\n\nDuis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.\n\nIn sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.",
    "duration": 1934,
    "contentRating": "PG",
    "source": "https://chron.com/quis/justo/maecenas/rhoncus/aliquam.aspx",
    "tags": [
      "Drama"
    ]
  }
]