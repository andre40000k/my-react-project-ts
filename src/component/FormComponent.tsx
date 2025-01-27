import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const FormComponent = () => {
  const validationSchema = Yup.object({
    name: Yup.string().required("Name is required").min(3, "Name must be longer than 3 characters"),
    email: Yup.string().email("Invalid email format").required("Email is required"),
    password: Yup.string()
      .required("Password is required")
      .min(6, "Password must contain at least 6 characters"),
  });

  const handleSubmit = (values: { name: any; email: any }, { resetForm }: any) => {
    console.log("Submitted Data:", values);
    alert(`Form submitted successfully! Name: ${values.name}, Email: ${values.email}`);
    resetForm();
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white p-6 rounded-2xl shadow-lg max-w-md w-full">
        <h1 className="text-xl font-bold mb-4">Registration Form</h1>

        <Formik
          initialValues={{ name: "", email: "", password: "" }}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {({ isSubmitting }) => (
            <Form className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium">
                  Name
                </label>
                <Field
                  type="text"
                  name="name"
                  placeholder="Enter your name"
                  className="mt-1 block w-full p-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
                />
                <ErrorMessage name="name" component="div" className="text-red-500 text-sm mt-1" />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium">
                  Email
                </label>
                <Field
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                  className="mt-1 block w-full p-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
                />
                <ErrorMessage name="email" component="div" className="text-red-500 text-sm mt-1" />
              </div>

              <div>
                <label htmlFor="password" className="block text-sm font-medium">
                  Password
                </label>
                <Field
                  type="password"
                  name="password"
                  placeholder="Enter your password"
                  className="mt-1 block w-full p-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
                />
                <ErrorMessage
                  name="password"
                  component="div"
                  className="text-red-500 text-sm mt-1"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-300"
              >
                Submit
              </button>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default FormComponent;
