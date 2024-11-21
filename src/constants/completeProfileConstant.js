export const fields = [
  {
    name: "first_name",
    label: "نام",
    validation: { required: "نام ضروری است" },
  },
  {
    name: "last_name",
    label: "نام خانوادگی",
    validation: { required: "نام خانوادگی ضروری است" },
  },
  {
    name: "email",
    label: "ایمیل",
    validation: {
      required: "ایمیل ضروری است",
      pattern: {
        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
        message: "ایمیل نامعتبر",
      },
    },
  },
  {
    name: "address",
    label: "آدرس محل سکونت",
    validation: { required: "آدرس ضروری است" },
  },
];
