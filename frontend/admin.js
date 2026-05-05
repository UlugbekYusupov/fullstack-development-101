const BASE_URL = "http://localhost:3001";

// ── Navigation ────────────────────────────────────────

const navLinks = document.querySelectorAll(".nav-link[data-section]");
const sections = document.querySelectorAll(".section");
const headerTitle = document.getElementById("headerTitle");

function showSection(name) {
  sections.forEach((s) => s.classList.remove("active"));
  navLinks.forEach((l) => l.classList.remove("active"));

  const target = document.getElementById("section-" + name);
  if (target) target.classList.add("active");

  const link = document.querySelector(`.nav-link[data-section="${name}"]`);
  if (link) link.classList.add("active");

  headerTitle.textContent = name.charAt(0).toUpperCase() + name.slice(1);

  if (name === "products") loadProducts();
}

navLinks.forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    showSection(link.dataset.section);
  });
});

// ── Sidebar Toggle ────────────────────────────────────

document.getElementById("sidebarToggle").addEventListener("click", () => {
  document.getElementById("sidebar").classList.toggle("collapsed");
});

// ── Products: render table ────────────────────────────

let _productCache = [];

function renderProducts(products) {
  const tbody = document.getElementById("products-tbody");

  if (!products.length) {
    tbody.innerHTML = `<tr><td colspan="6" class="empty-row">No products found.</td></tr>`;
    return;
  }

  tbody.innerHTML = products
    .map(
      (p) => `
      <tr>
        <td title="${p.id}">#${p.id}</td>
        <td>${p.name || "—"}</td>
        <td>${p.category || "—"}</td>
        <td>$${Number(p.price || 0).toFixed(2)}</td>
        <td>${p.stock ?? "—"}</td>
        <td class="actions-cell">
          <button class="btn btn-edit"   onclick="openEditModal('${p.id}')">Edit</button>
          <button class="btn btn-danger" onclick="openDeleteModal('${p.id}', '${(p.name || "").replace(/'/g, "\\'")}')">Delete</button>
        </td>
      </tr>`,
    )
    .join("");
}

// ── Products: GET all ─────────────────────────────────

async function loadProducts() {
  const tbody = document.getElementById("products-tbody");
  tbody.innerHTML = `<tr><td colspan="6" class="empty-row">Loading...</td></tr>`;

  const response = await fetch(BASE_URL + "/api/products", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });

  const data = await response.json();

  console.log(data);

  // TODO: fetch products and call renderProducts()
  // const res  = await fetch(BASE_URL + "/api/products");
  // const data = await res.json();
  // _productCache = data;
  renderProducts(data.products);
}

document
  .getElementById("addProductBtn")
  .addEventListener("click", openCreateModal);

// ── Product Modal (Create / Edit) ─────────────────────

const productModalOverlay = document.getElementById("productModalOverlay");
const productForm = document.getElementById("productForm");
const productModalTitle = document.getElementById("productModalTitle");
const productModalSubmit = document.getElementById("productModalSubmit");

function openCreateModal() {
  productModalTitle.textContent = "Add Product";
  productModalSubmit.textContent = "Create Product";
  productForm.reset();
  clearFormErrors();
  document.getElementById("productId").value = "";
  productModalOverlay.classList.add("open");
}

async function openEditModal(id) {
  // const product = _productCache.find((p) => p.id === id);
  // if (!product) return;

  productModalTitle.textContent = "Edit Product";
  productModalSubmit.textContent = "Save Changes";
  clearFormErrors();

  document.getElementById("productId").value = id;
  fetch(BASE_URL + `/api/products/${id}`)
    .then((res) => {
      if (!res.ok) throw new Error("Product not found");
      return res.json();
    })
    .then((data) => {
      const product = data.product;
      if (!product) return;

      productModalTitle.textContent = "Edit Product";
      productModalSubmit.textContent = "Save Changes";
      clearFormErrors();

      document.getElementById("productId").value = id;
      document.getElementById("productName").value = product.name || "";
      document.getElementById("productCategory").value = product.category || "";
      document.getElementById("productDescription").value =
        product.description || "";
      document.getElementById("productPrice").value = product.price ?? "";
      document.getElementById("productStock").value = product.stock ?? "";
      document.getElementById("productImageUrl").value =
        product.image_url || "";

      productModalOverlay.classList.add("open");
    })
    .catch((error) => {
      console.error("Error fetching product for edit:", error);
      showNotification("Error loading product data", "error");
    });
}

function closeProductModal() {
  productModalOverlay.classList.remove("open");
  productForm.reset();
  clearFormErrors();
}

document
  .getElementById("productModalClose")
  .addEventListener("click", closeProductModal);
document
  .getElementById("productModalCancel")
  .addEventListener("click", closeProductModal);
