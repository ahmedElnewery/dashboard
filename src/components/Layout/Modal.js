import { useDispatch, useSelector } from "react-redux";
import { closeModal, sendEmail } from "../../store/action/modalActions";
import Btn from "../UI/Btn";
import * as Yup from "yup";
import { useFormik } from "formik";

const Modal = (props) => {
  const formik = useFormik({
    initialValues: {
      email: "",
    },
    validationSchema: Yup.object({
      email: Yup.string().email("Invalid Email").required("Required"),
    }),
    onSubmit: (values) => {
      dispatch(sendEmail());
      // just console type
    },
  });
  const { isOpen } = useSelector((state) => state.modal);
  const dispatch = useDispatch();
  const handleClose = (props) => {
    dispatch(closeModal());
  };
  let inputClasses =
    " rounded-md mb-4 mt-2 appearance-none border border-dark-primary w-full py-2 pl-2 bg-dark-primary text-white placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent ";
  inputClasses +=
    formik.touched.email && formik.errors.email
      ? " border-danger focus:ring-danger "
      : "  ";
  return isOpen ? (
    <div className=" bg-opacity-50 w-full h-full left-0 top-0 flex  justify-center items-center fixed z-10  text-gray ">
      <div className="md:w-2/5 w-4/5 h-60  rounded-xl ">
        <form onSubmit={formik.handleSubmit}>
          <div className="bg-light-primary p-6">
            <h4 className="mb-6 text-3xl">Transfer</h4>
            <label className="text-sm ">Transfer to</label>
            <input
              type="email"
              name="email"
              className={inputClasses}
              placeholder="Enter the email address"
              onChange={formik.handleChange}
              value={formik.values.email}
            />
            <small className="text-danger text-center">
              {formik.touched.email && formik.errors.email
                ? formik.errors.email
                : null}
            </small>
          </div>
          <div className="bg-dark-primary p-4 flex justify-end">
            <Btn
              className="mr-8"
              size="md"
              variant="danger"
              onClick={handleClose}
            >
              Cancel
            </Btn>

            <Btn
              type="submit"
              className=" bg-turquoise  text-white  hover:bg-sky  disabled:opacity-50  disabled:cursor-not-allowed"
              size="md"
              disabled={!formik.isValid}
            >
              Send
            </Btn>
          </div>
        </form>
      </div>
    </div>
  ) : null;
};

export default Modal;
