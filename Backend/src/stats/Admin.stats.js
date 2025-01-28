const mongoose = require('mongoose');
const express = require('express');
const Book = require("../Books/book.model");
const Order = require('../Order/order.model');
const router = express.Router();

// Function to calculate admin stats
router.get("/", async (req, res) => {
    try {
        // 1. Total number of orders
        const totalOrders = await Order.countDocuments();

        // 2. Total sales (sum of all totalPrice from orders)
        const totalSalesResult = await Order.aggregate([
            {
                $group: {
                    _id: null,
                    totalSales: { $sum: "$totalPrice" },
                }
            }
        ]);
        const totalSales = totalSalesResult.length > 0 ? totalSalesResult[0].totalSales : 0;

        // 3. Trending books statistics
        const trendingBooksCount = await Book.aggregate([
            { $match: { trending: true } }, // Match only trending books
            { $count: "trendingBooksCount" } // Return the count of trending books
        ]);
        const trendingBooks = trendingBooksCount.length > 0 ? trendingBooksCount[0].trendingBooksCount : 0;

        // 4. Total number of books
        const totalBooks = await Book.countDocuments();

        // 5. Monthly sales (group by month and sum total sales for each month)
        const monthlySales = await Order.aggregate([
            {
                $group: {
                    _id: { $dateToString: { format: "%Y-%m", date: "$createdAt" } }, // Group by year and month
                    totalSales: { $sum: "$totalPrice" }, // Sum totalPrice for each month
                    totalOrders: { $sum: 1 }, // Count total orders for each month
                }
            },
            { $sort: { _id: 1 } } // Sort by month in ascending order
        ]);

        // Result summary
        res.status(200).json({
            totalOrders,
            totalSales,
            trendingBooks,
            totalBooks,
            monthlySales,
        });

    } catch (error) {
        console.error("Error fetching admin stats:", error);
        res.status(500).json({ message: "Failed to fetch admin stats" });
    }
});

module.exports = router;
