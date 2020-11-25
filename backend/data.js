import bcrypt from 'bcryptjs';

const data = {
    users: [
        {
            name: 'Claudimar',
            email: 'admin@node.com',
            password: bcrypt.hashSync('1234', 8),
            isAdmin: true,
        },

        {
            name: 'José',
            email: 'user@node.com',
            password: bcrypt.hashSync('1234', 8),
            isAdmin: false,
        },
    ],
    products: [
        {
            _id: '1',
            name: 'Nike Slim Shirts',
            category: 'Shirts',
            image: '/images/p1.jpg',
            price: 120,
            countInStock: 10,
            brand: 'Nike',
            rating: 4.5,
            numReviews: 12,
            description: 'High quality product'
        },
        {
            _id: '2',
            name: 'Nike Slim',
            category: 'Shirts',
            image: '/images/p2.jpg',
            price: 120,
            countInStock: 0,
            brand: 'Nike',
            rating: 4.5,
            numReviews: 11,
            description: 'High quality product'
        },
        {
            _id: '3',
            name: 'Nike',
            category: 'Shirts',
            image: '/images/p3.jpg',
            price: 120,
            countInStock: 10,
            brand: 'Nike',
            rating: 4.5,
            numReviews: 112,
            description: 'High quality product'
        },
        {
            _id: '4',
            name: 'Nike Slim Shirts',
            category: 'Shirts',
            image: '/images/p4.jpg',
            price: 50,
            countInStock: 10,
            brand: 'Nike',
            rating: 4.5,
            numReviews: 34,
            description: 'High quality product'
        },
        {
            _id: '5',
            name: 'Nike Slim Shirts',
            category: 'Shirts',
            image: '/images/p5.jpg',
            price: 80,
            countInStock: 0,
            brand: 'Nike',
            rating: 5.0,
            numReviews: 43,
            description: 'High quality product'
        },
        {
            _id: '6',
            name: 'Nike Slim Shirts',
            category: 'Pants',
            image: '/images/p6.jpg',
            price: 65,
            countInStock: 1,
            brand: 'Nike',
            rating: 4.0,
            numReviews: 54,
            description: 'High quality product'
        },
    ],
};

export default data;