productModalOverlay.addEventListener("click", (e) => {
  if (e.target === productModalOverlay) closeProductModal();
});

// ── Form Validation ───────────────────────────────────

function clearFormErrors() {
  document
    .querySelectorAll(".field-error")
    .forEach((el) => (el.textContent = ""));
  document
    .querySelectorAll(".modal-form input, .modal-form textarea")
    .forEach((el) => el.classList.remove("invalid"));
}

function setFieldError(fieldId, errId, message) {
  const input = document.getElementById(fieldId);
  const err = document.getElementById(errId);
  if (input) input.classList.add("invalid");
  if (err) err.textContent = message;
}

function validateProductForm() {
  clearFormErrors();
  let valid = true;

  const name = document.getElementById("productName").value.trim();
  const cat = document.getElementById("productCategory").value.trim();
  const price = document.getElementById("productPrice").value;
  const stock = document.getElementById("productStock").value;

  if (!name) {
    setFieldError("productName", "err-name", "Name is required.");
    valid = false;
  }
  if (!cat) {
    setFieldError("productCategory", "err-category", "Category is required.");
    valid = false;
  }
  if (price === "" || isNaN(Number(price)) || Number(price) < 0) {
    setFieldError("productPrice", "err-price", "Enter a valid price.");
    valid = false;
  }
  if (stock === "" || isNaN(Number(stock)) || Number(stock) < 0) {
    setFieldError("productStock", "err-stock", "Enter a valid stock qty.");
    valid = false;
  }

  return valid;
}

// ── Form Submit ───────────────────────────────────────

productForm.addEventListener("submit", async (e) => {
  e.preventDefault();
  if (!validateProductForm()) return;

  const id = document.getElementById("productId").value;

  const formData = {
    name: document.getElementById("productName").value.trim(),
    category: document.getElementById("productCategory").value.trim(),
    description: document.getElementById("productDescription").value.trim(),
    price: Number(document.getElementById("productPrice").value),
    stock: Number(document.getElementById("productStock").value),
    image_url: document.getElementById("productImageUrl").value.trim(),
  };

  productModalSubmit.disabled = true;
  productModalSubmit.textContent = "Saving...";

  try {
    if (id) {
      await onUpdateProduct(id, formData);
    } else {
      await onCreateProduct(formData);
    }
    closeProductModal();
    loadProducts();
  } finally {
    productModalSubmit.disabled = false;
    productModalSubmit.textContent = id ? "Save Changes" : "Create Product";
  }
});

// ── Delete Confirm Modal ──────────────────────────────

const deleteModalOverlay = document.getElementById("deleteModalOverlay");
let _pendingDeleteId = null;

function openDeleteModal(id, name) {
  _pendingDeleteId = id;
  document.getElementById("deleteProductName").textContent =
    name || "this product";
  deleteModalOverlay.classList.add("open");
}

function closeDeleteModal() {
  deleteModalOverlay.classList.remove("open");
  _pendingDeleteId = null;
}

document
  .getElementById("deleteModalClose")
  .addEventListener("click", closeDeleteModal);
document
  .getElementById("deleteModalCancel")
  .addEventListener("click", closeDeleteModal);
deleteModalOverlay.addEventListener("click", (e) => {
  if (e.target === deleteModalOverlay) closeDeleteModal();
});

document
  .getElementById("deleteModalConfirm")
  .addEventListener("click", async () => {
    if (!_pendingDeleteId) return;
    const btn = document.getElementById("deleteModalConfirm");
    btn.disabled = true;
    btn.textContent = "Deleting...";

    try {
      await onDeleteProduct(_pendingDeleteId);
      closeDeleteModal();
      loadProducts();
    } finally {
      btn.disabled = false;
      btn.textContent = "Yes, Delete";
    }
  });

// ── TODO: implement your 5 fetch requests ─────────────
//   loadProducts()            → GET    /api/products
//   onCreateProduct(data)     → POST   /api/products
//   onUpdateProduct(id, data) → PUT    /api/products/:id
//   onDeleteProduct(id)       → DELETE /api/products/:id
//   GET /api/products/:id     → use inside openEditModal if needed

async function onCreateProduct(data) {
  console.log(data);
  const response = await fetch(BASE_URL + "/api/products", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  const resData = await response.json();
  _productCache = resData;

  alert(resData.message);
}
async function onUpdateProduct(id, data) {
  console.log(data);
  const response = await fetch(BASE_URL + "/api/products/" + id, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  const resData = await response.json();

  alert(resData.message);
}
async function onDeleteProduct(id) {
  console.log(id);
  const response = await fetch(BASE_URL + "/api/products/" + id, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
  });
  const resData = await response.json();

  alert(resData.message);
}

// ── Init ──────────────────────────────────────────────

showSection("dashboard");
