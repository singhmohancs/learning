// =====================================
// SIMILAR PROBLEMS FOR YOUR STUDENTS
// =====================================

// PROBLEM 1: Library Book Management
// A library wants to track books that need to be restocked
const bookCopies = [12, 2, 25, 1, 0, 8, 3, 15, 20, 4];
const bookTitles = [
    "JavaScript Basics", 
    "Python Guide", 
    "Web Development", 
    "Data Structures", 
    "Algorithms", 
    "React Fundamentals", 
    "Node.js", 
    "Database Design", 
    "Machine Learning", 
    "CSS Mastery"
];

function displayLowStockBooks(books) {
    console.log("📚 Books needing restocking:");
    for (let i = 0; i < books.length; i++) {
        console.log(`   📖 "${books[i]}" - needs immediate attention`);
    }
}

function getLowStockBooks(titles, copies) {
    const lowStockBooks = [];
    for (let i = 0; i < copies.length; i++) {
        if (copies[i] <= 3) {  // Library policy: restock when 3 or fewer copies
            lowStockBooks.push(titles[i]);
        }
    }
    return lowStockBooks;
}

// Usage
const lowStockBooks = getLowStockBooks(bookTitles, bookCopies);
console.log("=".repeat(50));
console.log("LIBRARY INVENTORY REPORT");
console.log("=".repeat(50));
displayLowStockBooks(lowStockBooks);
console.log("=".repeat(50));
console.log(`📊 Total books needing restock: ${lowStockBooks.length}`);
console.log("\n");

// =====================================

// PROBLEM 2: Student Grade Tracking
// Find students who need academic support (grades below 70)
const studentGrades = [85, 67, 92, 45, 78, 55, 88, 62, 95, 40];
const studentNames = [
    "Alice", "Bob", "Charlie", "Diana", "Eve", 
    "Frank", "Grace", "Henry", "Iris", "Jack"
];

function displayStudentsNeedingHelp(students) {
    console.log("🎓 Students needing academic support:");
    for (let i = 0; i < students.length; i++) {
        console.log(`   👤 ${students[i]} - requires tutoring`);
    }
}

function getStudentsNeedingHelp(names, grades) {
    const studentsNeedingHelp = [];
    for (let i = 0; i < grades.length; i++) {
        if (grades[i] < 70) {  // Below 70% needs support
            studentsNeedingHelp.push(names[i]);
        }
    }
    return studentsNeedingHelp;
}

// Usage
const studentsNeedingHelp = getStudentsNeedingHelp(studentNames, studentGrades);
console.log("=".repeat(50));
console.log("ACADEMIC SUPPORT REPORT");
console.log("=".repeat(50));
displayStudentsNeedingHelp(studentsNeedingHelp);
console.log("=".repeat(50));
console.log(`📈 Total students needing support: ${studentsNeedingHelp.length}`);
console.log("\n");

// =====================================

// PROBLEM 3: Restaurant Table Management
// Track tables that are available for booking
const tableCapacity = [4, 2, 6, 8, 2, 4, 10, 6, 4, 2];
const tableNumbers = ["T1", "T2", "T3", "T4", "T5", "T6", "T7", "T8", "T9", "T10"];
const tableStatus = [true, false, true, false, true, false, true, false, true, false]; // true = occupied

function displayAvailableTables(tables) {
    console.log("🍽️  Available tables for booking:");
    for (let i = 0; i < tables.length; i++) {
        console.log(`   🪑 Table ${tables[i]} - ready for guests`);
    }
}

function getAvailableTables(numbers, status) {
    const availableTables = [];
    for (let i = 0; i < status.length; i++) {
        if (!status[i]) {  // false means available
            availableTables.push(numbers[i]);
        }
    }
    return availableTables;
}

// Usage
const availableTables = getAvailableTables(tableNumbers, tableStatus);
console.log("=".repeat(50));
console.log("RESTAURANT TABLE AVAILABILITY");
console.log("=".repeat(50));
displayAvailableTables(availableTables);
console.log("=".repeat(50));
console.log(`🎯 Total available tables: ${availableTables.length}`);
console.log("\n");

// =====================================
// YOUR ORIGINAL CODE (IMPROVED VERSION)
// =====================================

const productStock = [25, 3, 45, 8, 0, 12, 2, 30];
const productNames = ["Apples", "Bananas", "Oranges", "Grapes", "Berries", "Pears", "Mangoes", "Kiwis"];

// Improved version with better naming and structure
function displayLowStockProducts(products) {
    console.log("🛒 Products low in stock:");
    for (let i = 0; i < products.length; i++) {
        const currentProduct = products[i];
        console.log(`   🔴 ${currentProduct} - needs reordering`);
    }
}

function getLowStockProducts(productNames, stockLevels, threshold = 5) {
    const lowStockProducts = [];
    
    for (let i = 0; i < stockLevels.length; i++) {
        const productName = productNames[i];
        const currentStock = stockLevels[i];
        
        if (currentStock < threshold) {
            lowStockProducts.push(productName);
        }
    }
    
    return lowStockProducts;
}

// Usage with improved formatting
const lowStockProducts = getLowStockProducts(productNames, productStock);

console.log("=".repeat(50));
console.log("GROCERY STORE INVENTORY REPORT");
console.log("=".repeat(50));
displayLowStockProducts(lowStockProducts);
console.log("=".repeat(50));
console.log(`📊 Total items needing restock: ${lowStockProducts.length}`);

// =====================================
// ADVANCED VERSION WITH OBJECTS
// =====================================

// More realistic data structure
const inventory = [
    { name: "Apples", stock: 25, category: "Fruits" },
    { name: "Bananas", stock: 3, category: "Fruits" },
    { name: "Oranges", stock: 45, category: "Fruits" },
    { name: "Grapes", stock: 8, category: "Fruits" },
    { name: "Berries", stock: 0, category: "Fruits" },
    { name: "Pears", stock: 12, category: "Fruits" },
    { name: "Mangoes", stock: 2, category: "Fruits" },
    { name: "Kiwis", stock: 30, category: "Fruits" }
];

function displayLowStockItems(items) {
    console.log("📦 Items requiring immediate attention:");
    items.forEach((item, index) => {
        const status = item.stock === 0 ? "OUT OF STOCK" : "LOW STOCK";
        console.log(`   ${index + 1}. ${item.name} (${item.category}) - ${status} [${item.stock} units]`);
    });
}

function getLowStockItems(inventory, threshold = 5) {
    return inventory.filter(item => item.stock < threshold);
}

// Usage
const lowStockItems = getLowStockItems(inventory);

console.log("\n" + "=".repeat(60));
console.log("ADVANCED INVENTORY MANAGEMENT SYSTEM");
console.log("=".repeat(60));
displayLowStockItems(lowStockItems);
console.log("=".repeat(60));
console.log(`📈 Summary: ${lowStockItems.length} out of ${inventory.length} items need attention`);

// Calculate statistics
const outOfStock = lowStockItems.filter(item => item.stock === 0).length;
const lowStock = lowStockItems.filter(item => item.stock > 0).length;

console.log(`   🔴 Out of stock: ${outOfStock} items`);
console.log(`   🟡 Low stock: ${lowStock} items`);
