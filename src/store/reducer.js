import { createReducer } from "@reduxjs/toolkit";

const initialState = {
  order: {
    orderNumber: "R123456789",
    supplierName: "John Doe",
    shippingDate: "2023-09-25",
    totalAmount: 15028.3,
    departmentId: "300-444-678",
    status: "Awaiting your approvel",
    shippingAddress: {
      street: "123 Main St",
      city: "Anytown",
      state: "CA",
      postalCode: "12345",
    },
    items: [
      {
        productName: "Widget A",
        quantity: 3,
        brand: "Harmel Black",
        unitPrice: 19.99,
        status: "",
      },
      {
        productName: "Widget A",
        quantity: 3,
        brand: "Harmel Black",
        unitPrice: 19.99,
        status: "",
      },
      {
        productName: "Widget A",
        quantity: 3,
        brand: "Harmel Black",
        unitPrice: 19.99,
        status: "",
      },
      {
        productName: "Widget A",
        quantity: 3,
        brand: "Harmel Black",
        unitPrice: 19.99,
        status: "",
      },
      {
        productName: "Widget A",
        quantity: 3,
        brand: "Harmel Black",
        unitPrice: 19.99,
        status: "",
      },
      {
        productName: "Widget A",
        quantity: 3,
        brand: "Harmel Black",
        unitPrice: 19.99,
        status: "",
      },
      {
        productName: "Widget A",
        quantity: 3,
        brand: "Harmel Black",
        unitPrice: 19.99,
        status: "",
      },
      {
        productName: "Widget A",
        quantity: 3,
        brand: "Harmel Black",
        unitPrice: 19.99,
        status: "",
      },
      {
        productName: "Widget A",
        quantity: 3,
        brand: "Harmel Black",
        unitPrice: 19.99,
        status: "",
      },
      {
        productName: "Widget A",
        quantity: 3,
        brand: "Harmel Black",
        unitPrice: 19.99,
        status: "",
      },
      {
        productName: "Widget A",
        quantity: 3,
        brand: "Harmel Black",
        unitPrice: 19.99,
        status: "",
      },
      {
        productName: "Widget A",
        quantity: 3,
        brand: "Harmel Black",
        unitPrice: 19.99,
        status: "",
      },
      {
        productName: "Widget A",
        quantity: 3,
        brand: "Harmel Black",
        unitPrice: 19.99,
        status: "",
      },
      {
        productName: "Widget A",
        quantity: 3,
        brand: "Harmel Black",
        unitPrice: 19.99,
        status: "",
      },
      {
        productName: "Widget A",
        quantity: 3,
        brand: "Harmel Black",
        unitPrice: 19.99,
        status: "",
      },
      {
        productName: "Widget A",
        quantity: 3,
        brand: "Harmel Black",
        unitPrice: 19.99,
        status: "",
      },
      {
        productName: "Widget A",
        quantity: 3,
        brand: "Harmel Black",
        unitPrice: 19.99,
        status: "",
      },
      {
        productName: "Widget A",
        quantity: 3,
        brand: "Harmel Black",
        unitPrice: 19.99,
        status: "",
      },
      {
        productName: "Widget B",
        quantity: 2,
        brand: "Harmel Black",
        unitPrice: 29.99,
        status: "",
      },
      {
        productName: "Widget C",
        quantity: 1,
        brand: "Harmel Black",
        unitPrice: 39.99,
        status: "",
      },
    ],
  },
};

export const reducer = createReducer(initialState, {
  updateStatus: (state, action) => {
    console.log(state.order.items, "displatc", action);
    state.order.items[action.payload.id].status = action.payload.status;
  },
});
