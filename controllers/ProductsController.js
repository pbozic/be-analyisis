const ProductDao = require('../dao/Product');

async function getProducts(req, res) {
    try {
        const products = await ProductDao.getProducts();
        res.status(200).json(products);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

async function createProduct(req, res) {
    try {
        const product = await ProductDao.createProduct(req.body);
        res.status(201).json(product);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

async function updateProduct(req, res) {
    try {
        const product = await ProductDao.updateProduct(req.params.id, req.body);
        res.status(200).json(product);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

async function deleteProduct(req, res) {
    try {
        await ProductDao.deleteProduct(req.params.id);
        res.status(204).end();
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

