// lib/fetchProduct.ts

export async function fetchProductData() {
    const res = await fetch(
      "https://api.10minuteschool.com/discovery-service/api/v1/products/ielts-course?lang=en",
      {
        headers: {
          "X-TENMS-SOURCE-PLATFORM": "web",
          accept: "application/json",
        },
        next: { revalidate: 60 }, // ISR enabled (60s)
      }
    );
  
    if (!res.ok) throw new Error("Failed to fetch product data");
    return res.json();
  }
  