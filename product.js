class Product {
    constructor(name, price, image, category, inCart) {
        this.name = name;
        this.price = price;
        this.image = image;
        this.category = category;
        this.inCart = inCart;
    }
}

const products = [
    new Product("Day cream", 49, "images/cream1.png", "cream", 0),
    new Product("Anti wrinkle cream", 59, "images/cream2.png", "cream", 0),
    new Product("Night cream", 50, "images/cream3.png", "cream", 0),
    new Product("Normalizing facial toner", 29, "images/facialToner1.png", "facialToner", 0),
    new Product("Antibacterial facial toner", 35, "images/facialToner2.png", "facialToner", 0),
    new Product("Regulating facial toner", 22, "images/facialToner3.png", "facialToner", 0),
    new Product("Anti wrinkle serum", 49, "images/serum1.png", "serum", 0),
    new Product("Argan oil serum", 39, "images/serum2.png", "serum", 0),
    new Product("Night face serum", 36, "images/serum3.png", "serum", 0),
    new Product("Gentle face wash", 39, "images/faceWash1.png", "faceWash", 0),
    new Product("Organic face wash", 30, "images/faceWash2.png", "faceWash", 0),
    new Product("Detox face wash", 38, "images/faceWash3.png", "faceWash", 0),
    new Product("Strawberry face scrub", 24, "images/faceScrub1.png", "faceScrub", 0),
    new Product("Smoothing face scrub", 29, "images/faceScrub2.png", "faceScrub", 0),
    new Product("Hydrating face scrub", 34, "images/faceScrub3.png", "faceScrub", 0),
];