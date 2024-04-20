DROP DATABASE IF EXISTS sql_techprism;
CREATE DATABASE IF NOT EXISTS sql_techprism;

USE sql_techprism;

-- --------------------  USERS  --------------------

DROP TABLE IF EXISTS users;
CREATE TABLE users (
	id INT NOT NULL AUTO_INCREMENT,
    username VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL,
    isAdmin BOOLEAN DEFAULT FALSE,
    createdAt DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    PRIMARY KEY (id)
);
INSERT INTO users VALUES
	(1, 'harikotha', 'hari@gmail.com', 'hari1234', TRUE, DEFAULT),
	(DEFAULT, 'barryallen', 'barry@gmail.com', '123456', FALSE, DEFAULT),
    (DEFAULT, 'clarkkent', 'clark@gmail.com', '123456', FALSE, DEFAULT),
	(DEFAULT, 'brucewayne', 'bruce@gmail.com', '123456', FALSE, DEFAULT);

-- --------------------  PRODUCTS  --------------------

DROP TABLE IF EXISTS products;
CREATE TABLE products (
	id INT NOT NULL AUTO_INCREMENT,
    name VARCHAR(255) NOT NULL UNIQUE,
    imageUrl VARCHAR(255)  DEFAULT NULL,
    brand VARCHAR(255) NOT NULL,
    category VARCHAR(255) NOT NULL,
    description VARCHAR(255) NOT NULL,
    price DECIMAL(6,2) NOT NULL,
    rating DECIMAL(2, 1) NOT NULL DEFAULT 0,
    stock SMALLINT UNSIGNED NOT NULL,
    createdAt DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    PRIMARY KEY (id)
);
INSERT INTO products (name, brand, category, description, price, rating, stock) VALUES
('Samsung Galaxy S20', 'Samsung', 'Smartphone', "Experience the ultimate power and performance with the Samsung Galaxy S20. Packed with cutting-edge features and stunning design, it's the perfect companion for your digital lifestyle.", 899.99, 4, 100),
('iPhone 13 Pro', 'Apple', 'Smartphone', "Elevate your mobile experience with the iPhone 13 Pro. With its advanced camera system, powerful performance, and sleek design, it sets a new standard for smartphones.", 1099.99, 3.5, 150),
('Sony WH-1000XM4', 'Sony', 'Headphones', "Immerse yourself in pure sound with the Sony WH-1000XM4 headphones. Featuring industry-leading noise cancellation and premium sound quality, they're perfect for music lovers and audiophiles alike.", 349.99, 4, 75),
('Dell XPS 13', 'Dell', 'Laptop', "Experience unmatched performance and portability with the Dell XPS 13 laptop. With its stunning InfinityEdge display and powerful performance, it's the perfect choice for professionals on the go.", 1299.99, 4.7, 50),
('Logitech MX Keys', 'Logitech', 'Keyboard', "Enhance your productivity with the Logitech MX Keys keyboard. With its comfortable typing experience and customizable keys, it's designed to help you work smarter and faster.", 99.99, 1.5, 200),
('Samsung Galaxy Tab S7', 'Samsung', 'Tablet', "Unleash your creativity and productivity with the Samsung Galaxy Tab S7. Featuring a stunning display and powerful performance, it's the ultimate tablet for work and play.", 649.99, 2.9, 80),
('LG UltraGear 27GN950-B', 'LG', 'Monitor', "Experience smooth gaming and stunning visuals with the LG UltraGear 27GN950-B monitor. With its high refresh rate and HDR support, it delivers an immersive gaming experience like no other.", 799.99, 4.2, 30),
('Bose SoundLink Revolve+', 'Bose', 'Speakers', "Immerse yourself in room-filling sound with the Bose SoundLink Revolve+ speakers. With 360-degree sound and long-lasting battery life, they're perfect for parties and gatherings.", 299.99, 3, 100),
('Google Nest Audio', 'Google', 'Smart Speaker', "Bring your home to life with the Google Nest Audio smart speaker. With its powerful sound and built-in Google Assistant, it's your personal assistant for music, news, and more.", 99.99, 4.8, 150),
('Apple Watch Series 7', 'Apple', 'Smartwatch', "Stay connected and motivated with the Apple Watch Series 7. With its advanced health tracking features and sleek design, it's the ultimate fitness companion.", 399.99, 2, 100),
('Xbox Series X', 'Microsoft', 'Gaming Console', "Experience the future of gaming with the Xbox Series X. With its powerful performance and immersive gaming experiences, it's the ultimate gaming console for gamers.", 499.99, 4.3, 80),
('Asus RT-AX86U', 'Asus', 'Router', "Supercharge your home network with the Asus RT-AX86U router. With its Wi-Fi 6 technology and advanced security features, it delivers fast and reliable connectivity for all your devices.", 199.99, 3.7, 120),
('HP OfficeJet Pro 9025', 'HP', 'Printer', "Maximize your productivity with the HP OfficeJet Pro 9025 printer. With its fast printing speeds and versatile features, it's the perfect choice for home offices and small businesses.", 299.99, 4.6, 60),
('Canon EOS R5', 'Canon', 'Camera', "Capture stunning images and videos with the Canon EOS R5 camera. With its advanced autofocus system and 8K video recording capabilities, it's the perfect tool for professional photographers and videographers.", 3899.99, 2.3, 25),
('Razer DeathAdder V2', 'Razer', 'Gaming Mouse', "Dominate your opponents with the Razer DeathAdder V2 gaming mouse. With its ergonomic design and high-precision sensor, it's designed to give you the edge in competitive gaming.", 69.99, 4.5, 150),
('Lenovo ThinkCentre M720q', 'Lenovo', 'Desktop', "Power through your workday with the Lenovo ThinkCentre M720q desktop. With its compact design and powerful performance, it's the perfect desktop for home and office use.", 699.99, 4, 40),
('Corsair Vengeance LPX 16GB', 'Corsair', 'RAM', "Boost your PC's performance with Corsair Vengeance LPX 16GB RAM. With its high-speed and low-latency design, it's perfect for gaming and multitasking.", 79.99, 3.9, 200),
('Seagate FireCuda 520 1TB', 'Seagate', 'SSD', "Upgrade your storage with the Seagate FireCuda 520 1TB SSD. With its lightning-fast speeds and reliable performance, it's the perfect choice for gaming and content creation.", 199.99, 4.7, 100),
('Anker PowerCore 20000', 'Anker', 'Power Bank', "Stay charged on the go with the Anker PowerCore 20000 power bank. With its high capacity and fast charging capabilities, it's the perfect companion for travel and outdoor adventures.", 49.99, 2.8, 300),
('Nvidia GeForce RTX 3080', 'Nvidia', 'Graphics Card', "Experience unparalleled graphics performance with the Nvidia GeForce RTX 3080 graphics card. With its ray tracing technology and AI-powered features, it's the ultimate choice for gamers and content creators.", 699.99, 4.2, 50);

