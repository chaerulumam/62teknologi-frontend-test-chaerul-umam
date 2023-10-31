const BUSINESS_SEARCH_FIELDS = [
  {
    id: "location",
    name: "location",
    label: "Location",
    placeholder:
      "e.g 'New York City', 'NYC', '350 5th Ave, New York, NY 10118'",
    isRequired: true,
  },
  {
    id: "term",
    name: "term",
    label: "Place",
    placeholder: "e.g 'food', 'restaurants'",
    isRequired: false,
  },
  {
    id: "categories",
    name: "categories",
    label: "Categories",
    placeholder: "e.g., 'bars,french'",
    isRequired: false,
  },
];
const BUSINESS_COLUMNS = [
  {
    id: "no",
    name: "No",
  },
  {
    id: "name",
    name: "Name",
    enableFilter: true,
  },
  {
    id: "rating",
    name: "Rating",
    enableFilter: true,
  },
  {
    id: "phone",
    name: "Phone",
    width: 12,
    enableFilter: true,
  },
  {
    id: "categories",
    name: "Categories",
    enableFilter: true,
  },
  {
    id: "address",
    name: "Address",
    enableFilter: true,
  },
  {
    id: "action",
    name: "",
  },
];

const REVIEW_COLUMNS = [
  {
    id: "no",
    name: "No",
  },
  {
    id: "rating",
    name: "Rating",
  },
  {
    id: "text",
    name: "Text",
  },
  {
    id: "user",
    name: "User",
    width: 12,
    enableFilter: true,
  },
];

const PAGE_LIMIT = 20;
const PAGE_LIMIT_OPTIONS = [5, 10, 20, 30, 40, 50];

const DAYS_MAP = {
  0: "Mon",
  1: "Tue",
  2: "Wed",
  3: "Thu",
  4: "Fri",
  5: "Sat",
  6: "Sun",
};

export {
  BUSINESS_SEARCH_FIELDS,
  BUSINESS_COLUMNS,
  PAGE_LIMIT,
  PAGE_LIMIT_OPTIONS,
  REVIEW_COLUMNS,
  DAYS_MAP,
};
