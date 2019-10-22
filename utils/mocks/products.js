const productsMock = [
	{
		id: 1,
		image: 'http://dummyimage.com/138x144.png/ff4444/ffffff',
		title: 'Light the Fuse... Sartana Is Coming',
		price: 70,
		description:
			'Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.\n\nIn congue. Etiam justo. Etiam pretium iaculis justo.',
	},
	{
		id: 2,
		image: 'http://dummyimage.com/200x134.jpg/5fa2dd/ffffff',
		title: 'Great Muppet Caper, The',
		price: 79,
		description:
			'Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.',
	},
	{
		id: 3,
		image: 'http://dummyimage.com/166x151.bmp/dddddd/000000',
		title: 'Out of the Furnace (Dust to Dust) (Low Dweller, The)',
		price: 51,
		description:
			'Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.\n\nCurabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.\n\nInteger tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.',
	},
	{
		id: 4,
		image: 'http://dummyimage.com/132x149.png/dddddd/000000',
		title: 'Romantic Comedy',
		price: 50,
		description:
			'Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius.\n\nInteger ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.',
	},
	{
		id: 5,
		image: 'http://dummyimage.com/168x208.bmp/cc0000/ffffff',
		title:
			'Raiders of the Lost Ark (Indiana Jones and the Raiders of the Lost Ark)',
		price: 57,
		description:
			'Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
	},
	{
		id: 6,
		image: 'http://dummyimage.com/224x120.png/ff4444/ffffff',
		title: 'On Borrowed Time',
		price: 78,
		description:
			'Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.\n\nFusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.',
	},
	{
		id: 7,
		image: 'http://dummyimage.com/149x171.png/ff4444/ffffff',
		title: 'Mean Girls 2',
		price: 31,
		description:
			'Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.\n\nFusce consequat. Nulla nisl. Nunc nisl.',
	},
	{
		id: 8,
		image: 'http://dummyimage.com/215x105.png/ff4444/ffffff',
		title: 'Yi Yi',
		price: 71,
		description:
			'Phasellus in felis. Donec semper sapien a libero. Nam dui.\n\nProin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius.\n\nInteger ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.',
	},
	{
		id: 9,
		image: 'http://dummyimage.com/120x178.jpg/ff4444/ffffff',
		title: 'FernGully 2: The Magical Rescue',
		price: 22,
		description:
			'Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.\n\nPraesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.\n\nCras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
	},
	{
		id: 10,
		image: 'http://dummyimage.com/157x197.bmp/5fa2dd/ffffff',
		title: 'Breakdown',
		price: 41,
		description:
			'Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.',
	},
	{
		id: 11,
		image: 'http://dummyimage.com/112x206.jpg/cc0000/ffffff',
		title: 'Out for Justice',
		price: 6,
		description:
			'Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.',
	},
	{
		id: 12,
		image: 'http://dummyimage.com/201x239.bmp/cc0000/ffffff',
		title: 'Kandahar (Safar e Ghandehar)',
		price: 48,
		description: 'In congue. Etiam justo. Etiam pretium iaculis justo.',
	},
	{
		id: 13,
		image: 'http://dummyimage.com/205x200.jpg/ff4444/ffffff',
		title: 'American Pastime',
		price: 12,
		description:
			'Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis.\n\nDuis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus.',
	},
	{
		id: 14,
		image: 'http://dummyimage.com/215x202.jpg/5fa2dd/ffffff',
		title: 'Dark Island',
		price: 62,
		description:
			'Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.\n\nPraesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.\n\nMorbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.',
	},
	{
		id: 15,
		image: 'http://dummyimage.com/169x167.png/ff4444/ffffff',
		title: 'Last Seduction, The',
		price: 23,
		description:
			'Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.\n\nIn hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.\n\nAliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.',
	},
	{
		id: 16,
		image: 'http://dummyimage.com/128x230.png/ff4444/ffffff',
		title: 'Dampfnudelblues',
		price: 30,
		description:
			'Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.',
	},
	{
		id: 17,
		image: 'http://dummyimage.com/190x137.bmp/cc0000/ffffff',
		title: 'Johnny Dangerously',
		price: 89,
		description:
			'Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.\n\nCurabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.\n\nPhasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.',
	},
	{
		id: 18,
		image: 'http://dummyimage.com/182x193.bmp/ff4444/ffffff',
		title: 'Last of the Dogmen',
		price: 30,
		description:
			'Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus.\n\nCurabitur at ipsum ac tellus semper interdum. Mauris ullamcorper purus sit amet nulla. Quisque arcu libero, rutrum ac, lobortis vel, dapibus at, diam.',
	},
	{
		id: 19,
		image: 'http://dummyimage.com/203x220.png/dddddd/000000',
		title: 'That Night in Varennes (Nuit de Varennes, La)',
		price: 79,
		description:
			'Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.\n\nIn sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.\n\nSuspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.',
	},
	{
		id: 20,
		image: 'http://dummyimage.com/109x125.bmp/dddddd/000000',
		title: 'Postman Always Rings Twice, The',
		price: 82,
		description:
			'Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.\n\nQuisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.\n\nPhasellus in felis. Donec semper sapien a libero. Nam dui.',
	},
	{
		id: 21,
		image: 'http://dummyimage.com/100x159.png/dddddd/000000',
		title: 'Dr. Otto and the Riddle of the Gloom Beam',
		price: 96,
		description:
			'Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.\n\nIn sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.\n\nSuspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.',
	},
	{
		id: 22,
		image: 'http://dummyimage.com/241x221.jpg/ff4444/ffffff',
		title: 'Mikey and Nicky',
		price: 66,
		description:
			'In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.\n\nSuspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.',
	},
	{
		id: 23,
		image: 'http://dummyimage.com/214x217.png/dddddd/000000',
		title: 'Casablanca',
		price: 91,
		description:
			'Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.\n\nDuis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.\n\nIn sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.',
	},
	{
		id: 24,
		image: 'http://dummyimage.com/209x165.jpg/dddddd/000000',
		title: "Life of Another, The (La vie d'une autre)",
		price: 43,
		description:
			'Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris.\n\nMorbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.\n\nFusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.',
	},
	{
		id: 25,
		image: 'http://dummyimage.com/238x245.png/dddddd/000000',
		title: 'Nine Dead Gay Guys',
		price: 6,
		description:
			'Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.',
	},
	{
		id: 26,
		image: 'http://dummyimage.com/200x157.bmp/5fa2dd/ffffff',
		title: 'In Their Skin',
		price: 21,
		description:
			'Sed ante. Vivamus tortor. Duis mattis egestas metus.\n\nAenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.\n\nQuisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.',
	},
	{
		id: 27,
		image: 'http://dummyimage.com/246x170.bmp/dddddd/000000',
		title: 'Man from Elysian Fields, The',
		price: 85,
		description:
			'Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.',
	},
	{
		id: 28,
		image: 'http://dummyimage.com/122x217.bmp/dddddd/000000',
		title: 'Crazy in Alabama',
		price: 63,
		description:
			'Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.',
	},
	{
		id: 29,
		image: 'http://dummyimage.com/213x233.jpg/ff4444/ffffff',
		title: 'Last Days of Pompeii, The',
		price: 70,
		description:
			'Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.\n\nIn congue. Etiam justo. Etiam pretium iaculis justo.\n\nIn hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.',
	},
	{
		id: 30,
		image: 'http://dummyimage.com/139x174.jpg/5fa2dd/ffffff',
		title: 'Mr. 3000',
		price: 99,
		description:
			'Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.\n\nMorbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.',
	},
];

module.exports = { productsMock };
