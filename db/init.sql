

DROP TABLE IF EXISTS product
CREATE TABLE IF NOT EXISTS product (
    product_id SERIAL PRIMARY KEY,
    name varchar(40),
    description VARCHAR(80),
    price INTEGER,
    image_url TEXT
)


