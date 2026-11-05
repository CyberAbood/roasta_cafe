// كل محتوى المنيو هنا: عدّل الأسعار والأصناف من هذا الملف فقط.
// price: [وسط, كبير] أو [سعر واحد]
window.MENU_DATA = {
  brand: { ar: "روستا كوفي", en: "ROASTA Coffee" },
  sections: [
    { id: "iced-coffee", ar: "ايس كوفي", en: "Iced Coffee", sizes: true, items: [
      { ar: "ايس امريكانو", en: "Iced Americano", price: ["2.50", "2.75"] },
      { ar: "ايس لاتيه", en: "Iced Latte", price: ["2.75", "3.25"] },
      { ar: "ايس سبانيش لاتيه", en: "Iced Spanish Latte", price: ["3.25", "3.75"] },
      { ar: "ايس كراميل ماكياتو", en: "Iced Caramel Macchiato", price: ["3.25", "3.75"] },
      { ar: "ايس موكا", en: "Iced Mocha", price: ["3.25", "3.75"] },
      { ar: "ايس وايت موكا", en: "Iced White Mocha", price: ["3.25", "3.75"] },
      { ar: "ايس بيستاشيو لاتيه", en: "Iced Pistachio Latte", price: ["3.50", "4.00"] }
    ]},
    { id: "frappe", ar: "فرابيه", en: "Frappe", sizes: true, items: [
      { ar: "كراميل", en: "Caramel", price: ["3.25", "3.75"] },
      { ar: "كراميل مملح", en: "Salted Caramel", price: ["3.25", "3.75"] },
      { ar: "موكا", en: "Mocha", price: ["3.25", "3.75"] },
      { ar: "وايت موكا", en: "White Mocha", price: ["3.25", "3.75"] },
      { ar: "بيستاشيو", en: "Pistachio", price: ["3.75", "4.25"] }
    ]},
    { id: "milkshake", ar: "ميلك شيك", en: "Milkshake", sizes: true, items: [
      { ar: "بيستاشيو", en: "Pistachio", price: ["4.25", "4.75"] },
      { ar: "تشوكليت", en: "Chocolate", price: ["3.50", "4.00"] },
      { ar: "مانجو", en: "Mango", price: ["3.50", "4.00"] },
      { ar: "فانيلا", en: "Vanilla", price: ["3.50", "4.00"] },
      { ar: "فراولة", en: "Strawberry", price: ["3.50", "4.00"] },
      { ar: "ميكس بيري", en: "Mix Berry", price: ["3.50", "4.00"] }
    ]},
    { id: "black-coffee", ar: "بلاك كوفي", en: "Black Coffee", sizes: true, items: [
      { ar: "قهوة مقطرة", en: "Drip Coffee", note: "V60 - French Press - AeroPress", price: ["3.00"] },
      { ar: "كيميكس (كوبين)", en: "Chemex (Two cups)", price: ["3.00"] },
      { ar: "كولد برو", en: "Cold Brew", price: ["3.00"] },
      { ar: "اسبريسو", en: "Espresso", price: ["2.50"] },
      { ar: "امريكانو", en: "Americano", price: ["2.50", "2.75"] }
    ]},
    { id: "hot-drinks", ar: "مشروبات ساخنة", en: "Hot Drinks", sizes: true, items: [
      { ar: "لاتيه", en: "Latte", price: ["2.75", "3.25"] },
      { ar: "كابتشينو", en: "Cappuccino", price: ["2.75", "3.25"] },
      { ar: "سبانيش لاتيه", en: "Spanish Latte", price: ["3.25", "3.75"] },
      { ar: "فلات وايت", en: "Flat White", price: ["2.75"] },
      { ar: "كورتادو", en: "Cortado", price: ["2.75"] },
      { ar: "كراميل ماكياتو", en: "Caramel Macchiato", price: ["3.25", "3.75"] },
      { ar: "وايت موكا", en: "White Mocha", price: ["3.25", "3.75"] },
      { ar: "موكا", en: "Mocha", price: ["3.25", "3.75"] },
      { ar: "هوت تشوكليت", en: "Hot Chocolate", price: ["3.00", "3.50"] },
      { ar: "وايت تشوكليت", en: "White Chocolate", price: ["3.00", "3.50"] },
      { ar: "قهوة تركية", en: "Turkish Coffee", price: ["2.00"] },
      { ar: "شاي", en: "Tea", price: ["2.00"] },
      { ar: "ماتشا ساخنة", en: "Hot Matcha", price: ["3.25"] }
    ]},
    { id: "cold-drinks", ar: "مشروبات باردة", en: "Cold Drinks", sizes: true, items: [
      { ar: "موهيتو", en: "Mojito", price: ["3.00", "3.50"] },
      { ar: "سموذي", en: "Smoothie", price: ["3.25", "3.75"] },
      { ar: "ايس تي", en: "Iced Tea", price: ["2.75", "3.25"] },
      { ar: "ماتشا", en: "Matcha", price: ["3.75"] }
    ]},
    { id: "fresh-juices", ar: "عصائر طبيعية", en: "Fresh Juices", items: [
      { ar: "عصير برتقال", en: "Orange Juice", price: ["2.75"] },
      { ar: "ليمون ونعنع", en: "Lemon & Mint", price: ["2.75"] }
    ]},
    { id: "kids", ar: "مشروبات الأطفال", en: "Kids Drinks", items: [
      { ar: "عصير برتقال", en: "Orange Juice", price: ["1.75"] }
    ]},
    { id: "extras", ar: "الإضافات", en: "Add-ons", items: [
      { ar: "خالي من الكافيين", en: "Decaf", price: ["0.75"] },
      { ar: "كراميل صوص", en: "Caramel Sauce", price: ["0.50"] },
      { ar: "سيروب", en: "Syrup", price: ["0.50"] },
      { ar: "شوت اسبرسو", en: "Espresso Shot", price: ["0.50"] },
      { ar: "كريمة", en: "Whipped Cream", price: ["0.25"] },
      { ar: "حليب خالي من اللاكتوز", en: "Lactose-Free Milk", price: ["0.75"] },
      { ar: "حليب اللوز", en: "Almond Milk", price: ["0.75"] },
      { ar: "حليب الشوفان", en: "Oat Milk", price: ["0.75"] },
      { ar: "حليب جوز الهند", en: "Coconut Milk", price: ["0.75"] }
    ]}
  ]
};