-- --------------------  CART ITEMS  --------------------

DROP TABLE IF EXISTS cart_items;
CREATE TABLE cart_items (
	id INT NOT NULL AUTO_INCREMENT,
    user_id INT NOT NULL,
    product_id INT NOT NULL,
    quantity SMALLINT UNSIGNED NOT NULL,
    PRIMARY KEY(id),
    CONSTRAINT fk_cartitems_users FOREIGN KEY (user_id) REFERENCES users (id) ON UPDATE CASCADE ON DELETE CASCADE,
    CONSTRAINT fk_cartitems_products FOREIGN KEY (product_id) REFERENCES products (id) ON UPDATE CASCADE ON DELETE CASCADE
);

-- --------------------  USER ADDRESSES  --------------------

DROP TABLE IF EXISTS user_addresses;
CREATE TABLE user_addresses (
	id INT NOT NULL AUTO_INCREMENT,
    user_id INT NOT NULL,
    type VARCHAR(10) NOT NULL DEFAULT 'HOME',
    address VARCHAR(255) NOT NULL,
    city VARCHAR(20) NOT NULL,
    state VARCHAR(20) NOT NULL,
    zip_code VARCHAR(10) NOT NULL,
    country VARCHAR(20) NOT NULL,
    PRIMARY KEY(id),
    CONSTRAINT fk_useraddresses_users FOREIGN KEY(user_id) REFERENCES users (id) ON UPDATE CASCADE ON DELETE CASCADE
);
INSERT INTO user_addresses (user_id, type, address, city, state, zip_code, country)
VALUES (2, 'HOME', '123 Main St', 'Central City', 'California', '90001', 'USA');
INSERT INTO user_addresses (user_id, type, address, city, state, zip_code, country)
VALUES (3, 'HOME', '456 Maple Ave', 'Metropolis', 'New York', '10001', 'USA');
INSERT INTO user_addresses (user_id, type, address, city, state, zip_code, country)
VALUES 
(4, 'HOME', '789 Oak St', 'Gotham City', 'New Jersey', '07030', 'USA'),
(4, 'WORK', 'Wayne Enterprises Tower', 'Gotham City', 'New Jersey', '07030', 'USA');

-- --------------------  REVIEWS  --------------------

DROP TABLE IF EXISTS reviews;
CREATE TABLE reviews (
	id INT NOT NULL AUTO_INCREMENT,
    user_id INT NOT NULL,
    product_id INT NOT NULL,
    comment VARCHAR(255) NOT NULL,
    rating DECIMAL(2, 1) NOT NULL DEFAULT 0,
    PRIMARY KEY(id),
    CONSTRAINT fk_reviews_users FOREIGN KEY (user_id) REFERENCES users (id) ON UPDATE CASCADE ON DELETE CASCADE,
    CONSTRAINT fk_reviews_products FOREIGN KEY (product_id) REFERENCES products (id) ON UPDATE CASCADE ON DELETE CASCADE
);
INSERT INTO reviews (user_id, product_id, comment, rating)
SELECT 2, product_id, CONCAT('Review ', r.review_number, ' for product ', p.name), ROUND(RAND() * 4 + 1, 1)
FROM (SELECT id AS product_id, name FROM products ORDER BY RAND() LIMIT 3) AS p
CROSS JOIN (SELECT 1 AS review_number) AS r
LIMIT 6;
INSERT INTO reviews (user_id, product_id, comment, rating)
SELECT 3, product_id, CONCAT('Review ', r.review_number, ' for product ', p.name), ROUND(RAND() * 4 + 1, 1)
FROM (SELECT id AS product_id, name FROM products ORDER BY RAND() LIMIT 3) AS p
CROSS JOIN (SELECT 1 AS review_number) AS r
LIMIT 4;
INSERT INTO reviews (user_id, product_id, comment, rating)
SELECT 4, product_id, CONCAT('Review ', r.review_number, ' for product ', p.name), ROUND(RAND() * 4 + 1, 1)
FROM (SELECT id AS product_id, name FROM products ORDER BY RAND() LIMIT 2) AS p
CROSS JOIN (SELECT 1 AS review_number) AS r
LIMIT 4;

-- --------------------  ORDERS  --------------------

DROP TABLE IF EXISTS orders;
CREATE TABLE orders (
	id INT NOT NULL AUTO_INCREMENT,
    user_id INT NOT NULL,
    order_date DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    amount DECIMAL(10, 2) NOT NULL,
    shipping_address INT NOT NULL,
    status_id TINYINT UNSIGNED NOT NULL DEFAULT 1,
    delivery_date DATE NOT NULL,
    PRIMARY KEY (id),
    CONSTRAINT fk_orderitems_users FOREIGN KEY (user_id) REFERENCES users(id) ON UPDATE CASCADE ON DELETE NO ACTION,
    CONSTRAINT fk_orderitems_useraddresses FOREIGN KEY (shipping_address) REFERENCES user_addresses(id) ON UPDATE NO ACTION ON DELETE NO ACTION
);

-- --------------------  ORDER ITEMS  --------------------

DROP TABLE IF EXISTS order_items;
CREATE TABLE order_items (
    id INT NOT NULL AUTO_INCREMENT,
    order_id INT NOT NULL,
    product_id INT NOT NULL,
    unit_price DECIMAL(6 , 2 ) NOT NULL,
    quantity SMALLINT UNSIGNED NOT NULL,
    PRIMARY KEY (id),
    CONSTRAINT fk_orderitems_orders FOREIGN KEY (order_id) REFERENCES orders(id) ON UPDATE CASCADE ON DELETE NO ACTION,
    CONSTRAINT fk_orderitems_products FOREIGN KEY (product_id) REFERENCES products(id) ON UPDATE CASCADE ON DELETE NO ACTION
);

